import React from 'react';
import ReactDOM from 'react-dom';
//import * as Sentry from "@sentry/browser";
 
import App from './App';
import * as serviceWorker from './serviceWorker';
 

// Sentry.init({
//   dsn: "https://83b53864ac264d05b63d456f15231d79@sentry.io/1504503"
// });
 

 ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
