import React from "react";
import {
  useFlutterwave,
  closePaymentModal,
  FlutterWaveButton,
} from "flutterwave-react-v3";
import Head from "next/head";
export default function App() {
  const config = {
    public_key: "FLWPUBK-a2ee7ff084c43ad4ad6fefe83df45f22-X",
    tx_ref: Date.now(),
    amount: 100,
    currency: "USD",
    payment_options: "card,mobilemoney,ussd,googlepay,applepay,barter,account",
    customer: {
      email: "user@gmail.com",
      phone_number: "070********",
      name: "john doe",
    },
    customizations: {
      title: "my Payment Title",
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

  const handleFlutterPayment = useFlutterwave(config);

  return (
    <div className='flex min-h-screen items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8'>
      <div className='w-full max-w-md space-y-8'>
        <div>
          <h2 className='mt-6 text-center text-5xl font-bold tracking-tight text-primary-foreground'>
            Gift for a Laptop
          </h2>
          <p className='mt-2 text-center text-sm text-muted-foreground'>
            Help provide a laptop to a Software Engineer.
          </p>
        </div>
        <div className='space-y-6'>
          <div>
            <p className='font-semibold'>Name</p>
            <input
              id='name'
              name='name'
              type='text'
              autoComplete='name'
              required
              className='mt-1 rounded-md py-3 px-2 block w-full'
              placeholder='John Doe'
            />
          </div>
          <div>
            <p className='font-semibold'>Email address</p>
            <input
              id='email'
              name='email'
              type='email'
              autoComplete='email'
              required
              className='mt-1 rounded-md py-3 px-2 block w-full'
              placeholder='you@example.com'
            />
          </div>

          <div>
            <button
              onClick={(e) => {
                console.log("hello");

                handleFlutterPayment({
                  callback: (response) => {
                    console.log(response);
                    // closePaymentModal(); // this will close the modal programmatically
                  },
                  onClose: () => {},
                });
              }}
              className='w-full bg-slate-950 active:bg-opacity-50 rounded-sm text-white py-3'
            >
              Donate
            </button>
            <FlutterWaveButton {...fwConfig} />
          </div>
        </div>
      </div>
    </div>
  );
}
