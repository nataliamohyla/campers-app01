
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
      <div className={styles.typebox}>
        <div className={styles.namebox}>
          <div className={styles.topRow}>
            <h2 className={styles.name}>{camper.name}</h2>
            <h2 className={styles.price}>€{camper.price}</h2>
            </div> 
          <div className={styles.bottomRow}>
             <div className={styles.reviews}>
            <Icon name="icon-star" width={16} height={16} className={styles.icon} />  
              <span>{camper.rating}</span> 
              <span className={styles.count}>
               ({camper.reviews?.length || 0} reviews)
             </span>
            </div>
          <div className={styles.location}>
              <Icon name="icon-Map" width={16} height={16} className={styles.icon} />
             <span>{camper.location}</span> 
            </div>
           
          </div>
          </div>
      <div className={styles.info}>
 <div className={styles.description}>
              <p>
                 {camper.description.length > 100
    ? camper.description.slice(0, 100) + "..."
    : camper.description}
              </p>
          </div> 
        <div className={styles.text}><p >
            AC  {camper.AC}
        <Icon name="icon-wind" width={16} height={16} className={styles.icon} />
          </p>
          </div>
        {camper.kitchen && (
          <div className={styles.text}>
            <p >
           Kitchen 
         <Icon name="icon-cup-hot" width={16} height={16} className={styles.icon} />
       </p></div>
        )}
      
          <div className={styles.text}>
            <p>
          Petrol {camper.engine}
         <Icon name="icon-fuel-pump" width={16} height={16} className={styles.icon} />
            </p>
          </div>
        {camper.transmission === 'automatic' && (
          <div className={styles.text}>
            <p >
          Automatic {camper.transmission}
            <Icon name="icon-diagram" width={16} height={16} className={styles.icon} />
            </p>
          </div>
        )}
    </div>
      <div className={styles.butonbox}> 
        <button className={styles.button} type="button" onClick={() => navigate('/catalog/:id')}>Show more</button>
      </div>
      </div>
      
      </div>
  
  );
}