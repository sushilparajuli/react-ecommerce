import { darken } from 'polished';
import styled from 'styled-components';

enum color {
  GOOGLE_PLUS  = '#DB4437',
  WHITE = '#FFFFFF',
  BLACK = '#000000',
}

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
  opacity: ${({disabled}) => disabled ? '0.2' : '1'};
  cursor: ${({disabled}) => disabled ? 'not-allowed' : 'pointer'};

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

    &:not([disabled]):hover {
      background-color: ${darken(0.05, color.GOOGLE_PLUS)};
      border-color: ${darken(0.05,color.GOOGLE_PLUS)};
      color: ${color.WHITE};
    }

    svg{
        font-size: 2rem;
        display: inline-flex;
        justify-self: center;
        align-self: center;
        margin-left: 0.3rem;
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

export const LoadingSpinner = styled.div`
  display: inline-block;
  width: 30px;
  height: 30px;
  border: 3px solid rgba(195, 195, 195, 0.6);
  border-radius: 50%;
  border-top-color: #636767;
  animation: spin 1s ease-in-out infinite;
  -webkit-animation: spin 1s ease-in-out infinite;
  @keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
  @-webkit-keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
`;