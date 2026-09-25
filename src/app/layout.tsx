import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/Components/Navbar/Navbar";
import WorkoutProvider from "@/Providers/WorkoutProvider";
import { ToastContainer } from "react-toastify";

export const metadata: Metadata = {
  title: "Fitlog",
  description: "",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <WorkoutProvider>
          <ToastContainer />
          <Navbar />        
          {children}
        </WorkoutProvider>
      </body>
    </html>
  );
}
