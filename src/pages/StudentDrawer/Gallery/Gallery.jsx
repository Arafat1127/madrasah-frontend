import React, { useState } from "react";

const galleryItems = [
    {
        title: "Study Tour-2025",
        img: "https://i.ibb.co.com/NgwtvjLV/486406793-639250775484594-5355642737699856453-n.jpg",
    },
    {
        title: "বই বিতরণ 2025",
        img: "https://i.ibb.co.com/jZWhvVvb/482064115-628532079889797-2612274157330648324-n.jpg",
    },
    {
        title: "বই বিতরণ 2024",
        img: "https://i.ibb.co.com/mFcB4Jns/Book-2024-m.jpg",
    },
    {
        title: "২০২৩ দাখিল পরীক্ষার্থীদের বিদায় অনুষ্ঠান",
        img: "https://i.ibb.co.com/vtQfcqL/Dakhil-2023-1.jpg",
    },
    {
        title: "২০২৩ দাখিল পরীক্ষার্থীদের বিদায় অনুষ্ঠান",
        img: "https://i.ibb.co.com/4ZP1KH9R/Dakhil-2023.jpg",
    },
    {
        title: "21 February",
        img: "https://i.ibb.co.com/twTKJQwv/21-fb.jpg",
    },
    {
        title: "15 August",
        img: "https://i.ibb.co.com/fzYrqFhM/482093916-2234688453592540-3099419844401117886-n.jpg",
    },
    {
        title: "২০১৭ দাখিল পরীক্ষার্থীদের বিদায় অনুষ্ঠান",
        img: "https://i.ibb.co.com/mFtzXhSn/Dakhil-2017.jpg",
    },
];
const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <div className="max-w-7xl mx-auto px-4 py-10">
            <h2 className="text-xl md:text-2xl font-bold text-[#0B0B82] mb-6 relative text-center">
                Gallery
                <div className="text-[#020085] w-[100px] md:w-[120px] mt-2 mb-6 mx-auto">
                    <hr className="border-t-2 border-[#666] ml-[15px]" />
                    <hr className="border-t-2 border-[#666] mr-[15px] mt-1" />
                </div>
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {galleryItems.map((item, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-lg shadow-md hover:shadow-lg transition p-2 cursor-pointer"
                        onClick={() => setSelectedImage(item)}
                    >
                        <img
                            src={item.img}
                            alt={item.title}
                            className="w-full h-48 object-cover rounded"
                        />
                        <p className="text-center text-sm mt-2 font-medium">
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
                            className="absolute top-2 right-2 text-gray-600 border rounded-full h-8 w-8 hover:bg-red-500 hover:text-white cursor-pointer text-xl"
                            onClick={() => setSelectedImage(null)}
                        >
                            ✕
                        </button>
                        <img
                            src={selectedImage.img}
                            alt={selectedImage.title}
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
