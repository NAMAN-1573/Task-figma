import React, { useState } from 'react';
import SidePanel from './SidePanel';
import CardContent from './CardContent';
import Rectangle from '../assets/rectangle.svg';

const UpperCard = () => {
  const [activeTab, setActiveTab] = useState('About Me');
  const [isExpanded, setIsExpanded] = useState(false);

  const tabs = ['About Me', 'Experiences', 'Recommended'];

  const aboutMeContent = `Hello! I'm Dave, your sales rep here from Salesforce. I've been working at this awesome company for 3 years now. I was born and raised in Albany, NY & have been living in Santa Carla for the past 10 years with my wife Tiffany and my 4-year-old twin daughters, Emma and Ella. Both of them are just starting school, so my calendar is usually blocked between 9-10 AM. This is a...`;
  const experiencesContent = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus quis eaque ullam sequi, dolorum officiis aliquid rerum incidunt nam aliquam reprehenderit perferendis delectus facere quisquam dolore. Eveniet, ab ex est doloribus itaque velit ist.?`;
  const recommendedContent = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquiconsequatconsectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna al.`;

  const getTruncatedContent = (content) => {
    const maxLength = 100; // Adjust as needed
    return content.length > maxLength ? content.slice(0, maxLength) + '...' : content;
  };

  const contentMapping = {
    'About Me': aboutMeContent,
    'Experiences': experiencesContent,
    'Recommended': recommendedContent,
  };

  const currentContent = contentMapping[activeTab];
  const truncatedContent = getTruncatedContent(currentContent);

  return (
    <div className='w-full max-w-[720px] h-[250px] bg-[#363C43] rounded-[18.89px] shadow-[5.67px_5.67px_3.78px_0px_#00000066] p-4 overflow-hidden'>
      <div className='flex items-center justify-center gap-2'>
        <SidePanel />
        <CardContent>
          <div className='w-full flex flex-col justify-center gap-y-6'>
            <div className='w-full flex justify-center'>
              <div className='w-full max-w-[600px] h-[50px] rounded-[23px] bg-[#171717] shadow-custom-inset text-white text-[16px] font-medium flex justify-center items-center gap-2'>
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    className={`w-full flex-1 h-[45px] rounded-[16px] px-3 py-2 mx-1 transition-all duration-300 ease-in-out ${activeTab === tab
                      ? 'bg-[#28292f] shadow-[0_0_15px_5px_rgba(0,0,0,0.3)] text-white'
                      : 'hover:bg-[#28292f] hover:shadow-md text-[#A3ADB2]'
                      }`}
                    onClick={() => setActiveTab(tab)}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>
            <div className="w-full max-w-[600px] h-[100px] font-['Plus_Jakarta_Sans'] text-[16px] font-normal text-left text-[#969696] leading-[24px] overflow-auto">
              {isExpanded ? currentContent : truncatedContent}
              {currentContent.length > truncatedContent.length && (
                <button
                  className= ' text-gray-100 mt-2'
                  onClick={() => setIsExpanded(!isExpanded)}
                >
                  {isExpanded ? 'See less' : 'See more'}
                </button>
              )}
            </div>
          </div>
        </CardContent>
        <img src={Rectangle} alt="rectangle-icon" className="w-[8px] h-[64px]" />
      </div>
    </div>
  );
};

export default UpperCard;
