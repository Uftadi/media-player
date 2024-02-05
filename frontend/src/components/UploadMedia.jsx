import { Menu } from '@headlessui/react';
import PropTypes from 'prop-types';
import { useContext } from 'react';
import { MediaContext } from '../context/MediaContextProvider';

const UploadMedia = ({ classNames }) => {
  const { setFiles } = useContext(MediaContext);

  const selectFile = () => {
    const fileInput = document.createElement('input');
    fileInput.setAttribute('type', 'file');
    fileInput.setAttribute('multiple', 'multiple');
    fileInput.setAttribute('accept', 'video/*');
    fileInput.click();

    fileInput.addEventListener('change', () => {
      if (fileInput.files.length > 0) {
        const selectedFiles = fileInput.files;
        setFiles(selectedFiles);
      } else {
        console.log('No file selected');
      }
    });
  };

  return (
    <div>
      <Menu.Item>
        {({ active }) => (
          <span
            className={classNames(
              active ? 'bg-gray-200 text-gray-900' : 'text-gray-700',
              'block px-4 py-2 text-sm cursor-pointer'
            )}
            onClick={selectFile}
          >
            Upload Videos
          </span>
        )}
      </Menu.Item>
    </div>
  );
};

UploadMedia.propTypes = {
  classNames: PropTypes.func,
};

export default UploadMedia;
