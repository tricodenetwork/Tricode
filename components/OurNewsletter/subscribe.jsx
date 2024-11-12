import { useState } from "react";

export default function Subscribe() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(null); // For tracking success or error message

  const handleSubscribe = async () => {
    if (!email) {
      setStatus("Please enter a valid email.");
      return;
    }

    try {
      const response = await fetch("/api/post/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setStatus("Subscription successful!");
        setEmail(""); // Clear the email input field
      } else {
        setStatus("Subscription failed. Please try again.");
      }
    } catch (error) {
      console.error("Error subscribing:", error);
      setStatus("An error occurred. Please try again later.");
    }
  };

  return (
    <>
      <div className='flex flex-col px-3 md:p-[4vh] lg:py-[3vh] justify-center items-center gap-3'>
        <div className='text-center text-black text-xs md:text-2xl medium capitalize'>
          Subscribe to get the latest news about us
        </div>
        <div className='text-center text-zinc-500 text-[10px] mb-[20px] md:text-lg medium capitalize'>
          Please drop your email below to get daily update about what we do
        </div>
        <div className='flex flex-row h-[60px] mb-[31px] w-full md:w-[683px] pl-3 bg-none rounded-2xl border border-binance_green justify-center items-center gap-2 focus-within:ring-1 ring-binance_green'>
          <input
            className='w-full text-xs lg:text-base bg-transparent regular focus:outline-none border-none'
            type='email'
            placeholder='Enter Your Email Address'
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <button
            onClick={handleSubscribe}
            className='text-white h-[52px] hover:bg-binance_green/80 duration-300 px-5 mr-1 text-[10px] md:text-lg bg-binance_green regular rounded-2xl'
          >
            Subscribe
          </button>
        </div>
        {status && (
          <div
            className={`text-center text-sm ${
              status.includes("failed") ? "text-red-500 " : "text-green-500"
            }`}
          >
            {status}
          </div>
        )}
      </div>
    </>
  );
}
