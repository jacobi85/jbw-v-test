import * as React from "react";
import { View, Click, Icon } from "vcc-ui";

const roundedCircleStyle = {
  borderRadius: "50%",
  border: "1px solid black",
  display: "flex",
  padding: 6,
};

const ButtonGroup = ({ next, previous, goToSlide, ...rest }: any) => {
  const {
    carouselState: { currentSlide, totalItems, slidesToShow },
  } = rest;
  return (
    <View
      extend={{
        background: "white",
        untilL: {
          display: "none",
        },
        flexDirection: "row",
        position: "relative",
        marginLeft: "auto",
        top: "-30px",
        right: 10,
      }}
    >
      <Click
        extend={{ ...roundedCircleStyle }}
        className={currentSlide === 0 ? "hidden" : ""}
        onClick={() => previous()}
      >
        <Icon type="navigation-chevronback-24" />
      </Click>
      <Click
        extend={{
          marginLeft: 16,
          ...roundedCircleStyle,
        }}
        className={currentSlide === totalItems - slidesToShow ? "hidden" : ""}
        onClick={() => next()}
      >
        <Icon type="navigation-chevronforward-24" />
      </Click>
    </View>
  );
};

export default ButtonGroup