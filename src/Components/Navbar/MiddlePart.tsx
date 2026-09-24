'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const MiddlePart = () => {

    const path = usePathname();
    

    return (
        <ul className="flex gap-5">
            <li><Link href={"/"} className={`${path == "/" ? "bg-[#1A2312] text-[#C2F800]": "text-[#9CA3AF]"} px-4 py-2.5 font-semibold font-inter rounded-full`}>Workouts</Link></li>
            <li><Link href={"/my-plans"} className={`${path == "/my-plans" ? "bg-[#1A2312] text-[#C2F800]": "text-[#9CA3AF]"} px-4 py-2.5 font-semibold font-inter rounded-full`}>My plans</Link></li>
        </ul>
    );
};

export default MiddlePart;