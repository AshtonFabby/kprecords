import Head from "next/head";
import Image from "next/image";
import AboutComp from "./components/AboutComp";
import Values from "./components/Value";

import Link from "next/link";

import { useState } from "react";
import HeroSlider from "./components/slider";

export default function Home() {
  const [aboutImage, setAboutImage] = useState("/images/mission-02.png");
  const [aboutText, setAboutText] = useState(
    "Descobrir, Capacitar e Integrar talentos anónimos no mercado artístico, dando-lhes a oportunidade de desenvolverem as suas habilidades, de modo a realizarem os seus sonhos, agregarem diversidade a cultura e serem agentes de mudança para a sociedade."
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

    setAboutText(
      "Descobrir, Capacitar e Integrar talentos anónimos no mercado artístico, dando-lhes a oportunidade de desenvolverem as suas habilidades, de modo a realizarem os seus sonhos, agregarem diversidade a cultura e serem agentes de mudança para a sociedade."
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
        <HeroSlider />

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
          <h1 className=" uppercase">sobre nós</h1>
          <AboutComp
            image="/images/mission-02.png"
            title="nossa MISSÃO"
            content="Descobrir, Capacitar e Integrar talentos anónimos no mercado artístico, dando-lhes a oportunidade de desenvolverem as suas habilidades, de modo a realizarem os seus sonhos, agregarem diversidade a cultura e serem agentes de mudança para a sociedade."
          />
          <AboutComp
            image="/images/mission-03.png"
            title="nossa VISÃO"
            content="Ser uma produtora de referência em Angola e além fronteiras, proporcionando experiências únicas e uma gama de produtos e serviços de excelência."
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
            <Link href="/band">
              <h1 className="">Banda Kompasso</h1>
            </Link>
            <p className=" mt-3 text-justify">
              Criada em 2019 por Neves, é hoje uma das bandas mais proeminentes
              em Angola. O Nome Kompasso foi sugerido pelo atual agente da banda
              (Mauro Lima ) e significa orientação /direção. A Banda Kompasso
              conta atualmente com 6 (seis) membro; 2 pianistas, 1 baterista, 1
              baixista, 1 guitarrista e 1 percussionista. De entre muitos
              cantores renomados no mercado Angolano, a banda kompasso já tocou
              com Walter Ananás, Euclides da Lomba, Lil Saint, Anna Joyce, CEF
              Tanzy, Cristo, Conde. Em 2021 foi a banda residente no restaurante
              Liga Africana e de la pra cá são só sucessos atrás de sucessos !
            </p>
          </div>
          <Image
            src="/images/band.png"
            height={318}
            width={528}
            alt="band logo"
          />
        </div>
        <div className=" cf mt-16 lg:grid grid-cols-12 gap-10 ">
          <div className="left col-span-7">
            <h1>Canta e ENCANTA </h1>
            <p className=" text-justify">
              É um concurso de Canto anual, organizado pela KP Records no âmbito
              da sua responsabilidade social, onde talentos brutos são
              identificados e os vencedores integrados à produtora.
              <br />
              <br /> No decorrer do concurso todos os participantes são
              acompanhados por professores de canto e directores artísticos, e
              nas galas atuam em companhia da grande Banda Kompasso.
              <br />
              <br /> Mais do que ganhar, o Canta e Encanta oferece uma
              experiência única e transformadora.Uma viagem emocional profunda
              capaz de mudar crenças (consciente ou inconscientemente) e
              alterar comportamentos.
              <br />
              <br /> Deste projecto maravilhosa foram descobertos talentos como
              Hélia Sandra , Daniel Correia , Adolvera Massaqui
              e muitos outros .
            </p>
          </div>

          <Image
            className="mt-10 md:mt-0 col-span-5"
            src="/images/band-02.png"
            height={409}
            width={503}
            alt="kp something"
          />
        </div>
        <div className="cf mt-20 md:mt-[430px] lg:mt-20  ">
          <h1 className=" text-center">Trabalhos Recentes</h1>
          <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 mt-5 ">
            <Link href="https://youtu.be/uZUxCjsvILk" target="_blank">
              <Image
                src="/images/album.png"
                height={258}
                width={258}
                alt="recent"
              />
            </Link>
            <Link href="https://youtu.be/jIaG3UddVSY" target="_blank">
              <Image
                src="/images/album-02.png"
                height={258}
                width={258}
                alt="recent"
              />
            </Link>
            <Link href="https://youtu.be/uZUxCjsvILk" target="_blank">
              <Image
                src="/images/album-03.png"
                height={258}
                width={258}
                alt="recent"
              />
            </Link>
            <Link href="https://youtu.be/uZUxCjsvILk" target="_blank">
              <Image
                src="/images/album-04.png"
                height={258}
                width={258}
                alt="recent"
              />
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
