/* eslint-disable jsx-quotes */
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewProduct } from "../store/productsReducer";
import { useHistory } from "react-router-dom";

const AddProduct = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [price, setPrice] = useState(0);
  const [inventoryQuantity, setInventoryQuantity] = useState(0);
  const [stars, setStars] = useState(0);

  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (imageUrl !== "") {
      const product = {
        name,
        description,
        imageUrl,
        price,
        inventoryQuantity,
        stars,
      };
      dispatch(addNewProduct(product));
    } else {
      const product = { name, description, price, inventoryQuantity, stars };
      dispatch(addNewProduct(product));
    }
    history.push("/products")
  };

  return (
    // const disabled =
    // this.state.name === "" || this.state.address === "" ? true : false;
    <div>
      <h2>Add a Coffee Product</h2>
      <form id="add-coffee-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Coffee Name: </label>
        <input
          name="name"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <br />
        <br />
        <label htmlFor="description">Coffee Description: </label>
        <input
          name="description"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />
        <br />
        <br />
        <label htmlFor="price">Price: </label>
        <input
          name="price"
          onChange={(e) => setPrice(e.target.value)}
          value={price}
        />
        <br />
        <br />
        <label htmlFor="inventoryQuantity">Inventory Quantity: </label>
        <input
          name="inventoryQuantity"
          onChange={(e) => setInventoryQuantity(e.target.value)}
          value={inventoryQuantity}
        />
        <br />
        <br />
        <label htmlFor="imageUrl"> Image Url: </label>
        <input
          name="imageUrl"
          onChange={(e) => setImageUrl(e.target.value)}
          value={imageUrl}
        />
        <br />
        <br />
        <label htmlFor="stars">Rating: </label>
        <input
          name="stars"
          onChange={(e) => setStars(e.target.value)}
          value={stars}
        />
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddProduct;
