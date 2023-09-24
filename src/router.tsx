import { createBrowserRouter } from 'react-router-dom';
import Main from './pages/main';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
  },
]);
