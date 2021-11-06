// import {createStore, applyMiddleware} from "redux";
// import logger from "redux-logger";
// import reduxThunk from "redux-thunk";
// import rootReducers from "./root-reducers";
// import {composeWithDevTools} from 'redux-devtools-extension'

// const store = createStore(rootReducers, composeWithDevTools(applyMiddleware(reduxThunk)));

// export default store;

import { configureStore } from "@reduxjs/toolkit";
import { myApi, authApi } from "../services/api";
import authSlice from "../slices/authSlice";

export default configureStore({
    reducer: {
        [myApi.reducerPath]: myApi.reducer,
        [authApi.reducerPath]: myApi.reducer,
        authSlice,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(myApi.middleware),
});
