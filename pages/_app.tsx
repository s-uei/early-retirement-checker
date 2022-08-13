import "../styles/globals.css";
import type { AppProps } from "next/app";
import Appbar from "../components/Appbar";
import AppbarLink from "../components/AppbarLink";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="flex flex-col">
      <Appbar>
        <AppbarLink href="/">ホーム</AppbarLink>
        <AppbarLink href="/">アンケート</AppbarLink>
      </Appbar>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
