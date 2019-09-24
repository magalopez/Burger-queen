import React, { useState } from "react";
import Button from "../Button";
import SubButton from "../SubButtons";

const Breakfast = ({ allProducts, addProduct }) => {
  const [product, setProduct] = useState([...allProducts]);

  const filterSandwich = products => {
    setProduct(allProducts);
    let newArray = [];
    products.filter(element => {
      if (element.type === "sandwich") {
        newArray.push(element);
      }
      return newArray;
    });
    return setProduct(newArray);
  };

  const filterDrinks = products => {
    setProduct(allProducts);
    let newArray = [];
    products.filter(element => {
      if (element.type === "morningdrinks") {
        newArray.push(element);
      }
      return newArray;
    });
    return setProduct(newArray);
  };

  return (
    <>
      <Button
        onclick={() => {
          filterSandwich(allProducts);
        }}
        text={"SANDWICHS"}
        classOfComponent={"tile is-child button is-warning columns is-mobile"}
      />

      <Button
        onclick={() => {
          filterDrinks(allProducts);
        }}
        text={"BEBIDAS"}
        classOfComponent={"tile is-child button is-warning columns is-mobile"}
      />

      <SubButton productElement={product} addProduct={addProduct} />
    </>
  );
};
export default Breakfast;
