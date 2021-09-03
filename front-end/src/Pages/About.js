import React from 'react';
import styled from 'styled-components';
import MotionF from './MotionF';

const Container = styled.div`
    
`

const AboutUs = styled.div`
    color: var(--foam);
`

const Details = styled.div`

`

const AboutComponent = () => {
    return (
        <Container>
            <AboutUs>
                <h2>About Us</h2>
            </AboutUs>

            <Details>
                <p>In the world of typing <br /> we the developers want to be able to produce product in an accurate and time fashion, <br /> but how do we get there?</p>
            </Details>

        </Container>
    );  
};

const About = MotionF(AboutComponent);

export default About;
