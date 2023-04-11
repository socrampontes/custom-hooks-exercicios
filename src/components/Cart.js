import { useState } from "react";
import { Item } from "./Item";
import { useCounter } from "../hooks/useCounter";
export const Cart = () => {

  const [onDecrement , onIncrement , quantity , onReset , setValor] = useCounter(0)

  return (
    <div>
      <h1>Meu carrinho</h1>
      <Item
        label="My produto massa"
        quantity={quantity}
        onIncrement={onIncrement}
        onDecrement={onDecrement}
        onReset={onReset}
        setValor={setValor}
      />
    </div>
  );
};
