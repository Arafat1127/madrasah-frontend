import React, { useState } from "react";
import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts";
import { FaMale, FaFemale } from "react-icons/fa";

const COLORS = ["#00BFFF", "#FF69B4", "#A9A9A9"]; // Male, Female, Others

const StudentList = () => {
    const [formData, setFormData] = useState({
        class: "",
        section: "",
        shift: "",
        group: "",
        year: "",
        roll: "",
    });

    const [filtered, setFiltered] = useState([]);
    const [searchDone, setSearchDone] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleReset = () => {
        setFormData({
            class: "",
            section: "",
            shift: "",
            group: "",
            year: "",
            roll: "",
        });
        setFiltered([]);
        setSearchDone(false);
    };


    const handleSearch = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch("/data/students.json");
            const data = await res.json();

            const results = data.filter((student) => {
                return (
                    (formData.class ? student.class === Number(formData.class) : true) &&
                    (formData.section ? student.section === formData.section : true) &&
                    (formData.shift ? student.shift === formData.shift : true) &&
                    (formData.group ? student.group === formData.group : true) &&
                    (formData.year ? student.year === Number(formData.year) : true) &&
                    (formData.roll ? student.roll === Number(formData.roll) : true)
                );
            });

            setFiltered(results);
            setSearchDone(true);
        } catch (error) {
            console.error("Error loading students.json:", error);
        }
    };

    // Gender Stats
    <Tooltip
        formatter={(value, name,) => {
            const total = genderData.reduce((sum, entry) => sum + entry.value, 0);
            const percent = total > 0 ? ((value / total) * 100).toFixed(2) : 0;
            return [`${value} (${percent}%)`, name];
        }}
    />

    const genderData = [
        { name: "Male", value: filtered.filter((s) => s.gender === "Male").length },
        { name: "Female", value: filtered.filter((s) => s.gender === "Female").length },
        { name: "Others", value: filtered.filter((s) => s.gender === "Others").length },
    ];

    return (
        <div className="flex flex-col items-center bg-gray-50 px-4 py-8">
            {/* Title */}
            <h2 className="text-xl md:text-2xl font-bold text-[#0B0B82] mb-6 text-center">
                STUDENT <span className="text-black">LIST</span>
                <div className="text-[#020085] w-[100px] md:w-[120px] mt-2 mb-6 mx-auto">
                    <hr className="border-t-2 border-[#666] ml-[15px]" />
                    <hr className="border-t-2 border-[#666] mr-[15px] mt-1" />
                </div>
            </h2>

            {/* Form */}
            <form
                onSubmit={handleSearch}
                className="bg-[#f1f1f1] p-4 md:p-6 rounded-md shadow-md w-full max-w-6xl"
            >
                {/* === Filters === */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
                    {/* Class */}
                    <div>
                        <label className="block text-sm mb-1 text-[#a1a1a1] font-bold">
                            CLASS <span className="text-red-500">*</span>
                        </label>
                        <select
                            name="class"
                            value={formData.class}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-md p-2"
                            required
                        >
                            <option value="">Select One</option>
                            {[...Array(10)].map((_, i) => (
                                <option key={i + 1} value={String(i + 1)}>
                                    Class {i + 1}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Section */}
                    <div>
                        <label className="block text-sm text-[#a1a1a1] font-bold mb-1">
                            SECTION
                        </label>
                        <select
                            name="section"
                            value={formData.section}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-md p-2"
                        >
                            <option value="">Select One</option>
                            <option value="A">A</option>
                            <option value="B">B</option>
                        </select>
                    </div>

                    {/* Shift */}
                    <div>
                        <label className="block text-sm text-[#a1a1a1] font-bold mb-1">
                            SHIFT
                        </label>
                        <select
                            name="shift"
                            value={formData.shift}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-md p-2"
                        >
                            <option value="">Select One</option>
                            <option value="Morning">Morning</option>
                            <option value="Day">Day</option>
                        </select>
                    </div>

                    {/* Group */}
                    <div>
                        <label className="block text-sm text-[#a1a1a1] font-bold mb-1">
                            GROUP
                        </label>
                        <select
                            name="group"
                            value={formData.group}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-md p-2"
                        >
                            <option value="">Select One</option>
                            <option value="Science">Science</option>
                            <option value="Humanities">Humanities</option>
                            <option value="Commerce">Commerce</option>
                        </select>
                    </div>

                    {/* Year */}
                    <div>
                        <label className="block text-sm text-[#a1a1a1] font-bold mb-1">
                            ACADEMIC YEAR <span className="text-red-500">*</span>
                        </label>
                        <select
                            name="year"
                            value={formData.year}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-md p-2"
                            required
                        >
                            <option value="">Select One</option>
                            <option value="2025">2025</option>
                            <option value="2024">2024</option>
                            <option value="2023">2023</option>
                        </select>
                    </div>

                    {/* Roll */}
                    <div>
                        <label className="block text-sm mb-1 text-[#a1a1a1] font-bold">
                            ROLL NO.
                        </label>
                        <input
                            type="text"
                            name="roll"
                            value={formData.roll}
                            onChange={handleChange}
                            placeholder="Enter Roll no. here"
                            className="w-full border border-gray-300 rounded-md p-2"
                        />
                    </div>
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row justify-end gap-3 mt-4">
                    <button
                        type="button"
                        onClick={handleReset}
                        className="bg-white border border-gray-400 px-6 py-2 rounded-md hover:bg-gray-200 cursor-pointer"
                    >
                        🔄 Reset
                    </button>
                    <button
                        type="submit"
                        className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 cursor-pointer"
                    >
                        🔍 Search
                    </button>
                </div>
            </form>

            {/* Search Result */}
            {searchDone && (
                <div className="bg-white shadow-md rounded-lg w-full max-w-6xl mt-8 p-6 font-roboto">
                    {/* Top Title */}
                    <h3 className="text-lg font-bold mb-4 text-center">
                        Showing result for Class : {formData.class} - Section {formData.section || "N/A"} - {formData.group || "N/A"}
                    </h3>
                    <p className="text-center font-semibold mb-6">
                        Total Student : {filtered.length}
                    </p>

                    {/* Gender Stats */}
                    <div className="flex justify-center mb-8">
                        <div className="w-[300px] h-[250px]">
                            <ResponsiveContainer>
                                <PieChart>
                                    <Pie
                                        data={genderData}
                                        cx="50%"
                                        cy="50%"
                                        labelLine={false}
                                        outerRadius={100}
                                        dataKey="value"
                                    >
                                        {genderData.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={COLORS[index]} />
                                        ))}
                                    </Pie>
                                    <Tooltip
                                        formatter={(value, name) => {
                                            const total = genderData.reduce((sum, entry) => sum + entry.value, 0);
                                            const percent = total > 0 ? ((value / total) * 100).toFixed(2) : 0;
                                            return [`${value} (${percent}%)`, name];
                                        }}
                                    />
                                    <Legend />
                                </PieChart>
                            </ResponsiveContainer>

                        </div>
                    </div>

                    {/* Student Cards */}
                    <div className="overflow-x-auto ">
                        <div className="min-w-[700px] px-5">
                            {filtered.map((stu) => (
                                <div
                                    key={stu.id}
                                    className="bg-white  shadow-md hover:bg-[#f5f4f4] rounded-lg p-4 mb-4 flex justify-between items-center gap-6 px-3"
                                >
                                    {/* Left: Roll No */}
                                    <div className="w-[100px] text-center">
                                        <p className="text-[#666666] text-sm">Roll No.</p>
                                        <h3 className="text-xl  text-[#666666]">{stu.roll}</h3>
                                    </div>

                                    {/* Middle: Info */}
                                    <div className="flex-1">
                                        <h3 className=" text-lg text-[#666666]"><strong>{stu.name}</strong></h3>
                                        <div className="text-[14px]">
                                            <p>
                                                Father's Name :{" "}
                                                <span className="font-semibold text-[#666666]">{stu.fatherName}</span>
                                            </p>
                                            <p>
                                                Mother's Name :{" "}
                                                <span className="font-semibold text-[#666666]">{stu.motherName}</span>
                                            </p>
                                            <p>
                                                Student Religion :{" "}
                                                <span className="font-semibold text-[#666666]">{stu.religion}</span>
                                            </p>
                                            <p>
                                                Contact :{" "}
                                                <span className="font-semibold text-[#666666]">{stu.contact}</span>
                                            </p>
                                            <p>
                                                Address :{" "}
                                                <span className="font-semibold text-[#666666]">{stu.address}</span>
                                            </p>
                                        </div>
                                    </div>

                                    {/* Gender Icon */}
                                    <div className="flex items-center gap-2 justify-end mb-2 ">
                                        {stu.gender === "Male" ? (
                                            <FaMale className="text-[#00b0d1] text-xl w-[40px] h-[40px]" />
                                        ) : (
                                            <FaFemale className="text-pink-500 text-xl w-[40px] h-[40px]" />
                                        )}
                                    </div>

                                    {/* Section & Group */}
                                    <div className="w-[170px] text-[14px]">
                                        <p>
                                            Section :{" "}
                                            <span className="font-semibold text-[#666666]">{stu.section}</span>
                                        </p>
                                        <p>
                                            Group :{" "}
                                            <span className="font-semibold text-[#666666]">{stu.group}</span>
                                        </p>
                                    </div>

                                    {/* Right: ID */}
                                    <div className="text-center text-[14px]">
                                        <p>Student ID</p>
                                        <span className="text-blue-600 font-bold">{stu.id}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            )}
        </div>
    );
};

export default StudentList;

//https://chatgpt.com/c/68ba78ed-2e24-832b-a59d-4cd7ed009380