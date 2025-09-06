import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { setToken } from "../../utilites/auth";
// Import eye icons from react-icons
import { FaEye, FaEyeSlash } from "react-icons/fa";

const AdminLogin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    // State to toggle password visibility
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch("http://localhost:7000/admin/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            });

            const data = await res.json();

            if (res.ok) {
                setToken(data.token);
                navigate("/admin/dashboard");
            } else {
                setError(data.message);
            }
        } catch (err) {
            setError("Server error, try again later");
        }
    };

    // Function to toggle the password visibility state
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <form
                onSubmit={handleSubmit}
                className="bg-white p-6 rounded-lg shadow-lg w-[350px]"
            >
                <h2 className="text-xl font-bold mb-4 text-center text-indigo-600">
                    Admin Login
                </h2>
                {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

                <input
                    type="email"
                    placeholder="Email"
                    className="w-full border px-3 py-2 mb-3 rounded-md"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />

                {/* Wrapper div for the password input and icon */}
                <div className="relative mb-3">
                    <input
                        // Dynamically set input type based on state
                        type={showPassword ? "text" : "password"}
                        placeholder="Password"
                        className="w-full border px-3 py-2 rounded-md"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    {/* Icon to toggle password visibility */}
                    <span
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-400 hover:text-gray-600"
                        onClick={togglePasswordVisibility}
                    >
                        {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
                    </span>
                </div>

                <button
                    type="submit"
                    className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 cursor-pointer"
                >
                    Login
                </button>
            </form>
        </div>
    );
};

export default AdminLogin;