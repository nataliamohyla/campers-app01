import { configureStore } from "@reduxjs/toolkit";
import camperReducer from './slice/camperSlice';
import favoriteReducer from './slice/favoriteSlice';
import filtersReducer from './slice/filterSlice';

export const store = configureStore({
    reducer: {
        campers: camperReducer,
        favorites: favoriteReducer,
        filters: filtersReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;