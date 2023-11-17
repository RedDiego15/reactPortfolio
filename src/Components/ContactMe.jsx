import React from 'react';
import styled from 'styled-components';
import qrImage from '../assets/linkedin_qr.svg';

const FigureContainer = styled.figure`
    width: 18rem;
    height: 18rem;
`;
const FigureContainerIcons = styled.figure`
    width: 3rem;
    height: 2rem;
`;
const ProfileImage = styled.img`
`;

const ContacMeContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
`;

const VerticalDivisionLine = styled.div`
    width: 5px;
    height: 15rem;
    border-left: black 2px solid;
`

const ContactMe = () => (
    <section id="contact_me" className="container-fluid mt-5">
        <ContacMeContainer>
            <h3 className="general-title">Contact Me</h3>
            <VerticalDivisionLine></VerticalDivisionLine>
            <FigureContainer className="col-12">
                <ProfileImage src={qrImage} alt="profile-img" />
            </FigureContainer>
            <div className="row justify-content-center align-items-center ms-2">
                <div className="col-5">
                    <a href="https://github.com/RedDiego15">
                        <FigureContainerIcons className="col-3">
                            <ProfileImage src="https://th.bing.com/th/id/OIP.u-QJB-oUg7GVqJCqiU4RsAHaHa?rs=1&pid=ImgDetMain" alt="profile-img" />
                        </FigureContainerIcons>
                    </a>
                </div>
                <div className="col-5">
                    <a href="https://github.com/RedDiego15">
                        <FigureContainerIcons className="col-3">
                            <ProfileImage src="https://logowik.com/content/uploads/images/twitter-x-icon3832.logowik.com.webp" alt="profile-img" />
                        </FigureContainerIcons>
                    </a>
                </div>
            </div>
            
        </ContacMeContainer>
                
          
      
    </section>
);

export { ContactMe };