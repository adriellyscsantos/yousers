import "../../styles/globals.css";
import type { AppProps } from "next/app";
import { AuthProvider } from "../context/auth";
import  Head  from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Yousers</title>
      </Head>
      <AuthProvider>
        <Component {...pageProps} />{" "}
      </AuthProvider>
    </>
  );
}
export default MyApp;
