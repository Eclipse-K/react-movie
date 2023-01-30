import { createRoot } from "react-dom/client";
import App from "./components/App";
import { LocaleProvider } from "./Context/LocaleContext";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <LocaleProvider defaultValue="ko">
    <App />
  </LocaleProvider>
);
