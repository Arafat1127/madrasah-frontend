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

const Home = () => {
    return (
        <div>
            <Banner />
            <SecondBanner />
            <HeadTeacherMassages />
            <CategoryAndNoticeBoard />
            <AboutUs />
            <TeachersGallery />
            <Statistics />
            <ManagingCommittee />
            <StudentStatistics />
        </div>
    );
};

export default Home;