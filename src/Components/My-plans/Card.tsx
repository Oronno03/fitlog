"use client";

import { WorkoutContext } from "@/Providers/WorkoutProvider";
import { IWorkout } from "@/type";
import Image from "next/image";
import Link from "next/link";
import React, { useContext, useState } from "react";
import { CiClock1, CiStar } from "react-icons/ci";
import { FaFire } from "react-icons/fa";
import { TiTick } from "react-icons/ti";
import { toast } from "react-toastify";

const Card = ({ workout, today }: { workout: IWorkout; today: boolean }) => {
  const { saved, todaysPlans, setSaved, setTodaysPlans } =
    useContext(WorkoutContext);

  const [done, setDone] = useState(false);

  return (
    <div className="bg-[#14171E] rounded-2xl p-4 flex justify-between items-center">
      <div className="flex gap-4 items-center">
        <Image
          alt={workout.name}
          src={workout.image}
          width={200}
          height={10}
          className="rounded-xl w-50 h-35 object-cover"
        />
        <div className="flex flex-col gap-2">
          <h1 className="font-oswald font-bold text-[24px]">{workout.name}</h1>
          <p className="font-inter text-[#8A92A0] text-[16px]">
            {workout.equipment}
          </p>
          <div>
            <div className="flex gap-4">
              <p className="inline-flex justify-center items-center gap-1.5 font-bold">
                <CiClock1 color="#CCFF00" fontSize={25} /> {workout.duration}
              </p>
              <p className="inline-flex justify-center items-center gap-1.5 font-bold">
                <FaFire color="#CCFF00" /> {workout.caloriesBurned}
              </p>
              <p className="inline-flex justify-center items-center gap-1.5 font-bold">
                <CiStar color="#CCFF00" /> {workout.rating}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-2 items-center cursor-pointer">
        <Link
          href={`/workouts/${workout.id}`}
          className="border border-[#374151] px-4 py-2 rounded-full font-bold"
        >
          View Details
        </Link>
        {today && (
          <p
            className="text-black font-bold bg-[#CCFF00] inline-flex gap-1 items-center px-4 py-2 rounded-full"
            onClick={() => {
              if (done) return;
              setDone(true);
              toast.success("Marked workout as done!", {
                position: "bottom-right",
              });
            }}
          >
            <TiTick /> {!done ? "Mark As Done" : "Marked As Done"}
          </p>
        )}
        <p
          className="hover:text-red-600"
          onClick={() => {
            if (today) {
              setTodaysPlans(
                todaysPlans.filter((plan) => plan.id !== workout.id),
              );
            } else {
              setSaved(saved.filter((plan) => plan.id !== workout.id));
            }
            toast.success("Removed the workout", {
              position: "bottom-right",
              theme: "dark",
            });
          }}
        >
          X
        </p>
      </div>
    </div>
  );
};

export default Card;
