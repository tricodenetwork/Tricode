import AuthComponent from "@/components/AuthComponent";
import Button from "@/components/Button";
import InputLine from "@/components/InputLine";
import LoginLayout from "@/components/layouts/LoginLayout";
import ShowHidePassword from "@/components/ShowHidePassword";
import { baseUrl } from "@/config/config";
import { Close } from "@mui/icons-material";
import { Checkbox } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import { signIn, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Index = () => {
  // --------------------------------------------VARIABLES
  const [checked, setChecked] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPasswordToggle, setShowPasswordToggle] = useState(false);
  const { data: session } = useSession();
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(null);
  const [emailError, setEmailError] = useState(null);

  const router = useRouter();
  const success = router?.query?.success;

  //-----------------------------------------------------------FUNCTIONS
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const showPassword = () => {
    setShowPasswordToggle(!showPasswordToggle);
  };

  const modal = () => {
    setTimeout(() => {
      setErr(null);
    }, 2500);
  };

  const validateEmail = (mail) => {
    // Regular expression for a simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValidEmail = emailRegex.test(mail);

    // Set emailError based on validation result
    setEmailError(isValidEmail ? null : "Invalid email address");
  };

  const handleEmailChange = (e) => {
    validateEmail(e.target.value); // Validate email on each change
    setEmail(e.target.value);
  };

  const handleSignIn = async (e) => {
    e.preventDefault();

    if (!emailError) {
      setLoading(true);
      // return;

      // Use NextAuth signIn function to trigger authentication
      const result = await signIn("credentials", {
        redirect: err == "Login Successful",
        email,
        password,
        callbackUrl: `${baseUrl}menu/dashboard`,
      });

      // Handle the result (e.g., redirect on success, show error on failure)
      if (result?.error) {
        // router.push("?success=false");
        console.error("Auth failed:", result);
        setErr("Invalid Details");

        setLoading(false);
      } else {
        setLoading(false);
        setErr("Login Successful");
        router.push("/menu/dashboard");
        console.log(result);
      }
      modal();
    }
  };

  //------------------------------------------------------------------USE EFFECTS
  useEffect(() => {
    console.log(email, password);
  }, [email, password]);
  return (
    <div className='relative  h-auto   scrollbar-hide flex flex-col justify-around items-center'>
      <div className='mt-5  lg:mt-0 z-50  flex flex-col items-center'>
        <AnimatePresence>
          {err && (
            <div className='bg-opacity-10   w-full z-50  flex justify-center items-center  h-full absolute top-0 left-0 '>
              <motion.div
                key='milestone'
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                onClick={() => setErr(null)}
                className='lg:w-[20vw] w-[50vw] h-[50vw] rounded-[10px] flex flex-col justify-center space-y-5 items-center  bg-binance_ash bg-opacity- text-red-600 lg:h-[15vw]'
              >
                {err == "Login Successful" ? (
                  <div
                    id='Image_div'
                    className='flex items-center justify-center max-w-max max-h-max relative'
                  >
                    <Image
                      width={75}
                      height={75}
                      className='z-10'
                      src='/assets/icons/Vector.png'
                      alt='Circle'
                    />
                    <Image
                      width={49}
                      height={33}
                      className='absolute'
                      src='/assets/icons/Vector-1.png'
                      alt='Checkmark'
                    />
                  </div>
                ) : (
                  <div className='w-[73.78px] h-[73.78px] flex items-center justify-center rounded-full border-red-500 border-2'>
                    <Close sx={{ color: "red" }} />
                  </div>
                )}
                <p className='text-white'>{err}</p>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        <h3>SIGN IN</h3>
        <div className='flex mt-[8px] mb-[15px] md:mt-[16px] md:mb-[30px] items-center w-full'>
          <p className=' mr-1 md:mr-3 member'>Not a member?</p>
          <Link href='/auth/register'>
            <p className='text-binance_green hover:underline register'>
              Register now!
            </p>
          </Link>
        </div>
      </div>
      <div className='w-[75%]  md:w-[487px] mx-auto relative h-[308px] md:h-[308px] flex flex-col justify-between shrink-0'>
        <div className='w-full'>
          {emailError && (
            <p className='text-red-500 light text-xs'>{emailError}</p>
          )}
          <InputLine
            onChange={handleEmailChange}
            placeholder={"johncena@gmail.com"}
          />
          <div className='w-full'>
            <InputLine
              onChange={(e) => setPassword(e.target.value)}
              placeholder={"Password*"}
              type={showPasswordToggle ? "text" : "password"}
            />
            <ShowHidePassword
              className='absolute ml-[-2.5rem] mt-[1.5rem]'
              onClick={showPassword}
              showPasswordToggle={showPasswordToggle}
            />
          </div>
        </div>
        <div className='flex relative bottom-[3vh] md:bottom-0  items-center '>
          <Checkbox
            sx={{ padding: 0 }}
            onChange={handleChange}
            checked={checked}
          />
          <p className='remember ml-2'>Remember me</p>
        </div>
        <div className=' w-full'>
          <Button
            isLoading={loading}
            click={handleSignIn}
            styles={
              "w-full hover:bg-whie  hover:text-binance_green duration-200 hover:border-binance_green mx-auto"
            }
            Action={"Sign in"}
          />
          <Link href='/auth/forgot-password'>
            <p className='register mt-[12px] hover:underline  text-binance_green text-center'>
              Forgot password?
            </p>
          </Link>
        </div>
      </div>
      <div className='mt-[50px]'>
        <p className='signin mb-3 text-center '>Or sign in with</p>
        <AuthComponent />
      </div>
    </div>
  );
};

Index.getLayout = LoginLayout;
export default Index;
