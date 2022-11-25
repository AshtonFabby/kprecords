import Head from "next/head";
import ArtistItem from "./components/artistItem";
import PocketBase from "pocketbase";
import Link from "next/link";

const Artists = ({ records }) => {
  const pb = new PocketBase("https://kp-records.fly.dev");
  // console.log(pb.collection("artists"));
  // const recordName = records
  // console.log(records.items);
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
            Todos os nossos artistas são selecionados a dedo. A KP faz questão
            de se manter verdadeira aos seus ideias: “Descobrir, Capacitar e
            Integrar Talentos Anónimos”. A nossa casa é repleta de de
            diversificação; desde cantores de RAP e R&B - cantores de Morna e
            música Gospel. Dias após dias vamos dando passos com cada um dos
            nossos artistas e todos Tornamos Sonhos em Realidade.
          </p>
        </div>

        <div className="artists grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {/* <ArtistItem image="/images/helia.png" name="HÉLIA SANDRA" />
          <ArtistItem image="/images/alreo.png" name="ALÍRIO FORTUNATO" />
          <ArtistItem image="/images/luana.png" name="LUANA PRAIA " />
          <ArtistItem image="/images/daniel.png" name="SUH VALENTE" />
          <ArtistItem image="/images/adolvera.png" name="Adolveira Massaqui" />
          <ArtistItem image="/images/alirio.png" name="DANIEL CORREIA" />
          <ArtistItem image="/images/nadia.png" name="Nádia Canga" />
          <ArtistItem image="/images/artist.png" name="Ngunza Manuel" />
          <ArtistItem image="/images/artist.png" name="BANDA KOMPASSO" /> */}

          {records.items.map((record) => {
            return (
              <Link key={record.id} href={`/artist/${record.id}`}>
                <ArtistItem
                  // image={record.picture}
                  image={`https://kp-records.fly.dev/api/files/2covfywhfyvfpc7/${record.id}/${record.picture}`}
                  name={record.name}
                />
              </Link>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export async function getStaticProps() {
  const res = await fetch(
    "https://kp-records.fly.dev/api/collections/artists/records"
  );
  const records = await res.json();
  return {
    props: {
      records,
    },
  };
}

export default Artists;
