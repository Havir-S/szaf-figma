import Image from "next/image";
import Link from "next/link";
import React from "react";
import NavHamburgerSvg from "./NavHamburgerSvg";

function Nav() {
  return (
    <div className=" sticky top-0 left-0 mx-auto w-full max-w-[1440px] h-[120px] flex justify-between items-center md:justify-start px-4 sm:px-12   md:px-4 lg:px-20 gap-3 gradient-dark">
      <Link href="/" className="w-[172px] h-[68px] relative" tabIndex={0}>
        <Image
          src="/navLogo.png"
          fill
          className="object-contain"
          sizes="172px, 68px"
          alt="logo"
        />
      </Link>
      <div className="hidden md:block">
        <Link href="/" tabIndex={1}>
          <button className="nav-link hover-main">O Firmie</button>
        </Link>
        <Link href="/" tabIndex={2}>
          <button className="nav-link hover-main">Kontakt</button>
        </Link>
        <Link href="/" tabIndex={3}>
          <button className="nav-link hover-main">Projekty</button>
        </Link>
        <Link href="/" tabIndex={4}>
          <button className="nav-link hover-main">Pytania</button>
        </Link>
        <Link href="/" tabIndex={5}>
          <button className="nav-link hover-main">Lokalizacja</button>
        </Link>
      </div>
      <Link href="/" tabIndex={0}>
        <div className="block md:hidden hover-main p-3">
          {/* <Image src="/hamburger-szaf.svg" width={35} height={30} alt="" /> */}
          <NavHamburgerSvg />
        </div>
      </Link>
    </div>
  );
}

export default Nav;
