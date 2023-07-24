import React from 'react';

const Gallery = () => {
    return (
        <div className='mt-10 mb-6 ml-12'>
            <h2 className='text-center font-bold text-3xl underline mb-4'>Our College Gallery</h2>
            <div className='grid grid-cols-2 gap-3'>
            <div className=' text-center'>
                    <img src="https://rn53themes.net/themes/demo/education-master/images/slider/1.jpg" alt="" />
                    <img src="https://rn53themes.net/themes/demo/education-master/images/slider/2.jpg" alt="" />
                    <img src="https://rn53themes.net/themes/demo/education-master/images/slider/3.jpg" alt="" />
            </div>
            <div>
            <img src="https://rn53themes.net/themes/demo/education-master/images/slider/1.jpg" alt="" />
                    <img src="https://rn53themes.net/themes/demo/education-master/images/slider/2.jpg" alt="" />
                    <img src="https://rn53themes.net/themes/demo/education-master/images/slider/3.jpg" alt="" />
            </div>
        </div>
        </div>
    );
};

export default Gallery;