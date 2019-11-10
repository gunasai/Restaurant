import React, { Component, Fragment } from "react";
import styled from "styled-components";
import { Paper, Fab } from "@material-ui/core";
import Sushi from "./images/sushi.jpg";

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

const ImageHeader = styled.div`
  padding: 10px;
`;

const PaperHeader = styled.div`
  display: grid;
  grid-gap: 8px;
  grid-template-columns: repeat(4, 1fr);
`;

export default class Home extends Component {
  render() {
    const { header, paragraphOne, paragraphTwo } = this.props.data[0];
    return (
      <Fragment>
        <Container data-test="Home">
          <div>
            <Header>{header && header}</Header>
          </div>
          <Body>
            <div>{paragraphOne && paragraphOne}</div>
            <div>{paragraphTwo && paragraphTwo}</div>
          </Body>
        </Container>
        <div style={{ padding: "0px 10%" }}>
          <Fab>Test</Fab>
          <PaperHeader>
            <Paper>
              <ImageHeader>
                <img src={Sushi} alt="sushi" />
              </ImageHeader>
            </Paper>
            <Paper>
              <ImageHeader>
                <img src={Sushi} alt="sushi" />
              </ImageHeader>
            </Paper>
            <Paper>
              <ImageHeader>
                <img src={Sushi} alt="sushi" />
              </ImageHeader>
            </Paper>
          </PaperHeader>
        </div>
      </Fragment>
    );
  }
}
