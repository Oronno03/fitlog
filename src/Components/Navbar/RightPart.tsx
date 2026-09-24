const RightPart = () => {
    return (
        <div className="flex gap-6">
            <div className="flex gap-2">
                <h1>Plan</h1>
                <p className="rounded-full border-solid border border-[#C2F800] bg-[#C2F800] text-black font-bold font-inter w-7 h-7 flex justify-center text-center">0</p>
            </div>
            <div className="flex gap-2">
                <h1>Saved</h1>
                <p className="rounded-full border-solid border border-[#2D313B] w-7 h-7 flex justify-center text-center font-bold font-inter">0</p>
            </div>
        </div>
    );
};

export default RightPart;