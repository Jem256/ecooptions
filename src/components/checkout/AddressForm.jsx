import React, { useState, useEffect } from "react";
import "./AddressForm.css";
import { defaultFlutterConfig } from '../../flutterConfig';
import { useSelector } from 'react-redux';
import FlutterwaveCheckout from './FlutterwaveCheckout';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import db from '../../firebase';

const AddressForm = () => {
    const [totalPrice, setTotalPrice] = useState(0);

    const cart = useSelector((state) => state.shop.cart);

    useEffect(() => {
        let price = 0;

        cart.forEach((item) => {
            price += item.qty * item.price;
        });

        setTotalPrice(price);
    }, [cart, totalPrice, setTotalPrice]);

    const initialFormData = {
        email: '',
        firstName: '',
        lastName: '',
        phoneNumber: '',
        address: '',
        city: '',
    };

    const [formData, setFormData] = useState(initialFormData);
    const [readyToCheckout, setReadyToCheckout] = useState(false);
    const [loading, setLoading] = useState(false);

    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const makePayment = () => {
      setReadyToCheckout(true);
    };

    const data = () => {
        if (readyToCheckout) {
            addDoc(collection(db, 'address'), {
                firstName: formData.firstName,
                lastName: formData.lastName,
                email: formData.email,
                phoneNumber: formData.phoneNumber,
                address: formData.address,
                city: formData.city,
                timestamp: serverTimestamp(),
            });
        }
    };

    const renderCheckoutDetails = () => {
        if (readyToCheckout) {
            const config = {
                ...defaultFlutterConfig,
                amount: totalPrice,
                customer: {
                    email: formData.email,
                    phoneNumber: formData.phoneNumber,
                    name: formData.firstName,
                },
            };

            return <FlutterwaveCheckout config={config} />;
        } else {
            return (
                <div className='addressForm'>
                    <h2 className='header'>Billing Details</h2>
                    <form onSubmit={makePayment}>
                        <input
                            name='firstName'
                            placeholder='First Name'
                            type='text'
                            required
                            onChange={onChange}
                        />
                        <input
                            name='lastName'
                            placeholder='Last Name'
                            type='text'
                            required
                            onChange={onChange}
                        />
                        <input
                            name='email'
                            placeholder='Email'
                            type='email'
                            required
                            onChange={onChange}
                        />
                        <input
                            name='phoneNumber'
                            placeholder='Phone Number'
                            type='text'
                            required
                            onChange={onChange}
                        />
                        <input
                            name='address'
                            placeholder='Enter Details of Delivery Address'
                            type='text'
                            required
                            onChange={onChange}
                        />
                        <input
                            name='city'
                            placeholder='City'
                            type='text'
                            required
                            onChange={onChange}
                        />
                        <button
                            type='submit'
                            variant='contained'
                            className='btn btn-primary'
                        >
                            Make Payment
                        </button>
                    </form>
                    {/* <div className="addressForm_btn" style={{ display: "flex", justifyContent: "flex-end" }}>
            <button
              variant="outlined"
              className="btn btn-primary addressForm__cart"
              onClick={handleClick}
            >
              Back to Cart
            </button>
          </div> */}
                </div>
            );
        }
    };

    return (
        <div>
            {data()}
            {renderCheckoutDetails()}
        </div>
    );
};

export default AddressForm;