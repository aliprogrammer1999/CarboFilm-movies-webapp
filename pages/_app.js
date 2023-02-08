import { AuthContextProvider } from "@/context/Auth.context";
import "@/styles/globals.css";
import "remixicon/fonts/remixicon.css";
import "react-toastify/dist/ReactToastify.css";

export default function App({ Component, pageProps }) {
  return (
    <AuthContextProvider>
      <Component {...pageProps} />
    </AuthContextProvider>
  );
}
