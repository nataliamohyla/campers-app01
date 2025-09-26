import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { getCampers } from '../../api/api';
import type { Camper } from '../../types/Campers';
import type { Filter } from '../../types/Filters';

interface CampersState {
    items: Camper[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}
const initialState: CampersState = {
    items: [],
    status: 'idle',
    error: null,
};
export const fetchCampers = createAsyncThunk('campers/fetchCampers', async ({ filters, page }: { filters?: Filter;  page?: number}) => {
    const respons = await getCampers(filters, page);
    return respons.data as Camper[];
});

const camperSlice = createSlice({
    name: 'campers/fetchCampers',
    initialState,
    reducers: {},
    extraReducers: (buider) => {
        buider
            .addCase(fetchCampers.pending, (state) => { state.status = 'loading'; state.items = []; })
            .addCase(fetchCampers.fulfilled, (state, action: PayloadAction<Camper[]>) => {
                state.status = 'succeeded';
                state.items = action.payload;
            })
            .addCase(fetchCampers.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message || null;
            });
    },
});
export default camperSlice.reducer;