import Head from "next/head";
import Image from "next/image";

const Services = () => {
  return (
    <main>
      <Head>
        <title>KP Records: Services</title>
        <meta name="description" content="Transformando Sonhos em realidade" />
        <link rel="icon" href="/images/logo.png" />
      </Head>
      <div className="hero cf bg-[url('/images/service-bg.png')] py-28">
        <h2 className=" font-bebas text-3xl md:text-5xl text-center">
          “Serviços”
        </h2>
        <p className=" text-center">
          Oferecemos serviços ao seu nível, pensamos na qualidade e na
          satisfação do cliente em primeiro lugar.
        </p>
      </div>
      <section
        id="beats"
        className="  cf mt-12 lg:grid grid-cols-12 gap-5 items-center "
      >
        <div className=" col-span-8">
          <h1>Produção de Beats</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh
            facilisi ullamcorper leo condimentum habitasse praesent sed maecenas
            egestas. Diam ultricies quam sit vestibulum. Facilisis id purus
            velit pretium ornare. Adipiscing faucibus nunc tincidunt dictum
            pharetra egestas sit nunc. Tristique vivamus lacinia non cras erat
            lectus congue nisi, quis. Lorem risus sodales a malesuada. Massa sed
            sed pellentesque arcu commodo aliquam, sit.{" "}
          </p>
        </div>
        <Image
          width={315}
          height={417}
          src={"/images/service-01.png"}
          alt="studio"
          className=" mt-5 col-span-4 w-full"
        />
      </section>
      <section
        id="writing"
        className=" cf mt-12 lg:grid grid-cols-12 gap-5 items-center "
      >
        <div className=" col-span-9">
          <h1>composição de letras</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh
            facilisi ullamcorper leo condimentum habitasse praesent sed maecenas
            egestas. Diam ultricies quam sit vestibulum. Facilisis id purus
            velit pretium ornare. Adipiscing faucibus nunc tincidunt dictum
            pharetra egestas sit nunc. Tristique vivamus lacinia non cras erat
            lectus congue nisi, quis. Lorem risus sodales a malesuada. Massa sed
            sed pellentesque arcu commodo aliquam, sit.
          </p>
        </div>
        <Image
          width={315}
          height={417}
          src={"/images/service-02.png"}
          alt="studio"
          className=" mt-5 col-span-3 w-full"
        />
      </section>
      <section
        id="vid"
        className=" cf mt-12 lg:grid grid-cols-12 gap-5 items-center "
      >
        <Image
          width={315}
          height={417}
          src={"/images/service-03.png"}
          alt="studio"
          className=" mt-5 col-span-4 w-full"
        />
        <div className=" col-span-8">
          <h1>Fotografia E Produção de Videoclipes</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh
            facilisi ullamcorper leo condimentum habitasse praesent sed maecenas
            egestas. Diam ultricies quam sit vestibulum. Facilisis id purus
            velit pretium ornare. Adipiscing faucibus nunc tincidunt dictum
            pharetra egestas sit nunc. Tristique vivamus lacinia non cras erat
            lectus congue nisi, quis. Lorem risus sodales a malesuada. Massa sed
            sed pellentesque arcu commodo aliquam, sit.{" "}
          </p>
        </div>
      </section>
      <section
        id="sing"
        className=" cf mt-12 lg:grid grid-cols-12 gap-5 items-center "
      >
        <Image
          width={315}
          height={417}
          src={"/images/service-04.png"}
          alt="studio"
          className=" mt-5 col-span-3 w-full"
        />
        <div className=" col-span-9">
          <h1>Aulas de Canto</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh
            facilisi ullamcorper leo condimentum habitasse praesent sed maecenas
            egestas. Diam ultricies quam sit vestibulum. Facilisis id purus
            velit pretium ornare. Adipiscing faucibus nunc tincidunt dictum
            pharetra egestas sit nunc. Tristique vivamus lacinia non cras erat
            lectus congue nisi, quis. Lorem risus sodales a malesuada. Massa sed
            sed pellentesque arcu commodo aliquam, sit.{" "}
          </p>
        </div>
      </section>
      <section
        id="instrument"
        className=" cf mt-12 lg:grid grid-cols-12 gap-5 items-center "
      >
        <div className=" col-span-8">
          <h1>Aulas de Instrumentais</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh
            facilisi ullamcorper leo condimentum habitasse praesent sed maecenas
            egestas. Diam ultricies quam sit vestibulum. Facilisis id purus
            velit pretium ornare. Adipiscing faucibus nunc tincidunt dictum
            pharetra egestas sit nunc. Tristique vivamus lacinia non cras erat
            lectus congue nisi, quis. Lorem risus sodales a malesuada. Massa sed
            sed pellentesque arcu commodo aliquam, sit.{" "}
          </p>
        </div>
        <Image
          width={315}
          height={417}
          src={"/images/service-05.png"}
          alt="studio"
          className=" mt-5 col-span-4 w-full"
        />
      </section>
      <section
        id="da"
        className=" cf mt-12 lg:grid grid-cols-12 gap-5 items-center "
      >
        <div className=" col-span-9">
          <h1>Direção artística</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh
            facilisi ullamcorper leo condimentum habitasse praesent sed maecenas
            egestas. Diam ultricies quam sit vestibulum. Facilisis id purus
            velit pretium ornare. Adipiscing faucibus nunc tincidunt dictum
            pharetra egestas sit nunc. Tristique vivamus lacinia non cras erat
            lectus congue nisi, quis. Lorem risus sodales a malesuada. Massa sed
            sed pellentesque arcu commodo aliquam, sit.{" "}
          </p>
        </div>
        <Image
          width={315}
          height={417}
          src={"/images/service-06.png"}
          alt="studio"
          className=" mt-5 col-span-3 w-full"
        />
      </section>
    </main>
  );
};

export default Services;
