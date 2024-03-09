import SignupLayout from "@/Components/layouts/SignupLayout";
import Button from "@/Components/Button";
import RadioInput from "@/Components/RadioInput";
import { useEffect, useState } from "react";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import InputLine from "@/Components/InputLine";

const Index = () => {
  // --------------------------------------------VARIABLES
  const [selectedOption, setSelectedOption] = useState("company");
  const { data: session, status } = useSession();
  const [email, setEmail] = useState("");

  const router = useRouter();

  //-----------------------------------------------------------FUNCTIONS

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleEmailChange = (e) => setEmail(e.target.value);

  const handleSubmit = async () => {
    console.log(session?.user?.email);
    console.log(status);
    try {
      await axios.post("/api/register", {
        email: session?.user?.email || email,
        role: selectedOption, // Assuming selectedOption represents "Company or Talent" field
        // Other fields if needed
      });

      // Handle successful response
      router.push("/menu/dashboard");
    } catch (error) {
      // Handle error
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    console.log(session, "sessioin");
  }, [session]);

  //------------------------------------------------------------------USE EFFECTS

  return (
    <div className='h-full login justify-center px-3 flex space-y-10 flex-col items-center'>
      <div className='text-[#000000] mb-1 text-sm md:text-lg font-medium'>
        Are you a Company or Talent?
      </div>
      <div className='flex items-center'>
        <RadioInput
          name='answerOptions'
          value='company'
          label='Company'
          checked={selectedOption === "company"}
          onChange={handleOptionChange}
        />{" "}
        <RadioInput
          name='answerOptions'
          value='talent'
          label='Talent'
          className='ml-4'
          checked={selectedOption === "talent"}
          onChange={handleOptionChange}
        />
      </div>
      <InputLine
        value={email}
        onChange={handleEmailChange}
        placeholder={"Email"}
      />
      <div className='w-full mt-4'>
        <Button
          click={handleSubmit}
          styles={"hover:opacity-90 active:bg-gray-300 w-full mx-auto"}
          Action={"Continue"}
        />
      </div>
    </div>
  );
};

Index.getLayout = SignupLayout;
export default Index;
