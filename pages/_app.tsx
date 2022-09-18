import "../styles/globals.css";
import type { AppProps } from "next/app";
import Appbar from "../components/Appbar";
import AppbarLink from "../components/AppbarLink";
import { FaGithub as GithubIcon } from "react-icons/fa";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="flex flex-col">
      <Appbar>
        <AppbarLink href="/">ホーム</AppbarLink>
        <AppbarLink href="https://forms.office.com/r/yeb9z3edZB">
          アンケート
        </AppbarLink>
        <AppbarLink href="https://github.com/s-uei/early-retirement-checker">
          <GithubIcon />
        </AppbarLink>
      </Appbar>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
