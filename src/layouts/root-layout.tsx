import { NavBar, SideBar } from "@/components/dashboard";
import { Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <>
      <div className="w-screen h-screen flex bg-white">
        {/* Sidebar to dashboard layout */}
        <SideBar />
        <div className="bg-[--bg-color2] flex-1 flex flex-col">
          {/* Top nabbar layout */}
          <NavBar />
          {/* Content of screen */}
          <div className="flex-1 custom-scrollbar">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}
