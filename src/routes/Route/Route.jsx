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
import AttendanceSheet from "../../pages/AcademicDrawer/AttendanceSheet/AttendanceSheet";

// === Admin Pages ===
import Dashboard from "../../Admin-Dashboard/Dashboard";
import AddStudent from "../../Admin-Dashboard/AddStudent";
import AddTeacher from "../../Admin-Dashboard/AddTeacher";
import AddNotice from "../../Admin-Dashboard/AddNotice";
import AddPhotoGallery from "../../Admin-Dashboard/AddPhotoGallery";
import PublishResult from "../../Admin-Dashboard/PublishResult";
import AdminLayout from "../../layout/AdminLayout";
import AdminLogin from "../../Admin-Dashboard/AdminLogin/AdminLogin";

// === Utils ===
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            { path: "/", element: <Home /> },

            // About Drawer
            { path: "/about-us", element: <AboutUs /> },
            { path: "/history", element: <History /> },
            { path: "/mission-vision", element: <OurVision /> },
            { path: "/governing-body", element: <GoverningBody /> },

            // Information Drawer
            { path: "/information/notice", element: <Notice /> },
            { path: "/information/events", element: <Events /> },
            { path: "/information/holidays-2025", element: <Holiday /> },

            // Academic Drawer
            { path: "/academic/teachers", element: <OurTeacher /> },
            { path: "/academic/routine", element: <Routine /> },
            { path: "/academic/attendance-sheet", element: <AttendanceSheet /> },
            { path: "/academic/teacher/:teacherId", element: <TeacherDetails /> },
            { path: "/academic/result", element: <NoInformationFound /> },

            // Student Drawer
            { path: "/student/student-list", element: <StudentList /> },
            { path: "/student/photo-gallery", element: <Gallery /> },

            // Others
            { path: "/contact", element: <Contact /> },
            { path: "/noInformationFound", element: <NoInformationFound /> },

            // === Admin Authentication ===
            { path: "/admin/login", element: <AdminLogin /> },

            // === Admin Dashboard (Protected) ===
            {
                path: "/admin",
                element: (
                    <PrivateRoute>
                        <AdminLayout />
                    </PrivateRoute>
                ),
                children: [
                    { path: "/admin/dashboard", element: <Dashboard /> },
                    { path: "/admin/students", element: <AddStudent /> },
                    { path: "/admin/teachers", element: <AddTeacher /> },
                    { path: "/admin/gallery", element: <AddPhotoGallery /> },
                    { path: "/admin/notices", element: <AddNotice /> },
                    { path: "/admin/results", element: <PublishResult /> },
                ],
            },
        ],
    },
]);

export default router;
