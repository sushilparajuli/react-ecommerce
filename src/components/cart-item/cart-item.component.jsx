import {CartItemContainer, ItemDetail} from './cart-item.styles.jsx';

const CartItem = ({ cartItem }) => {
  const { imageUrl, price, quantity, name } = cartItem;
  return (
    <CartItemContainer>
      <img src={imageUrl} alt={name} />
      <ItemDetail>
        <h3 className="name">{name}</h3>
        <span className="price">
          {quantity} X {price}{' '}
        </span>
      </ItemDetail>
    </CartItemContainer>
  );
};

export default CartItem;
