import styled from 'styled-components';

export const CategoryPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  .title {
    font-size: 1.6rem;
    margin-bottom: 25px;
    cursor: pointer;
    text-transform: uppercase;
    font-weight: 400;
    color: black;
  }
`;

export const Preview = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
`;