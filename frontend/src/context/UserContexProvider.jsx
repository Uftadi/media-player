import { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

export const UserContext = createContext({});

export const UserContextProvider = ({ children }) => {
  const [hasToken, setHasToken] = useState(false);

  const backendApiUrl =
    import.meta.env.VITE_NODE_ENV === 'development'
      ? 'http://localhost:3000'
      : 'vercel';

  useEffect(() => {
    axios
      .post(`${backendApiUrl}/isAuth`, {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res.data);
      });
  }, []);

  return (
    <UserContext.Provider
      value={{
        hasToken,
        setHasToken,
        backendApiUrl,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

UserContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
