import { useEffect } from "react";
import WebApp from "@twa-dev/sdk";

function App() {
  useEffect(() => {
    WebApp.ready();
    WebApp.setHeaderColor("secondary_bg_color");
  }, []);

  return (
    <div
      className="App"
      style={{
        padding: "20px",
        color: WebApp.themeParams.text_color,
        backgroundColor: WebApp.themeParams.bg_color,
      }}
    >
      <h1>Mining Game</h1>
      <p>Coming soon...</p>
    </div>
  );
}

export default App;
