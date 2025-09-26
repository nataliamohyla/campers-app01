import axios from 'axios';
import type { Filter } from '../types/Filters';
import type { Camper } from '../types/Campers';


const API_URL = 'https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers';

export const getCampers = (fiters?: Filter, page?: number) => axios.get<Camper[]>(API_URL, { params: { ...fiters, page } });

export const getCampersById = (id: string) => axios.get<Camper>(`${API_URL}/${id}`);