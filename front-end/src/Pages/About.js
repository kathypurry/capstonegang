import React from 'react';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';
import Parallax from 'react-rellax'
import MotionF from '../components/MotionF';

import TypingImage from "../components/TypingImage";
import NextIcon from "../assets/next-icon.svg";
import LowerIcon from "../assets/lower-icon.svg";

const Container = styled.div`
    display: flex;
    position: static;
    background-color: var(--background);

    overflow-y: hidden;

    top: 0;x
    left: 0;
    width: auto; 
    z-index: -1;
`;

const Section = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--background);

  overflow-y: hidden;

  min-width: 100%;
  height: auto;

  &:nth-child(2) {
    color: #d5cfe1;
  }

  &:nth-child(3) {
    color: #ccfbfe;
  }

  &:nth-child(4) {
    color: #fffcf9;
  }

  &:nth-child(5) {
    color: #e69597;
  }

  &:nth-child(6) {
    color: #a4f9c8;
  }

  &:nth-child(7) {
    color: #e26d5a;
  }
`;

const Content = styled.div`
  max-width: 880px;
  padding: 40px;
  text-align: center;

  overflow-y: hidden;
`;

const RelaxContainer = styled.div`
  overflow-y: hidden;
  display: flex;
  flex-direction: row;
  min-height: 100vh;

  margin: auto;
  width: 90%;
`;

const Left = styled.div`
  padding-top: 50vh;
  width: 50%;
  text-align: center;
`;

const Right = styled.div`
  padding-top: 50vh;
  width: 50%;
`;

const Paragraph = styled.p`
  color: var(--white);
  opacity: 0.5;
`;

const Next = styled.div`
  position: absolute;
  left: 109.5vw;
  margin-top: -16em;
`;

const Lower = styled.div`
  position: absolute;
  margin-left: 10em;
  top: 47.5em;
`;

const Green = styled.div`
  background-color: var(--neonyellow);

  min-height: 100vh;
  margin-left: -600px;
  margin-right: -600px;
`;
const AboutComponent = () => {
  return (
    <Container>
      <Section>
        <Content>
          <RelaxContainer>
            <Left>
              <Parallax speed={10} horizontal={true}>
                <h2>Typing Game</h2>
                <br />
              </Parallax>

              <Parallax speed={8} horizontal={true}>
                <Paragraph>
                  The Typing game is designed to get developers more familiar
                  with hand placement
                </Paragraph>
              </Parallax>

              <Parallax speed={6} horizontal={true}>
                <Paragraph>
                  While creating muscle memory that the average typist has not
                  developed.
                </Paragraph>
              </Parallax>

              <Parallax speed={4} horizontal={true}>
                <Paragraph>
                  We believe that with enough structured repetiiton that
                  developers will create better code.
                </Paragraph>
              </Parallax>

              <Parallax speed={2} horizontal={true}>
                <Paragraph>
                  As well as be able to identify bugs in a faster manner.{" "}
                </Paragraph>
              </Parallax>

              <Button
                variant="contained"
                color="primary"
                style={{
                  marginTop: "20px",
                  backgroundColor: "var(--foam)",
                  color: "#5FA8D3",
                }}
              >
                Lets Type
              </Button>
            </Left>

            <Right>
              <Parallax speed={-10} horizontal={true}>
                <TypingImage/>
              </Parallax>
            </Right>
          </RelaxContainer>

          <Next>
            <img src={NextIcon} alt="NextIcon" />
          </Next>

          {/* <Lower>
            <img src={LowerIcon} alt="LowerIcon" />
          </Lower> */}

          {/* <Green>
                        
                    </Green> */}
        </Content>
      </Section>

      <Section>
        <Content>
          <h2>Geormary Sanchez</h2>
          <p>
            Lorem ipsum "Lorem ipsum dolor sit amet, <br />
            consectetur adipiscing elit, <br />
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
            <br />
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. <br />
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. <br />
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum."
          </p>
        </Content>
      </Section>

      <Section>
        <Content>
          <h2>Tamzeed Rahman</h2>
          <p>
            Lorem ipsum "Lorem ipsum dolor sit amet, <br />
            consectetur adipiscing elit, <br />
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
            <br />
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. <br />
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. <br />
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum."
          </p>
        </Content>
      </Section>

      <Section>
        <Content>
          <h2>Kathy Gee</h2>
          <p>
              I'm too cool for Lorem Ipsum
          </p>
        </Content>
      </Section>

      <Section>
        <Content>
          <h2>Grace Bong</h2>
          <p>
            Lorem ipsum "Lorem ipsum dolor sit amet, <br />
            consectetur adipiscing elit, <br />
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
            <br />
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. <br />
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. <br />
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum."
          </p>
        </Content>
      </Section>

      <Section>
        <Content>
          <h2>Jon Narine</h2>
          <p>
            Lorem ipsum "Lorem ipsum dolor sit amet, <br />
            consectetur adipiscing elit, <br />
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
            <br />
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. <br />
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. <br />
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum."
          </p>
        </Content>
      </Section>

      <Section>
        <Content>
          <h2>Candice Agard</h2>
          <p>
            Lorem ipsum "Lorem ipsum dolor sit amet, <br />
            consectetur adipiscing elit, <br />
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
            <br />
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. <br />
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. <br />
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum."
          </p>
        </Content>
      </Section>
    </Container>
  );
};

const About = MotionF(AboutComponent);

export default About;
