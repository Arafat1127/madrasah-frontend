import React from 'react';
import { RouterProvider } from 'react-router-dom';
import router from './routes/Route/Route';
const App = () => {
  return (
    <div className='max-w-[1916px] mx-auto'>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
};

export default App;