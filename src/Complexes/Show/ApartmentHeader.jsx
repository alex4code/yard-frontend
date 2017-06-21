import React from "react";
import styled from "styled-components";
import { Grid, Row, Col } from "react-flexbox-grid";

const Header = styled.div`
  background-color: #fff;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const Info = styled.div`
  padding-top: 1.5rem;
  padding-bottom: 1rem;
`;

const Title = styled.h1`
  font-family: "Philosopher";
  font-size: 2rem;
  font-weight: 700;
  line-height: 36px;
  color: #3e4247;
  margin: 0 auto;
`;

const Geo = styled.p`
  margin-top: 0.5rem;
  margin-bottom: 0;
  font-family: "Fira Sans", sans-serif;
  font-size: 14px;
  font-weight: 300;
  line-height: 22px;
  color: #a9afb6;
`;

const FavouritesButton = styled.button`
  background-color: transparent;
  margin-top: 1.5rem;
  padding: 0.5rem 1rem;
  border-radius: 2px;
  border: solid 1px #e0e0e1;
  font-family: "Fira Sans", sans-serif;
  font-size: 10px;
  line-height: 10px;
  color: #00779a;
  font-weight: 300;
`;

export default () => {
  return (
    <Header>
      <Grid>
        <Wrapper>
          <Info>
            <Title>Жилой комплекс «Полянка/44»</Title>
            <Geo>Район Якиманка, улица Большая Полянка, дом 44 • 119180</Geo>
          </Info>
          <FavouritesButton>В избранное</FavouritesButton>
        </Wrapper>
      </Grid>
    </Header>
  );
};