import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const UserContext = createContext({});

export const UserContextProvider = ({ children }) => {
  const backendApiUrl =
    import.meta.env.VITE_NODE_ENV === 'development'
      ? 'http://localhost:3000'
      : 'vercel';

  const [userName, setUserName] = useState('');

  return (
    <UserContext.Provider
      value={{
        backendApiUrl,
        userName,
        setUserName,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

UserContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
