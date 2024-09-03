import { ReactNode, useEffect } from "react";
import Nav from "./Nav";
import Foter from "./Foter";
import { darkSwitch } from "@/utils/atom";
import { useAtom } from "jotai";

type LayoutPropsType = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutPropsType) => {
  return (
    <>
      <Nav />
      {children}
      <Foter />
    </>
  );
};

export default Layout;
