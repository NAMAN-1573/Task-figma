import React from 'react';
import LowerCard from "./LowerCard";
import UpperCard from "./UpperCard";
import Divider from './Divider';

const Container = () => {
  return (
    <div className='w-full md:w-[90%] mx-auto p-6 bg-white rounded-lg shadow-lg flex flex-col items-center md:items-start gap-y-6'>
      <UpperCard />
      
      <LowerCard />
      
    </div>
  );
}

export default Container;
