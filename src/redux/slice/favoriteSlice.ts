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
        addFavorite: (state, action: PayloadAction<Camper>) => {
            if (!state.items.find(c => c.id === action.payload.id)) {
                state.items.push(action.payload);
            }
        },
        removeFavorite: (state, action: PayloadAction<string>) => {
            state.items = state.items.filter(c => c.id !== action.payload);
        },
    },
});
export const { addFavorite, removeFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;