// src/pages/AdminDashboard/Sidebar/Sidebar.jsx
import { Link, NavLink, useNavigate } from "react-router-dom"; // Import useNavigate
import { FaTachometerAlt, FaUsers, FaChalkboardTeacher, FaImage, FaBell, FaCalendar, FaFileAlt, FaSignOutAlt } from "react-icons/fa";
import { removeToken } from "../../utilites/auth";

const Sidebar = () => {
    // Call the hook to get the navigate function
    const navigate = useNavigate();

    const handleLogout = () => {
        removeToken();
        // Use the navigate function to redirect the user
        navigate("/admin/login");
    };

    return (
        <div className="w-64 min-h-screen bg-green-900 text-white flex flex-col">
            {/* Logo / Title */}
            <div className="p-4 text-2xl font-bold border-b border-green-700">
                Admin Panel
            </div>

            {/* Nav Items */}
            <nav className="flex-1 p-4 space-y-2">
                <NavLink
                    to="/admin/dashboard"
                    className={({ isActive }) =>
                        `flex items-center gap-3 px-3 py-2 rounded-lg ${isActive ? "bg-green-700" : "hover:bg-green-800"
                        }`
                    }
                >
                    <FaTachometerAlt /> Dashboard
                </NavLink>

                <NavLink
                    to="/admin/students"
                    className={({ isActive }) =>
                        `flex items-center gap-3 px-3 py-2 rounded-lg ${isActive ? "bg-green-700" : "hover:bg-green-800"
                        }`
                    }
                >
                    <FaUsers /> Students
                </NavLink>

                <NavLink
                    to="/admin/teachers"
                    className={({ isActive }) =>
                        `flex items-center gap-3 px-3 py-2 rounded-lg ${isActive ? "bg-green-700" : "hover:bg-green-800"
                        }`
                    }
                >
                    <FaChalkboardTeacher /> Teachers
                </NavLink>

                <NavLink
                    to="/admin/gallery"
                    className={({ isActive }) =>
                        `flex items-center gap-3 px-3 py-2 rounded-lg ${isActive ? "bg-green-700" : "hover:bg-green-800"
                        }`
                    }
                >
                    <FaImage /> Gallery
                </NavLink>

                <NavLink
                    to="/admin/notices"
                    className={({ isActive }) =>
                        `flex items-center gap-3 px-3 py-2 rounded-lg ${isActive ? "bg-green-700" : "hover:bg-green-800"
                        }`
                    }
                >
                    <FaBell /> Notice
                </NavLink>

                <NavLink
                    to="/admin/results"
                    className={({ isActive }) =>
                        `flex items-center gap-3 px-3 py-2 rounded-lg ${isActive ? "bg-green-700" : "hover:bg-green-800"
                        }`
                    }
                >
                    <FaFileAlt /> Results
                </NavLink>
            </nav>

            {/* Logout */}
            <div className="p-4 border-t border-green-700">
                <button
                    onClick={handleLogout}
                    className="flex items-center gap-3 px-3 py-2 w-full text-left rounded-lg hover:bg-green-800">
                    <FaSignOutAlt /> Logout
                </button>
            </div>
        </div>
    );
};

export default Sidebar;