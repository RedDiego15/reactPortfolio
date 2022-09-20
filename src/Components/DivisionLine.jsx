import React from 'react';
import styled from 'styled-components';

const Line = styled.div`
    width: 100%;
    border: none;
    border-bottom: hsl(0, 0%, 84%) 1px solid;
    justify-self: center;
    margin-bottom: 1rem;
`;

const DivisionLine = () => <Line className="mb-5 mt-2" />;

export { DivisionLine };
