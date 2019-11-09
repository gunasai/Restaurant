import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem;
  justify-items: center;
  align-items: center;
  padding: 4rem;
`;

const Body = styled.div`
  display: grid;
  grid-gap: 2rem;
`;

const Header = styled.h1`
  font-weight: 800;
  font-size: 2.5rem;
`;

export default class Home extends Component {
  render() {
    const { header, paragraphOne, paragraphTwo } = this.props.data[0];
    return (
      <Container data-test="Home">
        <div>
          <Header>{header && header}</Header>
        </div>
        <Body>
          <div>{paragraphOne && paragraphOne}</div>
          <div>{paragraphTwo && paragraphTwo}</div>
        </Body>
      </Container>
    );
  }
}
