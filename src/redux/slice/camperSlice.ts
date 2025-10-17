import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { getCampers, getCampersById } from '../../api/api';
import type { Camper } from '../../types/Campers';
import type { Filter } from '../../types/Filters';


interface CampersState {
   allItems: Camper[];
  items: Camper[];
  currentItem: Camper | null;
  total: number;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: CampersState = {
   allItems: [],
  items: [],
  currentItem: null,
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
        console.log("API response:", response.data);
      return response.data; 
      
    }
  
    catch  {
      return rejectWithValue('Failed to fetch campers');
    }
  }
 
);
export const fetchById = createAsyncThunk<Camper, string, { rejectValue: string }>(
  'campers/fetchById',
  async (id, { rejectWithValue }) => {
    try {
      const response = await getCampersById(id); // id — рядок
      return response.data;
    } catch {
      return rejectWithValue('Failed to fetch camper by ID');
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
      })
      .addCase(fetchById.pending, (state) => {
        state.status = 'loading';
        state.currentItem = null;
      })
      .addCase(fetchById.fulfilled, (state, action: PayloadAction<Camper>) => {
        state.status = 'succeeded';
        state.currentItem = action.payload;
      })
      .addCase(fetchById.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload || 'Failed to fetch camper by ID';
      });
  },
});

export default camperSlice.reducer;