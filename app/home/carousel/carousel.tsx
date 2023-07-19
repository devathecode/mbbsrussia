"use client";
import React, {useState} from 'react';
import Imageslider from "@/app/home/carousel/Imageslider/Imageslider";

const Carousel = () => {
    const images = [
        {
            id: 1,
            imageUrl: '/russia.jpeg',
            caption: ''
        },
        {
            id: 2,
            imageUrl: '/mbbs.jpeg',
            caption: ''
        },
        {
            id: 3,
            imageUrl: '/russia-two.jpeg',
            caption: ''
        }
    ];
    const [currentImage, setCurrentImage] = useState(0);

    const prevImage = () => {
        setCurrentImage(currentImage === 0 ? images.length - 1 : currentImage - 1);
    };

    const nextImage = () => {
        setCurrentImage(currentImage === images.length - 1 ? 0 : currentImage + 1);
    };
    return (
        <div
            className="border-0 rounded-lg relative flex flex-col w-full bg-white outline-none focus:outline-none z-10">
            {/*header*/}
            <div className="relative h-[60vh] md:h-[85vh] group">
                {images.map((image: any, index: any) => (
                    <Imageslider
                        key={image.id}
                        imageUrl={image.imageUrl}
                        caption={image.caption}
                        currentImage={currentImage}
                        index={index}
                    />
                ))}
                <div
                    className="absolute top-1/2 -mt-6 left-0 right-0 opacity-0 group-hover:opacity-100">
                    <button
                        onClick={prevImage}
                        className="bg-gray-400 px-2 h-10 w-10 rounded-full text-2xl">
                        {`<`}
                    </button>
                </div>
                <div
                    className="absolute top-1/2 -mt-6 right-0 opacity-0 group-hover:opacity-100 transition-all ease-in-out duration-700">
                    <button
                        onClick={nextImage}
                        className="bg-gray-400 px-2 h-10 w-10 rounded-full text-2xl">
                        {`>`}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Carousel;