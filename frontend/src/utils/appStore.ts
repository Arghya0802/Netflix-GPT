import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice"
import moviesReducer from "./movieSlice";
import { persistReducer, persistStore } from "redux-persist"
import storage from "redux-persist/lib/storage";

const persistConfig = {
    key: "root",
    storage,
};

const rootReducer = combineReducers({
    user: userReducer,
    movies: moviesReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const appStore = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== "production",
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
            },
        }),
})

// Infer the `RootState` and `AppDispatch` types from the store
export type RootState = ReturnType<typeof appStore.getState>;
export type AppDispatch = typeof appStore.dispatch;

export const persistor = persistStore(appStore)
export default appStore;