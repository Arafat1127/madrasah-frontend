import React from "react";

const Holiday = () => {
    return (
        <section className="bg-gray-50 py-10 px-4">
            <div className="max-w-6xl mx-auto text-center">
                {/* Section Title */}
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                    📅 <span className="text-[#020085]">Holiday</span> List
                    <div className="text-[#020085] w-[100px] md:w-[120px] mt-2 mb-6 mx-auto">
                        <hr className="border-t-2 border-[#666] ml-[15px]" />
                        <hr className="border-t-2 border-[#666] mr-[15px] mt-1" />
                    </div>
                </h2>

                <p className="text-gray-600 mb-8 text-sm md:text-base">
                    👉 Here is the Government Approved holidays list for 2025 in PDF
                    format. You can view it online or download it if you wish.
                </p>

                {/* PDF View (Desktop only) */}
                <div className="hidden sm:block bg-white shadow-lg rounded-2xl overflow-hidden border">
                    <iframe
                        src="/Holidays.pdf"
                        title="Holiday PDF"
                        className="w-full h-[500px] md:h-[600px]"
                    ></iframe>
                </div>

                {/* {/* Mobile View (Open in new tab) */}
                <div className="sm:hidden mt-4">
                    <a
                        href="/Holidays.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-4 md:px-6 py-2 bg-green-600 text-white text-sm md:text-base font-semibold rounded-lg shadow hover:bg-green-700 transition"
                    >
                        📄 Open PDF
                    </a>
                </div>

                {/* Download Button (all devices) */}
                <div className="mt-6">
                    <a
                        href="/Holidays.pdf"
                        download
                        className="inline-block px-4 md:px-6 py-2 md:py-3 bg-blue-600 text-white text-sm md:text-base font-semibold rounded-lg shadow hover:bg-blue-700 transition"
                    >
                        📥 ডাউনলোড করুন
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Holiday;
