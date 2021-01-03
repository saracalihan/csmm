import { applyMiddleware, compose, createStore } from "redux";
import { createBrowserHistory } from "history";
import { routerMiddleware } from "connected-react-router";
import thunk from "redux-thunk";
import { devToolsEnhancer } from "redux-devtools-extension";
import rootReducer from "./reducers/index";

const { REACT_APP_BASEPATH } = process.env;

export const history = createBrowserHistory({
  basename: REACT_APP_BASEPATH,
});

const configureStore = (preloadedState) => {
  const middlewares = [thunk, routerMiddleware(history)];
  const composed = [applyMiddleware(...middlewares)];

  if (process.env.NODE_ENV === "development") {
    if (window.__REDUX_DEVTOOLS_EXTENSION__) {
      composed.push(
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
          window.__REDUX_DEVTOOLS_EXTENSION__()
      );
    } else {
      composed.push(devToolsEnhancer({ realtime: true }));
      console.log(
        "%c Go to url for see redux actions: http://remotedev.io/local/ ",
        "background: #222; color: #bada55;  padding:3px 1px"
      );
    }
  }

  const store = createStore(
    rootReducer(history),
    preloadedState,
    compose(...composed)
  );

  return store;
};

export default configureStore;
