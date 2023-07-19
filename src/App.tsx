import { BrowserRouter } from "react-router-dom";
import "./App.css";

import { RouterConfig } from "./router/RouterConfig";

function App() {
  return (
    <>
      <BrowserRouter>
        <RouterConfig />
      </BrowserRouter>
    </>
  );
}

export default App;
