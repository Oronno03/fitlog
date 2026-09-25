'use client';
import { WorkoutContext } from "@/Providers/WorkoutProvider";
import { IWorkout } from "@/type";
import React, { useContext } from "react";
import { BiCalendar } from "react-icons/bi";
import { LuBookMarked } from "react-icons/lu";
import { toast } from "react-toastify";

const Buttons = ({ workout }: { workout: IWorkout }) => {
  const { saved, setSaved, todaysPlans, setTodaysPlans } =
    useContext(WorkoutContext);

  const handleSave = () => {
    const exists = saved.find(save => save.id === workout.id);
    if(exists) {
        toast.warn("You have already saved this workout!", {position: "top-right", theme: "dark", })
        return;
    }
    toast.success("Added the workout to your saved workouts", {position: "top-right", theme: "dark"})
    setSaved([...saved, workout]);
  };

  const handleAddToday = () => {
    const exists = todaysPlans.find(plan => plan.id === workout.id);
    if(exists) {
        toast.warn("You have already added this workout!", {position: "top-right", theme: "dark", })
        return;
    }
    toast.success("Added the workout to your today's plan", {position: "top-right", theme: "dark"})
    setTodaysPlans([...todaysPlans, workout]);
  };

  return (
    <div className="flex gap-4 mt-9">
      <button onClick={handleAddToday} className="inline-flex gap-2 justify-center items-center px-6 py-3 bg-[#CCFF00] text-black  font-inter font-semibold rounded-xl cursor-pointer">
        <BiCalendar /> Add to today&apos;s plan
      </button>
      <button onClick={handleSave} className="inline-flex gap-2 justify-center items-center px-6 py-3 font-inter font-semibold bg-transparent border border-solid border-[#374151] rounded-xl cursor-pointer">
        <LuBookMarked /> Save for later
      </button>
    </div>
  );
};

export default Buttons;
