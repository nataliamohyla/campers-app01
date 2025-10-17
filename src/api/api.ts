import axios from 'axios';
import type { Filter } from '../types/Filters';
import type { Camper } from '../types/Campers';



const API_URL = 'https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers';

export interface GetCampersResponse {
  total: number;
  items: Camper[];
}
export const getCampers = (filters?: Filter) =>
  axios.get<GetCampersResponse>(API_URL, { params: { ...filters}});

export const getCampersById = (id: string) => axios.get<Camper>(`${API_URL}/${id}`);