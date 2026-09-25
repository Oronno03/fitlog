import { IWorkout } from "@/type";
import WorkoutCard from "./WorkoutCard";

const fetchWorkouts = async (): Promise<IWorkout[]> => {
  const res = await fetch("https://api.abcz.workers.dev/api/fitlog");
  const data = await res.json();
  return data;
};

const workouts = await fetchWorkouts();

const Workouts = () => {
  return (
    <section className="bg-black pb-16">
      <div className="container mx-auto flex flex-col gap-8">
        <div>
          <h1 className="font-oswald text-[30px] font-bold">THE LIBRARY</h1>
          <p className="font-inter text-[14px] text-[#9CA3AF]">
            Twelve lifts covering every major muscle group
          </p>
        </div>
        <div className="grid grid-cols-3 gap-6">
          {workouts.map((workout) => (
            <WorkoutCard key={workout.id} workout={workout} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Workouts;
