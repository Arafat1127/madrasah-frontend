import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Home from "../../pages/Home/Home";
import TeacherDetails from "../../pages/Home/TeachersGallary/TeacherDetails";
import OurTeacher from "../../pages/AcademicDrawer/OurTeacher/OurTeacher";
import AboutUs from "../../pages/AboutDrawer/AboutUs/AboutUs";
import History from "../../pages/AboutDrawer/History/History";
import Contact from "../../pages/Contact/Contact";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/about-us',
                element: <AboutUs />
            },
            {
                path: '/history',
                element: <History />
            },
            {
                path: '/teachers',
                element: <OurTeacher />
            },
            {
                path: '/teachers/:teacherId',
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