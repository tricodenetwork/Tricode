import useFonts from "@/hooks/useFonts";
import Image from "next/image";
import Link from "next/link";
import BlueLink from "../BlueLink";

export default function JoinTricode({ mobile }) {
  const { font } = useFonts();
  return (
    <section
      className='py-5 w-[83%]  mt-6 lg:mt-0 mx-auto flex flex-col lg:flex-row-reverse  relative lg:py-[72px]  overflow-hidden justify-between items-center'
      id='join'
    >
      <div className='flex-col justify-start items-center lg:items-start gap-5 inline-flex'>
        <h4
          style={font.style}
          className='text-app_black text-3xl lg:text-[56px] leading-normal font-bold tracking-wide'
        >
          Join Tricode
        </h4>
        <p
          style={font.style}
          className='text-[#475569] text-xs lg:text-lg text-center lg:text-left leading-loose tracking-tight'
        >
          Etiam condimentum duis molestie malesuada volutpat pellentesque sed.  
          <br /> Ornare suspendisse ut ac neque lobortis sed tincidunt. Mi
          tempus quis
          <br />
          massa tellus imperdiet aenean nulla id.
        </p>
        <BlueLink href={"/"} text={"See how it helped others"} />
      </div>
      <div className=' w-[70vw]  h-[209px] lg:w-[600px] sm:h-[400px]  lg:h-[464px] relative'>
        <Image
          fill
          className='object-cover'
          src='/assets/images/join.png'
          alt='bro'
        />
      </div>
    </section>
  );
}
