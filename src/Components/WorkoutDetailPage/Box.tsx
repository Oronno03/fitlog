import { IWorkout } from "@/type";
import React from "react";

const Box = ({ workout }: { workout: IWorkout }) => {
  return (
    <div className="bg-[#151922] rounded-2xl mb-8">
      <div className="px-6 py-3.5 flex justify-between">
        <h1>Equipment</h1>
        <p>{workout.equipment}</p>
      </div>
      <div className="w-full h-px bg-[#9CA3AF25]"></div>
      <div className="px-6 py-3.5 flex justify-between">
        <h1>Difficulty</h1>
        <p>{workout.difficulty}</p>
      </div>
      <div className="w-full h-px bg-[#9CA3AF25]"></div>
      <div className="px-6 py-3.5 flex justify-between">
        <h1>Sets</h1>
        <p>{workout.sets}</p>
      </div>
      <div className="w-full h-px bg-[#9CA3AF25]"></div>
      <div className="px-6 py-3.5 flex justify-between">
        <h1>Reps</h1>
        <p>{workout.reps}</p>
      </div>
      <div className="w-full h-px bg-[#9CA3AF25]"></div>
      <div className="px-6 py-3.5 flex justify-between">
        <h1>Duration</h1>
        <p>{workout.duration}</p>
      </div>
      <div className="w-full h-px bg-[#9ca3af25]"></div>
      <div className="px-6 py-3.5 flex justify-between">
        <h1>Calories</h1>
        <p>{workout.caloriesBurned}</p>
      </div>
      <div className="w-full h-px bg-[#9CA3AF25]"></div>
      <div className="px-6 py-3.5 flex justify-between">
        <h1>Rating</h1>
        <p>{workout.rating}</p>
      </div>
    </div>
  );
};

export default Box;
