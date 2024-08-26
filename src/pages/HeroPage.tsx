import Navbar from "@/components/Navbar";
import { SidebarDemo } from "@/components/Sidebar";

export default function HeroPage() {
  return (
    <>
      <div className="dark:bg-slate-950 bg-slate-200  w-screen">
        <Navbar/>
      </div>
      <div className="h-screen w-screen">
        <SidebarDemo/>
      </div>
    </>
  );
}
