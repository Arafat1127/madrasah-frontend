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