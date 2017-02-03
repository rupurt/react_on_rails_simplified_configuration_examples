import React from "react";
import styles from "./app.css";

const App = () =>
  <div className={ styles.app }>
    <h1>
      Hi, I'm a React Component with HMR loaded from the path `/assets` @ the dev server
    </h1>
  </div>

export default App;
