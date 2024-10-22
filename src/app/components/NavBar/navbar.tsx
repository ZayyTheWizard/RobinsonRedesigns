"use client";
import Image from "next/image";
import Styles from "./navbar.module.css";
import { routes, routesType } from "./routes";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const renderRoutes = (routes: routesType[]) => {
    return routes.map((route: routesType) => (
      <li key={route.Name}>
        <Link href={route.Route}>{route.Name}</Link>
        {route.Children && route.Children.length > 0 && (
          <ul>{renderRoutes(route.Children)}</ul>
        )}
      </li>
    ));
  };

  return (
    <nav className={scrollPosition > 0 ? Styles.nav : Styles.nav2}>
      <div className={Styles.leftSide}>
        <Link href="/">
          <Image
            src="/assets/RR.png"
            width={45}
            height={45}
            alt=""
            loading="lazy"
            className={Styles.logo}
          ></Image>
        </Link>
        <Link href="/" className={Styles.Title}>
          Robinson&apos;s Redesigns
        </Link>
      </div>

      <div className={Styles.hamburger} onClick={toggleMenu}>
        <div className={Styles.bar}></div>
        <div className={Styles.bar}></div>
        <div className={Styles.bar}></div>
      </div>

      <ul
        className={`${Styles.menu} ${
          menuOpen
            ? scrollPosition > 0
              ? Styles.open
              : Styles.open2
            : Styles.close
        }`}
      >
        {routes.map((route: routesType) => (
          <li key={route.Name}>
            <Link href={route.Route}>{route.Name}</Link>
            {route.Children && route.Children.length > 0 && (
              <ul className={Styles.submenu}>{renderRoutes(route.Children)}</ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}

/*
Main navbar color is under ".Nav" tag
".Nav a" tag turns changes all the Links on navbar color
".bar" changes bar color in mobile mode
*/
