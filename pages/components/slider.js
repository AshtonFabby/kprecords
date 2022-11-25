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
          name="ALÍRIO FORTUNATO"
          botText="Lançamentos: Teu Tarraxo"
          songLink="https://youtu.be/jIaG3UddVSY"
          about=""
          heroImage="/images/hela.png"
        />
      </div>
      <div>
        <Hero
          name="LUANA PRAIA"
          botText="Lançamentos: Brevemente"
          songLink="https://youtu.be/uZUxCjsvILk"
          about=""
          heroImage="/images/hela.png"
        />
      </div>
      <div>
        <Hero
          name="SUH VALENTE"
          botText="Lançamentos: Brevemente"
          songLink="https://youtu.be/uZUxCjsvILk"
          about=""
          heroImage="/images/hela.png"
        />
      </div>
      <div>
        <Hero
          name="Adolveira Massaqui"
          botText="Lançamentos: Brevemente"
          songLink="https://youtu.be/uZUxCjsvILk"
          about=""
          heroImage="/images/hela.png"
        />
      </div>
      <div>
        <Hero
          name="DANIEL CORREIA"
          botText="Lançamentos: Brevemente"
          songLink="https://youtu.be/uZUxCjsvILk"
          about=""
          heroImage="/images/hela.png"
        />
      </div>
      <div>
        <Hero
          name="Nádia Canga"
          botText="Lançamentos: Brevemente"
          songLink="https://youtu.be/uZUxCjsvILk"
          about=""
          heroImage="/images/hela.png"
        />
      </div>
      <div>
        <Hero
          name="Ngunza Manuel"
          botText="Lançamentos: Brevemente"
          songLink="https://youtu.be/uZUxCjsvILk"
          about=""
          heroImage="/images/hela.png"
        />
      </div>
    </Carousel>
  );
};

export default HeroSlider;
