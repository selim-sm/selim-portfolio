import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
import Link from "next/link";
import { useState } from "react";
import Btn from "./Btn";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <Navbar
        onMenuOpenChange={setIsMenuOpen}
        className="flex justify-around items-center w-full py-2 dark:bg-gradient-to-r dark:from-[#040110eb] dark:to-[#060a25]  bg-gradient-to-r from-[#7878d8] to-[#7fece5] text-white"
      >
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="md:invisible"
          />
          <NavbarBrand className="hidden md:flex">
            <Link href={"/"}>
              <img src="/logo.png" alt="" />
            </Link>
          </NavbarBrand>
        </NavbarContent>
        <NavbarBrand className="md:hidden flex justify-center">
          <Link href={"/"}>
            <img src="/logo.png" alt="" />
          </Link>
        </NavbarBrand>
        <NavbarContent className="hidden md:flex" justify="center">
          <Link href={"/#about-a"}>
            <NavbarItem className="hover:text-red-500 font-bold">
              ABOUT
            </NavbarItem>
          </Link>
          <Link href={"/work"}>
            <NavbarItem className="hover:text-red-500 font-bold">
              PROJECT
            </NavbarItem>
          </Link>
          <Link href={"/resume"}>
            <NavbarItem className="hover:text-red-500 font-bold">
              RESUME
            </NavbarItem>
          </Link>
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem>
            <div className="text-white">
              <Btn />
            </div>
          </NavbarItem>
          <NavbarMenu className="pt-5 bg-white/30">
            <Link href={"/#about-a"}>
              <NavbarMenuItem className="hover:text-red-500 font-bold">
                ABOUT
              </NavbarMenuItem>
            </Link>
            <Link href={"/work"}>
              <NavbarMenuItem className="hover:text-red-500 font-bold">
                PROJECT
              </NavbarMenuItem>
            </Link>
            <Link href={"/resume"}>
              <NavbarMenuItem className="hover:text-red-500 font-bold">
                RESUME
              </NavbarMenuItem>
            </Link>
          </NavbarMenu>
        </NavbarContent>
      </Navbar>
    </>
  );
};

export default Nav;
