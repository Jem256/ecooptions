import {useEffect} from 'react';
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";
import { useSelector } from "react-redux";
import {useHistory} from "react-router"
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import db from '../../firebase';

function FlutterwaveCheckout(props) {
    const history = useHistory();
    const cart = useSelector((state) => state.shop.cart);
    const emptyCart = useSelector((state) => state.shop.state);
    const handleFlutterPayment = useFlutterwave(props.config);
    useEffect(() => {
      handleFlutterPayment({
        callback: (response) => {
          console.log(response);
          
          if (response.status === "successful") {
            // TODO: Look at response data and call firebase api
            addDoc(collection(db, 'orders'), {
              customer: response.customer.name,
              email: response.customer.email,
              phoneNumber: response.customer.phone_number,
              transactionId: response.transaction_id,
              transactionReference: response.flw_ref,
              productId: cart.map((item) => item.id),
              productTitle: cart.map((item) => item.title),
              productQty: cart.map((item) => item.qty),
              timestamp: serverTimestamp(),
            })
            emptyCart();
            history.push("/");
            closePaymentModal();
            
          } else {
            // take them to failure route
            history.push("/checkout");
          }
          
        },
        onClose: () => {
            // redirect them back to checkout form
            history.push("/checkout");
        }
      })
    });
    return null;

}

export default FlutterwaveCheckout;