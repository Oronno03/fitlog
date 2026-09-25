import { IWorkout } from "@/type";
import React from "react";

const TitleDescriptionAndMuscle = ({ workout }: { workout: IWorkout }) => {
  return (
    <>
      <h1 className="font-oswald font-bold text-[36px] tracking-[-0.9px]">
        {workout.name.toUpperCase()}
      </h1>
      <p className="font-inter text-[16px] text-[#9CA3AF] mb-5">
        {workout.description}
      </p>
      <div className="flex gap-2 mb-7">
        {workout.muscleGroups.map((muscle) => (
          <p
            className="text-black bg-[#C2F800] px-2.5 py-0.5 rounded-full font-inter font-bold"
            key={muscle}
          >
            {muscle}
          </p>
        ))}
      </div>
    </>
  );
};

export default TitleDescriptionAndMuscle;
