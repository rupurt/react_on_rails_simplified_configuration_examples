import React from "react";
import ReactDOM from "react-dom";
import styles from "./app.css";

const root = document.getElementById("main");

const App = () =>
  <div className={ styles.app }>
    <h1>
      Howdy, I'm a React Component loaded directly from `/public/assets`
    </h1>

    <p>
      Using the <a href="https://www.npmjs.com/package/webpack-sprockets-rails-manifest-plugin">webpack-sprockets-rails-manifest-plugin</a>
    </p>
  </div>

ReactDOM.render(
  <App />,
  root
);
