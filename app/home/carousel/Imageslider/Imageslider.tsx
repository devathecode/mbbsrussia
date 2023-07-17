"use client";

import React from 'react';

// @ts-ignore
const Imageslider = ({ imageUrl, caption, currentImage, index }) => {
    return (
        <div
            className={`h-full absolute top-0 left-0 right-0 transition-all duration-1000 ${
                index === currentImage ? "opacity-100" : "opacity-0"
            }`}
        >
            <img className="h-[60vh] md:h-[85vh] w-full object-cover" src={imageUrl} alt={caption} />
        </div>
    );
};

export default Imageslider;