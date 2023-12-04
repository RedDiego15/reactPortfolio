import React from 'react';
import styled from 'styled-components';
import profilePic from '../assets/portfolio-items/profile-picture.jpg';
import { DivisionLine } from './DivisionLine';

const FigureContainer = styled.figure`
    border-radius: 50%;
    width: 18rem;
    height: 16rem;
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
                    experience in Web Development, Data science and progressive
                    web apps, i have been developing web pages since
                    2019, i have been working in many projects with different
                    frameworks as react and Angular, beeing react my expertice
                    area. i’ve studied engineering in computer science.{' '}
                    <br />
                    <br />
                    I worked with differents teams works, following agile
                    approach, As full stack devloper i have worked frontend (React with atomic design) and backend (FastApi with hexagonal architecture),
                    I have been taken a lot of private
                    courses on web devolpment such as web performance and
                    advanced use of react framework. Following TDD, SOLID and clean code
                    <br />
                    <br />
                    I'm a team player, proactive, and always willing to help. 
                    <br />
                </AboutMeText>
            </div>
        </div>
        <DivisionLine></DivisionLine>
    </section>
);

export { AboutMe };
