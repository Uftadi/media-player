import Loader from './Loader';
import FetchVideos from './FetchVideos';

const StoreMedia = () => {
  return (
    <section className='px-8 w-full h-full text-white bg-[#232326]'>
      <Loader />
      <FetchVideos />
    </section>
  );
};

export default StoreMedia;
