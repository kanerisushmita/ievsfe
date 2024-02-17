import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import { thunk } from "redux-thunk";
import { tokenExpirationMiddleware } from "../middleware/redux";

const persistConfig = {
  key: "user",
  storage,
};

const persistedReducer = persistReducer(persistConfig, userReducer);

const store = configureStore({
  reducer: {
    user: persistedReducer,
  },
  middleware: (getDefaultMiddleware) => [
  ...getDefaultMiddleware(),
  thunk,
  tokenExpirationMiddleware,
],
});

const enableReduxDevTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
if (enableReduxDevTools) {
  store.subscribe(() => enableReduxDevTools(store.getState()));
}

const persistor = persistStore(store, null, () => {
  store.dispatch({ type: "REHYDRATION_COMPLETE" });
});

export { store, persistor };
