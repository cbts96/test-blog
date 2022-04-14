import { useFormik } from "formik";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserAction } from "../Redux/actions/userAction";
import { Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";
import "./Login.css";
const Login = () => {
  const dispatch = useDispatch();

  const { user } = useSelector((state) => ({ ...state }));
  const history = useHistory();
  
  const routeChange = () =>{ 
    let path = `/`; 
    history.push(path);
  }
  console.log(user);
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      const action = getUserAction(values);
      dispatch(action);
      
      console.log("values", values);
    },
  });
  return (
    <div>
      <div className="login-form">
        <h2 className="heading-secondary ma-bt-lg">Please Login Now</h2>
        <form onSubmit={formik.handleSubmit} className="form form--login">
          <div className="form__group">
            <label className="form__label" htmlFor="email">
              Email address
            </label>
            <input
              className="form__input"
              id="email"
              type="email"
              name="email"
              onChange={formik.handleChange}
              placeholder="you@example.com"
              required
            />
          </div>
          <div className="form__group ma-bt-md">
            <label className="form__label" htmlFor="password">
              Password
            </label>
            <input
              className="form__input"
              name="password"
              onChange={formik.handleChange}
              id="password"
              type="password"
              placeholder="••••••••"
              required
              minLength={8}
            />
          </div>
          <div className="form__group">
            <button onClick={routeChange} type="submit" className="btn btn--green">Login</button>
            <p>Account test: </p>
            <p>Account: lexuanthang123@gmail.com</p>
            <p>Password: lexuanthang</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
