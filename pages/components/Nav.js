import Image from "next/image";
import { Icon } from "@iconify/react";
import Link from "next/link";

import { useRouter } from "next/router";

import { useState } from "react";

const Nav = () => {
  const [ishown, setIsShown] = useState(false);
  const [ishown2, setIsShown2] = useState(false);
  const [toggle, setToggle] = useState(false);
  const router = useRouter();
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
    <nav className=" z-50 ">
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
          <Link
            href="/"
            className={
              router.pathname == "/" ? " border-b-2 border-accent" : ""
            }
          >
            <p className=" hover:text-accent duration-300">Home</p>
          </Link>
          <Link
            className={
              router.pathname == "/about" ? " border-b-2 border-accent" : ""
            }
            href="/about"
          >
            <p className=" hover:text-accent duration-300">Sobre a KP</p>
          </Link>
          <button
            className={
              router.pathname == "/artists" ? " border-b-2 border-accent" : ""
            }
            onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}
          >
            <p className=" hover:text-accent duration-300 flex items-center gap-1">
              Artistas
              <Icon
                icon="material-symbols:keyboard-arrow-down"
                className=" cursor-pointer"
              />
            </p>
            {ishown && (
              <div className=" absolute z-50 bg-[#0c0c0c] grid gap-4  p-3">
                <Link
                  className={
                    router.pathname == "/artists"
                      ? " border-b-2 border-accent"
                      : ""
                  }
                  href="/artists"
                >
                  <p className=" hover:text-accent">Cantores</p>
                </Link>
                <Link
                  className={
                    router.pathname == "/band"
                      ? " border-b-2 border-accent"
                      : ""
                  }
                  href="/band "
                >
                  <p className=" hover:text-accent">Banda Kompasso</p>
                </Link>
              </div>
            )}
          </button>
          <button
            className={
              router.pathname == "/services" ? " border-b-2 border-accent" : ""
            }
            onMouseEnter={() => setIsShown2(true)}
            onMouseLeave={() => setIsShown2(false)}
          >
            <p className=" hover:text-accent duration-300 flex items-center gap-1">
              Serviços
              <Icon
                icon="material-symbols:keyboard-arrow-down"
                className=" cursor-pointer"
              />
            </p>
            {ishown2 && (
              <div className=" -ml-20 absolute z-50 bg-[#0c0c0c] grid gap-4  p-3">
                <Link href="/services#beats">
                  <p className=" hover:text-accent">Produção de Beats</p>
                </Link>
                <Link href="/services#writing">
                  <p className=" hover:text-accent">Composição de Letras</p>
                </Link>
                <Link href="/services#sing">
                  <p className=" hover:text-accent">Aulas de canto</p>
                </Link>
                <Link href="/services#da">
                  <p className=" hover:text-accent">Direção Artística</p>
                </Link>
                <Link href="/services#vid">
                  <p className=" hover:text-accent">
                    Fotografia e Produção de Videoclipes
                  </p>
                </Link>
                <Link href="/services#instrument">
                  <p className=" hover:text-accent">Aulas de Instrumentos</p>
                </Link>
              </div>
            )}
          </button>
          <Link
            className={
              router.pathname == "/projects" ? " border-b-2 border-accent" : ""
            }
            href="/projects"
          >
            <p className=" hover:text-accent duration-300">Projectos</p>
          </Link>
          <Link
            className={
              router.pathname == "/contact" ? " border-b-2 border-accent" : ""
            }
            href="/contact"
          >
            <p className=" hover:text-accent duration-300">Contactos</p>
          </Link>
        </div>

        {/**socials here */}

        <div className="socials md:flex gap-2 text-accent text-lg hidden ">
          <Link
            href="https://www.facebook.com/kprecordscompany?mibextid=LQQJ4d"
            target="_blank"
          >
            <Icon icon="uit:facebook-f" className=" cursor-pointer" />
          </Link>
          <Link href="https://instagram.com/kprecords_oficial" target="_blank">
            <Icon icon="bxl:instagram" className=" cursor-pointer" />
          </Link>
          <Link
            href="https://youtube.com/@kprecordsheliasandra"
            target="_blank"
          >
            <Icon icon="ph:youtube-logo-light" className=" cursor-pointer" />
          </Link>
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
