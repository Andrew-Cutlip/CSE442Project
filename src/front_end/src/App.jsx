import './App.css';
import React, {useEffect, useState} from "react"
import Page from "./components/Page"
import Header from "./components/Header";


function App() {

    const [pageName, setPageName] = useState("");

    const handlePageSwitch = (name) => {
        setPageName(name);
    };
    // Changes page title
    useEffect(() => {
            document.title = "Travelon " + pageName;
            }, [pageName]);
    const links = [
        {
            onclick: handlePageSwitch,
            text: "Home",
            path: "home",
            key: 0
        },
        {
            onclick: handlePageSwitch,
            text: "Login",
            path: "login",
            key: 1
        },
        {
            onclick: handlePageSwitch,
            text: "Register",
            path: "register",
            key: 2
        },
        {
            onclick: handlePageSwitch,
            text: "Account",
            path: "account",
            key: 2
        },
    ];
  return (
      <>
        <div className="App">
            <Header links={links}></Header>
          <Page name={pageName} onclick={handlePageSwitch}></Page>
        </div>
      </>
  );
}

export default App;