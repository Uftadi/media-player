import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../context/UserContextProvider';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import cookie from 'js-cookie';

const MainPage = () => {
  const { backendApiUrl } = useContext(UserContext);
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

    console.log(token);
    if (token) {
      axios
        .post(`${backendApiUrl}/isAuth`, { token }, { withCredentials: true })
        .then((res) => {
          console.log(res.data.isAuth);
          if (res.data.isAuth) {
            setIsAuthenticated(true);
          } else {
            navigate('/');
          }
        })
        .catch((error) => console.error('Error in /isAuth:', error));
    } else {
      navigate('/');
    }
  }, [isAuthenticated]);

  console.log(isAuthenticated);

  return isAuthenticated && <div>MainPage</div>;
};

export default MainPage;
