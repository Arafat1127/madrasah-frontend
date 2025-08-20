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
import ScrollToTopButton from './ScrollToTopButton/ScrollToTopButton';

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
            <ScrollToTopButton />
        </div>
    );
};

export default Home;