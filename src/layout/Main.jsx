import React from 'react';
import Header from '../pages/Shared/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/Shared/Footer/Footer';
import PageScrollToTop from '../pages/Shared/PageScrollToTop/PageScrollToTop';

const Main = () => {
    return (
        <div>
            <Header />
            <div className=''>
                <PageScrollToTop />
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Main;