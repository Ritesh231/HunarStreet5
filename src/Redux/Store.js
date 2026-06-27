import { configureStore } from "@reduxjs/toolkit";
import { api } from "./Api.js"; // adjust this import path to match where you place api.js

export const store = configureStore({
    reducer: {
        [api.reducerPath]: api.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api.middleware),
});

export default store;