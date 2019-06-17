import React, { FC } from "react";
import { Wrapper, Thumbnail, Body, Title, Album } from "./styled";

type Props = {
  value: Track;
};

const Item: FC<Props> = ({ value }) => (
  <Wrapper>
    <Thumbnail src={value.album.cover} />
    <Body>
      <Title>{value.title}</Title>
      <Album>{value.album.title}</Album>
    </Body>
  </Wrapper>
);

export default Item;
