import Link from "next/link";

const EmptyWorkouts = () => {
    return (
        <div className="flex justify-center items-center rounded-xl bg-[rgba(17,19,23,0.5)] border border-dashed border-[rgba(255,255,255,0.5)] px-4 py-24.25">
            <div className="flex flex-col items-center">
                <h1 className="text-[20px] font-oswald font-bold text-white">NOTHING HERE YET</h1>
                <p className="text-[#A1A1AA] font-inter text-[12px] mb-6">Browse the library and add a lift to get today moving.</p>
                <Link href={"/#library"} className="rounded-full bg-[#C2F10D] text-black px-6 py-2.5 font-bold cursor-pointer"><button>Go to workouts</button></Link>
            </div>
        </div>
    );
};

export default EmptyWorkouts;