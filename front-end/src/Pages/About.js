import React from 'react';
import styled from 'styled-components';
import MotionF from './MotionF';

const Container = styled.div`
    display: flex;

    position: relative;
    // top: 0;
    // left: 0;
    width: 100%; 
`

const Section = styled.div`
    display: flex;
    justify-Content: center;
    align-items: center;

    min-width: 100%;
    height
    height: auto;

    &:nth-child(1) {
        color: #D5CFE1;
    }

    &:nth-child(2) {
        color: #CCFBFE;
    }

    &:nth-child(3) {
        color: #FFFCF9;
    }

    &:nth-child(4) {
        color: #E69597;
    }

    &:nth-child(5) {
        color: #A4F9C8;
    }

    &:nth-child(6) {
        color: #E26D5A;
    }

`

const Content = styled.div`
    max-width: 880px;
    padding: 40px;
    text-align: center;

`

const AboutUs = styled.div`
    color: var(--foam);
`

const Details = styled.div`

`

const AboutComponent = () => {
    return (
        <Container>
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
