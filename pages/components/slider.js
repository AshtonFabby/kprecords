import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Hero from "./hero";

const HeroSlider = () => {
  return (
    <Carousel
      autoPlay={true}
      showStatus={false}
      showThumbs={false}
      infiniteLoop={true}
    >
      <div>
        <Hero
          name="Hélia Sandra"
          botText="Lançamentos: Mais Tempero"
          songLink="https://youtu.be/uZUxCjsvILk"
          about=""
          heroImage="/images/hela.png"
        />
      </div>
      <div>
        <Hero
          name="Hélia Sandra"
          botText="Lançamentos: Mais Tempero"
          songLink="https://youtu.be/uZUxCjsvILk"
          about=""
          heroImage="/images/hela.png"
        />
      </div>
      <div>
        <Hero
          name="Hélia Sandra"
          botText="Lançamentos: Mais Tempero"
          songLink="https://youtu.be/uZUxCjsvILk"
          about=""
          heroImage="/images/hela.png"
        />
      </div>
    </Carousel>
  );
};

export default HeroSlider;
