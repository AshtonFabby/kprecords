import Image from "next/image";

const TeamCard = (props) => {
  return (
    <div className="team-card flex flex-col justify-center items-center gap-3 ">
      <Image
        src={props.image}
        height={511}
        width={564}
        alt=""
        className=" h-[255.5px] w-[250px]"
      />
      <h2 className=" font-bebas text-5xl mt-5 text-center xl:text-3xl">
        {props.name}
      </h2>
      <p className="text-center text-3xl xl:text-xl">{props.position}</p>
    </div>
  );
};

export default TeamCard;
