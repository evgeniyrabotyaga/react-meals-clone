import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import HeaderGalleryButton from "./HeaderGalleryButton";

const HeaderGallery = () => {
  const dataSlider = [
    {
      id: uuidv4(),
      title: "Lorem",
      alt: "Restaurant",
    },
    {
      id: uuidv4(),
      title: "Lorem",
      alt: "Restaurant",
    },
    {
      id: uuidv4(),
      title: "Lorem",
      alt: "Restaurant",
    },
    {
      id: uuidv4(),
      title: "Lorem",
      alt: "Restaurant",
    },
  ];

  const [slideIndex, setSlideIndex] = useState(1);

  const nextSlide = () => {
    if (slideIndex !== dataSlider.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === dataSlider.length) {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(dataSlider.length);
    }
  };

  return (
    <div className="header-slider">
      {dataSlider.map((object, index) => {
        return (
          <div
            key={object.id}
            className={
              slideIndex === index + 1
                ? "header-slider__slide active"
                : "header-slider__slide"
            }
          >
            <img
              alt={object.alt}
              src={process.env.PUBLIC_URL + `/images/gallery-${index + 1}.avif`}
            ></img>
          </div>
        );
      })}
      <HeaderGalleryButton moveSlide={prevSlide} direction="left" />
      <HeaderGalleryButton moveSlide={nextSlide} direction="right" />
    </div>
  );
};

export default HeaderGallery;
