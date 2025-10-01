import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCampers } from "../../redux/slice/camperSlice";
import { CamperCard } from "../CamperCard/CampersCard";
import type { Camper } from "../../types/Campers";
import type { AppDispatch, RootState } from "../../redux/store";
import styles from "./CampersList.module.css"

export const CampersCatalog = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { items, status } = useSelector((state: RootState) => state.campers);

  useEffect(() => {
    dispatch(fetchCampers({ filters: {}, page: 1 }));
  }, [dispatch]);

  if (status === "loading") return <p>Loading...</p>;
  if (status === "failed") return <p>Error loading campers</p>;

  return (
    <div className={styles.catalog}>
      {items.map((camper: Camper) => (
        <CamperCard key={camper.id} camper={camper} />
      ))}
    </div>
  );
};
