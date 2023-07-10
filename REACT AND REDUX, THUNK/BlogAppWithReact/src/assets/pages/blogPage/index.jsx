import React from "react";
import "./index.scss";
import { Helmet } from "react-helmet";
import { blogValidationSchema } from "../../../components/schema/index.js";
import { useFormik } from "formik";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const NewBlogPage = () => {

  const navigation = useNavigate();
  const { handleSubmit, handleChange, values, errors, touched, resetForm } =
    useFormik({
      initialValues: {
        blogTitle: "",
        blogBody: "",
        blogAuthor: "",
      },
      validationSchema: blogValidationSchema,
      onSubmit: (values) => {
        axios.post("http://localhost:8000/blogs", values);
        resetForm()
        navigation('/')
      },
    });

  return (
    <div id="form">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Blog Page</title>
        <link rel="canonical" href="/blogs" />
      </Helmet>
      <h2>Add a New Blog</h2>
      <div className="form">
        <form onSubmit={handleSubmit}>
          <div className="input-control">
            <p>
              <label htmlFor="blogTitle">Blog title:</label>
            </p>
            <input
              onChange={handleChange}
              value={values.blogTitle}
              type="text"
              name="blogTitle"
              id="blogTitle"
            />
            {errors.blogTitle && touched.blogTitle && (
              <div
                style={{
                  color: "red",
                  fontSize: "12px",
                  margin: "5px 0 5px 3px",
                }}
              >
                {errors.blogTitle}
              </div>
            )}
          </div>
          <div className="input-control">
            <p>
              <label htmlFor="blogBody">Blog body:</label>
            </p>
            <textarea
              onChange={handleChange}
              value={values.blogBody}
              name="blogBody"
              id="blogBody"
              cols="40"
              rows="2"
            ></textarea>
            {errors.blogBody && touched.blogBody && (
              <div
                style={{
                  color: "red",
                  fontSize: "12px",
                  margin: "5px 0 5px 3px",
                }}
              >
                {errors.blogBody}
              </div>
            )}
          </div>
          <div className="select-author">
            <p>
              <label htmlFor="select">Blog author:</label>
            </p>
            <select
              onChange={handleChange}
              value={values.blogAuthor}
              name="blogAuthor"
              id="blogAuthor"
            >
              <option value="" selected disabled>
                author
              </option>
              <option value="Shahriyar">Shahriyar</option>
              <option value="Kenan">Kanan</option>
              <option value="Gurban">Gurban</option>
            </select>
            {errors.blogAuthor && touched.blogAuthor && (
              <div
                style={{
                  color: "red",
                  fontSize: "12px",
                  margin: "5px 0 5px 3px",
                }}
              >
                {errors.blogAuthor}
              </div>
            )}
          </div>
          <div className="btn">
            <button type="submit" className="addBtn">
              Add Blog
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewBlogPage;