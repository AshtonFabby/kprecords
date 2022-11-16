import Head from "next/head";
import Image from "next/image";
import { Icon } from "@iconify/react";
import AboutComp from "./components/AboutComp";
import Values from "./components/Value";

import { useState } from "react";
import Footer from "./components/Footer";

export default function Home() {
  const [aboutImage, setAboutImage] = useState("/images/mission.png");
  const [aboutText, setAboutText] = useState(
    "sermos um grupo que investe no capital humano e altamente competitivo que actue de forma abrangente no ramo musical, através de um portfólio de produtos de alta qualidade."
  );

  const changeVission = () => {
    setAboutImage("/images/mission-03.png");

    setAboutText(
      "Ser uma produtora de referência em Angola e além fronteiras, proporcionando experiências únicas e uma gama de produtos e serviços de excelência."
    );
  };
  const changeValues = () => {
    setAboutImage("/images/mission.png");

    setAboutText(
      "01. Paixão e Fé, 02. Integridade, 03 Autenticidade, 04 Criatividade, 05 trabalho em equipa, _________"
    );
  };
  const changeMission = () => {
    setAboutImage("/images/mission-02.png");

    const text2 =
      "sermos um grupo que investe no capital humano e altamente competitivo que actue de forma abrangente no ramo musical, através de um portfólio de produtos de alta qualidade.";
    setAboutText(
      "sermos um grupo que investe no capital humano e altamente competitivo que actue de forma abrangente no ramo musical, através de um portfólio de produtos de alta qualidade."
    );
  };
  return (
    <div className="">
      <Head>
        <title>KP Records: Home</title>
        <meta name="description" content="Transformando Sonhos em realidade" />
        <link rel="icon" href="/images/logo.png" />
      </Head>

      <main className="">
        <div className="hero bg-[url('/images/hela-mobile.png')] sm:bg-[url('/images/hela.png')] bg-no-repeat max-sm:bg-cover sm:bg-right flex flex-col justify-center h-[60vh]">
          <div className=" w-max container">
            <div className=" w-max font-bebas border-[3px] border-accent text-accent px-5 py-2 text-xl uppercase">
              #artista
            </div>
            <h2 className=" font-bebas uppercase text-4xl sm:text-6xl  2xl:text-8xl mt-10">
              Hélia Sandra <br />
              Lançamentos: Mais Tempero
            </h2>

            <div className="links mt-10 md:flex justify-between ">
              <div className=" w-max font-bebas border-[3px] text-accent border-accent px-5 py-2 text-xl uppercase mt-5">
                fala com o agente
              </div>

              <div className=" w-max font-bebas text-xl uppercase text-accent flex gap-5 items-center mt-10 md:mt-0">
                <p>Sobre o Artista</p>

                {/* <Icon
                icon="ant-design:arrow-right-outlined"
                className=" cursor-pointer"
              /> */}

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
        <div className="about hidden pt-12 lg:flex px-20">
          <div className="left w-1/2">
            <Image src={aboutImage} height={416} width={750} alt="Mission" />
          </div>
          <div className="right w-1/2 text-right flex items-center ml-5">
            <div>
              <h1 className="ppercase">sobre nós</h1>

              <div className=" flex flex-col gap-2 justify-end items-end">
                <button onClick={changeMission}>
                  <h2 className=" w-full uppercase text-6xl font-bebas hover:text-accent duration-300 ">
                    nossa MISSÃO
                  </h2>
                </button>
                <button onClick={changeVission}>
                  <h2 className=" w-full uppercase text-6xl font-bebas hover:text-accent duration-300">
                    nossa VISÃO
                  </h2>
                </button>
                <button onClick={changeValues}>
                  <h2 className=" w-full uppercase text-6xl font-bebas hover:text-accent duration-300">
                    Nossos Valores
                  </h2>
                </button>
              </div>
              <p className=" w-full h-20">{aboutText}</p>
            </div>
          </div>
        </div>
        <div className="about container lg:hidden mt-10">
          <h1 className=" ppercase">sobre nós</h1>
          <AboutComp
            image="/images/mission.png"
            title="nossa MISSÃO"
            content="sermos um grupo que investe no capital humano e altamente competitivo
              que actue de forma abrangente no ramo musical, através de um portfólio
              de produtos de alta qualidade."
          />
          <AboutComp
            image="/images/mission.png"
            title="nossa VISÃO"
            content="Ser uma produtora de referência em
            Angola e além fronteiras,
            proporcionando experiências únicas e
            uma gama de produtos e
            serviços de excelência."
          />
          <div className="values flex flex-col gap-5">
            <h2 className="uppercase text-4xl font-bebas mt-5">
              Nossos Valores
            </h2>
            <Values
              number="01."
              title="Paixão e Fe"
              content="fazer o que se gosta e gostar do
                que se faz, acreditando sempre
                que Deus vai fazer acontecer"
            />
            <Values
              number="02."
              title="Integridade"
              content="permanecer inteiramente
              verdadeiros aos objectivos e
              propósitos da produtora"
            />
            <Values
              number="03."
              title="Autenticidade"
              content="velamos pela originalidade dos
              nossos produtos"
            />
            <Values
              number="04."
              title="Criatividade"
              content="imaginação sem limites"
            />
            <Values
              number="05."
              title="trabalho em equip"
              content="juntos somos mais fortes e
              vamos mais longe"
            />
          </div>
        </div>
        <div className="band cf flex items-center flex-col-reverse gap-3 lg:flex-row mt-10 bg-[url(/images/band-bg.png)] bg-cover py-12 ">
          <div className="content">
            <h1 className="">Banda Kompasso</h1>
            <p className=" mt-3 text-justify">
              Criada por Neves em 2019 composta por 6 integrantes atualmente,
              anteriormente composta por 8 elementos teve o seu nome sugerido
              pelo agente Mauro Lima, teve sua primeira apresentação em 2019
              logo após começou a receber seus trabalhos mais profissionais, já
              tocou com cantores conceituados como Walter Ananás, Lil Saint,
              Anna Joyce, CEF tanzy, Cristo, Conde, Euclides da Lomba, tocaram
              em eventos como Canta e encanta 2º edição em 2020, teve seu
              primeiro contrato em 2021 com Unidade Africana, A Banda é formada
              por estudantes de Engenharia e professores.
            </p>
          </div>
          <Image
            src="/images/band.png"
            height={318}
            width={528}
            alt="band logo"
          />
        </div>
        <div className=" cf mt-16 lg:grid grid-cols-12">
          <div className="left col-span-7">
            <h1>Canta e ENCANTA </h1>
            <p>
              Inicialmente como um projecto social ficado apenas em ajudar
              grupos pequenos com bens de primeira necessidade, criado por Mauro
              Lima (actual Director para a Área de Agenciamento), foi ganhando
              consistência com a integração de novos talentos (cantores) na
              altura conhecidos em Viana, que ajudavam na sensibilização da
              população para a recolha dos bens.
              <br />
              <br /> Com a aderência de mais e mais cantores, o fundador
              resolver agenciar os mesmos e durante este processo cresceu o
              desejo de abrir uma produtora que daria continuidade ao projecto
              social de forma mais abrangente e diversificada; assim nasceu aos
              20 de Agosto de 2017, a KP Records.
              <br />
              <br /> Kp Records “knowledge Palace” ou Palácio do Conhecimento é
              acima de tudo uma escola de capacitação e transformação
              de Capital Humano.
            </p>
          </div>

          <Image
            className=" col-span-5"
            src="/images/band-02.png"
            height={409}
            width={503}
            alt="kp something"
          />
        </div>
        <div className="cf mt-[300px] md:mt-[430px] lg:mt-20 ">
          <h1 className=" text-center">Trabalhos Recentes</h1>
          <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5  justify-evenly gap-5 mt-5 ">
            <Image
              src="/images/album.png"
              height={258}
              width={258}
              alt="recent"
            />
            <Image
              src="/images/album-02.png"
              height={258}
              width={258}
              alt="recent"
            />
            <Image
              src="/images/album-03.png"
              height={258}
              width={258}
              alt="recent"
            />
            <Image
              src="/images/album-04.png"
              height={258}
              width={258}
              alt="recent"
            />
            <Image
              src="/images/album.png"
              height={258}
              width={258}
              alt="recent"
            />
          </div>
        </div>
      </main>
    </div>
  );
}
