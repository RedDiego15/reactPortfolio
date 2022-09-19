import React from 'react';
import styled from 'styled-components';
import logo from '../assets/LogoEdited.png';

const HeaderComponent = styled.header`
    background-color: ${(props) => props.theme.header_color};
`;

const ContentNav = styled.div`
    padding: 0;
`;

const ContentList = styled.div`
    justify-content: flex-end;
`;
const FigureContainer = styled.figure`
    width: 90px;
    height: 50px;
    margin: 0;
`;
const Button = styled.button`
    background-color: ${(p) => p.theme.header_btn_color};
`;

const Header = () => (
    <HeaderComponent className="container-fluid">
        <nav className="navbar navbar-expand-md ">
            <ContentNav className="container-fluid">
                <FigureContainer>
                    <img src={logo} alt="logo" />
                </FigureContainer>
                <Button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </Button>
                <ContentList
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                >
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a
                                className="nav-link white-text"
                                aria-current="page"
                                href="/#"
                            >
                                Portfolio
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link white-text" href="/#">
                                About me
                            </a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link white-text" href="/#">
                                Get in Touch
                            </a>
                        </li>
                    </ul>
                </ContentList>
            </ContentNav>
        </nav>
    </HeaderComponent>
);

export { Header };
