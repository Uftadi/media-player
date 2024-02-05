import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const SignUp = () => {
  const navigate = useNavigate();
  const backendApiUrl =
    import.meta.env.VITE_NODE_ENV === 'development'
      ? 'http://localhost:3000'
      : 'vercel';

  const [fieldErrors, setFieldErrors] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
  });

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const handleFormChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value.toLowerCase() });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post(`${backendApiUrl}/signup`, userData);

      if (res.data.errors) {
        const errors = {};
        res.data.errors.forEach((error) => {
          errors[error.path] = error.msg;
        });
        console.log(errors);

        setFieldErrors(errors);
        setLoading(false);
      } else {
        navigate('/login');
      }
    } catch (error) {
      setLoading(false);
    }
  };

  return (
    <section className='min-h-[800px] h-screen flex flex-col justify-center items-center bg-[#1d201f] text-white'>
      <Link to='/' className='mb-8 text-xl font-black'>
        Media Player
      </Link>

      <form
        className='w-5/6 md:w-3/6 xl:w-2/6 mx-auto bg-[#156d4b] shadow-md shadow-stone-950/50 py-10 px-5 rounded-xl'
        onSubmit={handleFormSubmit}
        noValidate
      >
        {['firstName', 'lastName', 'email', 'password'].map((field) => (
          <div key={field}>
            <label htmlFor={field}>
              {field[0].toUpperCase() + field.slice(1)}
            </label>

            <div className='relative'>
              <input
                className={`block w-full text-black rounded-md p-2 mb-3 mt-1`}
                type={
                  field === 'password' && showPassword
                    ? 'text'
                    : field === 'password'
                    ? 'password'
                    : field === 'email'
                    ? 'email'
                    : 'text'
                }
                id={field}
                name={
                  field === 'password'
                    ? 'password'
                    : field === 'email'
                    ? 'email'
                    : field === 'firstName'
                    ? 'firstName'
                    : 'lastName'
                }
                onChange={handleFormChange}
              />

              {field === 'password' && (
                <i
                  className={`fa-solid ${
                    showPassword ? 'fa-eye-slash' : 'fa-eye'
                  } absolute right-3 top-[12px] cursor-pointer text-black`}
                  onClick={() => setShowPassword(!showPassword)}
                ></i>
              )}
            </div>

            {fieldErrors[field] && (
              <span className='bg-red-700 p-1 mb-2 block w-fit rounded-md'>
                {fieldErrors[field]}
              </span>
            )}
          </div>
        ))}

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
            ></svg>
            Loading...
          </button>
        ) : (
          <button
            className='font-bold bg-[#232326] w-full mx-auto transition-colors delay-75 duration-500 text-textWhite block rounded-md p-2 mb-3 border border-[#0b1c34] hover:border-white'
            type='submit'
          >
            Sign Up
          </button>
        )}

        <p className='mt-2'>
          Already have an account ?
          <Link to='/login' className='ml-2 hover:underline'>
            Log In
          </Link>
        </p>
      </form>
    </section>
  );
};

export default SignUp;
