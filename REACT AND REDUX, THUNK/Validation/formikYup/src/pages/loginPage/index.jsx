import axios from "axios";
import { useFormik } from "formik";
import React from "react";
import { customerValidationSchema } from "../../schema";
import { NavLink, useNavigate } from 'react-router-dom'
import './index.scss'

const AddCustomerFormikYup = () => {
    const { handleSubmit, handleChange, values, errors, touched, resetForm } =
        useFormik({
            initialValues: {
                name: "",
                email: "",
                phone: "",
                website: "",
                message: "",
            },
            validationSchema: customerValidationSchema,
            onSubmit: (values) => {
                let customerObj = {
                    name: values.name,
                    email: values.email,
                    phone: values.phone,
                    website: values.website,
                    message: values.message,
                };

                console.log(customerObj)
                axios.post('https://northwind.vercel.app/api/customers', {
                    customerObj
                })
                // resetForm();
            },
        });

    return (
        <div>
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/login"}>Login</NavLink>
            <NavLink to={"/signin"}>SignIn</NavLink>
            <NavLink to={"/users"}>UsersPage</NavLink>

            <form id="product-form" onSubmit={handleSubmit}>
                {console.log("error", errors)} {console.log("error", errors)}{" "}
                <label htmlFor="name" className="m-2">
                    Name:
                </label>
                <input
                    id="name"
                    name="name"
                    type="text"
                    onChange={handleChange}
                    value={values.name}
                />
                <br />
                {errors.name && touched.name && (
                    <span style={{ color: "red", fontSize: "16px" }}>
                        {errors.name}
                    </span>
                )}
                <br />
                <label htmlFor="email" className="m-2">
                    Email:
                </label>
                <input
                    id="email"
                    name="email"
                    type="text"
                    onChange={handleChange}
                    value={values.email}
                />
                <br />
                {errors.email && touched.email && (
                    <span style={{ color: "red", fontSize: "16px" }}>
                        {errors.email}
                    </span>
                )}
                <br />
                <label htmlFor="phone" className="m-2">
                    Phone
                </label>
                <input
                    id="phone"
                    name="phone"
                    type="text"
                    onChange={handleChange}
                    value={values.phone}
                />
                <br />
                {errors.phone && touched.phone && (
                    <span style={{ color: "red", fontSize: "16px" }}>{errors.phone}</span>
                )}
                <br />
                <label htmlFor="website" className="m-2">
                    Website
                </label>
                <input
                    id="website"
                    name="website"
                    type="text"
                    onChange={handleChange}
                    value={values.website}
                />
                <br />
                {errors.website && touched.website && (
                    <span style={{ color: "red", fontSize: "16px" }}>{errors.website}</span>
                )}
                <br />
                <label htmlFor="website" className="m-2">
                    Message
                </label>
                <input
                    id="message"
                    name="message"
                    type="text"
                    onChange={handleChange}
                    value={values.message}
                />
                <br />
                {errors.message && touched.message && (
                    <span style={{ color: "red", fontSize: "16px" }}>{errors.message}</span>
                )}
                <br />
                <button type="submit" className="btn btn-success mt-2">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default AddCustomerFormikYup;