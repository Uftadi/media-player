import { createBrowserRouter } from 'react-router-dom';
import { PageNotFound, Root } from '../components';
import Home from '../pages/Home';
import MainPage from '../pages/MainPage';

const router = createBrowserRouter([
  {
    element: <Root />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/main', element: <MainPage /> },

      {
        path: '*',
        element: <PageNotFound />,
      },
    ],
  },
]);

export default router;
