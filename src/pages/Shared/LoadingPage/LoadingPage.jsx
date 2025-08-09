import React from "react";
import logo from '../../../assets/images/logo.png'
import { motion } from "framer-motion";

const LoadingPage = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-green-100 via-white to-green-50">
            {/* Logo Animation */}
            <motion.div
                initial={{ scale: 0, rotate: 0, opacity: 0 }}
                animate={{ scale: 1, rotate: 360, opacity: 1 }}
                transition={{ duration: 1, ease: "easeInOut" }}
                className="mb-6"
            >
                <img
                    src={logo}
                    alt="Madrasa Logo"
                    className="w-24 h-24 rounded-full shadow-lg border-1 border-green-600"
                />
            </motion.div>

            {/* Text Animation */}
            <motion.h1
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                    duration: 0.8,
                    ease: "easeOut",
                    delay: 0.3,
                }}
                className="text-2xl font-bold text-green-700"
            >
                Damurhuda Darussunnat Dakhil Madrasha
            </motion.h1>

            {/* Loading Dots Animation */}
            <motion.div
                className="flex space-x-2 mt-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
            >
                {[0, 1, 2].map((dot) => (
                    <motion.span
                        key={dot}
                        className="w-3 h-3 bg-green-600 rounded-full"
                        animate={{
                            y: [0, -8, 0],
                        }}
                        transition={{
                            duration: 0.6,
                            repeat: Infinity,
                            delay: dot * 0.2,
                        }}
                    />
                ))}
            </motion.div>
        </div>
    );
};

export default LoadingPage;
