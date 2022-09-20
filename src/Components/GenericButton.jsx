import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
    background-color: ${(p) => p.theme.buttons_color};
    border-radius: 15px;
    color: ${(p) => p.theme.regular_text};
    border: none;
    padding: 0.5rem 1rem;
    width: 10rem;
`;
const GenericButton = ({ children }) => (
    <Button type="button" className="mb-4">
        {children}
    </Button>
);

export { GenericButton };
