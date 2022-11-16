import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="cf mt-16 ">
      <div className="toptop lg:flex justify-between gap-10">
        <div className="top lg:w-1/2">
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
          <div className="nav grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 mt-3">
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
            <Link href="/contacts">
              <p className=" hover:text-accent duration-300">Contactos</p>
            </Link>
          </div>
        </div>
        <div className="bottom lg:w-1/2">
          <h1 className=" mt-3 lg:mt-0">CONTACTE-NOS</h1>

          <p className="mt-2">
            <Link href="tel:+244923771656">+244923771656</Link> /{" "}
            <Link href="tel:+244925008917">+244925008917</Link>{" "}
            <a href="mailto:geral@kprecordz.com">geral@kprecordz.com</a>
          </p>

          <div className="links flex gap-6 mt-3">
            <div className="link flex gap-2 items-center">
              <Icon
                icon="uit:facebook-f"
                className=" cursor-pointer text-accent"
              />
              <p className="hidden sm:block">KP Records</p>
            </div>
            <div className="link flex gap-2 items-center">
              <Icon
                icon="bxl:instagram"
                className=" cursor-pointer text-accent"
              />
              <p className="hidden sm:block">kprecords_oficial</p>
            </div>
            <div className="link flex gap-2 items-center">
              <Icon
                icon="ph:youtube-logo-light"
                className=" cursor-pointer text-accent"
              />
              <p className="hidden sm:block">KP Records</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom text-zinc-700 flex justify-between my-10">
        <p>copyrright KP Records 2022</p>
        <Link href="#" className="">
          Designed by Digital Vague
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
