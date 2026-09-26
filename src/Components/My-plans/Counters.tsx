"use client";

import { WorkoutContext } from "@/Providers/WorkoutProvider";
import React, { useContext } from "react";

const Counters = ({ tab }: { tab: "today" | "saved" }) => {
  const { saved, todaysPlans } = useContext(WorkoutContext);

  let exercises, time, calories;

  if (tab === "today") {
    exercises = todaysPlans.length;
    time = todaysPlans.reduce((prev, curr) => prev + curr.duration, 0);
    calories = todaysPlans.reduce(
      (prev, curr) => prev + curr.caloriesBurned,
      0,
    );
  } else {
    exercises = saved.length;
    time = saved.reduce((prev, curr) => prev + curr.duration, 0);
    calories = saved.reduce((prev, curr) => prev + curr.caloriesBurned, 0);
  }

  return (
    <div className="grid grid-cols-3 rounded-2xl border border-[#232732] bg-[#13161D] px-4 py-5 sm:px-6 sm:py-8">
      <div className="mr-2 border-r border-[#232732] sm:mr-8">
        <p className="text-[11px] text-[#8A92A0] sm:text-[12px]">Exercises</p>
        <h1 className="font-oswald text-[28px] font-bold text-[#CCFF00] sm:text-[36px]">
          {exercises}
        </h1>
      </div>

      <div className="mr-2 border-r border-[#232732] sm:mr-8">
        <p className="text-[11px] text-[#8A92A0] sm:text-[12px]">Minutes</p>
        <h1 className="font-oswald text-[28px] font-bold sm:text-[36px]">
          {time}
        </h1>
      </div>

      <div>
        <p className="text-[11px] text-[#8A92A0] sm:text-[12px]">Calories</p>
        <h1 className="font-oswald text-[28px] font-bold sm:text-[36px]">
          {calories}
        </h1>
      </div>
    </div>
  );
};

export default Counters;
