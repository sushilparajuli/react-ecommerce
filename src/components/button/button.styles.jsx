import { darken } from 'polished';
import styled from 'styled-components';

const color   = {
  GOOGLE_PLUS : '#DB4437',
  WHITE: '#FFFFFF',
  BLACK: '#000000',
}; 

export const BaseButton = styled.button`
  min-width: 165px;
  width: auto;
  height: 3rem;
  letter-spacing: 0.5px;
  line-height: 3rem;
  padding: 0 1rem;
  font-size: 15px;
  background-color: ${color.BLACK};
  color: ${color.WHITE};
  text-transform: uppercase;
  font-family: 'Poppins';
  font-weight: 400;
  border: 1px ${color.BLACK} solid;
  display: flex;
  justify-content: center;
  transition: all 0.2s ease-in-out ;
  letter-spacing: 0.02rem;
  opacity: ${({disabled}) => disabled? '0.2' : '1'};
  cursor: ${({disabled}) => disabled? 'not-allowed' : 'pointer'};

  &:not([disabled]):hover {
    background-color: ${color.WHITE};;
    color: ${color.BLACK};;
    border: 1px solid ${color.BLACK};;
  }
  
`;

export const GoogleSignInButton = styled(BaseButton)`
    background-color: transparent;
    border: 1px ${color.GOOGLE_PLUS} solid;
    color:  ${color.GOOGLE_PLUS};

    &:hover {
      background-color: ${darken(0.1,color.GOOGLE_PLUS)};
      border-color: ${darken(0.2,color.GOOGLE_PLUS)};
      color: ${color.WHITE};
    }

    svg{
        font-size: 2rem;
        display: inline-flex;
        justify-self: center;
        align-self: center;
    }
`;

export const InvertedButton = styled(BaseButton)`
  background-color: ${color.WHITE};
  color: ${color.BLACK};
  border: 1px solid ${color.BLACK};

  &:hover {
    background-color: ${color.BLACK};
    color: ${color.WHITE};
  }

`;