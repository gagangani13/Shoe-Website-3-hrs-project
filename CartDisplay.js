import React, { useContext } from "react";
import ShoeContext from "./Context/ShoeContext";

const CartDisplay = (props) => {
    let total=0;
  const details = useContext(ShoeContext);
  const showCart=details.items.filter((item) => item.Qty>0)
  return (
    <div>
      {showCart.map((item) => {
        total+=item.Qty*item.Price
        return (
            <li id={item.Id}>
              {item.Name}--{item.Description}--{item.Size}--{item.Qty}X--
              {item.Price * item.Qty}
            </li>
        )
      })}
      <button onClick={props.showCart}>Close</button>
      Total Amount:{total}
    </div>
  );
};

export default CartDisplay;
