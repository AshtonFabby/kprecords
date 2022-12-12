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
          link="xycebtoncifvd1s"
          heroImage="/images/hela.png"
        />
      </div>
      <div>
        <Hero
          name="ALÍRIO FORTUNATO"
          botText="Lançamentos: Teu Tarraxo"
          songLink="https://youtu.be/jIaG3UddVSY"
          link="nowbuuexxqtc75f"
          heroImage="/images/hela.png"
        />
      </div>
      <div>
        <Hero
          name="LUANA PRAIA"
          botText="Lançamentos: Brevemente"
          songLink="#"
          link="9x57sjejbuegpn8"
          heroImage="/images/hela.png"
        />
      </div>
      <div>
        <Hero
          name="SUH VALENTE"
          botText="Lançamentos: Brevemente"
          songLink="#"
          link="9b7ughmztoimbmy"
          heroImage="/images/hela.png"
        />
      </div>
      <div>
        <Hero
          name="Lialzio Adolveira"
          botText="Lançamentos: Brevemente"
          songLink="#"
          link="b51zilg2y907gvr"
          heroImage="/images/hela.png"
        />
      </div>
      <div>
        <Hero
          name="DANIEL CORREIA"
          botText="Lançamentos: Brevemente"
          songLink="#"
          link="c24i7csyur0e3w7"
          heroImage="/images/hela.png"
        />
      </div>
      <div>
        <Hero
          name="Laisa Canga"
          botText="Lançamentos: Brevemente"
          songLink="#"
          link="efztr1y6b4j5xn7"
          heroImage="/images/hela.png"
        />
      </div>
      {/* <div>
        <Hero
          name="Ngunza Manuel"
          botText="Lançamentos: Brevemente"
          songLink="#"
          link=""
          heroImage="/images/hela.png"
        />
      </div> */}
    </Carousel>
  );
};

export default HeroSlider;
