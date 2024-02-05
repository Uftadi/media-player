import axios from 'axios';
import { UserContext } from '../../context/UserContextProvider';
import { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const LogIn = () => {
  const { backendApiUrl } = useContext(UserContext);

  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [isAuthTrue, setIsAuthTrue] = useState(false);
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState({
    email: '',
    password: '',
  });
  const [fieldErrors, setFieldErrors] = useState({
    email: '',
    password: '',
  });

  const handleDataChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post(`${backendApiUrl}/login`, userData, {
        withCredentials: true,
      });

      if (res.data.errors) {
        const errors = {};
        res.data.errors.forEach((error) => {
          errors[error.path] = error.msg;
        });

        setFieldErrors(errors);
        setLoading(false);
        setIsAuthTrue(false);
        console.log(errors);
      } else if (res.data.success) {
        navigate('/main');
        const userId = res.data.userId;
        localStorage.setItem('userId', userId);
      } else {
        setFieldErrors((error) => error === '');
        setLoading(false);
        setIsAuthTrue(true);
      }
    } catch (error) {
      console.log('error while logging in:', error);
    }
  };

  return (
    <section className='min-h-[800px] h-screen flex flex-col justify-center items-center bg-[#1d201f] text-white'>
      <Link to='/' className='mb-8 text-xl font-black'>
        Media Plyer
      </Link>

      <form
        className='w-5/6 md:w-3/6 xl:w-2/6 mx-auto bg-[#156d4b] shadow-md shadow-stone-950/50 py-10 px-5 rounded-xl'
        onSubmit={handleFormSubmit}
        noValidate
      >
        <div>
          <label htmlFor='email'>Email</label>
          <input
            className={`block w-full rounded-md border-2 p-2 mb-3 text-black mt-1`}
            type='email'
            id='email'
            name='email'
            onChange={handleDataChange}
          />
        </div>
        {fieldErrors.email && (
          <span className='bg-red-700 p-1 mb-2 block w-fit rounded-md'>
            {fieldErrors.email}
          </span>
        )}
        <div className='relative'>
          <label htmlFor='password'>Password</label>
          <input
            className={`block w-full rounded-md border-2 p-2 mb-3 pr-9 text-black`}
            type={showPassword ? 'text' : 'password'}
            id='password'
            name='password'
            onChange={handleDataChange}
          />
          <i
            className={`fa-solid ${
              showPassword ? 'fa-eye-slash' : 'fa-eye'
            } absolute right-3 top-9 cursor-pointer text-black`}
            onClick={() => setShowPassword(!showPassword)}
          ></i>
        </div>
        {fieldErrors.password && (
          <span className='bg-red-700 p-1 mb-2 block w-fit rounded-md'>
            {fieldErrors.password}
          </span>
        )}

        {isAuthTrue && (
          <span className='bg-red-700 p-1 mb-2 block w-fit rounded-md'>
            The Email or Password entered is incorrect.
          </span>
        )}

        {loading ? (
          <button
            disabled
            className='font-bold bg-[#232326] w-full p-2 mb-3 rounded-md flex justify-center items-center cursor-wait'
          >
            <svg
              aria-hidden='true'
              role='status'
              className='inline w-4 h-4 me-3 text-white animate-spin'
              viewBox='0 0 100 101'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z'
                fill='#E5E7EB'
              />
              <path
                d='M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z'
                fill='currentColor'
              />
            </svg>
            Loading...
          </button>
        ) : (
          <button
            className='font-bold bg-[#232326] w-full mx-auto transition-colors delay-75 duration-500 text-textWhite block rounded-md p-2 mb-3 border border-[#0b1c34] hover:border-white'
            type='submit'
          >
            Log In
          </button>
        )}
        <p className='mt-2'>
          Don't have an account ?
          <Link to='/signup' className='ml-2 hover:underline'>
            Sign Up
          </Link>
        </p>
      </form>
    </section>
  );
};

export default LogIn;
