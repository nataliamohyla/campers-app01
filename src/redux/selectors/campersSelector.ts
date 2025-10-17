import type { RootState } from '../store';
import type { Camper } from '../../types/Campers';

export const selectCampers = (state: RootState) => state.campers.items;
export const selectAllCampers = (state: RootState) => state.campers.allItems;
export const selectCampersStatus = (state: RootState) => state.campers.status;
export const selectCampersTotal = (state: RootState) => state.campers.total;
export const selectCurrentCamper = (state: RootState): Camper | null => state.campers.currentItem;