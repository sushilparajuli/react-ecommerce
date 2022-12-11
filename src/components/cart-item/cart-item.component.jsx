const CartItem = ({ cartItem }) => {
  const { imageUrl, price, quantity, name } = cartItem;
  return (
    <>
      <img src={imageUrl} alt={name} />
      <h3>{name}</h3>
      <span>
        {quantity} X {price}{" "}
      </span>
    </>
  );
};

export default CartItem;
