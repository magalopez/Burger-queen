import React, { useState } from "react";
import ProductList from "./productList.jsx";
import ContainerMenu from "./containerMenu.jsx";
import Total from "./total";
import dataProducts from "../../data";

const formatNumber = number =>
  new Intl.NumberFormat("en-US", {
    mininumFractionDigits: 2,
    maximunFractionDigits: 2
  }).format(number);

const MenuView = () => {
  const [products, setProducts] = useState([]);
  const [addedIds, setAddedIds] = useState([]);
  const [quantityById, setQuantityById] = useState({});

  // const getItem = id => {
  //   const product = products.find(item => item.id === id);
  //   console.log("Desde getItem()", product);
  //   return product;
  // };

  //Añadir productos a la lista
  const addProduct = (id, title, price, counter) => {
    const newProducts = [...products, { id, title, price, counter }];
    newProducts[0].counter = 1;

    console.log(newProducts);
    const newQuantityByID = {
      ...quantityById,
      [id]: (quantityById[id] || 0) + 1
    };
    setQuantityById(newQuantityByID);
    setProducts(newProducts);
  };

  // const addToCart = id => {
  //   let tempProducts = [...products];
  //   const index = tempProducts.indexOf(getItem(id));
  //   const product = tempProducts[index];
  //   product.counter = 1;
  //   console.log("haz hecho click pu", product);
  // };
  //Aumentar contidad de productos de la lista
  const addToCart = id => {
    const product = products.find(prod => prod.id === id);

    const newAddedIDs = addedIds.find(prodId => prodId === id)
      ? addedIds
      : addedIds.concat(product.id);
    const newQuantityByID = {
      ...quantityById,
      [id]: (quantityById[id] || 0) + 1
    };
    setQuantityById(newQuantityByID);
    setAddedIds(newAddedIDs);
    return [addedIds, quantityById];
  };

  // Disminuir cantidad de productos de la lista
  const removeFromCart = id => {
    if (quantityById[id]) {
      const newQuantityByID = {
        ...quantityById,
        [id]: quantityById[id] > 1 ? quantityById[id] - 1 : undefined
      };
      const newAddedIDs = newQuantityByID[id]
        ? addedIds
        : addedIds.filter(prodId => prodId !== id);
      setAddedIds(newAddedIDs);
      setQuantityById(newQuantityByID);
    }
    return [addedIds, quantityById];
  };

  // Eliminar producto de la lista
  const deleteFromCart = id => {
    if (quantityById[id]) {
      const newQuantityByID = {
        ...quantityById,
        [id]: undefined
      };
      const newAddedIDs = addedIds.filter(prodId => prodId !== id);
      setAddedIds(newAddedIDs);
      setQuantityById(newQuantityByID);
    }
    return [addedIds, quantityById];
  };

  // Suma de todos los elementos de la matriz
  const getTotal = (products, addedIds, quantityById) => {
    return products.reduce(
      (res, product) => res + product.price * (quantityById[product.id] || 0),
      0
    );
  };

  const total = getTotal(products, addedIds, quantityById);

  return (
    <>
      <h1>Hello from MenuView</h1>
      <ContainerMenu addProduct={addProduct} dataProducts={dataProducts} />
      <ProductList
        products={products}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        deleteFromCart={deleteFromCart}
      />
      <Total total={formatNumber(total)} />
    </>
  );
};

export default MenuView;
