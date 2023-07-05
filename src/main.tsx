import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { Provider } from "jotai";
import { DevTools } from "jotai-devtools";
import { mainStore } from "./atom/main.atom.ts";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider store={mainStore}>
        <ReactQueryDevtools initialIsOpen={false} position={"bottom-right"} />
        <DevTools isInitialOpen={false} store={mainStore} />
        <App />
      </Provider>
    </QueryClientProvider>
  </React.StrictMode>
);
