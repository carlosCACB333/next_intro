import React from "react";
import style from "./styles/NavBar.module.css";
import ActiveLink from "./ActiveLink";

const menuItems = [
  {
    text: "Home",
    href: "/",
  },
  {
    text: "About",
    href: "/about",
  },
  {
    text: "Contact",
    href: "/contact",
  },
  {
    text: "Pricing",
    href: "/pricing",
  },
];

const Navbar = () => {
  return (
    <nav className={style.nav}>
      {menuItems.map((el, idx) => (
        <ActiveLink key={el.text + idx} href={el.href} text={el.text} />
      ))}
    </nav>
  );
};

export default Navbar;
