import React, { useState, useEffect } from "react";



const FormNewItem = ({ handler }) => {
    const [formItemState, setFormItemState] = useState({
        product: "",
        price: "",
        quantity: "",
      });
      const { product, price, quantity } = formItemState;


      

  const handleAddItem = ({ target: { name, value } }) => {
    setFormItemState({
      ...formItemState,
      [name]: value,
    });
  };

  const handleReset = () => {
    setFormItemState({
      product: "",
      price: "",
      quantity: "",
    });
  };

  const onAddItem = (e) => {
    e.preventDefault();
    if (
      product.trim() === "" ||
      price.trim() === "" ||
      quantity.trim() === ""
    ) {
      alert("Please fill all the fields");
      handleReset();
      return;
    } else if (isNaN(price) || isNaN(quantity)) {
      alert("Please type a number");
      handleReset();
      return;
    } else {
     
      handler(formItemState);
      handleReset();
     
    }
  };

  return (
        <>
            <form className="mt-5 w-50" onSubmit={onAddItem}>
              <div className="form-group">
                <label className="form-label mx-3" htmlFor="product">
                  Product
                </label>
                <input
                  type="text"
                  className="form-control m-3"
                  id="product"
                  name="product"
                  value={product}
                  placeholder="Search Product"
                  onChange={handleAddItem}
                />

                <label className="form-label mx-3" htmlFor="price">
                  Price
                </label>
                <input
                  type="text"
                  className="form-control m-3"
                  id="price"
                  name="price"
                  value={price}
                  placeholder="Type Price"
                  onChange={handleAddItem}
                />

                <label className="form-label mx-3" htmlFor="quantity">
                  Quantity
                </label>
                <input
                  type="text"
                  className="form-control m-3"
                  id="quantity"
                  name="quantity"
                  value={quantity}
                  placeholder="Type Quantity"
                  onChange={handleAddItem}
                />
              </div>
              <button type="submit" className="btn btn-primary m-3">
                Add Product
              </button>
            </form>


        </>
    )
}

export default FormNewItem