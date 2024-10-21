"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import { ConnectWallet } from "../ConnectWallet";
import SideDrawer from "../Drawer";

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
  const [isFixed, setIsFixed] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const [scrollProgress, setScrollProgress] = useState<number>(0);

  const sectionRefs = useRef<Record<string, HTMLElement | null>>({
    "#token-price": null,
    "#tokenomics": null,
    "#who-is": null,
    "#future": null,
    "#roadmap": null,
  });

  const drawerToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }

      const scrollPosition =
        window.scrollY / (document.body.scrollHeight - window.innerHeight);
      setScrollProgress(scrollPosition * 100);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(`#${entry.target.id}`);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      root: null,
      rootMargin: "0px",
      threshold: 0.3, // Adjust this threshold to detect the section earlier or later
    });

    Object.values(sectionRefs.current).forEach((section) => {
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleNavItemClick = (hash: string) => {
    setActiveSection(hash);
    window.location.hash = hash; // Scroll to section on click
  };

  return (
    <div className="h-20">
      <header
        className={`text-white body-font  lg:px-20 px-5 flex justify-between items-center transition-all duration-300 ease-in-out ${
          isFixed
            ? "fixed top-0 left-0 w-full py-3 bg-[#FDB93C]/50 backdrop-blur-lg shadow-lg z-50 transform translate-y-0 opacity-100"
            : "transform -translate-y-2 py-6 lg:py-5"
        }`}
      >
        <Link href="/">
          <Image
            src="/Logos/header_logo.webp"
            alt="header_logo"
            width={150}
            height={50}
            className="w-24 lg:w-36"
          />
        </Link>
        <nav className="md:mx-auto hidden lg:flex flex-wrap gap-10 items-center text-base justify-center font-bold">
          <Link
            href="#token-price"
            className={`${
              activeSection === "#token-price"
                ? "text-txt_brown"
                : "text-[#CD6000]"
            }`}
            onClick={() => handleNavItemClick("#token-price")}
          >
            Token Price
          </Link>
          <Link
            href="#tokenomics"
            className={`${
              activeSection === "#tokenomics"
                ? "text-txt_brown"
                : "text-[#CD6000]"
            }`}
            onClick={() => handleNavItemClick("#tokenomics")}
          >
            Tokenomics
          </Link>
          <Link
            href="#who-is"
            className={`${
              activeSection === "#who-is" ? "text-txt_brown" : "text-[#CD6000]"
            }`}
            onClick={() => handleNavItemClick("#who-is")}
          >
            Who is
          </Link>
          <Link
            href="#future"
            className={`${
              activeSection === "#future" ? "text-txt_brown" : "text-[#CD6000]"
            }`}
            onClick={() => handleNavItemClick("#future")}
          >
            Future
          </Link>
          <Link
            href="#roadmap"
            className={`${
              activeSection === "#roadmap" ? "text-txt_brown" : "text-[#CD6000]"
            }`}
            onClick={() => handleNavItemClick("#roadmap")}
          >
            Roadmap
          </Link>
        </nav>

        <div className="flex gap-2">
          <ConnectWallet />
          <button
            onClick={drawerToggle}
            className="lg:hidden px-1 w-fit rounded-lg border-2 border-main_border bg-btn_green"
          >
            <Image
              src="/Vectors/burger.svg"
              alt="wallet"
              width={30}
              height={30}
              className="w-7 h-7"
            />
          </button>
        </div>
      </header>

      {/* Scroll progress line */}
      <div className="fixed top-[67px] lg:top-[78.5px] left-0 w-full h-[3px] bg-transparent z-50">
        <div
          className="h-full bg-[#b37c16] transition-all duration-300 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
      <SideDrawer
        isDrawerOpen={isDrawerOpen}
        drawerToggle={drawerToggle}
        activeSection={activeSection}
        handleNavItemClick={handleNavItemClick}
      />
    </div>
  );
};

export default Header;
