import { IWorkout } from '@/type';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { CiClock1, CiStar } from 'react-icons/ci';
import { FaFire } from 'react-icons/fa';

interface WorkoutCardProp {
    workout: IWorkout
}

const WorkoutCard = ({workout}: WorkoutCardProp) => {
    return (
        <Link href={`/workouts/${workout.id}`} className='flex flex-col rounded-2xl overflow-hidden cursor-pointer hover:scale-105 transition-all'>
            <div className='relative min-h-62.5'>
                <Image className='object-cover' alt='WORKOUT IMAGE' src={workout.image} fill />
            </div>
            <div className='p-6 bg-[#20242E]'>
                <div className='flex gap-2 mb-3'>
                    {
                        workout.muscleGroups.map(muscle => (<h1 key={muscle} className='text-black bg-[#C2F800] px-2.5 py-0.5 rounded-full font-inter font-bold'>{muscle}</h1>))
                    }
                </div>
                <div className='mb-4'>
                    <h1 className='font-oswald font-bold text-[18px] tracking-[0.45px]'>{workout.name}</h1>
                    <p className='font-inter text-[12px] text-[#9CA3AF]'>{workout.equipment}</p>
                </div>
                <div className='w-full h-px bg-[#9CA3AF] mb-3'></div>
                <div className='flex gap-4'>
                    <p className='inline-flex justify-center items-center gap-1.5'><CiClock1 /> {workout.duration}</p>
                    <p className='inline-flex justify-center items-center gap-1.5'><FaFire /> {workout.caloriesBurned}</p>
                    <p className='inline-flex justify-center items-center gap-1.5'><CiStar /> {workout.rating}</p>
                </div>
            </div>
        </Link>
    );
};

export default WorkoutCard;