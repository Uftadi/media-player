import { createContext, useEffect, useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

export const MediaContext = createContext({});

export const MediaContextProvider = ({ children }) => {
  const [files, setFiles] = useState([]);
  const [userId, setUserId] = useState('');
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    if (files.length > 0) {
      const formData = new FormData();
      if (userId) {
        formData.append('userId', userId);
      }
      for (let i = 0; i < files.length; i++) {
        formData.append('files', files[i]);
      }

      axios.post('http://localhost:3000/uploadMedia', formData).then((res) => {
        setLoader(false);
        window.location.reload();
        console.log(res);
        setFiles([]);
      });
    }
  }, [files]);

  useEffect(() => {
    const storedUserId = localStorage.getItem('userId');
    if (storedUserId) {
      setUserId(storedUserId);
    } else {
      console.log('storedUserId not found');
    }
  }, []);

  return (
    <MediaContext.Provider
      value={{
        files,
        setFiles,
        userId,
        loader,
        setLoader,
      }}
    >
      {children}
    </MediaContext.Provider>
  );
};

MediaContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
