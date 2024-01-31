import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Intro = () => {
  return (
    <div className='relative min-h-[800px] h-screen flex justify-left items-center gap-10 ml-52'>
      <div className='relative '>
        <div
          className='relative flex flex-col text-white justify-start gap-4 p-10'
          style={{ textShadow: '-5px 10px 40px black' }}
        >
          <motion.p
            className='text-2xl font-bold capitalize w-fit lg:text-7xl xxl:text-6xl'
            initial={{ opacity: 0, y: -500 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Media Player
          </motion.p>
          <motion.p
            className='text-sm font-bold text-justify md:w-[700px] xs:w-96 lg:text-2xl xxl:text-xl'
            initial={{ opacity: 0, x: -500 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            Jetzt kannst du Videos und deine Lieblingsmusik hochladen und
            kostenlos bis zu 50 GB in der Cloud speichern. Erstelle jetzt ein
            Konto!
          </motion.p>

          <motion.div
            initial={{ opacity: 0, x: -500 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.4 }}
          >
            <Link
              to='/signup'
              className='w-fit px-5 py-1 text-xl rounded-md bg-white text-black font-bold hover:bg-black border hover:text-white delay-75 duration-500'
              style={{ textShadow: 'none' }}
            >
              Sign Up
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
