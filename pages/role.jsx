import SignupLayout from "@/Components/layouts/SignupLayout";
import Button from "@/Components/Button";
import RadioInput from "@/Components/RadioInput";
import { useState } from "react";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

const Index = () => {
  // --------------------------------------------VARIABLES
  const [selectedOption, setSelectedOption] = useState("company");
  const { data: session } = useSession();
  const router = useRouter();

  //-----------------------------------------------------------FUNCTIONS

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleSubmit = async () => {
    console.log("submitting");
    try {
      const response = await axios.post("/api/register", {
        email: session?.user?.email,
        role: selectedOption, // Assuming selectedOption represents "Company or Talent" field
        // Other fields if needed
      });

      // Handle successful response
      console.log("Response:", response.data);
      router.push("/menu/dashboard");
    } catch (error) {
      // Handle error
      console.error("Error:", error);
    }
  };

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
