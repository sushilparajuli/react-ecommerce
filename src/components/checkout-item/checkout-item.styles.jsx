import styled from 'styled-components';

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 0.9rem 0;
  font-size: 1.3rem;
  align-items: center;
  overflow: auto;

  .name,
  .quantity,
  .price {
    width: 23%;
  }

  .quantity {
    display: flex;

    .arrow {
      cursor: pointer;
    }

    .value {
      margin: 0 0.6rem;
    }
  }
  
`;
  
export const ImageContainer = styled.div`
    width: 23%;
    padding-right: 1rem;

    img {
      width: 100%;
      height: 100%;
    }
`;

export const RemoveButton = styled.div`
  padding-left: 0.75rem;
  cursor: pointer;
`;