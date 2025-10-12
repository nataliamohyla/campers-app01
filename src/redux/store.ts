import { configureStore  } from "@reduxjs/toolkit";
import camperReducer from './slice/camperSlice';
import favoriteReducer from './slice/favoriteSlice';
import filtersReducer from './slice/filterSlice';
import {persistReducer, persistStore} from "redux-persist";
import storage from "redux-persist/lib/storage";




const favoritePersistConfig = {
key: 'favorite',
storage,
};
const persistedFavoriteReducer = persistReducer(favoritePersistConfig, favoriteReducer);

export const store = configureStore({
    reducer: {
        campers: camperReducer,
        favorites: persistedFavoriteReducer,
        filters: filtersReducer,
    },
     middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE', 'persist/PAUSE', 'persist/FLUSH', 'persist/PURGE', 'persist/REGISTER'],
      },
    }),
});
export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;