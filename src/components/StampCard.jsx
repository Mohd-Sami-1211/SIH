'use client'
import React from 'react';
import { Popup, usePopup } from '@/components/ui/popup';
import StampDetails from './StampDetails';


const StampCard = ({ stamp }) => {
  const { isPopUpOpen, togglePopUp } = usePopup();
  return (
    <>
      <Popup isPopUpOpen={isPopUpOpen} togglePopUp={togglePopUp}>
        <div className='text-black'>
          <StampDetails product={stamp} />
        </div>
      </Popup>
      <div
        className='bg-[#191C1E] p-2 border h-full border-gray-300 border-opacity-10 rounded-md flex flex-col items-center space-y-4 text-sm  cursor-pointer' 
        onClick={togglePopUp}
      >
        <div className="bg-[#222528] text-white rounded-md flex w-full justify-center">
          <img
            src={stamp?.image}
            alt={stamp?.name}
            className="h-52"
          />
        </div>
          
        <h3 className="font-semibold mb-2 text-center text-base">{stamp?.title}</h3>
        <div className="flex justify-between items-center text-xs text-gray-300 font- mb-2 opacity-70 bg-[#222528] w-full px-4 py-1 rounded-md">
          <div className='flex flex-col space-y-1 text-sm'>
            <span>Minting: </span><span className='font-semibold text-white opacity-100'>{stamp?.minting}</span>
          </div>
          <div className='flex flex-col space-y-1 text-sm'>
            <span className="">Price:</span><span className='opacity-100 text-white'> ₹{stamp?.price}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default StampCard;
