import Intro from './Intro';
import backgroundImage from '../assets/images/backgroundImg.jpg';

const BackgroundImg = () => {
  return (
    <div className='absolute inset-0 min-h-[800px] h-screen'>
      <div
        className='relative bg-cover bg-center bg-no-repeat h-full w-full'
        style={{
          backgroundImage: `url('${backgroundImage}')`,
        }}
      >
        <div className='absolute inset-0 bg-black opacity-70'></div>

        <Intro />
      </div>
    </div>
  );
};

export default BackgroundImg;
