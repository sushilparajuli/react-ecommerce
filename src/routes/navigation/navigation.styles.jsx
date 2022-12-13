import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const NavContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.5rem;
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 0.5rem;
`;

export const NavLinkContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const NavLink = styled(Link)`
  padding: 0.6rem 0.9rem;
  cursor: pointer;
  text-transform: uppercase;
  font-weight: 400;
  letter-spacing: -0.02rem;
`;

// .navigation {
//   height: 70px;
//   width: 100%;
//   display: flex;
//   justify-content: space-between;
//   margin-bottom: 1.5rem;

//   .logo-container {
//     height: 100%;
//     width: 70px;
//     padding: 0.5rem;
//   }

//   .nav-links-container {
//     width: 50%;
//     height: 100%;
//     display: flex;
//     align-items: center;
//     justify-content: flex-end;

//     .nav-link {
//       padding: 0.6rem 0.9rem;
//       cursor: pointer;
//       text-transform: uppercase;
//       font-weight: 400;
//       letter-spacing: -0.02rem;
//     }
//   }
// }