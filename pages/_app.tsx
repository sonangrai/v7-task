import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { theme } from "../styles/Theme";
import Global from "../styles/Global.styled";
import Router from "next/router";
import ProgressBar from "@badrap/bar-of-progress";
import { Provider } from "react-redux";
import { useEffect } from "react";
import "antd/dist/antd.css";

import store from "../redux/store";
import { loadUser } from "redux/actions/auth";

const progress = new ProgressBar({
  size: 2,
  color: "#d12828",
  className: "bar-of-progress",
  delay: 100,
});

Router.events.on("routeChangeStart", progress.start);
Router.events.on("routeChangeComplete", progress.finish);
Router.events.on("routeChangeError", progress.finish);

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const localAuth = localStorage.getItem("v7auth");
    if (localAuth) {
      console.log(localAuth);
      store.dispatch(loadUser(JSON.parse(localAuth)));
    }

    return () => {};
  }, []);

  return (
    <Provider store={store}>
      <Global />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;
