import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";

const Cart = (props) => {
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      {cartItems.length < 1 ? (
        <p>Shopping Cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <CartItem
              key={item.id}
              item={{
                id: item.id,
                title: item.title,
                quantity: item.quantity,
                price: item.price,
                total: item.totalPrice,
              }}
            />
          ))}
        </ul>
      )}
    </Card>
  );
};

export default Cart;
