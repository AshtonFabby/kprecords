import Head from "next/head";

const Contact = () => {
  return (
    <main>
      <Head>
        <title>KP Records: Artists</title>
        <meta name="description" content="Transformando Sonhos em realidade" />
        <link rel="icon" href="/images/logo.png" />
      </Head>
      <div className="hero cf bg-[url('/images/contact-bg.png')] bg-cover bg-no-repeat py-28">
        <h2 className=" font-bebas text-3xl md:text-5xl">.</h2>
      </div>
      <section className=" mt-16">
        <div className=" font-bebas text-center ">
          <h2 className=" text-8xl opacity-10 ">Contacte-nos</h2>
          <h1 className="-mt-16">Estamos aqui pra si !</h1>
        </div>
        <div className="cf md:flex gap-5 mt-10">
          <div className="left md:w-1/4">
            <h1>Visite-nos</h1>
            <p className=" mb-10">
              Angola em Luanda, Viana KM14, junto a Comarca de Viana,
              ponte partida.
            </p>
            <svg
              className=" text-accent text-7xl"
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5l-8-5V6l8 5l8-5v2z"
              />
            </svg>
            <p className=" text-lg mb-3">Envia-nos um email</p>
            <p className=" mb-10">geral@kprecordz.com</p>

            <svg
              className=" text-accent text-7xl"
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M4.05 21q-.25 0-.525-.012q-.275-.013-.525-.038V15.1l5-1l2.9 2.9q1.9-1.15 3.488-2.725q1.587-1.575 2.637-3.375l-2.85-2.875L15.1 3h5.85q.05.25.05.525v.525q0 3.225-1.438 6.287q-1.437 3.063-3.8 5.438q-2.362 2.375-5.424 3.8Q7.275 21 4.05 21Z"
              />
            </svg>
            <p className=" text-lg mb-3">Liga para nós</p>
            <p className="">+244923771656</p>
            <p className=" ">+244925008917 </p>
          </div>
          <div className="right md:w-3/4">
            <div className="form grid gap-3">
              <div>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Nome"
                  className=" w-full p-2 rounded-sm bg-transparent border border-gray-600 "
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  className=" w-full p-2 rounded-sm bg-transparent border border-gray-600"
                />
              </div>
              <div>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  placeholder="Telefone"
                  className=" w-full p-2 rounded-sm bg-transparent border border-gray-600"
                />
              </div>
              <div>
                <textarea
                  className=" w-full p-2 rounded-sm bg-transparent border border-gray-600"
                  id="body"
                  name="body"
                  placeholder="Digite sua 
                  mensagem aqui..."
                ></textarea>
              </div>
              <button className=" bg-accent font-medium text-white w-fit px-8 py-2 rounded-sm text-">
                Enviar
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
