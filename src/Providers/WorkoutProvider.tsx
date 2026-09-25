"use client";
import { IWorkout } from "@/type";
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";

interface WorkoutContextType {
  saved: IWorkout[];
  setSaved: Dispatch<SetStateAction<IWorkout[]>>;
  todaysPlans: IWorkout[];
  setTodaysPlans: Dispatch<SetStateAction<IWorkout[]>>;
}

export const WorkoutContext = createContext<WorkoutContextType>(
  {} as WorkoutContextType,
);

const WorkoutProvider = ({ children }: { children: ReactNode }) => {
  const [todaysPlans, setTodaysPlans] = useState<IWorkout[]>([]);
  const [saved, setSaved] = useState<IWorkout[]>([]);
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    const lsTodaysPlans = localStorage.getItem("todaysPlans");
    const lsSaved = localStorage.getItem("savedPlans");

    if (lsTodaysPlans) {
      setTodaysPlans(JSON.parse(lsTodaysPlans));
    }

    if (lsSaved) {
      setSaved(JSON.parse(lsSaved));
    }

    setDataLoaded(true);
  }, []);

  useEffect(() => {
    if (!dataLoaded) return;
    localStorage.setItem("todaysPlans", JSON.stringify(todaysPlans));
  }, [todaysPlans, dataLoaded]);
  useEffect(() => {
    if (!dataLoaded) return;
    localStorage.setItem("savedPlans", JSON.stringify(saved));
  }, [saved, dataLoaded]);

  const data = { saved, setSaved, todaysPlans, setTodaysPlans };

  return (
    <WorkoutContext.Provider value={data}>{children}</WorkoutContext.Provider>
  );
};

export default WorkoutProvider;
