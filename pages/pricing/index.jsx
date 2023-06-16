import React, { useState } from "react";
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";
import { modifyClef } from "@/store/slice-reducers/Web3slice";
import { useSelector } from "react-redux";
import axios from "axios";
typeof window !== "undefined" &&
  console.log(window.innerWidth, window.innerHeight);

const Pricing = () => {
  const [isloading, setIsloading] = useState(false);

  const { email, phone, name } = useSelector((state) => state.Web3);

  const config = {
    public_key: "FLWPUBK_TEST-fae61d03498ae9059ded435a0eb17bf3-X",
    tx_ref: Date.now(),
    amount: 200,
    currency: "NGN",
    payment_options: "card,mobilemoney,ussd",
    customer: {
      email: email,
      phone_number: phone,
      name: name,
    },
    customizations: {
      title: "Beginner Option",
      description: "Payment for items in cart",
      logo: "https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg",
    },
  };

  const handleFlutterPayment = useFlutterwave(config);

  const purchaseClef = async (url) => {
    setIsloading(true);

    try {
      const res = await axios.post(
        url,
        { gmail: email },
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
      console.log(res);
      console.log("files recieved on the server");
    } catch (err) {
      if (err.status === 500) {
        console.log("there was a problem with the server");
      } else {
        console.log(err || "error from post");
      }
    }
    setIsloading(false);
  };

  return (
    <div
      style={{
        background: "url(/assets/images/pri.svg)",
        backgroundSize: "cover",
        // backgroundPosition: "center",
        width: "100%",
        height: "100%",
        position: "relative",
      }}
      className='price_section flex justify-around  bg-slate-300'
    >
      <div className='price_box'>
        <button
          className=''
          onClick={() => {
            handleFlutterPayment({
              callback: (response) => {
                purchaseClef("http://localhost:3000/api/subscription/beginner");
                console.log(response);
                closePaymentModal(); // this will close the modal programmatically
              },
              onClose: () => {},
            });
          }}
        >
          Beginner $4.99
        </button>
        <ul>
          <p>50 clef points for sure</p>
          <li>50 clef points </li>
        </ul>
        <h1 className='price text-[55px]'>
          + <i className='text-[#adf802] mr-2'>𝄢</i>50
        </h1>
      </div>
      <div className='price_box'>
        <button
          onClick={() => {
            handleFlutterPayment({
              callback: (response) => {
                purchaseClef(
                  "http://localhost:3000/api/subscription/intermediate"
                );
                console.log(response);
                closePaymentModal(); // this will close the modal programmatically
              },
              onClose: () => {},
            });
          }}
          className=''
        >
          Intermediate $11.99
        </button>
        <ul>
          <li>150 clef points </li>
          <li>ability to upload your samples</li>
        </ul>
        <h1 className='price text-[55px]'>
          + <i className='text-[#adf802] mr-2'>𝄢</i>150
        </h1>
      </div>
      <div className='price_box'>
        <button
          onClick={() => {
            handleFlutterPayment({
              callback: (response) => {
                purchaseClef("http://localhost:3000/api/subscription/advanced");
                console.log(response);
                closePaymentModal(); // this will close the modal programmatically
              },
              onClose: () => {},
            });
          }}
          className=''
        >
          Advanced $19.99
        </button>
        <ul>
          <li>150 clef points </li>
          <li>ability to upload your samples</li>
          <li>AI image generation for sample cover</li>
        </ul>
        <h1 className='price text-[55px]'>
          + <i className='text-[#adf802] mr-2'>𝄢</i>500
        </h1>
      </div>
    </div>
  );
};
export default Pricing;
