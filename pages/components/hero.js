import Link from "next/link";

const Hero = (props) => {
  return (
    <div className="hero bg-[url('/images/hela-mobile.png')] sm:bg-[url('/images/hela.png')] bg-no-repeat max-sm:bg-cover sm:bg-right flex flex-col justify-center h-[60vh]">
      <div className=" w-max container">
        <div className=" w-max font-bebas border-[3px] border-accent text-accent px-5 py-2 text-xl uppercase">
          #artista
        </div>
        <h2 className="font-bebas uppercase text-4xl sm:text-6xl  2xl:text-8xl mt-10 text-start">
          {props.name}
        </h2>
        <h2 className=" font-bebas uppercase text-4xl sm:text-6xl  2xl:text-8xl">
          <Link
            target="_blank"
            className=" hover:text-accent"
            href={props.songLink}
          >
            {props.botText}
          </Link>
        </h2>

        <div className="links mt-10 md:flex justify-between ">
          <Link href="https://wa.me/+244923771656" target="_blank">
            <div className=" w-max font-bebas border-[3px] text-accent border-accent px-5 py-2 text-xl uppercase mt-5">
              fala com o agente
            </div>
          </Link>
          <div className=" w-max font-bebas text-xl uppercase text-accent flex gap-5 items-center mt-10 md:mt-0">
            <p>Sobre o Artista</p>

            <svg
              width="34"
              height="17"
              viewBox="0 0 44 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M43.8048 7.92219L37.1164 0.0931178C37.065 0.0334268 36.9995 0 36.9305 0H35.3637C35.2327 0 35.1725 0.219663 35.2716 0.33427L41.4715 7.5927H0.141629C0.0637332 7.5927 0 7.67865 0 7.78371V9.21629C0 9.32135 0.0637332 9.4073 0.141629 9.4073H41.4697L35.2699 16.6657C35.1707 16.7827 35.2309 17 35.3619 17H36.9818C37.0154 17 37.0491 16.9833 37.0739 16.9522L43.8048 9.07781C43.8661 9.00593 43.9152 8.91716 43.9489 8.81748C43.9826 8.7178 44 8.60954 44 8.5C44 8.39046 43.9826 8.2822 43.9489 8.18252C43.9152 8.08284 43.8661 7.99407 43.8048 7.92219Z"
                fill="#FDB200"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
