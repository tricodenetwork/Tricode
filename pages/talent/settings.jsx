import Toggle from "@/chest/buttons/toggle";
import TalentLayout from "@/chest/layouts/TalentLayout";
import Image from "next/image";

function Setting() {
  return (
    <section className=' '>
      <div className='md:w-[60%] m-auto my-6'>
        <h2 className=' text-xl font-bold mb-4'>
          Customize various aspects of your TRICODE {`<Dev/>`} Network
          experience to suit your preferences.
        </h2>
        <div>
          <div className=' flex gap-4  items-center my-4'>
            <Toggle func={() => {}} />
            <span className=' text-gray-500'>Change theme color</span>
          </div>
          <div className=' flex gap-4  items-center my-4'>
            <Toggle func={() => {}} />
            <span className=' text-gray-500'>Change time zone</span>
          </div>
          <div className=' flex gap-4  items-center my-4'>
            <Toggle func={() => {}} />
            <span className=' text-gray-500'>Mute notifications</span>
          </div>

          <div className=' flex gap-4  items-center my-4'>
            <Toggle func={() => {}} />
            <span className=' text-gray-500'>Profile upgrade</span>
          </div>
        </div>

        <h2 className=' text-xl font-bold my-6'>Please close my account</h2>
        <p>
          Once your account is closed all of your information including the
          details of all of your projects will be permanently deleted.
        </p>
        <h2 className=' text font-bold my-6'>
          Please select the main reason for closing your account (Optional)
        </h2>

        <div>
          <select className=' text-gray-400  w-full border-b py-4'>
            <option> I&apos;m not using this account anymore</option>
          </select>

          <div className='flex gap-2 my-4'>
            <input type='checkbox' />
            <span>
              Yes, I want to permanently close my Fix my build account and
              delete my data.
            </span>
          </div>

          <button className='px-8 p-2 border-binance_green text-binance_green border rounded-full my-4'>
            Close your account
          </button>
        </div>
      </div>
    </section>
  );
}

Setting.getLayout = function getLayout(page) {
  return <TalentLayout>{page}</TalentLayout>;
};
export default Setting;
