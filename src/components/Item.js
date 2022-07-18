import React, { useState} from "react";

function Item({ name, category }) {
  const [isCart,setCart] = useState(false);
  function newCart(){
    setCart((isCart)=> !isCart)
  }
  const cartInfo = isCart ? "Remove From" : "Add to";
  return (
    <li className={isCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button    className={isCart ? "remove" : "add"}
        onClick={newCart}
      >{ cartInfo} Cart</button>
    </li>
  );
}

export default Item;
