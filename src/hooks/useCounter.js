import { useState } from "react";
export const useCounter = () => {
  const [quantity, setQuantity] = useState(0);
  const [porVez, setPorVez] = useState(1);
  const onIncrement = () => {
    const valor = Number(prompt("quantos produtos por vez"));
    setQuantity(valor);
    if (quantity && valor >= 10) {
      alert("quantidade não pode ser maior que 10");
    } else setQuantity(quantity + porVez + valor -1);
  };
  const onDecrement = () => {
    if (quantity <= 0) {
      alert("menor valor é zero ");
    } else setQuantity(quantity - porVez);
  };
  const onReset = () => {
    setQuantity(0);
  };
  const setValor = () => {
    const valor = Number(prompt("quantos produtos por vez"));
    setPorVez(valor);
  };

  return [onDecrement, onIncrement, quantity, onReset, setValor];
};
