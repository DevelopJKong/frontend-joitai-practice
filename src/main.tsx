import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { Provider } from "jotai";
import { DevTools } from "jotai-devtools";
import { mainStore } from "./atom/main.atom.ts";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={mainStore}>
      <DevTools isInitialOpen store={mainStore} />
      <App />
    </Provider>
  </React.StrictMode>
);
