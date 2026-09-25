'use client';
import { WorkoutContext } from "@/Providers/WorkoutProvider";
import Link from "next/link";
import { useContext } from "react";

const RightPart = () => {

    const {saved, todaysPlans} = useContext(WorkoutContext);

    return (
        <div className="flex gap-6">
            <Link href={"/my-plans"} className="flex gap-2">
                <h1>Plan</h1>
                <p className="rounded-full border-solid border border-[#C2F800] bg-[#C2F800] text-black font-bold font-inter w-7 h-7 flex justify-center text-center">{todaysPlans.length}</p>
            </Link>
            <Link href={"/my-plans"} className="flex gap-2">
                <h1>Saved</h1>
                <p className="rounded-full border-solid border border-[#2D313B] w-7 h-7 flex justify-center text-center font-bold font-inter">{saved.length}</p>
            </Link>
        </div>
    );
};

export default RightPart;