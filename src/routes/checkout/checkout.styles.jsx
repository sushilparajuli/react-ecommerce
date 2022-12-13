import styled from 'styled-components';

const darkgrey = 'darkgrey';

export const CheckoutContainer = styled.div`
  width: 55%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 3rem auto 0;
`;

export const CheckoutHeader = styled.div`
  width: 100%;
  padding: 0.8rem 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid ${darkgrey};

  .header-block {
    text-transform: capitalize;
    width: 23%;

    &:last-child {
      width: 8%;
    }
  }
`;

export const Total = styled.div`
  margin-top: 1.8rem;
  margin-left: auto;
  font-size: 1.5rem;
  font-weight: 400;
`;