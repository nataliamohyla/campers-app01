import type { RootState } from '../store';

export const selectFavorites = (state: RootState) => state.favorites.items;

export const selectIsFavorite = (state: RootState, camperId: string) =>
  state.favorites.items.some(c => c.id === camperId);