import { AppProps } from "next/app";
import { QueryClientProvider } from "react-query";
import { queryClient } from "services/queryClient";
import GlobalStyles from "styles/GlobalStyles";
import { ReactQueryDevtools } from 'react-query/devtools';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
      <GlobalStyles />
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default MyApp;
