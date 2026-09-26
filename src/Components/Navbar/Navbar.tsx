"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext, useState } from "react";
import { WorkoutContext } from "@/Providers/WorkoutProvider";

const Navbar = () => {
  const pathname = usePathname();
  const { saved, todaysPlans } = useContext(WorkoutContext);
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="bg-black py-5 md:py-6.5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2.5 font-oswald text-[18px]"
          >
            <Image
              src="/logo.png"
              alt="Fitlog logo"
              width={28}
              height={28}
              className="h-7 w-7"
            />
            Fitlog
          </Link>

          <div className="absolute left-1/2 hidden -translate-x-1/2 md:flex">
            <ul className="flex gap-5">
              <li>
                <Link
                  href="/"
                  className={`rounded-full px-4 py-2.5 font-inter font-semibold ${
                    isActive("/")
                      ? "bg-[#1A2312] text-[#C2F800]"
                      : "text-[#9CA3AF]"
                  }`}
                >
                  Workouts
                </Link>
              </li>

              <li>
                <Link
                  href="/my-plans"
                  className={`rounded-full px-4 py-2.5 font-inter font-semibold ${
                    isActive("/my-plans")
                      ? "bg-[#1A2312] text-[#C2F800]"
                      : "text-[#9CA3AF]"
                  }`}
                >
                  My plans
                </Link>
              </li>
            </ul>
          </div>

          <div className="hidden items-center gap-6 md:flex">
            <Link
              href="/my-plans"
              className="flex items-center gap-2 font-inter"
            >
              <span>Plan</span>
              <span className="flex h-7 w-7 items-center justify-center rounded-full border border-[#C2F800] bg-[#C2F800] font-bold text-black">
                {todaysPlans.length}
              </span>
            </Link>

            <Link
              href="/my-plans"
              className="flex items-center gap-2 font-inter"
            >
              <span>Saved</span>
              <span className="flex h-7 w-7 items-center justify-center rounded-full border border-[#2D313B] font-bold text-white">
                {saved.length}
              </span>
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#2D313B] md:hidden"
            aria-label="Toggle navigation"
            aria-expanded={isOpen}
          >
            <div className="flex flex-col gap-1.5">
              <span
                className={`h-0.5 w-5 bg-white transition-all ${
                  isOpen ? "translate-y-2 rotate-45" : ""
                }`}
              />
              <span
                className={`h-0.5 w-5 bg-white transition-all ${
                  isOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`h-0.5 w-5 bg-white transition-all ${
                  isOpen ? "-translate-y-2 -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </div>

        {isOpen && (
          <div className="mt-5 border-t border-[#2D313B] pt-5 md:hidden">
            <div className="flex flex-col gap-2">
              <Link
                href="/"
                onClick={() => setIsOpen(false)}
                className={`rounded-lg px-4 py-3 text-center font-inter font-semibold ${
                  isActive("/")
                    ? "bg-[#1A2312] text-[#C2F800]"
                    : "text-[#9CA3AF]"
                }`}
              >
                Workouts
              </Link>

              <Link
                href="/my-plans"
                onClick={() => setIsOpen(false)}
                className={`rounded-lg px-4 py-3 text-center font-inter font-semibold ${
                  isActive("/my-plans")
                    ? "bg-[#1A2312] text-[#C2F800]"
                    : "text-[#9CA3AF]"
                }`}
              >
                My plans
              </Link>
            </div>

            <div className="mt-4 flex gap-3 border-t border-[#2D313B] pt-4">
              <Link
                href="/my-plans"
                onClick={() => setIsOpen(false)}
                className="flex flex-1 items-center justify-between rounded-lg border border-[#2D313B] px-4 py-3"
              >
                <span className="font-inter">Plan</span>
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#C2F800] font-bold text-black">
                  {todaysPlans.length}
                </span>
              </Link>

              <Link
                href="/my-plans"
                onClick={() => setIsOpen(false)}
                className="flex flex-1 items-center justify-between rounded-lg border border-[#2D313B] px-4 py-3"
              >
                <span className="font-inter">Saved</span>
                <span className="flex h-7 w-7 items-center justify-center rounded-full border border-[#2D313B] font-bold text-white">
                  {saved.length}
                </span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
