import React from 'react';
import styled from 'styled-components';

const TableTag = styled.td`
    color: ${(p) => p.theme.regular_text};
    height: 4rem;
    background-color: ${(p) => p.theme.header_color};
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 0 1rem;
`;
const TableRight = styled.td`
    padding: 1rem 0.3rem;
    height: 4rem;
    width: 100%;
    background-color: #d9d9d9;
    color: black;
    font-size: 1rem;
    font-family: jura;
    font-weight: normal;
    line-height: 1.2rem;
    text-align: center;
`;

const TableRow = styled.tr`
    display: flex;
    gap: 5px;
`;
const CourseItem = ({ academy, name }) => (
    <TableRow className="col-10">
        <TableTag className="TableTag">{academy}</TableTag>
        <TableRight className="tableRight">{name}</TableRight>
    </TableRow>
);

export { CourseItem };
