import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/Components/Navbar/Navbar";
import WorkoutProvider from "@/Providers/WorkoutProvider";
import { ToastContainer } from "react-toastify";
import Footer from "@/Components/Footer/Footer";

export const metadata: Metadata = {
  title: "Fitlog",
  description: "",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-black">
        <WorkoutProvider>
          <ToastContainer />
          <Navbar />
          <div className="mb-2 w-full h-px bg-[#9ca3af25]"></div>
          {children}
          <div className="mt-10 w-full h-px bg-[#9ca3af25]"></div>
          <Footer />
        </WorkoutProvider>
      </body>
    </html>
  );
}
