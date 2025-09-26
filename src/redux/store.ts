import { configureStore } from "@reduxjs/toolkit";
import camperReducer from './slice/camperSlice';
import favoriteReducer from './slice/favoriteSlice';

export const store = configureStore({
    reducer: {
        campers: camperReducer,
        favorites: favoriteReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;