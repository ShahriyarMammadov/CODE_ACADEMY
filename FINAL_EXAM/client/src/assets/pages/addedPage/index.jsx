import React from "react";
import SignupSchema from "./schema";
import { Formik, Form, Field } from "formik";
import axios from "axios";
import "./index.scss";
import { Helmet } from "react-helmet";

const AddedPage = () => {
  return (
    <div className="addedPage">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Added Page</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <h1>Added Data</h1>
      <Formik
        initialValues={{
          image: "",
          headerText: "",
          aboutText: "",
          price: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={(obj, { resetForm }) => {
          axios.post(`http://localhost:3000/product`, obj);
          resetForm();
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <Field name="image" placeholder="Image . . ." />
            {errors.image && touched.image ? <div>{errors.image}</div> : null}
            <Field name="headerText" placeholder="headertext. . .  ." />
            {errors.headerText && touched.headerText ? (
              <div>{errors.headerText}</div>
            ) : null}
            <Field name="aboutText" placeholder="aboutText. . . " />
            {errors.aboutText && touched.aboutText ? (
              <div>{errors.aboutText}</div>
            ) : null}
            <Field name="price" type="number" placeholder="Price. . . ." />
            {errors.price && touched.price ? <div>{errors.price}</div> : null}
            <button type="submit">SEND</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AddedPage;
