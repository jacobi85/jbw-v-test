import React from "react";
import { View } from "vcc-ui";
import ButtonGroup from "./ButtonGroup";
import CarCard from "./CarCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useAppState } from "../state/AppStateContext";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export const Cars: React.FC = () => {
  const { carsList } = useAppState();
  if (!carsList) return null;
  return (
    <View
      extend={({ theme }) => ({
        marginTop: 120,
        background: "none",
        color: theme.color.foreground.alert,
      })}
    >
      <Carousel
        arrows={false}
        responsive={responsive}
        showDots={true}
        renderButtonGroupOutside={true}
        customButtonGroup={<ButtonGroup />}
        dotListClass="custom-dot-list"
      >
        {carsList.map((item) => (
          <CarCard key={item.id} {...item} />
        ))}
      </Carousel>
    </View>
  );
};
