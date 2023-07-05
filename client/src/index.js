import React from 'react';
import ReactDOM from "react-dom/client";
import "./index.css"
import { Provider } from 'react-redux';
import store from './store';
import App from './App';
const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(
  <React.StrictMode>
    <Provider store={store}>
      <div className="bg-[#10143d] font-serif">
      <App/>
      </div>
    </Provider>
  </React.StrictMode>,
);
