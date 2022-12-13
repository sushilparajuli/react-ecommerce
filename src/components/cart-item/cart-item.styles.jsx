import styled from 'styled-components';

export const CartItemContainer = styled.div`
 {
  width: 100%;
  display: flex;
  height: 60px;
  margin-bottom: 15px;

  img {
    width: 25%;
  }
`;

export const ItemDetail = styled.div`
    width: 70%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 0.5rem 1rem;
    .name {
      font-size: 1rem;
      margin : 0 0 0.5rem;
    }
`;