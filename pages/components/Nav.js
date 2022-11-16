import Image from "next/image";
import { Icon } from "@iconify/react";
import Link from "next/link";

import { useState } from "react";

const Nav = () => {
  const [toggle, setToggle] = useState(false);
  const showNav = (e) => {
    const flow = document.querySelector("#overflow");
    const left = document.querySelector("#left");

    if (toggle === false) {
      flow.classList.remove("overflow-hidden");
      left.classList.remove("left-full");

      setToggle(true);
    } else {
      flow.classList.add("overflow-hidden");
      left.classList.add("left-full");

      setToggle(false);
    }
  };

  return (
    <nav className="">
      <div className="h-10 my-8 flex justify-between items-center px-4 sm:px-8 lg:px-16">
        {/* logo goes here */}
        <Link href="/">
          <div className="logo flex items-center gap-3">
            <Image
              src="/images/logo.png"
              width={130}
              height={76}
              alt="kp logo"
              className=" h-9 w-12"
            />
            <h3 className=" text-lg font-semibold sm:hidden lg:block">
              KP Records
            </h3>
          </div>
        </Link>

        {/* middle nav */}

        <div className="middlenav text-lg sm:flex gap-5 hidden ">
          <Link href="/">
            <p className=" hover:text-accent duration-300">Home</p>
          </Link>
          <Link href="/about">
            <p className=" hover:text-accent duration-300">Sobre a KP</p>
          </Link>
          <Link href="/artists">
            <p className=" hover:text-accent duration-300">Artistas</p>
          </Link>
          <Link href="/services">
            <p className=" hover:text-accent duration-300">Serviços</p>
          </Link>
          <Link href="/projects">
            <p className=" hover:text-accent duration-300">Projectos</p>
          </Link>
          <Link href="/contact">
            <p className=" hover:text-accent duration-300">Contactos</p>
          </Link>
        </div>

        {/**socials here */}

        <div className="socials md:flex gap-2 text-accent text-lg hidden ">
          <Icon icon="uit:facebook-f" className=" cursor-pointer" />
          <Icon icon="bxl:instagram" className=" cursor-pointer" />
          <Icon icon="ph:youtube-logo-light" className=" cursor-pointer" />
        </div>

        {/*mobile nav*/}
        <button onClick={showNav} className="burger sm:hidden">
          <svg
            width="20"
            height="15"
            viewBox="0 0 20 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_291_243)">
              <path d="M0 0.5H20" stroke="white" strokeWidth="1.5" />
              <path d="M0 6H20" stroke="white" strokeWidth="1.5" />
              <path d="M0 12H20" stroke="white" strokeWidth="1.5" />
            </g>
            <defs>
              <clipPath id="clip0_291_243">
                <rect width="20" height="15" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </button>
      </div>
      <div id="overflow" className="relative overflow-hidden ">
        <div
          id="left"
          className=" left-full mobile-items absolute z-10 duration-500 ease-out w-full bg-[#141414] sm:hidden "
        >
          <div className="mobile-items sm:hidden text-xl text-right py-10">
            <Link href="/">
              <p className=" hover:bg-accent duration-150 px-7 py-3 w-full">
                Home
              </p>
            </Link>
            <Link href="/about">
              <p className=" hover:bg-accent duration-150 px-7 py-3 w-full">
                Sobre a KP
              </p>
            </Link>
            <Link href="/artists">
              <p className=" hover:bg-accent duration-150 px-7 py-3 w-full">
                Artistas
              </p>
            </Link>
            <Link href="/services">
              <p className=" hover:bg-accent duration-150 px-7 py-3 w-full">
                Serviços
              </p>
            </Link>
            <Link href="/projects">
              <p className=" hover:bg-accent duration-150 px-7 py-3 w-full">
                Projectos
              </p>
            </Link>
            <Link href="/contact">
              <p className=" hover:bg-accent duration-150 px-7 py-3 w-full">
                Contactos
              </p>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
