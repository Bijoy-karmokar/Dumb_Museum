import React from 'react';

const Banner = () => {
    return (
        <div className='carousel w-full rounded-box relative'>
            <div className='carousel-item w-full '>
                  <img className='w-full h-[60vh] md:h-[70vh] lg:h-[80vh] object-cover object-top' src="https://ucarecdn.com/521746bf-be02-4f5b-88ce-eb17479ae4a5/image.png" alt="" />
            </div>
            <div className='absolute inset-0 bg-black/50 flex items-center'>
                <div className="px-6 md:px-12 lg:px-20 max-w-xl font-newsreader">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-base-100 italic mb-4 in-data-[theme=dracula]:text-primary">
              Welcome to the Museum
            </h1>

            <p className="text-sm sm:text-lg md:text-xl text-primary-content in-data-[theme=dracula]:text-secondary italic mb-6">
              Discover the weirdest and most useless inventions ever created.
            </p>

            <button className="btn btn-secondary btn-sm sm:btn-lg">
              View Details
            </button>
          </div>
            </div>
        </div>
    );
};

export default Banner;