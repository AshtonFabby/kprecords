import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const Helia = () => {
  return (
    <main>
      <Head>
        <title>KP Records: Helia Sandra</title>
        <meta name="description" content="Transformando Sonhos em realidade" />
        <link rel="icon" href="/images/logo.png" />
      </Head>
      <div className="cf md:relative">
        <Image
          src="/images/helia-mobile-header.png"
          height={466}
          width={356}
          alt="Helia Sandra"
          className="md:hidden"
        />
        <Image
          src="/images/helia-desktop.png"
          height={552}
          width={671}
          alt="Helia Sandra"
          className=" hidden md:block"
        />
        <div className="text -mt-32 md:absolute md:top-40 md:left-1/2 lg:left-[420px] md:mt-0 md:w-1/2 ">
          <h2 className=" font-bebas text-5xl lg:text-8xl mb-3">
            Hélia Sandra
          </h2>
          <div className="icons flex mt-2 gap-3 text-3xl text-black mb-7">
            <Link
              className=" p-2 bg-accent rounded-full"
              href={
                "https://www.facebook.com/heliasadraofficial?mibextid=LQQJ4d"
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25px"
                height="25px"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5z"
                />
              </svg>
            </Link>
            <Link
              className="p-2 bg-accent rounded-full"
              href={
                "https://instagram.com/helia_sandra_official?igshid=YWJhMjlhZTc="
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25px"
                height="25px"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 256 256"
              >
                <path
                  fill="currentColor"
                  d="M128 80a48 48 0 1 0 48 48a48 48 0 0 0-48-48Zm0 80a32 32 0 1 1 32-32a32.1 32.1 0 0 1-32 32Zm44-132H84a56 56 0 0 0-56 56v88a56 56 0 0 0 56 56h88a56 56 0 0 0 56-56V84a56 56 0 0 0-56-56Zm40 144a40 40 0 0 1-40 40H84a40 40 0 0 1-40-40V84a40 40 0 0 1 40-40h88a40 40 0 0 1 40 40Zm-20-96a12 12 0 1 1-12-12a12 12 0 0 1 12 12Z"
                />
              </svg>
            </Link>
            <Link
              className="p-2 bg-accent rounded-full"
              href={
                "https://www.tiktok.com/@heliasandraofficiall?_t=8YsKyXvcFle&_r=1"
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25px"
                height="25px"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M16.6 5.82s.51.5 0 0A4.278 4.278 0 0 1 15.54 3h-3.09v12.4a2.592 2.592 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6c0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64c0 3.33 2.76 5.7 5.69 5.7c3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3s-1.88.09-3.24-1.48z"
                />
              </svg>
            </Link>
          </div>
          <p>
            Hélia Sandra é uma cantora Angolana, conhecida no mercado pelos seus
            covers onde demonstra a sua versatilidade interpretando músicas de
            diferentes artistas Nacionais e internacionais nos seus diferentes
            estilos musicais. De sua autoria, tem no mercado a música “Mais
            Tempero” disponível em todas as plataformas digitais.
          </p>
        </div>
      </div>
      <div className="cf lg:flex gap-5 lg:mt-10">
        <div className="text lg:w-[530px]">
          <h1 className="mt-10">Sobre a Hélia Sandra</h1>
          <p>
            Hélia Sanda Bunga, filha de Carlos Bunga e de Mária José Sanda,
            nasceu em Luanda aos 20 de Abril de 1999.
            <br />
            <br /> Hélia Sandra é aluna universitária e frequenta o quarto ano
            de Comunicação Social.
            <br />
            <br /> O gosto pela Música surgiu aos 8 anos de idade mas como ainda
            era muito pequena, foi obrigada a se desligar da música. Aos 15 anos
            de idade decidiu levar a música a sério e fazer carreia no ramo
            musical. No princípio a família não apoiava por achar que era algo
            da adolescência.
          </p>
        </div>
        <div className="images mx-auto md:flex gap-3">
          <Image
            src="/images/helia-03.png"
            height={352}
            width={309}
            alt="Helia Sandra"
            className=" mt-5 mx-auto object-contain"
          />
          <Image
            src="/images/helia-02.png"
            height={352}
            width={309}
            alt="Helia Sandra"
            className=" mt-5 mx-auto lg:-mt-10 xl:-mt-20 object-contain"
          />
        </div>
      </div>
      <div className="cf mx-auto mt-5 lg:my-16 ">
        <iframe
          className=" w-full lg:w-8/12 h-[376px] xl:h-[550px] mx-auto"
          src="https://www.youtube.com/embed/uZUxCjsvILk"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullscreen
        ></iframe>
      </div>
      <div className="cf mt-10 xl:flex flex-row-reverse">
        <div className="text xl:w-5/12 my-auto">
          <h1>INÍCIO DE CARREIRA</h1>
          <p className=" mt-5 ">
            Em 2020 participou do concurso Canta e Encanta ( um projecto anual
            da actual produtora -Kp Records que visa descobrir novos talentos) e
            foi a vencedora da segunda edição.
            <br />
            <br /> Após vencer o concurso, foi integrada à produtora onde
            começou as suas primeiras apresentações junto da banda Kompasso, em
            bares, restaurantes e atividades diversas.
            <br />
            <br /> Com o tempo começou o investimento na carreia a solo e lançou
            a sua primeira Música em Maio de 2022. Fez o seu primeiro cover em
            Agosto de 2022 onde interpretou a música Monarquia de Ivandro. No
            seu segundo cover fez uma seleção de músicas guetho zouk, que
            viralizou no Tik Tok.
          </p>
        </div>
        <Image
          src="/images/mission-02.png"
          height={410}
          width={750}
          alt="Helia Sandra"
          className=" mt-5 mx-auto object-contain"
        />
      </div>
      <div className="cf mt-10">
        <h1 className=" text-center ">covers</h1>
        <div className="covers grid grid-cols-2 md:grid-cols-4  gap-2 mt-5 mx-auto xl:w-[1000px]">
          <Link href="https://youtu.be/5aNWFCCM7Ho" target="_blank">
            <Image
              src="/images/cover/art-01.jpg"
              height={310}
              width={310}
              alt="cover"
            />
          </Link>
          <Link href="https://youtu.be/cDB-SMTgdj8" target="_blank">
            <Image
              src="/images/cover/art-02.jpg"
              height={310}
              width={310}
              alt="cover"
            />
          </Link>
          <Link href="https://youtu.be/sHMHMPc8lYc" target="_blank">
            <Image
              src="/images/cover/art-03.jpg"
              height={310}
              width={310}
              alt="cover"
            />
          </Link>
          <Link href="https://youtu.be/AIE5uPEH0fU" target="_blank">
            <Image
              src="/images/cover/art-04.jpg"
              height={310}
              width={310}
              alt="cover"
            />
          </Link>
        </div>
      </div>
      <h1 className=" mt-10 mb-5 text-center">GALERIA</h1>
      <div className="cf mx-auto grid grid-cols-2 md:grid-cols-3 gap-2 md:w-[751px]  lg:w-[951px] ">
        <Image
          src="/images/gallery/helia-01.png"
          height={345}
          width={345}
          alt="cover"
        />
        <Image
          src="/images/gallery/helia-02.png"
          height={345}
          width={345}
          alt="cover"
        />
        <Image
          src="/images/gallery/helia-03.png"
          height={345}
          width={345}
          alt="cover"
        />
        <Image
          src="/images/gallery/helia-04.png"
          height={345}
          width={345}
          alt="cover"
        />
        <Image
          src="/images/gallery/helia-05.png"
          height={345}
          width={345}
          alt="cover"
        />
        <Image
          src="/images/gallery/helia-06.png"
          height={345}
          width={345}
          alt="cover"
        />
        <Image
          src="/images/gallery/helia-07.png"
          height={345}
          width={345}
          alt="cover"
        />
        <Image
          src="/images/gallery/helia-08.png"
          height={345}
          width={345}
          alt="cover"
        />
        <Image
          src="/images/gallery/helia-09.png"
          height={345}
          width={345}
          alt="cover"
        />
      </div>
    </main>
  );
};

export default Helia;
