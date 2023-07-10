import React, { useState } from "react";
import "./index.scss";
import { useForm } from "react-hook-form";
import axios from "axios";

const LoginPage = () => {
  const [message, setMessage] = useState(false);
  const {
    resetField,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    resetField("title");
    resetField("cardHeader");
    resetField("text");
    resetField("price");
    resetField("rating");
    resetField("image");
    // axios.post(`http://localhost:3000/products`, data);
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
          <h1>Post About Cards</h1>
          <form onSubmit={handleSubmit(onSubmit)} shouldUnregister={true}>
            <input
              placeholder="title. . . ."
              {...register("title", {
                required: true,
                maxLength: 20,
                minLength: 5,
              })}
            />
            {errors.title && <span>This field is required</span>}
            <input
              placeholder="cardHeader. . . ."
              {...register("cardHeader", {
                required: true,
                maxLength: 280,
                minLength: 15,
              })}
            />
            {errors.cardHeader && <span>This field is required</span>}
            <input
              placeholder="text. . . ."
              {...register("text", {
                required: true,
                maxLength: 290,
                minLength: 20,
              })}
            />
            {errors.text && <span>This field is required</span>}
            <input
              placeholder="price. . . ."
              type="number"
              {...register("price", {
                required: true,
                max: 200,
                min: 100,
              })}
            />
            {errors.price && <span>This field is required</span>}
            <input
              placeholder="rating. . . ."
              type="number"
              {...register("rating", {
                required: true,
                max: 5,
                min: 1,
              })}
            />
            {errors.rating && <span>This field is required</span>}
            <input
              placeholder="image. . . ."
              {...register("image", { required: true })}
            />
            {errors.image && <span>This field is required</span>}
            <button type="submit" className="button-86">
              Send
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default LoginPage;
