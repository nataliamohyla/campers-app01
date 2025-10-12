import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCampers } from "../../redux/slice/camperSlice";
import { CamperCard } from "../CamperCard/CampersCard";
import type { Camper } from "../../types/Campers";
import type { AppDispatch, RootState } from "../../redux/store";
import styles from "./CampersList.module.css"


 const ITEM_PER_PAGE = 4;
export const CampersCatalog = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { allItems, status } = useSelector((state: RootState) => state.campers);
 const [items, setItems] = useState<Camper[]>([]);

  useEffect(() => {
    dispatch(fetchCampers({ filters: {}  }));
  }, [dispatch]);

  useEffect(() => {
    if (allItems.length > 0) {
      setItems(allItems.slice(0, ITEM_PER_PAGE));
    }
  }, [allItems]);

  const handleLoadMore = () => {
    const curentLenght = items.length;
    const nextLength = allItems.slice(curentLenght, curentLenght + ITEM_PER_PAGE);
    setItems(prev => [...prev, ...nextLength]);
  };

  if (status === "loading") return <p>Loading...</p>;
  if (status === "failed") return <p>Error loading campers</p>;

  return (
    <div >
      <ul className={styles.catalog}>
       {items.map((camper: Camper) => (
          <li key={camper.id} className={styles.item}>
            <CamperCard camper={camper} />
          </li>
        ))}
      </ul>
   
        <div className={styles.butonbox}>
        <button className={styles.button} onClick={handleLoadMore}>Load More</button>
        </div>
     // 
       
    
    </div>
  );
};
