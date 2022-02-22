import React from "react";
import { Block, CardContent, Text, Flex, Link } from "vcc-ui";
import Image from "next/image";
import { CarsList } from "../state/AppStateReducer";

type CarCardProps = React.PropsWithChildren<CarsList>;

const CarCard: React.FC<CarCardProps> = ({
  id,
  modelName,
  bodyType,
  modelType,
  imageUrl,
}: CarCardProps) => {
  return (
    <Block
      as="div"
      extend={{ marginLeft: 12, marginRight: 12, marginBottom: 50 }}
    >
      <Text
        extend={({ theme }) => ({
          color: theme.color.foreground.secondary,
        })}
      >
        <strong>{bodyType}</strong>
      </Text>
      <Flex
        extend={{
          flexDirection: "row",
          marginBottom: 24,
        }}
      >
        <Text
          extend={{
            marginRight: 8,
          }}
        >
          {" "}
          <strong>{modelName}</strong>
        </Text>
        <Text
          extend={({ theme }) => ({
            color: theme.color.foreground.secondary,
          })}
        >
          {modelType}
        </Text>
      </Flex>
      <Image
        src={imageUrl}
        alt={id}
        width="644"
        height="488"
        className="non-draggable"
      />
      <Flex
        extend={{
          flexDirection: "row",
          justifyContent: "center",
          marginTop: 16,
        }}
      >
        <Link
          href={`/learn/${encodeURIComponent(id)}`}
          arrow="right"
          style={{ marginRight: 24 }}
        >
          <a>Learn</a>
        </Link>
        <Link href={`/shop/${encodeURIComponent(id)}`} arrow="right">
          <a>Shop</a>
        </Link>
      </Flex>
    </Block>
  );
};

export default CarCard;
