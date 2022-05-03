import logo from './images/logoEC.png'

export const defaultFlutterConfig = {
  // This should go to environment
  public_key: process.env.REACT_APP_FLUTTER_PUBLIC_KEY,
  tx_ref: Date.now(),
  currency: "UGX",
  payment_options: "mobilemoney,card,ussd",
  redirect_url: "",
  customizations: {
    title: "Eco Options",
    description: "Payment for items in cart",
    logo: logo,
  },
};
