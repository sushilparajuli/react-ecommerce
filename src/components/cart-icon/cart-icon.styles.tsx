import styled from 'styled-components';
import { GiShoppingBag as CartIcon } from 'react-icons/gi';

export const CartIconContainer = styled.div`
    width: 3rem;
    height: 3rem;
    position: relative;
    z-index: 1;
    display:flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`;

export const ShoppingIcon = styled(CartIcon)`
    width: 1.9rem;
    height: 1.9rem;
    cursor: pointer

`;

export const ItemCount = styled.span`
    position: absolute;
    font-size: 0.7rem;
    font-weight: 400;
    bottom: 14px;
    color: white;
    display:block;
    z-index:0;
`;