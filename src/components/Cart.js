import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(clearCart());
  };

  return (
    <div className="w-6/12 text-center p-6 m-auto ">
      <h1 className="font-bold text-2xl">Cart</h1>
      <button
        className="font-semibold text-lg bg-black text-white rounded-md px-2"
        onClick={handleClick}
      >
        Clear Cart
      </button>
      <div>
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};
export default Cart;
