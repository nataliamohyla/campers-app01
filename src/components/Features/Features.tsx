import type { Camper } from '../../types/Campers';
import styles from './Features.module.css';
import Icon from '../icon';


const Features = ({ camper }: { camper: Camper }) => {
    const featuresList = [
  { key: "AC", label: "AC", icon: "icon-wind" },
  { key: "bathroom", label: "Bathroom", icon: "icon-ph_shower" },
  { key: "kitchen", label: "Kitchen", icon: "icon-cup-hot" },
  { key: "TV", label: "TV", icon: "icon-tv" },
  { key: "radio", label: "Radio", icon: "icon-radios"  },
  { key: "refrigerator", label: "Refrigerator", icon: "icon-fridge" },
  { key: "microwave", label: "Microwave", icon: "icon-microwave" },
  { key: "gas", label: "Gas", icon: "icon-gas" },
  { key: "water", label: "Water", icon: "icon-water" },
    ];
    
    const detailsList = [
  { key: "form", label: "Form" },
  { key: "length", label: "Length", unit: "m" },
  { key: "width", label: "Width", unit: "m" },
  { key: "height", label: "Height", unit: "m" },
  { key: "tank", label: "Tank capacity", unit: "L" },
  { key: "consumption", label: "Consumption", unit: "L/100km" },
];
    return (
        <div className={styles.features}>
        <ul className={styles.featuresList}>
  {featuresList.map(({ key, label, icon }) =>
    camper[key as keyof Camper] ? (
      <li key={key} className={styles.featureItem}>
          {icon && <Icon name={icon} />}
        <span>{label}</span>
      </li>
    ) : null
  )}
            </ul>
            <ul className={styles.detailsList}>
  {detailsList.map(({ key, label, unit }) => {
    const value = camper[key as keyof Camper];
    return value ? (
      <li key={key} className={styles.detailItem}>
        <span className={styles.info}>{label}</span>
        <span>{`${value}${unit ? " " + unit : ""}`}</span>
      </li>
    ) : null;
  })}
</ul>
        </div>
    );
};
export default Features;