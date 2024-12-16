import React from "react";
import NavbarItem, { NavbarItemProps } from "./navbar-item";

export interface NavbarProps extends React.ComponentProps<"nav"> {
  items: NavbarItemProps[];
}

export default function Navbar({ items }: NavbarProps) {
  return (
    <nav>
      <ul>
        {items.map((props, idx) => (
          <NavbarItem key={idx} {...props} />
        ))}
      </ul>
    </nav>
  );
}
