import { Roboto_Flex } from "next/font/google";

const font = Roboto_Flex({
  subsets: ["cyrillic-ext", "latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

const useFonts = () => {
  return { font };
};

export default useFonts;
