import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className="bg-black pt-12 pb-16">
      <div className="container md:grid md:grid-cols-2 mx-auto p-14 bg-[#15171D] rounded-2xl">
        <div className="flex flex-col gap-5">
          <p className="font-bold font-inter text-[#C2F800] text-[11px] tracking-[1.1px]">WORKOUT LIBRARY</p>
          <h1 className="font-oswald font-extrabold text-[60px] tracking-[-1.5px]">TRAIN WITH INTENT. LOG EVERY SET.</h1>
          <p className="font-inter text-[16px] text-[#9CA3AF]">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into today&apos;s plan, and watch the week&apos;s work add up.
          </p>
          <a href="#library"><button className="cursor-pointer bg-[#C2F800] max-w-50 rounded-md font-bold font-inter text-black py-3 px-6">Browse Workouts</button></a>
        </div>
        <Image
          alt={"Banner Image"}
          src={"/banner.png"}
          height={350}
          width={350}
          className="justify-self-center md:mt-0 mt-5 md:justify-self-end"
        />
      </div>
    </section>
  );
};

export default Hero;
