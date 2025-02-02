import './App.css'
import { AppLayout } from './components/layout/AppLayout';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <AppLayout/>,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;