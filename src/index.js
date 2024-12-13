import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import { Provider } from "react-redux";
import reducers from "./reducers";
import ThemeProvider from "./components/Theme/themeProvider";
import App from "./App";

//create the redux store
const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk)
);

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById("root")
);
