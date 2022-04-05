export const defaultFlutterConfig = {
  // This should go to environment
  public_key: process.env.REACT_APP_FLUTTER_PUBLIC_KEY,
  tx_ref: Date.now(),
  currency: "UGX",
  payment_options: "mobilemoney,card,ussd",
  customizations: {
    title: "my Payment Title",
    description: "Payment for items in cart",
    logo: "https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg",
  },
};
