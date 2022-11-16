import Head from "next/head";
import ArtistItem from "./components/artistItem";

const Artists = () => {
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
      <div className="cf">
        <div className="description my-12">
          <h1 className=" text-center">ARTISTAS KP </h1>
          <p className=" text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh
            facilisi ullamcorper leo condimentum habitasse praesent sed maecenas
            egestas. Diam ultricies quam sit vestibulum. Facilisis id purus
            velit pretium ornare. Adipiscing faucibus nunc tincidunt dictum
            pharetra egestas sit nunc. Tristique vivamus lacinia non cras erat
            lectus congue nisi, quis. Lorem risus sodales a malesuada. Massa sed
            sed pellentesque arcu commodo aliquam, sit.
          </p>
        </div>

        <div className="artists grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          <ArtistItem image="/images/helia.png" name="HELIA SANDRA" />
          <ArtistItem image="/images/alreo.png" name="ALIRIO FORTUNATO" />
          <ArtistItem image="/images/luana.png" name="LUANA PRAIA " />
          <ArtistItem image="/images/suh.png" name="SUH VALENTE" />
          <ArtistItem image="/images/alirio.png" name="Adolveira Massaqui" />
          <ArtistItem image="/images/daniel.png" name="DANIEL CORREIA" />
          <ArtistItem image="/images/artist.png" name="Nádia Canga" />
          <ArtistItem image="/images/artist.png" name="Ngunza Manuel" />
          <ArtistItem image="/images/artist.png" name="BANDA KOMPASSO" />
        </div>
      </div>
    </main>
  );
};

export default Artists;
