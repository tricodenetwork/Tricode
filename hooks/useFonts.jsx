import { Roboto_Flex, Poppins } from "next/font/google";

const font = Roboto_Flex({
  subsets: ["cyrillic-ext", "latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});
const poppins = Poppins({
  subsets: ["devanagari", "latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const useFonts = () => {
  return { font, poppins };
};

export default useFonts;
