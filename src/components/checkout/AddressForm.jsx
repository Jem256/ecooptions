import React, { useState } from "react";
import { Grid } from "@mui/material";
import { useForm, FormProvider } from "react-hook-form";
import { Link } from "react-router-dom";
import "./AddressForm.css";
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";
import { getBasketTotal } from "../../reducer";
import { defaultFlutterConfig } from "../../flutterConfig";
import { useStateValue } from "../../StateProvider";
// import { db } from '../../firebase'
// import firebase from 'firebase'

const AddressForm = () => {
  const initialFormData = {
    email: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    city: "",
  };

  const { register } = useForm();
  const [{ basket }] = useStateValue();
  const [formData, setFormData] = useState(initialFormData);
  const [flutterConfig, setflutterConfig] = useState(defaultFlutterConfig);

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const makePayment = () => {
    setflutterConfig({
      ...flutterConfig,
      amount: getBasketTotal(basket),
      customer: {
        email: formData.email,
        phoneNumber: formData.phoneNumber,
        name: formData.firstName,
      },
    });

    let paymentSuccessfull = false;

    handleFlutterPayment({
      callback: (response) => {
        console.log(response);
        if (paymentSuccessfull) {
          paymentSuccessfull = true;
        }
        closePaymentModal(); // this will close the modal programmatically
      },
      onClose: () => {},
    });

    if (paymentSuccessfull) {
      //Write to firebase
    }
  };

  const handleFlutterPayment = useFlutterwave(flutterConfig);

  return (
    <div className="addressForm">
      <h5 className="header" gutterBottom>
        Delivery Address
      </h5>
      <form>
        <input
          name="firstName"
          placeholder="First Name"
          type="text"
          onChange={onChange}
          {...register("firstName", { required: true })}
        />
        <input
          name="lastName"
          placeholder="Last Name"
          type="text"
          onChange={onChange}
          {...register("lastName", { required: true })}
        />
        <input
          name="email"
          placeholder="Email"
          type="email"
          onChange={onChange}
          {...register("email", { required: true })}
        />
        <input
          name="phoneNumber"
          placeholder="Phone Number"
          type="text"
          onChange={onChange}
          {...register("phoneNumber", { required: true })}
        />
        <input
          name="address"
          placeholder="Enter Details of Delivery Address"
          type="text"
          onChange={onChange}
          {...register("address", { required: true })}
        />
        <input
          name="city"
          placeholder="City"
          type="text"
          onChange={onChange}
          {...register("city", { required: true })}
        />
      </form>
      <br />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <button
          component={Link}
          variant="outlined"
          to="/cart"
          className="btn btn-primary checkout__button"
        >
          Back to Cart
        </button>
        <button
          onClick={makePayment}
          type="submit"
          variant="contained"
          className="btn btn-primary checkout__button"
        >
          Make Payment
        </button>
      </div>
    </div>
  );
};

export default AddressForm;
