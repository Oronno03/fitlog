import Box from "@/Components/WorkoutDetailPage/Box";
import Buttons from "@/Components/WorkoutDetailPage/Buttons";
import Instructions from "@/Components/WorkoutDetailPage/Instructions";
import TitleDescriptionAndMuscle from "@/Components/WorkoutDetailPage/TitleDescriptionAndMuscle";
import { IWorkout } from "@/type";
import Image from "next/image";

const fetchWorkOutData = async (id: string): Promise<IWorkout> => {
  const res = await fetch(`https://api.abcz.workers.dev/api/fitlog/${id}`);
  const data = await res.json();
  return data;
};

const WorkoutPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  const workout = await fetchWorkOutData(id);

  return (
    <section className="bg-black">
      <div className="container py-12 flex justify-between mx-auto gap-14">
        <div className="w-[50%] relative rounded-2xl overflow-hidden">
          <Image alt={workout.name} src={workout.image} fill />
        </div>
        <div>
          <TitleDescriptionAndMuscle workout={workout} />
          <Box workout={workout} />
          <Instructions workout={workout} />
          <Buttons workout={workout}/>
        </div>
      </div>
    </section>
  );
};

export default WorkoutPage;
