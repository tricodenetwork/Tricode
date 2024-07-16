import MenuLayout from "@/components/layouts/MenuLayout";
import { FlutterWaveButton, closePaymentModal } from "flutterwave-react-v3";
const config = {
  public_key: "FLWPUBK_TEST-fae61d03498ae9059ded435a0eb17bf3-X",
  tx_ref: Date.now(),
  amount: 100,
  currency: "NGN",
  payment_options: "card,mobilemoney,ussd",
  customer: {
    email: "user@gmail.com",
    phone_number: "070********",
    name: "john doe",
  },
  customizations: {
    title: "My store",
    description: "Payment for items in cart",
    logo: "https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg",
  },
};

const fwConfig = {
  ...config,
  text: "Pay with Flutterwave!",
  callback: (response) => {
    console.log(response);
    closePaymentModal(); // this will close the modal programmatically
  },
  onClose: () => {},
};
const Payments = () => {
  // --------------------------------------------VARIABLES

  //-----------------------------------------------------------FUNCTIONS

  //------------------------------------------------------------------USE EFFECTS

  return (
    <>
      <div className="h-full flex justify-center items-center">Paymentsss</div>
      <FlutterWaveButton {...fwConfig} />
    </>
  );
};

Payments.getLayout = function getLayout(page) {
  return <MenuLayout>{page}</MenuLayout>;
};
export default Payments;
