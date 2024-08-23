import { useRouter } from "next/router";

export function BackButton(params) {
  const router = useRouter();
  return (
    <button
      onClick={() => router.back()}
      className='  border-binance_green light text-binance_green hover:bg-binance_green hover:text-white duration-300 h text-xs  text-center px-9 py-3 rounded-[50px]   border'
    >
      Back
    </button>
  );
}
