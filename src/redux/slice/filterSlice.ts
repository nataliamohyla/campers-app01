import { createSlice } from "@reduxjs/toolkit";
import type { Filter } from "../../types/Filters";
import type { PayloadAction } from "@reduxjs/toolkit";

interface FilterState {
    filters: Filter;
}
const initialState: FilterState = {
    filters: {},
};
const filterSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        setFilters: (state, action: PayloadAction<Filter>) => {
            state.filters = { ...state.filters, ...action.payload };
        },
        clearFilters: (state) => {
            state.filters = {};
        },
    },
});
export const { setFilters, clearFilters } = filterSlice.actions;
export default filterSlice.reducer;