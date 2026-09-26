"use client";

import Counters from "@/Components/My-plans/Counters";
import EmptyWorkouts from "@/Components/My-plans/EmptyWorkouts";
import Title from "@/Components/My-plans/Title";
import Workouts from "@/Components/My-plans/Workouts";
import { WorkoutContext } from "@/Providers/WorkoutProvider";
import React, { useContext, useState } from "react";

const Page = () => {
  const [tab, setTab] = useState<"today" | "saved">("today");

  const [sort, setSort] = useState<
    "duration" | "calories" | "rating"
  >("duration");

  const { saved, todaysPlans } = useContext(WorkoutContext);

  return (
    <section className="bg-black px-4 pt-8 pb-16 sm:px-6 md:pt-10 lg:px-8">
      <div className="container mx-auto flex flex-col gap-6">
        <Title />

        <Counters tab={tab} />

        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          
          <div className="flex w-fit items-center gap-1 rounded-xl bg-[#151921] p-2">
            <button
              onClick={() => setTab("today")}
              className={`rounded-lg px-4 py-2 font-inter text-sm transition ${
                tab === "today"
                  ? "border border-[#2B303D] bg-[#1F242D] font-bold text-white"
                  : "text-[#9CA3AF]"
              }`}
            >
              Today&apos;s Plan
            </button>

            <button
              onClick={() => setTab("saved")}
              className={`rounded-lg px-4 py-2 font-inter text-sm transition ${
                tab === "saved"
                  ? "border border-[#2B303D] bg-[#1F242D] font-bold text-white"
                  : "text-[#9CA3AF]"
              }`}
            >
              Saved
            </button>
          </div>

          <div className="flex items-center gap-3">
            <h1 className="font-inter text-sm text-[#9CA3AF]">
              Sort By
            </h1>

            <div className="relative inline-block">
              <select
                name="sort"
                id="sort"
                className="cursor-pointer appearance-none rounded-lg bg-[#13161D] px-3 py-2 pr-10 font-inter text-sm text-white outline-none"
                value={sort}
                onChange={(e) =>
                  setSort(
                    e.target.value as
                      | "duration"
                      | "rating"
                      | "calories"
                  )
                }
              >
                <option value="duration">Duration</option>
                <option value="calories">Calories</option>
                <option value="rating">Rating</option>
              </select>

              <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-sm text-gray-400">
                ▼
              </span>
            </div>
          </div>
        </div>

        {tab === "saved" ? (
          saved.length < 1 ? (
            <EmptyWorkouts />
          ) : (
            <Workouts tab={tab} sort={sort} />
          )
        ) : todaysPlans.length < 1 ? (
          <EmptyWorkouts />
        ) : (
          <Workouts tab={tab} sort={sort} />
        )}
      </div>
    </section>
  );
};

export default Page;