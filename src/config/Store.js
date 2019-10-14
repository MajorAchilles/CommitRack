import { applyMiddleware, createStore, compose } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import AsyncStorage from "@react-native-community/async-storage";
import logger from "redux-logger";
import thunk from "redux-thunk";

import reducers from "./Reducers";

const persistConfig = {
    key: "root",
    storage: AsyncStorage,
    whitelist: []
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = createStore(
    persistedReducer,
    compose(
        applyMiddleware(thunk, logger)
    )
);

const persistor = persistStore(store);

export { store, persistor };
