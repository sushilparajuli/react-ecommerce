import styled from 'styled-components';
import {BaseButton, GoogleSignInButton, InvertedButton} from '../button/button.styles';

export const CartDropdownContainer = styled.aside`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;

  ${BaseButton},
  ${GoogleSignInButton},
  ${InvertedButton}
   { margin-top: auto;}
`;

export const EmptyMessage = styled.span`
    font-size: 1.2rem;
    margin: 3rem auto;
    display: flex;
    height: 100%;
    align-items: center;
`;

export const CartItems = styled.nav`
    height: 240px;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
`;


// .cart-dropdown-container {
//   position: absolute;
//   width: 240px;
//   height: 340px;
//   display: flex;
//   flex-direction: column;
//   padding: 20px;
//   border: 1px solid black;
//   background-color: white;
//   top: 90px;
//   right: 40px;
//   z-index: 5;
  
//   .empty-message{
//       font-size: 1.2rem;
//       margin: 3rem auto;
//   }

//   .cart-items {
//     height: 240px;
//     display: flex;
//     flex-direction: column;
//     overflow-y: auto;
//   }

//   button {
//     margin-top: auto;
//   }
// }