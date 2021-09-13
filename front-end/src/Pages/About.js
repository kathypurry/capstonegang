import React from 'react';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';
import Parallax from 'react-rellax'
import MotionF from '../components/MotionF';

// images
import TypingImage from '../components/TypingImage';
import NextIcon from '../assets/next-icon.svg';
import LowerIcon from '../assets/lower-icon.svg';


const Container = styled.div`
    display: flex;
    position: relative;

    top: 0;
    left: 0;
    width: 100%; 
    z-index: -1;
`

const Section = styled.div`
    display: flex;
    justify-Content: center;
    align-items: center;

    min-width: 100%;
    height: auto;

    &:nth-child(2) {
        color: #D5CFE1;
    }

    &:nth-child(3) {
        color: #CCFBFE;
    }

    &:nth-child(4) {
        color: #FFFCF9;
    }

    &:nth-child(5) {
        color: #E69597;
    }

    &:nth-child(6) {
        color: #A4F9C8;
    }

    &:nth-child(7) {
        color: #E26D5A;
    }

`

const Content = styled.div`
    max-width: 880px;
    padding: 40px;
    text-align: center;

`

const RelaxContainer = styled.div`
    display: flex;
    flex-direction: row;
    min-height: 100vh;

    margin: auto;
    width: 90%;
`

const Left = styled.div`
    padding-top: 60vh;
    width: 50%;
`

const Right = styled.div`
    padding-top: 50vh;
    width: 50%;
`

const Paragraph = styled.p`
    color: var(--white);
    opacity: 0.5;
`

const Next = styled.div`
    position: absolute;
    left: 109.5vw;
    margin-top: -16em;
`

const Lower = styled.div`
    position: absolute;
    margin-left: 10em;
    top: 47.5em;
`

const Green = styled.div`

   background-color: var(--neonyellow);

   min-height: 100vh;
   margin-left: -600px;
   margin-right: -600px;
`

// const AboutUs = styled.div`
//     color: var(--foam);
// `

// const Details = styled.div`

// `

const AboutComponent = () => {
    return ( 
        <Container>

            <Section>
               <Content>
                   <RelaxContainer>
                        <Left>
                            <Parallax speed={10}>
                                <h2>Typing Game</h2><br />
                            </Parallax>

                            <Parallax speed={8}>
                                <Paragraph>The Typing game is designed to get developers more familiar with hand placement</Paragraph>
                            </Parallax>

                            <Parallax speed={6}>
                                <Paragraph>While creating muscle memory that the average typist has not developed.</Paragraph>
                            </Parallax>

                            <Parallax speed={4}>
                                <Paragraph>We believe that with enough structured repetiiton that developers will create better code.</Paragraph>
                            </Parallax>

                            <Parallax speed={2}>
                                <Paragraph>As well as be able to identify bugs in a faster manner. </Paragraph>
                            </Parallax>
   
                            <Button variant="contained" color="primary" style={{marginTop: "20px", backgroundColor: "var(--foam)", color: "#5FA8D3"}}>
                                Lets Type
                            </Button>
                        </Left>

                        <Right>
                            <Parallax speed={-10}>
                                <TypingImage />
                            </Parallax>
                        </Right>
                    </RelaxContainer>

                    <Next>
                        <img src={NextIcon} alt="NextIcon" />
                    </Next>

                    <Lower>
                        <img src={LowerIcon} alt="LowerIcon" />
                    </Lower>

                    <Green>
                        
                    </Green>
               </Content>
           </Section>

            <Section>
               <Content>
                    <h2>Geormary Sanchez</h2>
                    <p>Lorem ipsum "Lorem ipsum dolor sit amet, <br /> 
                        consectetur adipiscing elit, <br />
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br />
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <br />
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. <br />
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
               </Content>
           </Section>

           <Section>
               <Content>
                    <h2>Tamzeed Rahman</h2>
                    <p>Lorem ipsum "Lorem ipsum dolor sit amet, <br /> 
                        consectetur adipiscing elit, <br />
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br />
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <br />
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. <br />
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
               </Content>
           </Section>

           <Section>
               <Content>
                    <h2>Kathy Gee</h2>
                    <p>Lorem ipsum "Lorem ipsum dolor sit amet, <br /> 
                        consectetur adipiscing elit, <br />
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br />
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <br />
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. <br />
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
               </Content>
           </Section>

           <Section>
               <Content>
                    <h2>Grace Bong</h2>
                    <p>Lorem ipsum "Lorem ipsum dolor sit amet, <br /> 
                        consectetur adipiscing elit, <br />
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br />
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <br />
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. <br />
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
               </Content>
           </Section>

           <Section>
               <Content>
                    <h2>Jon Narine</h2>
                    <p>Lorem ipsum "Lorem ipsum dolor sit amet, <br /> 
                        consectetur adipiscing elit, <br />
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br />
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <br />
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. <br />
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
               </Content>
           </Section>

           <Section>
               <Content>
                    <h2>Candice Agard</h2>
                    <p>Lorem ipsum "Lorem ipsum dolor sit amet, <br /> 
                        consectetur adipiscing elit, <br />
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br />
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <br />
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. <br />
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
               </Content>
           </Section>
        </Container>
    );  
};

const About = MotionF(AboutComponent);

export default About;
