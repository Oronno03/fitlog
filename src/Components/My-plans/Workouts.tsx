"use client";
import { WorkoutContext } from "@/Providers/WorkoutProvider";
import React, { useContext } from "react";
import Card from "./Card";

const Workouts = ({ tab, sort }: { tab: string; sort: string }) => {
  const { saved, todaysPlans } = useContext(WorkoutContext);

  return (
    <div className="flex gap-3 flex-col">
      {tab === "today"
        ? todaysPlans.map((workout) => (
            <Card key={workout.id} workout={workout} today={true} />
          ))
        : saved.map((workout) => (
            <Card key={workout.id} workout={workout} today={false} />
          ))}
    </div>
  );
};

export default Workouts;
