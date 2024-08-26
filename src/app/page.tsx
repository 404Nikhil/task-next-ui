import Navbar from "@/components/Navbar";
import { ModeToggle } from "@/components/ui/mode-toggle";
import Image from "next/image";
import { SidebarDemo } from "@/components/Sidebar";
import HeroPage from "@/pages/HeroPage";

export default function Home() {
  return (
    <>
      <div className="dark:bg-slate-950 bg-slate-200 h-full w-screen">
      <HeroPage/>
      </div>
    </>
  );
}
