import { ReactNode } from "react";
import NavBar from "../../components/navbar/NavBar";
import SideBar from "../../components/sidebar/SideBar";
import "./DashboardLayout.scss";

type LayoutPropTypes = {
  children?: ReactNode;
};

const DashboardLayout = ({ children }: LayoutPropTypes) => {
  return (
    <>
      <NavBar />
      <SideBar />
      <main className="main">{children}</main>
    </>
  );
};

export default DashboardLayout;
