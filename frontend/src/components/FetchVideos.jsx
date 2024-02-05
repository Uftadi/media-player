import React, { useContext, useEffect, useRef, useState } from 'react';
import { UserContext } from '../context/UserContextProvider';
import { MediaContext } from '../context/MediaContextProvider';
import axios from 'axios';

const FetchVideos = () => {
  const [media, setMedia] = useState([]);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(null);
  const [options, setOptions] = useState({ state: false, index: 0 });
  const [edit, setEdit] = useState({ state: false, index: 0 });

  const videoRefs = useRef([]);
  const inputRef = useRef(null);

  const { backendApiUrl } = useContext(UserContext);
  const { setLoader, loader, userId } = useContext(MediaContext);

  const fetchData = () => {
    if (userId) {
      axios
        .get(`${backendApiUrl}/storeMedia?userId=${userId}`)
        .then((res) => {
          setMedia(res.data.media);
          setLoader(false);
        })
        .catch((error) => {
          console.error('Error fetching media:', error);
          setLoader(false);
        });
    }
  };

  const handleVideoClick = (index) => {
    const videoElement = videoRefs.current[index];

    if (videoElement && videoElement.current) {
      const video = videoElement.current;

      if (currentVideoIndex !== null && currentVideoIndex !== index) {
        const currentVideo = videoRefs.current[currentVideoIndex].current;
        if (currentVideo) {
          currentVideo.pause();
        }
      }

      if (!document.fullscreenElement) {
        video.requestFullscreen();
        video.play();
        setCurrentVideoIndex(index);
      }
    }
  };

  const truncateFileName = (fileName) => {
    const maxLength = 30;
    return fileName.length > maxLength
      ? `${fileName.substring(0, maxLength)}...`
      : fileName;
  };
  const EditForm = (video, index) => {
    setEdit({ state: true, index: index });
    setOptions({ state: false, index: index });
    axios.post(`${backendApiUrl}/editName`, { video, userId });
  };
  const EditVideoName = async (video, index) => {
    setEdit({ state: true, index: index });
    console.log(inputRef.current.value.trim().length);
    if (inputRef.current.value.trim().length) {
      const res = await axios.post(`${backendApiUrl}/editName`, {
        video,
        userId,
        newName: inputRef.current.value.trim(),
      });
      if (res.data.status) {
        window.location.reload();
      }
    }
  };
  const deleteVideo = (video) => {
    axios.post(`${backendApiUrl}/deleteVideo`, { video, userId }).then(() => {
      window.location.reload();
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {!loader && media.length === 0 ? (
        <div className='w-full h-full flex justify-center items-center'>
          <p className='text-green-500 font-bold text-xl'>
            No videos available
          </p>
        </div>
      ) : (
        <div className='flex justify-start gap-8'>
          {media.map((video, index) => {
            const videoKey = `${video.fileName}_${index}`;

            videoRefs.current[index] = React.createRef();

            return (
              <div key={videoKey} className='w-72 h-40 cursor-pointer'>
                <video
                  className='w-full h-full object-cover '
                  ref={videoRefs.current[index]}
                  onClick={() => handleVideoClick(index)}
                >
                  <source
                    src={`${backendApiUrl}/${video.path}`}
                    type='video/mp4'
                  />
                </video>
                <div className='file-name text-white flex items-center justify-between px-2 relative '>
                  {truncateFileName(video.fileName)}
                  <i
                    className='fa-solid fa-ellipsis-vertical w-[10px] '
                    onClick={() => {
                      setOptions({ state: !options.state, index: index });
                    }}
                  ></i>
                  {options.state && options.index === index ? (
                    <div className='w-fit flex flex-col justify-center items-center  gap-[20px] absolute top-[30px] right-0 p-[10px] bg-[#232326] border border-green-600 rounded-md'>
                      <span onClick={() => deleteVideo(video, index)}>
                        Delete
                      </span>

                      <span onClick={() => EditForm(video, index)}>
                        Edit Name
                      </span>
                    </div>
                  ) : null}

                  {edit.state && edit.index === index ? (
                    <div className=' flex flex-col w-full gap-[20px] text-[20px] absolute top-[30px] right-0 p-[10px] bg-[#232326] border border-green-600 rounded-md'>
                      <input
                        ref={inputRef}
                        type='text'
                        className='w-[100%] text-black px-1'
                      />
                      <div className='flex justify-center gap-[30px] '>
                        <button onClick={() => EditVideoName(video, index)}>
                          Edit
                        </button>
                        <button
                          onClick={() => {
                            setEdit({ state: false, index: index });
                          }}
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  ) : null}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default FetchVideos;
