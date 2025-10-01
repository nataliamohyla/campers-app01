
import type { Camper } from "../../types/Campers";
import Icon from "../icon";
import styles from "./CampersCard.module.css"
import { useNavigate } from "react-router-dom";

export const CamperCard = ({ camper }: { camper: Camper }) => {
  const navigate = useNavigate();
  return (
    <div className={styles.card}>
      <div>
         
          <img
              src={camper.gallery ?.[0]?.thumb || "https://via.placeholder.com/150"}
              alt={camper.name}
          className={styles.image}
          width={292}
        />
      </div>
      <div className={styles.info}>
         <h2 className={styles.name}>{camper.name}</h2>
        <p className={styles.reviews}>Reviews: {camper.rating}</p>
      <p className={styles.text}>
        <Icon name="icon-wind" width={16} height={16} className={styles.icon} />
        AC : {camper.AC}</p>  
      <p className={styles.text}>
         <Icon name="icon-cup-hot" width={16} height={16} className={styles.icon} />
        Kitchen: {camper.kitchen}</p>
      <p className={styles.text}>
         <Icon name="icon-gas" width={16} height={16} className={styles.icon} />
        Petrol: {camper.engine}</p>
      <p className={styles.text}>
          <Icon name="icon-diagram" width={16} height={16} className={styles.icon} />
          Automatic: {camper.transmission}</p>
      </div>
      <div className={styles.butonbox}> 
        <button className={styles.button} type="button" onClick={() => navigate('/catalog/:id')}>Show more</button>
      </div>
      </div>
  );
}