import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const Artist = ({ records }) => {
  // console.log(records);
  const songs = records.expand.songs;
  return (
    <main>
      <Head>
        <title>{records.name}</title>
        <meta name="description" content="Transformando Sonhos em realidade" />
        <link rel="icon" href="/images/logo.png" />
      </Head>
      <div className="cf">
        <Image
          src={`https://kp-records.fly.dev/api/files/${records.collectionId}/${records.id}/${records.banner_picture}`}
          width={671}
          height={552}
          alt=""
          className="w-[671px] h-[552px] object-contain"
        />
        <div className=" lg:mt-[-400px] mb-60 lg:ml-[330px] lg:w-[637px] xl:w-[770px]">
          <div className=" md:flex  mt-5 gap-5 items-baseline">
            <h2 className="font-bebas uppercase text-4xl sm:text-6xl  2xl:text-8xl text-start">
              {records.name}
            </h2>
            <div className="icons flex mt-2 gap-3 text-3xl text-black">
              <Link className=" p-2 bg-accent rounded-full" href={"#"}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5z"
                  />
                </svg>
              </Link>
              <Link className="p-2 bg-accent rounded-full" href={"#"}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 256 256"
                >
                  <path
                    fill="currentColor"
                    d="M128 80a48 48 0 1 0 48 48a48 48 0 0 0-48-48Zm0 80a32 32 0 1 1 32-32a32.1 32.1 0 0 1-32 32Zm44-132H84a56 56 0 0 0-56 56v88a56 56 0 0 0 56 56h88a56 56 0 0 0 56-56V84a56 56 0 0 0-56-56Zm40 144a40 40 0 0 1-40 40H84a40 40 0 0 1-40-40V84a40 40 0 0 1 40-40h88a40 40 0 0 1 40 40Zm-20-96a12 12 0 1 1-12-12a12 12 0 0 1 12 12Z"
                  />
                </svg>
              </Link>
              <Link className="p-2 bg-accent rounded-full" href={"#"}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
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
          </div>

          <p className=" mt-5">{records.biography_01}</p>
        </div>
      </div>
      <div className=" cf">{records.biography_02}</div>
      <div className="cf mt-[300px] md:mt-[430px] lg:mt-20 ">
        <h1 className=" text-center">Trabalhos Recentes</h1>
        <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5  justify-evenly gap-5 mt-5 ">
          {songs.song_title !== "no song" ? (
            songs.map((song) => {
              return (
                <Link href={song.song_link} key={song.id} target="_blank">
                  <Image
                    src={`https://kp-records.fly.dev/api/files/${song.collectionId}/${song.id}/${song.song_cover_image}`}
                    height={258}
                    width={258}
                    alt={song.song_title}
                  />
                </Link>
              );
            })
          ) : (
            <p>No releases yet</p>
          )}
        </div>
      </div>
    </main>
  );
};

export const getServerSideProps = async (pageContext) => {
  const userid = pageContext.query.id;
  const res = await fetch(
    `https://kp-records.fly.dev/api/collections/artists/records/${userid}?expand=songs,social_media`
  );
  const records = await res.json();
  return {
    props: {
      records,
    },
  };
};

export default Artist;
