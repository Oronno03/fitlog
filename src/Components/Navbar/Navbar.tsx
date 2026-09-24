import Image from "next/image";
import React from "react";
import MiddlePart from "./MiddlePart";
import RightPart from "./RightPart";

const Navbar = () => {
  return (
    <nav className="py-6.5 bg-black">
      <div className="flex justify-between container mx-auto">
        <h1 className="font-oswald text-[18px] flex gap-2.5">
          <Image alt="logo" src={"/logo.png"} width={28} height={28} className="w-7 h-7" />
          Fitlog
        </h1>
        <MiddlePart />
        <RightPart />
      </div>
    </nav>
  );
};

export default Navbar;
