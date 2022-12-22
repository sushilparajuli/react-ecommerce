import styled from 'styled-components';

export const CategoryContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 1.5rem;
    row-gap: 3rem;
`;

export const Title = styled.h1`
    font-size: 2rem;
    margin : 0 0  1rem;
    font-weight: 400;
    text-transform: uppercase;
`;