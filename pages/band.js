import Head from "next/head";
import ArtistItem from "./components/artistItem";
import Link from "next/link";
import Image from "next/image";

const Band = ({ records }) => {
  return (
    <main>
      <Head>
        <title>KP Records: Artists</title>
        <meta name="description" content="Transformando Sonhos em realidade" />
        <link rel="icon" href="/images/logo.png" />
      </Head>
      <div className="cf">
        <div className="band mb-20 cf flex items-center flex-col-reverse gap-3 lg:flex-row mt-10 bg-[url(/images/band-bg.png)] bg-cover py-12 ">
          <div className="content">
            <h1 className="">Banda Kompasso</h1>
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

        <div className="artists grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {records.items.map((record) => {
            return (
              <Link key={record.id} href={`/artist/${record.id}`}>
                <ArtistItem
                  // image={record.picture}
                  image={`https://kp-records.fly.dev/api/files/${record.collectionId}/${record.id}/${record.picture}`}
                  name={record.name}
                  className=""
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

export default Band;
