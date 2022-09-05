import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import "../../styles/globals.css";
import "../assets/css/style.scss"
import LayoutPage from "../layout/Layout";
import {appWithTranslation} from 'next-i18next'
import '../i18n/i18n'
import { useEffect, useState } from "react";
import { store } from "../redux/app/store";


function MyApp({ Component, pageProps }: AppProps) {
  const [showChild, setShowChild] = useState(false);
  useEffect(() => {
    setShowChild(true);
  }, []);

  if (!showChild) {
    return null;
  }
  if (typeof window === 'undefined') {
    return <></>;
  } else {
  return (
    <Provider store={store}>
      <LayoutPage> 
        <Component {...pageProps} />
      </LayoutPage>
    </Provider>
  );
  }
}

export default appWithTranslation(MyApp);
