"use client";
import {
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import { ThemeSwitcher } from "./ThemeSwitcher";

export default function Nav() {
  return (
    <Navbar
      shouldHideOnScroll
      className="border-b shadow-sm border-gray-200/50"
    >
      <NavbarContent justify="start">
        <NavbarBrand>
          <Link href="/" className="text-lg font-bold text-inherit">
            Harry Potter
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent justify="end">
        <ThemeSwitcher />
      </NavbarContent>
    </Navbar>
  );
}
