"use client";
import Counters from "@/Components/My-plans/Counters";
import EmptyWorkouts from "@/Components/My-plans/EmptyWorkouts";
import Title from "@/Components/My-plans/Title";
import { WorkoutContext } from "@/Providers/WorkoutProvider";
import React, { useContext, useState } from "react";

const Page = () => {
  const [tab, setTab] = useState<"today" | "saved">("today");
  const [sort, setSort] = useState<"duration" | "calories" | "rating">(
    "duration",
  );
  const { saved, todaysPlans } = useContext(WorkoutContext);

  return (
    <section className="bg-black pt-10">
      <div className="container mx-auto flex flex-col gap-6">
        <Title />
        <Counters tab={tab} />
        <div className="flex justify-between">
          <div className="rounded-xl flex justify-between items-center bg-[#151921] p-2 gap-1">
            <p
              onClick={() => setTab("today")}
              className={`cursor-pointer px-2 py-2 font-inter rounded-lg ${tab === "today" ? "px-4 py-2 font-bold text-white bg-[#1F242D] border border-[#2B303D]" : ""}`}
            >
              Today&apos;s Plan
            </p>
            <p
              onClick={() => setTab("saved")}
              className={`cursor-pointer px-2 py-2 font-inter rounded-lg ${tab === "saved" ? "px-9 py-2 font-bold text-white bg-[#1F242D] border border-[#2B303D]" : ""}`}
            >
              Saved
            </p>
          </div>
          <div className="flex items-center justify-center gap-3">
            <h1>Sort By</h1>
            <div className="relative inline-block">
              <select
                name=""
                id=""
                className="cursor-pointer appearance-none bg-[#13161D] px-3 py-2 pr-10 rounded-lg text-white"
                value={sort}
                onChange={(e) =>
                  setSort(e.target.value as "duration" | "rating" | "calories")
                }
              >
                <option value="duration">Duration</option>
                <option value="calories">Calories</option>
                <option value="rating">Rating</option>
              </select>

              <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                ▼
              </span>
            </div>
          </div>
        </div>

        {tab === "saved" ? (
          saved.length < 1 ? (
            <EmptyWorkouts />
          ) : (
            ""
          )
        ) : todaysPlans.length < 1 ? (
          <EmptyWorkouts />
        ) : (
          ""
        )}
      </div>
    </section>
  );
};

export default Page;
