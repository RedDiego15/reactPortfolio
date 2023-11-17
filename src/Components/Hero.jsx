import React from 'react';
import styled from 'styled-components';

import { FaChevronDown } from 'react-icons/fa';
import image from '../assets/main2.png';

const HeroContainer = styled.div`
    position: relative;
`;
const ContainerLandingImage = styled.figure`
    padding: 0;
    height: 13rem;
`;
const ContainerLandingInfo = styled.div`
    background-color: ${(p) => p.theme.background_color};
`;

const StyledTitle = styled.h2`
    font-family: judson;
    line-height: 1.2;
`;

const PortfolioButton = styled.button`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    color: black;
    margin-top: 1.8rem;
    width: 16rem;
    height: 4rem;
    padding: 0 1rem;
    text-align: right;
    font-family: jura;
    border: none;
    font-size: 1.6rem;
    border: black solid 1px;
    align-content: center;
    text-decoration: none;
`;
const StyledArrow = styled(FaChevronDown)`
    color: ${(p) => p.theme.arrow_intro_color};
`;

const Hero = () => (
    <div className="container-fluid">
        <HeroContainer className="row row-cols-1">
            <ContainerLandingImage className="col container_landing_image">
                <img src={image} alt="hero-img" />
            </ContainerLandingImage>
            <ContainerLandingInfo className="col-md-6 col-lg-4 container_landing_info">
                <StyledTitle>
                    Hi, I'm Diego Rojas Computer Science Engineer and i
                    Love build beautiful and fast web applications
                </StyledTitle>
                <a href="/#portfolio">
                    <PortfolioButton type="button">
                        <StyledArrow className="styled_arrow"></StyledArrow>
                        See Portfolio
                    </PortfolioButton>
                </a>
            </ContainerLandingInfo>
        </HeroContainer>
    </div>
);

export { Hero };
