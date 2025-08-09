import React from 'react';
import Banner from './Banner/Banner';
import SecondBanner from './SecondBanner/SecondBanner';
import HeadTeacherMassages from './HeadTeacherMassages/HeadTeacherMassages';
import CategoryAndNoticeBoard from './CategoryAndNoticeBoard/CategoryAndNoticeBoard';
import AboutUs from '../AboutDrawer/AboutUs/AboutUs';
import TeachersGallery from './TeachersGallary/TeachersGallary';
import Statistics from './Statistics/Statistics';
import ManagingCommittee from './ManagingCommittee/ManagingCommittee';
import StudentStatistics from './StudentStatistics/StudentStatistics';
import NoticeBar from '../Shared/Header/NoticeBar';
import LoadingPage from '../Shared/LoadingPage/LoadingPage';

const Home = () => {
    return (
        <div>
            <NoticeBar />
            <Banner />
            <SecondBanner />
            <HeadTeacherMassages />
            <CategoryAndNoticeBoard />
            <AboutUs />
            <TeachersGallery />
            <Statistics />
            <ManagingCommittee />
            <StudentStatistics />
            <LoadingPage />
        </div>
    );
};

export default Home;