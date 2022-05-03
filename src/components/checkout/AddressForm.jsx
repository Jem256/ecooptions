import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./AddressForm.css";
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";
import { defaultFlutterConfig } from "../../flutterConfig";
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import db from '../../firebase'
import { connect } from "react-redux";
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

  const [formData, setFormData] = useState(initialFormData);
  const [flutterConfig, setflutterConfig] = useState(defaultFlutterConfig);

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const makePayment = () => {
    setflutterConfig({
      ...flutterConfig,
      amount:totalPrice,
      customer: {
        email: formData.email,
        phoneNumber: formData.phoneNumber,
        name: formData.firstName,
      },
    });

    handleFlutterPayment({
      callback: (response) => {
        console.log(response);    
        
        closePaymentModal(); // this will close the modal programmatically

        
      },
      onClose: () => {
        addDoc(collection(db, 'orders'), {
          customer: formData.firstName,
          email: formData.email,
          phoneNumber: formData.phoneNumber,
          address: formData.address,
          city: formData.city,
          amount: totalPrice,
          productId: cart.map((item) => item.id),
          productTitle: cart.map((item) => item.title),
          productQty: cart.map((item) => item.qty),
          timestamp: serverTimestamp(),
        })
      }
    })
    
  };

  const handleFlutterPayment = useFlutterwave(flutterConfig);


  return (
    <div className="addressForm">
      <h2 className="header">
        Billing Details
      </h2>
      <form onSubmit={makePayment}>
        <input
          name="firstName"
          placeholder="First Name"
          type="text"
          required
          onChange={onChange}
        />
        <input
          name="lastName"
          placeholder="Last Name"
          type="text"
          onChange={onChange}
        />
        <input
          name="email"
          placeholder="Email"
          type="email"
          required
          onChange={onChange}
        />
        <input
          name="phoneNumber"
          placeholder="Phone Number"
          type="text"
          required
          onChange={onChange}
        />
        <input
          name="address"
          placeholder="Enter Details of Delivery Address"
          type="text"
          required
          onChange={onChange}
        />
        <input
          name="city"
          placeholder="City"
          type="text"
          required
          onChange={onChange}
        />
        <Link to='/cart'>
          <button
            variant="outlined"
            className="btn btn-primary checkout__button"
          >
            Back to Cart
          </button>
        </Link>
        <button
          type="submit"
          variant="contained"
          className="btn btn-primary checkout__button"
          onClick={makePayment}
        >
          Make Payment
        </button>
      </form>
    </div>

    // cart summary
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};

export default connect(mapStateToProps)(AddressForm);