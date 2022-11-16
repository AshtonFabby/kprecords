const Values = (props) => {
  return (
    <div className="">
      <h3 className=" font-bebas uppercase text-6xl text-accent">
        {props.number}
      </h3>
      <h2 className=" font-bebas uppercase text-3xl">{props.title}</h2>
      <p>{props.content}</p>
    </div>
  );
};

export default Values;
