import Hero from "@/Components/Hero/Hero";
import Workouts from "@/Components/Workouts/Workouts";
import { Suspense } from "react";

const Skeleton = () => {
  return (
    <div className="mx-auto flex justify-center">
      <div className="flex w-52 flex-col gap-4">
        <div className="skeleton h-32 w-full"></div>
        <div className="skeleton h-4 w-28"></div>
        <div className="skeleton h-4 w-full"></div>
        <div className="skeleton h-4 w-full"></div>
      </div>
    </div>
  );
};

const Home = () => {
  return (
    <div>
      <Hero />
      <Suspense fallback={<Skeleton />}>
        <Workouts />
      </Suspense>
    </div>
  );
};

export default Home;
