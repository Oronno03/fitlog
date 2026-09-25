import { IWorkout } from '@/type';
import React from 'react';
import { BiCalendar } from 'react-icons/bi';
import { LuBookMarked } from 'react-icons/lu';

const Buttons = ({workout}: {workout: IWorkout}) => {
    return (
        <div className='flex gap-4 mt-9'>
            <button className='inline-flex gap-2 justify-center items-center px-6 py-3 bg-[#CCFF00] text-black  font-inter font-semibold rounded-xl cursor-pointer'><BiCalendar /> Add to today&apos;s plan</button>
            <button className='inline-flex gap-2 justify-center items-center px-6 py-3 font-inter font-semibold bg-transparent border border-solid border-[#374151] rounded-xl cursor-pointer'><LuBookMarked /> Save for later</button>
          </div>
    );
};

export default Buttons;