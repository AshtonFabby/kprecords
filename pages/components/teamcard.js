import Image from "next/image";

const TeamCard = (props) => {
  return (
    <div className="team-card flex flex-col justify-center items-center gap-3 ">
      <Image src={props.image} height={111} width={164} alt="" className="" />
      <h2 className=" font-bebas text-xl mt-5 text-center xl:text-xl">
        {props.name}
      </h2>
      <p className="text-center w-[204px] ">{props.position}</p>
    </div>
  );
};

export default TeamCard;
