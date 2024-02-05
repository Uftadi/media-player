import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { MediaContextProvider, UserContextProvider } from './components';

ReactDOM.createRoot(document.getElementById('root')).render(
  <UserContextProvider>
    <MediaContextProvider>
      <App />
    </MediaContextProvider>
  </UserContextProvider>
);
