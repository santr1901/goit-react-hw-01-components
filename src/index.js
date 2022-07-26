import ReactDOM from "react-dom/client";
import React from 'react';
import App from 'App'
// import user from 'data/user.json';
// import data from 'data/data.json'
// import  Profile  from 'components/Profile';
// import Statistics from 'components/Statistics'

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(
  <React.StrictMode>
  <App />
  </React.StrictMode>
)