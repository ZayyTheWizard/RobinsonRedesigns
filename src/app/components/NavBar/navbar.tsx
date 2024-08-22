"use client";
import Styles from "./navbar.module.css";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const currPath = usePathname();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <nav className={Styles.nav}>
      <div className={Styles.sub}>
        <Image
          src="/assets/Robinson.png"
          width={55}
          height={55}
          alt="Robinson's Redesigns Logo"
        ></Image>
        <li className={currPath === "/" ? Styles.home : Styles.home}>
          <Link href="/">Home</Link>
        </li>
      </div>

      <div className={Styles.hamburger} onClick={toggleMenu}>
        <div className={Styles.bar}></div>
        <div className={Styles.bar}></div>
        <div className={Styles.bar}></div>
      </div>

      <ul className={`${Styles.menu} ${menuOpen ? Styles.open : Styles.close}`}>
        <li className={currPath === "/PhotoGallery" ? Styles.active : ""}>
          <Link href="/PhotoGallery">Photo Gallery</Link>
        </li>
        <li className={currPath === "/Services" ? Styles.active : ""}>
          <Link href="/Services">Services</Link>
        </li>
        <li className={currPath === "/ContactUs" ? Styles.active : ""}>
          <Link href="/ContactUs">Contact Us</Link>
        </li>
      </ul>
    </nav>
  );
}
