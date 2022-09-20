import React from 'react';
import styled from 'styled-components';
import { GenericButton } from './GenericButton';

const ItemContainer = styled.div`
    box-shadow: 1px 5px 5px 0px #000000;
    padding: 0;
`;

const ImageContainer = styled.figure`
    height: 22rem;
    padding: 0;
    margin: 0;
`;

const Title = styled.h4`
    font-weight: bold;
`;
const Description = styled.p`
    font-family: jura;
    padding: 0 0.5rem;
`;
const Link = styled.a`
    color: ${(p) => p.theme.regular_text};
`;

const PortfolioItem = ({ title, description, link, urlImg }) => (
    <ItemContainer className="row row-cols-1 row-cols-md-2 portfolio__item_container mb-5 mb-md-0">
        <ImageContainer className="">
            <img
                className="portfolio__item-image"
                src={urlImg}
                alt="Project-Img"
            />
        </ImageContainer>
        <div className="text-center">
            <div className="row align-items-center justify-content-center">
                <Title className="my-5">{title}</Title>
                <Description className="text-start mb-5">
                    {description}
                </Description>
                <GenericButton>
                    <Link href={link}>Visit Here</Link>
                </GenericButton>
            </div>
        </div>
    </ItemContainer>
);
export { PortfolioItem };
