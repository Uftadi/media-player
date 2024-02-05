import cookie from 'js-cookie';
import { UserContext } from '../context/UserContextProvider';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { StoreMedia } from '../components';

import { useContext, useEffect, useState } from 'react';
import axios from 'axios';

const MainPage = () => {
  const { backendApiUrl, setUserName } = useContext(UserContext);
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleIfUserHasToken = () => {
    let JWTinfocookie = cookie.get('JWTinfo');

    if (!JWTinfocookie) return;

    JWTinfocookie = JWTinfocookie.replace('j:', '');
    const cookieValueObj = JSON.parse(JWTinfocookie);

    const expirationInMs = new Date(cookieValueObj.expires) - new Date();

    if (expirationInMs <= 0) return;
    return JWTinfocookie;
  };

  useEffect(() => {
    const token = handleIfUserHasToken();

    if (token) {
      axios
        .post(`${backendApiUrl}/isAuth`, { token }, { withCredentials: true })
        .then((res) => {
          if (res.data.isAuth) {
            setIsAuthenticated(true);
            setUserName(res.data.username);
          } else {
            navigate('/');
          }
        })
        .catch((error) => console.error('Error in /isAuth:', error));
    } else {
      navigate('/');
    }
  }, [isAuthenticated]);

  return (
    isAuthenticated && (
      <>
        <Navbar />
        <div className='h-[calc(100vh-94px)] w-full flex justify-around bg-[#232326] relative pt-8'>
          <StoreMedia />
        </div>
      </>
    )
  );
};

export default MainPage;
