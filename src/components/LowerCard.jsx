import React, { useState } from 'react';
import SidePanel from './SidePanel';
import CardContent from './CardContent';
import Left from '../assets/left.svg';
import Right from '../assets/right.svg';
import DefaultImage from '../assets/defaultimage.jpg';
import Image from './Image';

const initialImages = [DefaultImage, DefaultImage, DefaultImage];

const LowerCard = () => {
  const [Images, setImages] = useState(initialImages);
  const [currentIndex, setCurrentIndex] = useState(0); // Tracks the first visible image index

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const fileURL = URL.createObjectURL(file);

      setImages((prevImages) => {
        const newImages = [...prevImages];
        const firstDefaultIndex = newImages.findIndex((img) => img === DefaultImage);

        if (firstDefaultIndex !== -1) {
          newImages[firstDefaultIndex] = fileURL;
        } else {
          newImages.push(fileURL);
        }
        return newImages;
      });
    }
  };

  // Handle next image click
  const handleNext = () => {
    if (currentIndex < Images.length - 3) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  // Handle previous image click
  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className='w-full max-w-[720px] h-[250px] bg-[#363C43] rounded-[18.89px] shadow-[5.67px_5.67px_3.78px_0px_#00000066] p-4 overflow-hidden'>
      <div className='w-full flex justify-center items-center gap-3'>
        <SidePanel />
        <CardContent>
          <div className='w-full flex justify-between items-center'>
            {/* gallery */}
            <div className="w-[130px] h-[50px] bg-[#171717] rounded-[20px] shadow-[inset_0px_4px_10px_2px_rgba(0,0,0,0.25)] text-white font-['Poppins'] font-medium leading-[30px] text-[16px] flex items-center justify-center">
              Gallery
            </div>

            {/* add image and arrow btn */}
            <div className='flex gap-x-8 items-center'>
              <label
                className="relative w-[110px] h-[40px] mx-auto bg-[#FFFFFF08] rounded-[104px] font-['Plus Jakarta Sans'] text-[10px] text-white text-center font-extrabold shadow-[inset_0px_3.26px_3.26px_#FFFFFF26] flex justify-center items-center cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
              >
                + ADD IMAGE
                <input
                  type="file"
                  onChange={handleFileChange}
                  style={{ display: "none" }}
                />
              </label>

              <div className='flex gap-x-2'>
                <div
                  onClick={handlePrev}
                  className={`w-[40px] h-[40px] rounded-full bg-gradient-to-br from-[#303439] to-[#161718] shadow-[4px_5px_30px_5px_#101213,-5px_-3px_30px_-10px_#96BEE7] flex items-center justify-center cursor-pointer ${currentIndex === 0 ? 'opacity-50' : ''}`}
                >
                  <img src={Left} alt="left Icon" width="12" height="12" />
                </div>
                <div
                  onClick={handleNext}
                  className={`w-[40px] h-[40px] rounded-full bg-gradient-to-br from-[#303439] to-[#161718] shadow-[4px_5px_30px_5px_#101213,-5px_-3px_30px_-10px_#96BEE7] flex items-center justify-center cursor-pointer ${currentIndex >= Images.length - 3 ? 'opacity-50' : ''}`}
                >
                  <img src={Right} alt="right Icon" width="12" height="12" />
                </div>
              </div>
            </div>
          </div>

          <div className='flex justify-center items-center gap-5 mt-4'>
            {Images.slice(currentIndex, currentIndex + 3).map((image, index) => (
              <Image key={index} imageURL={image} />
            ))}
          </div>

        </CardContent>
      </div>
    </div>
  );
};

export default LowerCard;
