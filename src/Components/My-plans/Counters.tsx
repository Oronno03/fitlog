'use client';
import { WorkoutContext } from '@/Providers/WorkoutProvider';
import React, { useContext } from 'react';



const Counters = ({tab}: {tab: "today" | "saved"}) => {

    const {saved, todaysPlans} = useContext(WorkoutContext);

    let exercises, time, calories;

    if(tab == "today") {
        exercises = todaysPlans.length;
        time = todaysPlans.reduce((prev, curr) => prev + curr.duration, 0);
        calories = todaysPlans.reduce((prev, curr) => prev + curr.caloriesBurned, 0);
    } else {
        exercises = saved.length;
        time = saved.reduce((prev, curr) => prev + curr.duration, 0);
        calories = saved.reduce((prev, curr) => prev + curr.caloriesBurned, 0);
    }
    
    
    return (
        <div className='bg-[#13161D] py-8 px-6 grid grid-cols-3 border border-[#232732] rounded-2xl'>
            <div className='border-r-solid border-r border-r-[#232732] mr-8'>
                <p className='text-[#8A92A0] text-[12px]'>Exercises</p>
                <h1 className='font-oswald text-[36px] font-bold text-[#CCFF00]'>{exercises}</h1>
            </div>
            <div className='border-r-solid border-r border-r-[#232732] mr-8'>
                <p className='text-[#8A92A0] text-[12px]'>Minutes</p>
                <h1 className='font-oswald text-[36px] font-bold'>{time}</h1>
            </div>
            <div>
                <p className='text-[#8A92A0] text-[12px]'>Calories</p>
                <h1 className='font-oswald text-[36px] font-bold'>{calories}</h1>
            </div>
        </div>
    );
};

export default Counters;