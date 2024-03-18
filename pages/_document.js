import { Html, Main, NextScript } from "next/document";
import Head from "next/head";

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <title>Tricode Remote Workstation </title>
        <meta
          name='description'
          content="As a distinguished Software and Hardware development firm, we stand prepared to address all your technological requirements. Our expertise spans from crafting mobile applications to developing sophisticated websites and robust software programs. Simply articulate your vision, and we'll transform it into reality with our adept team of professionals."
        />
      </Head>
      <body className='m-0 p-0'>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
