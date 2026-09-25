import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black">
      <div className="container mx-auto flex justify-between py-6">
        <h1 className="font-oswald text-[18px] flex gap-2.5">
          <Image
            alt="logo"
            src={"/logo.png"}
            width={28}
            height={28}
            className="w-7 h-7"
          />
          Fitlog
        </h1>
        <p className="font-inter text-[#8A92A0]">© 2026 FitLog — Workout Library. Train hard, log honest.</p>
      </div>
    </footer>
  );
};

export default Footer;
