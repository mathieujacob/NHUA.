import React from "react";
import "../App.css";
import {useTheme } from "./../ThemeContext";

const Page = () => {
    const { theme, setTheme } = useTheme();
    return (
      <div>
        {/* <h1>{theme}</h1> */}
        <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
          {theme === "dark" ? <img src="/images/watermark.png" width="30" alt="logo"/> : <img src="/images/watermarkblack.png" width="30" alt="logo"/>}
        </button>
      </div>
    );
  };

  export default Page;
