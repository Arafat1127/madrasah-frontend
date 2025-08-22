import React, { useState } from "react";

const AttendanceSheet = () => {
    const [formData, setFormData] = useState({
        class: "",
        examSession: "Monthly Attendance",
        section: "",
        shift: "",
        group: "",
        month: "",
        year: "",
        roll: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data:", formData);

    };

    return (
        <div className="font-roboto">
            <div className="flex flex-col items-center justify-center   pt-7">
                <h2 className="text-3xl font-bold text-gray-800 mb-2">
                    Attendance <span className="text-[#0B0B82]">Sheet</span>
                </h2>
                <div className='text-[#020085] w-[120px] mt-2 mb-6 mx-auto'>
                    <hr className="border-t-2 border-[#666] ml-[15px]" />
                    <hr className="border-t-2 border-[#666] mr-[15px] mt-1" />
                </div>
            </div>
            <div className="flex justify-center items-center pb-10">
                <form
                    onSubmit={handleSubmit}
                    className="bg-gray-100 shadow-md p-6 rounded-md grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-5xl"
                >
                    {/* Class */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 items-center">
                            Class <span className="text-red-500">*</span>
                        </label>
                        <select
                            name="class"
                            value={formData.class}
                            onChange={handleChange}
                            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                            required
                        >
                            <option value="">Select One</option>
                            <option value="Six">Six</option>
                            <option value="Seven">Seven</option>
                            <option value="Eight">Eight</option>
                            <option value="Nine">Nine</option>
                            <option value="Ten">Ten</option>
                        </select>
                    </div>

                    {/* Section */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Section
                        </label>
                        <select
                            name="section"
                            value={formData.section}
                            onChange={handleChange}
                            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                        >
                            <option value="">Select One</option>
                            <option value="A">A</option>
                            <option value="B">B</option>
                        </select>
                    </div>

                    {/* Shift */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Shift</label>
                        <select
                            name="shift"
                            value={formData.shift}
                            onChange={handleChange}
                            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                        >
                            <option value="">Select One</option>
                            <option value="Morning">Morning</option>
                            <option value="Day">Day</option>
                        </select>
                    </div>

                    {/* Group */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Group</label>
                        <select
                            name="group"
                            value={formData.group}
                            onChange={handleChange}
                            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                        >
                            <option value="">Select One</option>
                            <option value="Science">Science</option>
                            <option value="Arts">Arts</option>
                            <option value="Commerce">Commerce</option>
                        </select>
                    </div>

                    {/* Month */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Month <span className="text-red-500">*</span></label>
                        <select
                            name="month"
                            value={formData.month}
                            onChange={handleChange}
                            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                            required
                        >
                            <option value="">Select One</option>
                            <option value="January">January</option>
                            <option value="February">February</option>
                            <option value="March">March</option>
                            <option value="April">April</option>
                            <option value="May">May</option>
                            <option value="June">June</option>
                            <option value="July">July</option>
                            <option value="August">August</option>
                            <option value="September">September</option>
                            <option value="October">October</option>
                            <option value="November">November</option>
                            <option value="December">December</option>
                        </select>
                    </div>

                    {/* Year */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Year  <span className="text-red-500">*</span></label>
                        <select
                            name="year"
                            value={formData.year}
                            onChange={handleChange}
                            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                            required
                        >
                            <option value="">Select One</option>
                            <option value="2025">2025</option>
                            <option value="2024">2024</option>
                        </select>
                    </div>

                    {/* Roll */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Roll No</label>
                        <input
                            type="text"
                            name="roll"
                            value={formData.roll}
                            onChange={handleChange}
                            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                            placeholder="Enter Roll"
                        />
                    </div>

                    {/* Search Button */}
                    <div className="flex items-end">
                        <button
                            type="submit"
                            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md w-full cursor-pointer"
                        >
                            🔍 Search
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AttendanceSheet;
