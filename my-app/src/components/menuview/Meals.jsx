import React, { useState } from "react";
import dataProducts from "../../data";
import Button from "../generic_components/button";
import SubButton from "../generic_components/subButtons.js";

const Meals = () => {
  const [stateProducts] = useState(dataProducts);
  const state = stateProducts;
  const [product, setProduct] = useState(state);

  const filterBurguer = products => {
    setProduct(state);
    let newArray = [];
    products.filter(element => {
      if (element.type === "burguer") {
        newArray.push(element);
      }
      return newArray;
    });
    console.log(newArray);
    return setProduct(newArray);
  };

  const filterAdditionals = products => {
    setProduct(state);
    let newArray = [];
    products.filter(element => {
      if (element.type === "additional") {
        newArray.push(element);
      }
      return newArray;
    });
    console.log(newArray);
    return setProduct(newArray);
  };

  const filterDrinks = products => {
    setProduct(state);
    let newArray = [];
    products.filter(element => {
      if (element.type === "drinks") {
        newArray.push(element);
      }
      return newArray;
    });
    console.log(newArray);
    return setProduct(newArray);
  };

  return (
    <>
      <Button
        onclick={() => {
          filterBurguer(state);
        }}
        text={"HAMBURGUESAS"}
      />

      <Button
        onclick={() => {
          filterAdditionals(state);
        }}
        text={"ACOMPAÑAMIENTOS"}
      />

      <Button
        onclick={() => {
          filterDrinks(state);
        }}
        text={"BEBIDAS"}
      />

      <SubButton productElement={product} />
    </>
  );
};
export default Meals;