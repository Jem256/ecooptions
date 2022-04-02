import React, { useState } from "react";
import "./Checkout.css";
import {
  Stepper,
  Step,
  StepLabel,
  CircularProgress,
  Divider,
} from "@mui/material";
// import { Link, useHistory } from 'react-router-dom';
import AddressForm from "./AddressForm";
import PaymentForm from "./PaymentForm";

const steps = ["Delivery address", "Payment details"];

function Checkout() {
  const [activeStep, setActiveStep] = useState(0);
  const [shippingData, setShippingData] = useState({});

  const nextStep = () => setActiveStep((prevActiveStep) => prevActiveStep + 1);
  const backStep = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);

  const test = (data) => {
    setShippingData(data);

    nextStep();
  };

  const Form = () =>
    activeStep === 0 ? (
      <AddressForm
        nextStep={nextStep}
        setShippingData={setShippingData}
        test={test}
      />
    ) : (
      <PaymentForm
        nextStep={nextStep}
        backStep={backStep}
        shippingData={shippingData}
      />
    );

  return (
    <>
      <div className="toolbar" />
      <div className="layout">
        <div className="paper">
          <h2 align="center">Checkout</h2>
          {setActiveStep ? (
            <AddressForm></AddressForm>
          ) : (
            <PaymentForm></PaymentForm>
          )}
        </div>
      </div>
    </>
  );
}

export default Checkout;
