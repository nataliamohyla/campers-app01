import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { getCampers } from '../../api/api';
import type { Camper } from '../../types/Campers';
import type { Filter } from '../../types/Filters';

interface CampersState {
  items: Camper[];
  total: number;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: CampersState = {
  items: [],
  total: 0,
  status: 'idle',
  error: null,
};

interface GetCampersResponse {
  total: number;
  items: Camper[];
}

export const fetchCampers = createAsyncThunk<GetCampersResponse, { filters?: Filter; page?: number }>(
  'campers/fetchCampers',
  async ({ filters, page }) => {
    const response = await getCampers(filters, page);
        return response.data; 
    }
);

const camperSlice = createSlice({
  name: 'campers',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCampers.pending, (state) => {
        state.status = 'loading';
        state.items = [];
      })
      .addCase(fetchCampers.fulfilled, (state, action: PayloadAction<GetCampersResponse>) => {
        state.status = 'succeeded';
        state.items = action.payload.items;
        state.total = action.payload.total;
      })
      .addCase(fetchCampers.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || null;
      });
  },
});

export default camperSlice.reducer;