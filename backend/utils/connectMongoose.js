import mongoose from 'mongoose';
import 'dotenv/config';

async function connectMongoose() {
  const { DB_NAME, DB_USER, DB_PASSWORD, DB_CLUSTER } = process.env;

  console.log({ DB_NAME, DB_USER, DB_PASSWORD, DB_CLUSTER });

  const URI = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_CLUSTER}.cwpbtvj.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`;

  try {
    await mongoose.connect(URI);

    const collections = (
      await mongoose.connection.db.listCollections().toArray()
    ).map((el) => el.name);
    return true;
  } catch (error) {
    console.error('Could not connect to mongoose', error);
    return false;
  }
}

export default connectMongoose;
