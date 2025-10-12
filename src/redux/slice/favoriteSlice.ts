import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { Camper } from "../../types/Campers";


interface FavoritesState {
    items: Camper[];
}
const initialState: FavoritesState = {
    items: [],
};
const favoriteSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        toggleFavorite: (state, action: PayloadAction<Camper>) => {
            const exists = state.items.find((c) => c.id === action.payload.id);
            if (exists) {
                state.items = state.items.filter((c) => c.id !== action.payload.id);
            } else {
                state.items.push(action.payload);
            }
        }

    },
});
export const { toggleFavorite} = favoriteSlice.actions;
export default favoriteSlice.reducer;