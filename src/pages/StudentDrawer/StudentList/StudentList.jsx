import React, { useState } from "react";

const StudentList = () => {
    const [formData, setFormData] = useState({
        class: "",
        section: "",
        shift: "",
        group: "",
        year: "",
        roll: "",
    });

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
    };

    const handleSearch = (e) => {
        e.preventDefault();
        console.log("Search Data:", formData);

    };

    return (
        <div className="flex flex-col items-center justify-center h-[750px] md:h-[450px] bg-gray-50 px-4">
            {/* Title */}
            <h2 className="text-xl md:text-2xl font-bold text-[#0B0B82] mb-6 relative text-center">
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
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
                    {/* Class */}
                    <div>
                        <label className="block text-sm  mb-1 text-[#a1a1a1] font-bold font-roboto">
                            CLASS <span className="text-red-500">*</span>
                        </label>
                        <select
                            name="class"
                            value={formData.class}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-md p-2 font-roboto text-[#18181b]"
                            required
                        >
                            <option value="">Select One</option>
                            <option value="6">Class 6</option>
                            <option value="7">Class 7</option>
                            <option value="8">Class 8</option>
                            <option value="9">Class 9</option>
                            <option value="10">Class 10</option>
                        </select>
                    </div>

                    {/* Section */}
                    <div>
                        <label className="block text-sm text-[#a1a1a1] font-bold font-roboto mb-1">SECTION</label>
                        <select
                            name="section"
                            value={formData.section}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-md p-2 font-roboto text-[#18181b]"
                        >
                            <option value="">Select One</option>
                            <option value="A">A</option>
                            <option value="B">B</option>
                        </select>
                    </div>

                    {/* Shift */}
                    <div>
                        <label className="block text-sm text-[#a1a1a1] font-bold font-roboto mb-1">SHIFT</label>
                        <select
                            name="shift"
                            value={formData.shift}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-md p-2 font-roboto text-[#18181b]"
                        >
                            <option value="">Select One</option>
                            <option value="Morning">Morning</option>
                            <option value="Day">Day</option>
                        </select>
                    </div>

                    {/* Group */}
                    <div>
                        <label className="block text-sm text-[#a1a1a1] font-bold font-roboto mb-1">GROUP</label>
                        <select
                            name="group"
                            value={formData.group}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-md p-2 font-roboto text-[#18181b]"
                        >
                            <option value="">Select One</option>
                            <option value="Science">Science</option>
                            <option value="Arts">Arts</option>
                            <option value="Commerce">Commerce</option>
                        </select>
                    </div>

                    {/* Academic Year */}
                    <div>
                        <label className="block text-sm text-[#a1a1a1] font-bold font-roboto mb-1">
                            ACADEMIC YEAR <span className="text-red-500">*</span>
                        </label>
                        <select
                            name="year"
                            value={formData.year}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-md p-2 font-roboto text-[#18181b]"
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
                        <label className="block text-sm  mb-1 text-[#a1a1a1] font-bold font-roboto">ROLL NO.</label>
                        <input
                            type="text"
                            name="roll"
                            value={formData.roll}
                            onChange={handleChange}
                            placeholder="Enter Roll no. here"
                            className="w-full border border-gray-300 rounded-md p-2 font-roboto text-[#18181b]"
                        />
                    </div>
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row justify-end gap-3 mt-4">
                    <button
                        type="button"
                        onClick={handleReset}
                        className="bg-white border border-gray-400 px-6 py-2 rounded-md flex items-center justify-center gap-2 hover:bg-gray-200 cursor-pointer text-[#18181b]"
                    >
                        🔄 Reset
                    </button>
                    <button
                        type="submit"
                        className="bg-indigo-600 text-white px-6 py-2 rounded-md flex items-center justify-center gap-2 hover:bg-indigo-700 cursor-pointer"
                    >
                        🔍 Search
                    </button>
                </div>
            </form>
        </div>
    );
};

export default StudentList;
