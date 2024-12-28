"use client";

import React from "react";
import Link from "next/link";
import classNames from "classnames";
import { usePathname } from "next/navigation";
import styles from "./sidebar.module.css";

export interface NavbarItemProps extends React.ComponentProps<"li"> {
  link: string;
  label: string;
  icon?: React.ReactNode;
}

export default function NavbarItem({
  link,
  label,
  icon,
  ...props
}: NavbarItemProps) {
  const pathname = usePathname();
  const linkClasses = classNames(
    styles.navLink,
    { active: pathname === link },
    props.className
  );

  return (
    <li {...props} className={styles.navItem}>
      <Link href={link} className={linkClasses}>
        {icon}
        {label}
      </Link>
    </li>
  );
}
