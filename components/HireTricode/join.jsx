import useFonts from "@/hooks/useFonts";
import Image from "next/image";
import Link from "next/link";

export default function JoinTricode({ mobile }) {
  const { font } = useFonts();
  return (
    <section
      className='py-5 w-[83%]  mx-auto flex flex-row-reverse  relative lg:py-[72px]  overflow-hidden justify-between items-center'
      id='join'
    >
      <div className='flex-col justify-start items-center lg:items-start gap-5 inline-flex'>
        <h4
          style={font.style}
          className='text-app_black text-[56px] font-bold tracking-wide'
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
        <Link
          href={"/"}
          className='flex hover:-translate-x-2 duration-150 gap-4 items-center'
        >
          <p style={font.style} className='text-[#2563EB]  text-sm font-medium'>
            See how it helped others
          </p>
          <Image
            src={"/assets/icons/right_arr_blue.svg"}
            width={24}
            height={24}
            alt='arr'
          />
        </Link>
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
