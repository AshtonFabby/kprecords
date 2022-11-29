import Image from "next/image";

const ArtistItem = (props) => {
  return (
    <div className=" flex flex-col justify-center items-center gap-3">
      <Image
        src={props.image}
        height={231}
        width={264}
        alt="artist"
        className="w-[264px] h-[231px] object-contain"
      />
      <h2 className=" font-bebas text-3xl ">{props.name}</h2>
    </div>
  );
};

export default ArtistItem;
