import { useState } from 'react';
import ReactPlayer from 'react-player';
import video from '../assets/videos/Jamila - Ultra Beats (Long Version).mp4';
import { FaRegThumbsUp } from 'react-icons/fa';
import { FaRegThumbsDown } from 'react-icons/fa';
import { GrFavorite } from 'react-icons/gr';
import Textarea from './Textarea';

const MediaPlayer = () => {
  const [thumbsUp, setThumbsUp] = useState(false);
  const [thumbsDown, setThumbsDown] = useState(false);
  const [favorite, setFavorite] = useState(false);

  const handleClick = (iconType) => {
    if (iconType === 'thumbsUp') {
      setThumbsUp(!thumbsUp);
    } else if (iconType === 'thumbsDown') {
      setThumbsDown(!thumbsDown);
    } else if (iconType === 'favorite') {
      setFavorite(!favorite);
    }
  };

  return (
    <div>
      <div className='relative cursor-pointer pl-20'>
        <ReactPlayer url={video} controls={true} />
      </div>
      <div className='mt-3 flex justify-between items-center'>
        <h2 className='ml-20 text-white'>beispiel</h2>
        <div className='flex gap-2 '>
          <FaRegThumbsUp
            onClick={() => handleClick('thumbsUp')}
            style={{ fontSize: '20px', color: thumbsUp ? 'red' : 'white' }}
          />
          <FaRegThumbsDown
            onClick={() => handleClick('thumbsDown')}
            style={{ fontSize: '20px', color: thumbsDown ? 'red' : 'white' }}
          />
          <GrFavorite
            onClick={() => handleClick('favorite')}
            style={{ fontSize: '20px', color: favorite ? 'red' : 'white' }}
          />
        </div>
      </div>
      <div className='mt-4 ml-20'>
        <Textarea />
      </div>
    </div>
  );
};

export default MediaPlayer;
