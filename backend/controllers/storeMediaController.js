import UserModel from '../models/userModel.js';

export const getMedia = async (req, res) => {
  const userId = req.query.userId;

  const currentUser = await UserModel.findById(userId);

  if (!currentUser) {
    res.status(404).send('Media not found for the user');
    return;
  }

  const media = currentUser.media;

  res.json({ media: media });
};

export const deleteVideo = async (req, res) => {
  const { video, userId } = req.body;

  try {
    const currentUser = await UserModel.findById(userId);

    if (!currentUser) {
      return res.status(404).json({ error: 'User not found' });
    }

    const indexToRemove = currentUser.media.findIndex(
      (media) => media.fileName === video.fileName
    );

    if (indexToRemove === -1) {
      return res.status(404).json({ error: 'Video not found in user media' });
    }

    currentUser.media.splice(indexToRemove, 1);

    await currentUser.save();

    return res.status(200).json({ message: 'Video deleted successfully' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const editName = async (req, res) => {
  const { video, userId, newName } = req.body;
  console.log(req.body);

  const result = await UserModel.updateOne(
    { 'media.path': video.path },
    { $set: { 'media.$.fileName': newName } },
    { new: true }
  );
  if (result.acknowledged) {
    res.json({ status: true });
  }
};
