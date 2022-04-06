import React, { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import "./AddressForm.css";
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";
import { getBasketTotal } from "../../reducer";
import { defaultFlutterConfig } from "../../flutterConfig";
import { useStateValue } from "../../StateProvider";
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import db from '../../firebase'
// import emailjs from '@emailjs/browser'


const AddressForm = () => {
  const initialFormData = {
    email: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    city: "",
  };

  const { register } = useForm();
  const [{ basket }, dispatch] = useStateValue();
  const [formData, setFormData] = useState(initialFormData);
  const [flutterConfig, setflutterConfig] = useState(defaultFlutterConfig);

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // const form = useRef();

  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs.sendForm('service_8we25mm', 'template_9rzwtnp', form.current, '0fSca5SaAUtaCf93w')
  //     .then((result) => {
  //       console.log(result.text);
  //     }, (error) => {
  //       console.log(error.text);
  //     });
  // }

  async function addData(){
    await addDoc(collection(db, 'orders'), {
      basket: basket,
      customer: formData.firstName,
      email: formData.email,
      phoneNumber: formData.phoneNumber,
      address: formData.address,
      city: formData.city,
      timestamp: serverTimestamp()
    })
  }

  const emptyCart = () => {
        dispatch({
            type: 'EMPTY_BASKET',
            basket: basket,
        })
  }

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

    // let paymentSuccessfull = false;

    handleFlutterPayment({
      callback: (response) => {
        console.log(response);    

        closePaymentModal(); // this will close the modal programmatically
      },
      onClose: () => {}
    }).then(addData())
    
  };

  const handleFlutterPayment = useFlutterwave(flutterConfig);


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
