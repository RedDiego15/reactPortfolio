import React from 'react';
import styled from 'styled-components';
import profilePic from '../assets/portfolio-items/profile-picture.jpg';
import { DivisionLine } from './DivisionLine';

const FigureContainer = styled.figure`
    border-radius: 50%;
    width: 18rem;
    height: 18rem;
`;
const ProfileImage = styled.img`
    border-radius: 50%;
`;
const AboutMeText = styled.p`
    font-size: 1.1rem;
    font-family: jura;
    line-height: 1.6;
    color = ${(p) => p.theme.regular_text}
`;

const AboutMe = () => (
    <section id="about_me" className="container-fluid mt-5">
        <div className="row row-col-1 row-col-md-2 justify-content-center align-items-center">
            <FigureContainer className="about-me__figure_container col-12 col-md-5 me-5">
                <ProfileImage src={profilePic} alt="profile-img" />
            </FigureContainer>
            <div className="col-12 col-md-7">
                <DivisionLine></DivisionLine>
                <h3 className="general-title">About Me</h3>
                <AboutMeText className="">
                    Hi, Im Diego Rojas, Engeenier in Computer Science, With
                    expertice in Web Development, Data science and progressive
                    web apps, i have been developing web pages since
                    2019, i have been working in many projects with different
                    frameworks as react and Angular, beeing react my expertice
                    area. i’ve studied engineering in computer science in Espol.{' '}
                    <br />
                    <br />
                    I worked with differents teams works, following agile
                    approach , take a lot of private
                    courses on web devolpment such as web performance and
                    advanced use of react framework. Following TDD, SOLID and clean code
                    <br />
                    <br />
                    I can speak two fluent languages that are english and
                    spanish, i have been working in another areas as costumer
                    service and attending guest at, which give me the skill to
                    have better communication with coworkers and work as a team.
                    <br />
                </AboutMeText>
            </div>
        </div>
        <DivisionLine></DivisionLine>
    </section>
);

export { AboutMe };
