import Navbar from "@/components/Navbar";
import { ModeToggle } from "@/components/ui/mode-toggle";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="dark:bg-slate-950 bg-slate-200 h-screen w-screen">
        <Navbar/>
      </div>
    </>
  );
}
