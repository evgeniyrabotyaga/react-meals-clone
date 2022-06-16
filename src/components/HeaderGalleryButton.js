import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const HeaderGalleryButton = (props) => {
  return (
    <button
      onClick={props.moveSlide}
      className={
        props.direction === "left"
          ? "header-slider__btn header-slider__btn--left"
          : "header-slider__btn header-slider__btn--right"
      }
    >
      {props.direction === "left" ? (
        <FontAwesomeIcon
          icon={faArrowLeft}
          className="header-slider__arrow-svg"
        />
      ) : (
        <FontAwesomeIcon
          icon={faArrowRight}
          className="header-slider__arrow-svg"
        />
      )}
    </button>
  );
};

export default HeaderGalleryButton;
