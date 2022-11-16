import Image from "next/image";

const ArtistItem = (props) => {
  return (
    <div className=" flex flex-col justify-center items-center gap-3">
      <Image src={props.image} height={231} width={264} alt="artist" />
      <h2 className=" font-bebas text-3xl ">{props.name}</h2>
    </div>
  );
};

export default ArtistItem;
