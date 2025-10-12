import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { getCampers } from '../../api/api';
import type { Camper } from '../../types/Campers';
import type { Filter } from '../../types/Filters';

interface CampersState {
   allItems: Camper[];
  items: Camper[];
  total: number;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: CampersState = {
   allItems: [],
  items: [],
  total: 0,
  status: 'idle',
  error: null,
 
};

interface GetCampersResponse {
  total: number;
  items: Camper[];
}

export const fetchCampers = createAsyncThunk<GetCampersResponse, { filters?: Filter}, {rejectValue: string}>(
  'campers/fetchCampers',
  async ({ filters = {} }, { rejectWithValue}) => {
    try {
       const response = await getCampers(filters);
        return response.data; 
    }
  
    catch  {
      return rejectWithValue('Failed to fetch campers');
    }
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
        state.allItems = action.payload.items;
        state.total = action.payload.total;
        state.items = action.payload.items.slice(0, 4);
      })
  

      .addCase(fetchCampers.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || null;
      });
  },
});

export default camperSlice.reducer;