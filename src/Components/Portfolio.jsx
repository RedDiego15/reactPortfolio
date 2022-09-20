import React, { useContext } from 'react';
import styled from 'styled-components';
import { AppContext } from '../Context/AppContext';
import { DivisionLine } from './DivisionLine';
import { PortfolioItem } from './PortfolioItem';

const ItemsContainer = styled.div`
    padding: 1rem;
    gap: 2.5rem;
`;

const Portfolio = () => {
    const { state } = useContext(AppContext);

    return (
        <section id="portfolio" className="container-fluid">
            <h3 className="text-center my-5">Portfolio</h3>
            <ItemsContainer className="row row-cols-1 row-cols-md-2 justify-content-center">
                {state.Sites.map((site) => (
                    <PortfolioItem
                        title={site.title}
                        description={site.description}
                        link={site.link}
                        urlImg={site.url_img}
                        key={site.title}
                    />
                ))}
            </ItemsContainer>
            <DivisionLine></DivisionLine>
        </section>
    );
};

export { Portfolio };
