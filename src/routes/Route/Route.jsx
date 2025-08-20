import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Home from "../../pages/Home/Home";
import TeacherDetails from "../../pages/Home/TeachersGallary/TeacherDetails";
import OurTeacher from "../../pages/AcademicDrawer/OurTeacher/OurTeacher";
import AboutUs from "../../pages/AboutDrawer/AboutUs/AboutUs";
import History from "../../pages/AboutDrawer/History/History";
import Contact from "../../pages/Contact/Contact";
import GoverningBody from "../../pages/AboutDrawer/GoverningBody/GoverningBody";
import OurVision from "../../pages/AboutDrawer/OurVision/OurVision";
import Notice from "../../pages/InformationDrawer/Notice/Notice";
import Events from "../../pages/InformationDrawer/Events/Events";
import Routine from "../../pages/AcademicDrawer/Routine/Routine";
import NoInformationFound from "../../pages/NoInfomationFound/NoInfomationFound";
import StudentList from "../../pages/StudentDrawer/StudentList/StudentList";
import Gallery from "../../pages/StudentDrawer/Gallery/Gallery";
import Holiday from "../../pages/InformationDrawer/Holidays/Holidays";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            //About Drawer
            {
                path: '/about-us',
                element: <AboutUs />
            },
            {
                path: '/history',
                element: <History />
            },
            {
                path: '/mission-vision',
                element: <OurVision />
            },
            {
                path: '/governing-body',
                element: <GoverningBody />
            },
            //Information Drawer
            {
                path: '/information/notice',
                element: <Notice />
            },
            {
                path: '/information/events',
                element: <Events />
            },
            {
                path: '/information/holidays-2025',
                element: <Holiday />
            },
            //Academic Drawer
            {
                path: '/academic/teachers',
                element: <OurTeacher />
            },
            {
                path: '/academic/routine',
                element: <Routine />
            },
            {
                path: '/jsc',
                element: <div> <div>
                    <h2 className="text-3xl font-bold text-center  text-[#020085] pt-5 font-roboto">Events</h2>
                    <div className='text-[#020085] w-[120px] mt-2  mx-auto pb-8'>
                        <hr className="border-t-2 border-[#666] ml-[15px]" />
                        <hr className="border-t-2 border-[#666] mr-[15px] mt-1" />
                    </div>
                    <NoInformationFound />
                </div></div>
            },
            //Student Drawer
            {
                path: '/student/student-list',
                element: <StudentList />
            },
            {
                path: '/student/photo-gallery',
                element: <Gallery />
            },
            {
                path: '/academic/teacher/:teacherId',
                element: <TeacherDetails />
            },
            {
                path: '/contact',
                element: <Contact />
            },
        ]
    }
]);
export default router