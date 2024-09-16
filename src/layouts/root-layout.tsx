import CustomLoader from "@/components/custom-ui/custom-loader";
import { NavBar, SideBar } from "@/components/dashboard";
import useLoadingStore from "@/store/loadingStore";
import { Outlet } from "react-router-dom";

export default function RootLayout() {
   const isLoading = useLoadingStore((state) => state.isLoading);
   const hideLoading = useLoadingStore((state) => state.hideLoading);
  return (
    <>
      <div className="w-dvw h-dvh absolute top-0 bottom-0 flex bg-white overflow-y-hidden">
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
      <CustomLoader show={isLoading} handleClose={hideLoading} />
    </>
  );
}
