import { AuthContextProvider } from "@/context/Auth.context";
import "@/styles/globals.css";
import "remixicon/fonts/remixicon.css";

export default function App({ Component, pageProps }) {
  return (
    <AuthContextProvider>
      <Component {...pageProps} />
    </AuthContextProvider>
  );
}
