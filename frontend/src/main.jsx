import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import store from "./components/redux/store.js";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <Toaster position="top-center" reverseOrder={true}/>
      <App />
  
  </Provider>
);
