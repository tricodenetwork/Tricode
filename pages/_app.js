import "@/styles/globals.css";
import Head from "next/head";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider } from "@emotion/react";
import theme from "../config/theme";
import createEmotionCache from "../config/createEmotionCache";
import { wrapper } from "../store/store";
import { Provider } from "react-redux";
import { SessionProvider } from "next-auth/react";
import "react-chat-elements/dist/main.css";
import Modal from "react-modal";
import { useEffect } from "react";

Modal.setAppElement("#__next");

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

function App({ Component, ...rest }) {
  const { store, props } = wrapper.useWrappedStore(rest);

  const {
    emotionCache = clientSideEmotionCache,
    pageProps: { session, ...pageProps },
  } = props;

  const Layout = ({ Component, pageProps }) => {
    if (Component.getLayout) {
      return Component.getLayout(<Component {...pageProps} />);
    } else {
      return <Component {...pageProps} />;
    }
  };

  useEffect(() => {
    // Clean up function to be called on component unmount
    return () => {
      Modal.setAppElement(null); // Set app element back to null when component unmounts
    };
  }, []);

  return (
    <SessionProvider session={session}>
      <Provider store={store}>
        <CacheProvider value={emotionCache}>
          <ThemeProvider theme={theme}>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon.*/}
            <CssBaseline />
            <Head>
              <title>Tricode Remote Workstation</title>
            </Head>
            <Layout Component={Component} pageProps={pageProps} />
          </ThemeProvider>
        </CacheProvider>
      </Provider>
    </SessionProvider>
  );
}

export default App;
