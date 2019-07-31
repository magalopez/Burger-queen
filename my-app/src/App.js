import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/navBar";
import MenuView from "./components/menu_view/menu";
import KitchenView from "./components/kitchen_view/kitchen";
import HistoryView from "./components/history_view/orders_history";
import Default from "./components/default";

// const formatNumber = number =>
//   new Intl.NumberFormat("en-US", {
//     mininumFractionDigits: 2,
//     maximunFractionDigits: 2
//   }).format(number);

const App = () => {
  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path="/" component={MenuView} />
        <Route path="/cocina" component={KitchenView} />
        <Route path="/historial" component={HistoryView} />
        <Route component={Default} />
      </Switch>
    </>
  );
};

export default App;

// //FUNCTION
// const App = () => {
//   const [addedIds, setAddedIds] = useState([]);
//   const [quantityById, setQuantityById] = useState({});
//   const [products] = useState(dataProducts);

//   const addToCart = id => {
//     const product = products.find(prod => prod.id === id);

//     const newAddedIds = addedIds.find(prodId => prodId === id)
//       ? addedIds
//       : addedIds.concat(product.id);
//     const newQuantityById = {
//       ...quantityById,
//       [id]: (quantityById[id] || 0) + 1
//     };
//     setQuantityById(newQuantityById);
//     setAddedIds(newAddedIds);
//     return [addedIds, quantityById];
//   };

//   const removeFromCart = id => {
//     if (quantityById[id]) {
//       const newQuantityById = {
//         ...quantityById,
//         [id]: quantityById[id] > 1 ? quantityById[id] - 1 : undefined
//       };
//       const newAddedIds = newQuantityById[id]
//         ? addedIds
//         : addedIds.filter(prodId => prodId !== id);
//       setAddedIds(newAddedIds);
//       setQuantityById(newQuantityById);
//     }
//     return [addedIds, quantityById];
//   };
//   const deleteFromCart = id => {
//     if (quantityById[id]) {
//       const newQuantityById = {
//         ...quantityById,
//         [id]: undefined
//       };
//       const newAddedIds = addedIds.filter(prodId => prodId !== id);
//       setAddedIds(newAddedIds);
//       setQuantityById(newQuantityById);
//     }
//     return [addedIds, quantityById];
//   };

//   const getAvailable = (products, quantityById) => {
//     return products.reduce(
//       (res, product) => ({
//         ...res,
//         [product.id]: quantityById[product.id] || 0
//       }),
//       {}
//     );
//   };
//   const getTotal = (products, addedIds, quantityById) => {
//     return addedIds.reduce(
//       (res, productId) =>
//         res +
//         products.find(prod => prod.id === productId).price *
//           (quantityById[productId] || 0),
//       0
//     );
//   };

//   // const { products, quantityById, addedIds } = state;
//   const available = getAvailable(products, quantityById);
//   const total = getTotal(products, addedIds, quantityById);
//   return (
//     <Fragment>
//       <NavBar total={formatNumber(total)} />
//       <section className="tile is-ancestor  pd-prodlist is-12 spaceEvenly">
//         <ContainerMenu></ContainerMenu>

//         <ProductList
//           available={available}
//           products={dataProducts}
//           addToCart={addToCart}
//           removeFromCart={removeFromCart}
//           deleteFromCart={deleteFromCart}
//         />
//       </section>
//     </Fragment>
//   );
// };
