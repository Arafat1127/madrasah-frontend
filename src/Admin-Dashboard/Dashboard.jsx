import StatsCard from "./StatsCard";
import { FaUsers, FaChalkboardTeacher, FaBell, FaFileAlt } from "react-icons/fa";
import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    BarChart,
    XAxis,
    YAxis,
    CartesianGrid,
    Bar,
    ResponsiveContainer,
} from "recharts";

const Dashboard = () => {
    // Dummy Stats (এখানে পরবর্তীতে তুমি backend থেকে data আনতে পারবে)
    const stats = [
        { title: "Total Students", value: 1200, icon: <FaUsers />, color: "bg-green-600" },
        { title: "Total Teachers", value: 45, icon: <FaChalkboardTeacher />, color: "bg-blue-600" },
        { title: "Notices", value: 12, icon: <FaBell />, color: "bg-yellow-500" },
        { title: "Results Published", value: 5, icon: <FaFileAlt />, color: "bg-purple-600" },
    ];

    // Gender Wise Data
    const genderData = [
        { name: "Male", value: 700 },
        { name: "Female", value: 500 },
    ];
    const COLORS = ["#2ecc71", "#e74c3c"];

    // Class Wise Data
    const classData = [
        { class: "1", students: 100 },
        { class: "2", students: 120 },
        { class: "3", students: 130 },
        { class: "4", students: 110 },
        { class: "5", students: 115 },
        { class: "6", students: 125 },
        { class: "7", students: 118 },
        { class: "8", students: 122 },
        { class: "9", students: 130 },
        { class: "10", students: 130 },
    ];

    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold mb-8">📊 Admin Dashboard</h1>

            {/* Top Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                {stats.map((stat, index) => (
                    <StatsCard key={index} {...stat} />
                ))}
            </div>

            {/* Charts Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Gender Wise Chart */}
                <div className="bg-white p-6 rounded-2xl shadow-lg">
                    <h2 className="text-xl font-semibold mb-4">Gender Wise Students</h2>
                    <ResponsiveContainer width="100%" height={300}>
                        <PieChart>
                            <Pie
                                data={genderData}
                                cx="50%"
                                cy="50%"
                                labelLine={false}
                                label={({ name, percent }) =>
                                    `${name} ${(percent * 100).toFixed(0)}%`
                                }
                                outerRadius={120}
                                fill="#8884d8"
                                dataKey="value"
                            >
                                {genderData.map((entry, index) => (
                                    <Cell
                                        key={`cell-${index}`}
                                        fill={COLORS[index % COLORS.length]}
                                    />
                                ))}
                            </Pie>
                            <Tooltip />
                        </PieChart>
                    </ResponsiveContainer>
                </div>

                {/* Class Wise Chart */}
                <div className="bg-white p-6 rounded-2xl shadow-lg">
                    <h2 className="text-xl font-semibold mb-4">Class Wise Students</h2>
                    <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={classData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="class" />
                            <YAxis />
                            <Tooltip />
                            <Bar dataKey="students" fill="#3498db" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
