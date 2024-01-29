import { Link, useNavigate } from 'react-router-dom';
import { BackgroundImg, Intro } from '../components';

const Home = () => {
  const navigate = useNavigate();

  return (
    <section className='min-h-screen w-full text-gray-200 bg-[#0B2447]'>
      <nav className='h-14 w-full px-4 z-50 flex justify-between items-center relative md:px-14 2xl:px-56'>
        <Link to='/' className='text-white font-black text-shadow-xl text-xl'>
          Media Player
        </Link>

        <Link
          to='/login'
          className='px-1 text-black rounded-md font-bold border bg-gray-200 hover:bg-black hover:text-white delay-75 duration-500'
        >
          LogIn
        </Link>
      </nav>

      <BackgroundImg />
    </section>
  );
};

export default Home;
