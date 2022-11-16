import { Icon } from "@iconify/react";
import Head from "next/head";
import Image from "next/image";
import TeamCard from "./components/teamcard";
import Values from "./components/Value";

const About = () => {
  return (
    <div className="">
      <Head>
        <title>KP Records: About</title>
        <meta name="description" content="Transformando Sonhos em realidade" />
        <link rel="icon" href="/images/logo.png" />
      </Head>
      <div className="hero cf bg-[url('/images/about-bg.png')] bg-cover bg-no-repeat py-28">
        <h2 className=" font-bebas text-3xl md:text-5xl">
          “Transformando Sonhos em realidade”
        </h2>
      </div>
      <main className=" cf ">
        <div className=" mt-16 lg:grid grid-cols-12">
          <div className="left col-span-7">
            <h1>O NASCIMENTO DA KP</h1>
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
            src="/images/studio.png"
            height={409}
            width={503}
            alt="kp something"
          />
        </div>
        <div className="boxes mt-[300px] md:mt-[420px] lg:mt-12 grid gap-5 md:grid-cols-8 lg:grid-cols-12">
          <div className="box  px-5 pt-40 pb-5 bg-[url('/images/mission-bg.png')] bg-no-repeat bg-cover col-span-4">
            <Icon
              icon="entypo:rocket"
              className=" cursor-pointer text-3xl text-accent"
            />
            <h1 className=" text-white">nossa MISSÃO</h1>
            <p>
              Descobrir, Capacitar e Integrar talentos anónimos no mercado
              artístico, dando-lhes a oportunidade de desenvolverem as suas
              habilidades, de modo a realizarem os seus sonhos, agregarem
              diversidade a cultura e serem agentes de mudança para a sociedade.
            </p>
          </div>
          <div className="box  px-5 pt-40 pb-5 bg-[url('/images/mission-bg.png')] bg-no-repeat bg-cover col-span-4">
            <Icon
              icon="fluent:glasses-28-filled"
              className=" cursor-pointer text-3xl text-accent"
            />
            <h1 className=" text-white">nossa MISSÃO</h1>
            <p>
              Ser uma produtora de referência em Angola e além fronteiras,
              proporcionando experiências únicas e uma gama de produtos e
              serviços de excelência.
            </p>
          </div>
          <div className="box  px-5 pt-40 pb-5 bg-[url('/images/mission-bg.png')] bg-no-repeat bg-cover col-span-4">
            <Icon
              icon="map:gym"
              className=" cursor-pointer text-3xl text-accent"
            />
            <h1 className=" text-white">nossa MISSÃO</h1>
            <p>
              Ser uma produtora de referência em Angola e além fronteiras,
              proporcionando experiências únicas e uma gama de produtos e
              serviços de excelência.
            </p>
          </div>
        </div>
        <div className="values mt-12">
          <div className=" flex justify-center items-center gap-3 m-auto">
            <svg
              width="35"
              height="35"
              viewBox="0 0 35 35"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M26.2501 3.28125C26.2504 3.06465 26.1865 2.8528 26.0663 2.67258C25.9462 2.49235 25.7752 2.35186 25.5751 2.26891C25.375 2.18597 25.1548 2.16431 24.9424 2.20667C24.73 2.24904 24.5349 2.35352 24.3819 2.50688L20.0069 6.88188C19.9054 6.98364 19.825 7.10441 19.7702 7.23728C19.7154 7.37015 19.6873 7.51252 19.6876 7.65625V13.7659L18.0666 15.3847C17.7423 15.2986 17.4027 15.2882 17.0737 15.3541C16.7448 15.42 16.4353 15.5606 16.1693 15.7649C15.9032 15.9693 15.6876 16.232 15.5391 16.5328C15.3905 16.8336 15.313 17.1645 15.3126 17.5C15.3127 17.8113 15.3793 18.119 15.5079 18.4025C15.6364 18.686 15.8241 18.9388 16.0582 19.144C16.2923 19.3492 16.5675 19.5021 16.8654 19.5924C17.1633 19.6827 17.4771 19.7084 17.7858 19.6678C18.0944 19.6271 18.3908 19.521 18.6552 19.3566C18.9196 19.1922 19.1458 18.9733 19.3188 18.7145C19.4917 18.4557 19.6075 18.1629 19.6583 17.8558C19.709 17.5486 19.6937 17.2342 19.6132 16.9334L21.2341 15.3125H27.3438C27.4875 15.3128 27.6299 15.2847 27.7628 15.2299C27.8956 15.1751 28.0164 15.0946 28.1182 14.9931L32.4932 10.6181C32.6465 10.4652 32.751 10.2701 32.7934 10.0577C32.8358 9.84525 32.8141 9.62503 32.7311 9.42493C32.6482 9.22483 32.5077 9.05387 32.3275 8.93371C32.1473 8.81355 31.9354 8.74962 31.7188 8.75H26.2501V3.28125ZM30.5026 15.7019C30.879 18.4257 30.3904 21.1989 29.1059 23.6301C27.8213 26.0613 25.8056 28.0277 23.3434 29.2516C20.8811 30.4756 18.0966 30.8953 15.383 30.4515C12.6693 30.0078 10.1636 28.723 8.21943 26.7785C6.27529 24.8339 4.99097 22.3279 4.54774 19.6142C4.10452 16.9005 4.52479 14.1161 5.74922 11.6541C6.97365 9.19203 8.94041 7.17674 11.3719 5.89265C13.8033 4.60857 16.5766 4.12056 19.3004 4.4975L18.4626 5.33532C18.1575 5.63998 17.9155 6.00177 17.7503 6.40001C17.5852 6.79825 17.5001 7.22513 17.5001 7.65625C15.5531 7.65625 13.65 8.23358 12.0312 9.31523C10.4124 10.3969 9.15066 11.9343 8.40561 13.733C7.66056 15.5317 7.46562 17.5109 7.84545 19.4204C8.22527 21.3299 9.1628 23.0839 10.5395 24.4606C11.9161 25.8373 13.6701 26.7748 15.5796 27.1546C17.4891 27.5344 19.4684 27.3395 21.2671 26.5944C23.0658 25.8494 24.6032 24.5877 25.6848 22.9689C26.7665 21.3501 27.3438 19.4469 27.3438 17.5C28.2137 17.4992 29.0478 17.153 29.6626 16.5375L30.5026 15.7019ZM17.5001 9.84375C15.9858 9.84375 14.5055 10.2928 13.2465 11.1341C11.9874 11.9753 11.0061 13.1711 10.4266 14.5701C9.84712 15.9691 9.6955 17.5085 9.99091 18.9937C10.2863 20.4788 11.0155 21.843 12.0863 22.9138C13.157 23.9845 14.5212 24.7137 16.0064 25.0091C17.4916 25.3046 19.031 25.1529 20.43 24.5735C21.829 23.994 23.0247 23.0127 23.866 21.7536C24.7073 20.4945 25.1563 19.0143 25.1563 17.5H22.1397L21.8663 17.7734C21.8137 18.6138 21.5197 19.4212 21.0196 20.0986C20.5196 20.776 19.8346 21.2948 19.047 21.5925C18.2594 21.8903 17.4026 21.9544 16.5794 21.7773C15.7562 21.6001 15.0016 21.1892 14.4062 20.5938C13.8109 19.9984 13.3999 19.2438 13.2228 18.4207C13.0456 17.5975 13.1098 16.7407 13.4075 15.9531C13.7053 15.1655 14.224 14.4805 14.9015 13.9804C15.5789 13.4803 16.3862 13.1863 17.2266 13.1338L17.5001 12.8603V9.84375Z"
                fill="#FDB200"
              />
            </svg>

            <h1 className=" text-white">Nossos Valores</h1>
          </div>
          <div className=" mt-10 grid md:grid-cols-3 gap-5">
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
        <div className=" mt-12">
          <div className="content grid grid-cols-12 gap-5">
            <div className="left col-span-4 row-span-2">
              <div className=" team-card flex flex-col justify-center items-center gap-3  mb-5">
                <h1 className=" text-6xl text-center mb-5">O TEAM</h1>
                <Image
                  src="/images/chief.png"
                  height={511}
                  width={564}
                  alt=""
                />
                <h2 className=" font-bebas text-5xl mt-5 text-center">
                  Márcia Lima
                </h2>
                <p className="text-center text-3xl">Directora Geral</p>
              </div>
            </div>
            <div className="right grid gap-5 md:grid-cols-2 col-span-8">
              <TeamCard
                image="/images/02.png"
                name="Norberto benjamim"
                position="Director para a Área Artística"
              />
              <TeamCard
                image="/images/03.png"
                name="Analdeth Belginé"
                position="Directora dos Recursos Humanos"
              />
              <TeamCard
                image="/images/04.png"
                name="gilberto lima"
                position="Founder & CEO"
              />
              <TeamCard
                image="/images/05.png"
                name="Mauro Lima"
                position="Director para a Área Artística"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;
