import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import "./index.scss";

const CarouselComp = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);
  return (
    <div>
      {" "}
      <div className="embla" ref={emblaRef}>
        <div className="embla__container">
          <div className="embla__slide">
            <div className="image1 image">
              <div className="icons">
                <i className="fa-solid fa-play"></i>
              </div>
              <div className="textBottom">
                <h1>Bulid your Career From Scratch</h1>
                <p>03.03.2018</p>
              </div>
            </div>
          </div>
          <div className="embla__slide">
            <div className="image2 image">
              <div className="icons">
                <i className="fa-solid fa-play"></i>
              </div>
              <div className="textBottom">
                <h1>How to Draq Realistics</h1>
                <p>03.03.2018</p>
              </div>
            </div>
          </div>
          <div className="embla__slide">
            <div className="image3 image">
              <div className="icons">
                <i className="fa-solid fa-play"></i>
              </div>
              <div className="textBottom">
                <h1>Your Dreams Can Are Real</h1>
                <p>03.03.2018</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarouselComp;
