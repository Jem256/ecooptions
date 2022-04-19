import React, { useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import "./AddressForm.css";
//import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";
//import { defaultFlutterConfig } from "../../flutterConfig";
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import db from '../../firebase'
import { connect } from "react-redux";
import CartItem from "../cart/CartItem";
// import emailjs from '@emailjs/browser'


const AddressForm = ({cart}) => {
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    let price = 0;

    cart.forEach((item) => {
      price += item.qty * item.price;
    });

    setTotalPrice(price);
  }, [cart, totalPrice, setTotalPrice]);

  const initialFormData = {
    email: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    city: "",
  };

  const { register } = useForm();
  const [formData, setFormData] = useState(initialFormData);
  //const [flutterConfig, setflutterConfig] = useState(defaultFlutterConfig);

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  async function addData(){
    await addDoc(collection(db, 'orders'), {
      basket: cart,
      customer: formData.firstName,
      email: formData.email,
      phoneNumber: formData.phoneNumber,
      address: formData.address,
      city: formData.city,
      timestamp: serverTimestamp()
    })
  }

  // const makePayment = () => {
  //   setflutterConfig({
  //     ...flutterConfig,
  //     amount:totalPrice,
  //     customer: {
  //       email: formData.email,
  //       phoneNumber: formData.phoneNumber,
  //       name: formData.firstName,
  //     },
  //   });

  //   // let paymentSuccessfull = false;

  //   handleFlutterPayment({
  //     callback: (response) => {
  //       console.log(response);    

  //       closePaymentModal(); // this will close the modal programmatically
  //     },
  //     onClose: () => {}
  //   })
  //   addData();
    
  // };

  //const handleFlutterPayment = useFlutterwave(flutterConfig);


  return (
    <div className="addressForm">
      <h2 className="header">
        Delivery Address
      </h2>
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
        <Link to='/cart'>
          <button
            variant="outlined"
            className="btn btn-primary checkout__button"
          >
            Back to Cart
          </button>
        </Link>
        <button
          onClick={addData}
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

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};

export default connect(mapStateToProps)(AddressForm);
