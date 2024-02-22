import { Outlet } from "react-router-dom";

import Bottombar from "@/components/shared/Bottombar";
import LeftSidebar from "@/components/shared/LeftSidebar";
import Header from "@/components/shared/Header";

const RootLayout = () => {
  return (
    <div className="w-full md:flex">
      <Header />
      <LeftSidebar />

      <section className="bg-white flex flex-1 h-full">
        <Outlet />
      </section>

      <Bottombar />
    </div>
  );
};

export default RootLayout;
