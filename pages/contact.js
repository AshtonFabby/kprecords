import Head from "next/head";

const Contact = () => {
  return (
    <main>
      <Head>
        <title>KP Records: Artists</title>
        <meta name="description" content="Transformando Sonhos em realidade" />
        <link rel="icon" href="/images/logo.png" />
      </Head>
      <div className="hero cf bg-[url('/images/artists-bg.png')] bg-cover bg-no-repeat py-28">
        <h2 className=" font-bebas text-3xl md:text-5xl">.</h2>
      </div>

      <section className=" cf mt-20">
        <h1 className=" text-center mb-8">Contate-nos</h1>
        <div className=" text-center">
          KP Records <br />
          <br />
          Angola em Luanda, Viana KM14, junto a Comarca de Viana, ponte partida.{" "}
          <br />
          <br />
          Tel: 923771656 <br />
          <br /> suporte@kprecordz.com
        </div>

        <div className="form w-full rounded-sm mt-12 grid gap-3 md:px-28 lg:px-48 xl:px-80">
          <div>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              className=" w-full p-2 rounded-sm bg-[#141414] "
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              className=" w-full p-2 rounded-sm bg-[#141414]"
            />
          </div>
          <div>
            <input
              type="tel"
              name="phone"
              id="phone"
              placeholder="Telefone"
              className=" w-full p-2 rounded-sm bg-[#141414]"
            />
          </div>
          <div>
            <textarea
              className=" w-full p-2 rounded-sm bg-[#141414]"
              id="body"
              name="body"
              placeholder="Digite sua 
              mensagem aqui..."
            ></textarea>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
