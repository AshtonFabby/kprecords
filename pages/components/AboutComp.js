import Image from "next/image";

const AboutComp = (props) => {
  return (
    <>
      <h2 className=" uppercase text-5xl font-bebas mt-5 ">{props.title}</h2>
      <Image
        className=" mt-5"
        src={props.image}
        height={416}
        width={750}
        alt={props.title}
      />

      <p className=" mt-5 ">{props.content}</p>
    </>
  );
};

export default AboutComp;
