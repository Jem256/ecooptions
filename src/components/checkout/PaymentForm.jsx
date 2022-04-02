import React from 'react';
import './PaymentForm.css'
import { useFlutterwave, closePaymentModal } from 'flutterwave-react-v3';

function PaymentForm() {
  const config = {
    public_key: 'FLWPUBK_TEST-9b40f2e0444437a3dd56b2d0ddfea493-X',
    tx_ref: Date.now(),
    amount: 100,
    currency: 'UGX',
    payment_options: 'mobilemoney,card,ussd',
    customer: {
      email: 'user@gmail.com',
      phonenumber: '0761297958',
      name: 'jemimah nagasha',
    },
    customizations: {
      title: 'my Payment Title',
      description: 'Payment for items in cart',
      logo: 'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
    },
  };

  const handleFlutterPayment = useFlutterwave(config);

  return (
    <div className="funds">
     <h1>Hello Test user</h1>

      <button
        className='btn btn-primary'
        onClick={() => {
          handleFlutterPayment({
            callback: (response) => {
               console.log(response);
                closePaymentModal() // this will close the modal programmatically
            },
            onClose: () => {},
          });
        }}
      >
        Payment with React hooks
      </button>
    </div>
  );
}

export default PaymentForm