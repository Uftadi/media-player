import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import cookie from 'js-cookie';

const SignUp = () => {
  const backendApiUrl =
    import.meta.env.VITE_NODE_ENV === 'development'
      ? 'http://localhost:3000'
      : 'vercel';

  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const handleFormChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value.toLowerCase() });
  };
  console.log(userData);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    axios.post(`${backendApiUrl}/signup`, userData).then((res) => {
      console.log(res.data);
    });
  };

  return (
    <section className='min-h-screen flex flex-col justify-center items-center bg-[#0a1b34] text-white'>
      <Link to='/' className='mb-8 text-xl font-black'>
        Media Plyer
      </Link>

      <form
        className='w-5/6 md:w-3/6 xl:w-2/6 mx-auto bg-[#184675] shadow-md shadow-stone-950/50 py-10 px-5 rounded-xl'
        onSubmit={handleFormSubmit}
      >
        {['first name', 'last name', 'email', 'password'].map((field) => (
          <div key={field}>
            <label htmlFor={field}>
              {field[0].toUpperCase() + field.slice(1)}
            </label>

            <input
              className='block w-full text-black rounded-md p-2 mb-3 mt-1'
              type={
                field === 'password'
                  ? 'password'
                  : field === 'email'
                  ? 'email'
                  : 'text'
              }
              required
              id={field}
              name={
                field === 'password'
                  ? 'password'
                  : field === 'email'
                  ? 'email'
                  : field === 'first name'
                  ? 'firstName'
                  : 'lastName'
              }
              onChange={handleFormChange}
            />
          </div>
        ))}

        <button
          className='font-bold bg-[#0b1c34] w-full mx-auto transition-colors delay-75 duration-500 text-textWhite block rounded-md p-2 mb-3 border border-[#0b1c34] hover:border-white'
          type='submit'
        >
          Sign Up
        </button>

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
