import React from 'react';
import { Link, RouterProvider } from 'react-router-dom';
import Header from './pages/Shared/Header/Header';
import Footer from './pages/Shared/Footer/Footer';
import router from './routes/Route/Route';

const App = () => {
  return (
    <div className='max-w-[1916px] mx-auto'>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
};

export default App;