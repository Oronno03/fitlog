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
    <div className="flex flex-col gap-4 rounded-2xl bg-[#14171E] p-4 md:flex-row md:items-center md:justify-between">
      <div className="flex min-w-0 flex-col gap-4 sm:flex-row sm:items-center">
        <Image
          alt={workout.name}
          src={workout.image}
          width={200}
          height={140}
          className="h-45 w-full rounded-xl object-cover sm:h-35 sm:w-50"
        />

        <div className="flex min-w-0 flex-col gap-2">
          <h1 className="font-oswald text-[21px] font-bold sm:text-[24px]">
            {workout.name}
          </h1>

          <p className="font-inter text-sm text-[#8A92A0] sm:text-[16px]">
            {workout.equipment}
          </p>

          <div className="flex flex-wrap gap-x-4 gap-y-2">
            <p className="inline-flex items-center gap-1.5 font-bold text-sm sm:text-base">
              <CiClock1 color="#CCFF00" fontSize={25} />
              {workout.duration}
            </p>

            <p className="inline-flex items-center gap-1.5 font-bold text-sm sm:text-base">
              <FaFire color="#CCFF00" />
              {workout.caloriesBurned}
            </p>

            <p className="inline-flex items-center gap-1.5 font-bold text-sm sm:text-base">
              <CiStar color="#CCFF00" />
              {workout.rating}
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-2 md:shrink-0">
        <Link
          href={`/workouts/${workout.id}`}
          className="rounded-full border border-[#374151] px-4 py-2 text-sm font-bold sm:text-base"
        >
          View Details
        </Link>

        {today && (
          <button
            type="button"
            className="inline-flex items-center gap-1 rounded-full bg-[#CCFF00] px-4 py-2 text-sm font-bold text-black sm:text-base"
            onClick={() => {
              if (done) return;

              setDone(true);

              toast.success("Marked workout as done!", {
                position: "bottom-right",
              });
            }}
          >
            <TiTick />
            {!done ? "Mark As Done" : "Marked As Done"}
          </button>
        )}

        <button
          type="button"
          className="px-2 py-2 font-bold text-white transition hover:text-red-600"
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
        </button>
      </div>
    </div>
  );
};

export default Card;
