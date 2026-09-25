'use client';
import { IWorkout } from "@/type";
import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";

interface WorkoutContextType  {
    saved: IWorkout[],
    setSaved: Dispatch<SetStateAction<IWorkout[]>>
    todaysPlans: IWorkout[],
    setTodaysPlans: Dispatch<SetStateAction<IWorkout[]>>
}

export const WorkoutContext = createContext<WorkoutContextType>({} as WorkoutContextType);

const WorkoutProvider = ({children}: {children: ReactNode}) => {

    const [todaysPlans, setTodaysPlans] = useState<IWorkout[]>([]);
    const [saved, setSaved] = useState<IWorkout[]>([]);
    const data = {saved, setSaved, todaysPlans, setTodaysPlans};
    return (
        <WorkoutContext.Provider value={data}>
            {children}
        </WorkoutContext.Provider>
    );
};

export default WorkoutProvider;