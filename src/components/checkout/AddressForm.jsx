import React from 'react';
import { Grid } from '@mui/material';
import { useForm, FormProvider } from 'react-hook-form';
import { Link } from 'react-router-dom';
import './AddressForm.css'
// import { db } from '../../firebase'
// import firebase from 'firebase'

const AddressForm = () => {
  const { register } = useForm();

  return (
    <div className='addressForm'>
      <h5 className='header' gutterBottom>Delivery Address</h5>
      <form >
        <input 
          name='firstNamme'
          placeholder='First Name' 
          type="text" 
          {...register('firstName', { required: true })}
        />
        <input 
          name='lastNamme'
          placeholder='Last Name' 
          type="text" 
          {...register('lastName', { required: true })}
        />
        <input 
          name='email'
          placeholder='Email' 
          type="email" 
          {...register('email', { required: true })}
        />
        <input 
          name='phoneNumber'
          placeholder='Phone Number' 
          type="text" 
          {...register('phoneNumber', { required: true })}
        />
        <input 
          name='address'
          placeholder='Enter Details of Delivery Address' 
          type="text" 
          {...register('address', { required: true })}
        />
        <input 
          name='city'
          placeholder='City' 
          type="text" 
          {...register('city', { required: true })}
        />
      </form>
      <br />
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <button component={Link} variant="outlined" to="/cart" className='btn btn-primary checkout__button'>Back to Cart</button>
        <button type="submit" variant="contained" className='btn btn-primary checkout__button'>Next</button>
      </div>

    </div>
  );
};

export default AddressForm;
