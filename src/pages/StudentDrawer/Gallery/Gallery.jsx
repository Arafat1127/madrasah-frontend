import React, { useState, useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

// Loading Component
const LoadingSpinner = () => (
    <div className="flex items-center justify-center h-screen">
        <div className="w-12 h-12 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
    </div>
);

const Gallery = () => {
    const [galleryItems, setGalleryItems] = useState([]);
    const [selectedImage, setSelectedImage] = useState(null);
    const [loading, setLoading] = useState(true);

    // JSON fetch
    useEffect(() => {
        fetch("/gallery.json")
            .then((res) => res.json())
            .then((data) => {
                setGalleryItems(data);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Error loading gallery.json:", err);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <LoadingSpinner />;
    }

    return (
        <div className="max-w-7xl mx-auto px-4 py-10">
            <h2 className="text-xl md:text-2xl font-bold text-[#0B0B82] mb-6 relative text-center">
                Gallery
                <div className="text-[#020085] w-[100px] md:w-[120px] mt-2 mb-6 mx-auto">
                    <hr className="border-t-2 border-[#666] ml-[15px]" />
                    <hr className="border-t-2 border-[#666] mr-[15px] mt-1" />
                </div>
            </h2>

            {/* Gallery Grid */}
            <div className="grid gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {galleryItems.map((item, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-lg shadow-md hover:shadow-lg transition p-2 cursor-pointer"
                        onClick={() => setSelectedImage(item)}
                    >
                        {/* Lazy Loaded Image with blur */}
                        <LazyLoadImage
                            src={item.img}
                            alt={item.title}
                            effect="blur"
                            className="w-full md:w-[300px] h-48 object-cover rounded"
                        />
                        <p className="text-center text-sm mt-2 font-medium text-[#1b1718]">
                            {item.title}
                        </p>
                    </div>
                ))}
            </div>

            {/* Modal */}
            {selectedImage && (
                <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
                    <div className="relative bg-white rounded-lg p-4 max-w-3xl w-full">
                        <button
                            onClick={() => setSelectedImage(null)}
                            className="absolute top-2 right-2 text-gray-600 border rounded-full h-8 w-8 hover:bg-red-500 hover:text-white cursor-pointer text-xl"

                        >
                            ✕
                        </button>
                        <LazyLoadImage
                            src={selectedImage.img}
                            alt={selectedImage.title}
                            effect="blur"
                            className="w-full h-[70vh] object-contain rounded-lg"
                        />
                        <p className="text-center mt-4 font-semibold text-lg">
                            {selectedImage.title}
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Gallery;
