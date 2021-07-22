import { AuthProvider } from "hooks/useAuth";
import { AppProps } from "next/app";
import GlobalStyles from "styles/GlobalStyles";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
      <GlobalStyles />
    </ AuthProvider>
  );
}

export default MyApp;
