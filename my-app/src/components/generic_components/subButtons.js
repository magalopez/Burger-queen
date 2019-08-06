import React from "react";
import Button from "./button";

const SubButton = ({ productElement, addProduct }) => {
  if (productElement.length === 18) {
    return <></>;
  }
  return (
    <div className="tile is-child buttons is-12 is-centered columns is-mobile">
      {productElement.map(function(individualProduct) {
        return (
          <Button
            className="button is-outlined column"
            onclick={() => {
              addProduct(
                individualProduct.id,
                individualProduct.title,
                individualProduct.price,
                individualProduct.counter
              );
            }}
            text={individualProduct.title}
          />
        );
      })}
    </div>
  );
};

export default SubButton;
