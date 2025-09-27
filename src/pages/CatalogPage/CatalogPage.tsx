import { useDispatch, useSelector } from 'react-redux';
import styles from './CatalogPage.module.css';
import type { AppDispatch, RootState } from '../../redux/store';
import { useEffect } from 'react';
import { fetchCampers } from '../../redux/slice/camperSlice';
import FiltersPanel from '../../components/FiltersPanel/FiltersPanel';

const CatalogPage = () => {
    const dispatch = useDispatch<AppDispatch>();
   // const { items, status } = useSelector((state: RootState) => state.campers);
    const filters = useSelector((state: RootState) => state.filters.filters);

     useEffect(() => {
    dispatch(fetchCampers({ filters, page: 1 }));
     }, [dispatch, filters]);
    
    if (status === 'loading') return <p>Loading...</p>;
    if (status === 'failed') return <p>Failed to load campers</p>;
    return (
         
        
        <main className={styles.catalog}>
               <FiltersPanel/>
                <>
                <div>
                   
                </div>
       </>
            </main>
    )
};
export default CatalogPage;