import { IWorkout } from "@/type";
import React from "react";

const Instructions = ({ workout }: { workout: IWorkout }) => {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="font-inter text-[16px] font-extrabold">INSTRUCTIONS</h1>
      <ol className="flex flex-col gap-3">
        {workout.instructions.map((instruction, idx) => (
          <li key={instruction}>
            <span className="text-[#9CA3AF]">{idx + 1}.</span> {instruction}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Instructions;
