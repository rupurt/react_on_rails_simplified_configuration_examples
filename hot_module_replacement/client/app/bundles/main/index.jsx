import React from "react";
import ReactDOM from "react-dom";
import { AppContainer } from "react-hot-loader";
import App from "./app";

const root = document.getElementById("main");

ReactDOM.render(
  <AppContainer>
    <App />
  </AppContainer>,
  root
);

if (module.hot) {
  module.hot.accept("./app", () => {
    // eslint-disable-next-line global-require
    const NextApp = require("./app").default;

    ReactDOM.render(
      <AppContainer>
        <NextApp />
      </AppContainer>,
      root
    );
  });
}
