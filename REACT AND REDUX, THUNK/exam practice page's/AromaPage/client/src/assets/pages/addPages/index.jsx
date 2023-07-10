import React, { useState } from "react";
import "./index.scss";
import { useForm } from "react-hook-form";
import "./index.scss";
import axios from "axios";
import {Helmet} from "react-helmet";

const AddProductsPage = () => {
  const [message, setMessage] = useState(false);
  const {
    resetField,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    resetField("brandName");
    resetField("image");
    resetField("category");
    resetField("price");
    axios.post(`http://localhost:3000/products`, data);
    setMessage(true);
  };

  setTimeout(() => {
    setMessage(false);
  }, 2000);

  return (
    <>
      {message ? (
        <h1
          style={{
            height: "70vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          Successfully
        </h1>
      ) : (
        <div className="forms">
          <Helmet>
            <meta charSet="utf-8" />
            <title>Add Products</title>
            <link rel="canonical" href="http://mysite.com/example" />
          </Helmet>
          <h1>Post Product</h1>
          <form onSubmit={handleSubmit(onSubmit)} shouldUnregister={true}>
            <input
              placeholder="brandName. . . ."
              {...register("brandName", {
                required: true,
                maxLength: 20,
                minLength: 5,
              })}
            />
            {errors.brandName && <span>This field is required</span>}
            <input
              placeholder="image. . . ."
              {...register("image", {
                required: true,
                maxLength: 280,
                minLength: 10,
              })}
            />
            {errors.image && <span>This field is required</span>}
            <input
              placeholder="price. . . ."
              type="number"
              {...register("price", {
                required: true,
                max: 209000,
                min: 120,
              })}
            />
            {errors.price && <span>This field is required</span>}
            <input
              placeholder="category. . . ."
              {...register("category", { required: true })}
            />
            {errors.category && <span>This field is required</span>}
            <button type="submit" className="button-86">
              Send
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default AddProductsPage;
