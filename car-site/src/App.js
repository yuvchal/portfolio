import logo from "./logo.svg";
import "./App.css";
import * as Msal from "msal";

function App(props) {
  const msalConfig = {
    auth: {
      clientId: "fd1fb936-7098-46ff-bd53-b62b405910ee",
      authority:
        "https://login.microsoftonline.com/44467e6f-462c-4ea2-823f-7800de5434e3",
    },
    cache: { cacheLocation: "localStorage" },
  };
  const msalInstance = new Msal.UserAgentApplication(msalConfig);
  const signIn = async () => {
    try {
      // Use MSAL to initiate the sign-in process
      const response = await msalInstance.loginPopup();

      // Handle the sign-in response
      console.log("User signed in:", response.account);
      // You can access user information in response.account
    } catch (error) {
      console.error("Sign-in error:", error);
    }
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload. test test team31
        </p>
        <a
          className="App-link"
          href="https://youtube.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <button onClick={signIn}>{}ayotest123</button>
    </div>
  );
}

export default App;
