import { useDispatch, useSelector } from "react-redux";
import { clearFilters, setFilters } from "../../redux/slice/filterSlice";
import Icon from "../icon";
import styles from './FiltersPanel.module.css';
import type { AppDispatch } from "../../redux/store";
import { fetchCampers } from "../../redux/slice/camperSlice";
import { selectFilters } from "../../redux/selectors/filterSelectors";
import type React from "react";
import { useState } from "react";
import clsx from "clsx";



const FiltersPanel = () => {
  const dispatch = useDispatch<AppDispatch>();
  const filters = useSelector(selectFilters);
  const [location, setLocation] = useState(filters.location || "");

  const handleChange = (key: keyof typeof filters, value: boolean | string) => {
    dispatch(setFilters ({ [key]: value }));
  };

   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setFilters({location: e.target.value}));
  };

  const handleSearch = () => {
    dispatch(fetchCampers({ filters }));
    dispatch(clearFilters());
    setLocation("");
  };

 const isActive = (key: keyof typeof filters, value: boolean | string) => filters[key] === value;

    return (
        <div className={styles.panel}>
            <div className={styles.boxinput}>
    <label htmlFor="location" className={styles.label}>
      Location
          </label>
          <Icon name="icon-Map" width={20} height={20} className={styles.inputicon}/>
    <input
      id="location"
            name="location"
            value={location}
      className={styles.input}
      type="text"
      placeholder="Kyiv, Ukraine"
            onChange={(e) => {
        setLocation(e.target.value);
        handleInputChange(e);
      }}
    />
        </div>
         <h3 className={styles.line}>Vehical Equipment</h3>
              <div  className={styles.options}>
           
      <button className={clsx(styles.button, {[styles.active]: isActive('AC', true)})} onClick={() => handleChange('AC', true)}><Icon name="icon-wind" width={32} height={32} />AC</button>
      <button className={clsx(styles.button, {[styles.active]: isActive('kitchen', true)})} onClick={() => handleChange('kitchen', true)}><Icon name="icon-cup-hot" width={32} height={32} />Kitchen</button>
      <button className={clsx(styles.button, {[styles.active]: isActive('automatic', true)})} onClick={() => handleChange( 'automatic', true )}><Icon name="icon-diagram" width={32} height={32} />Automatic</button>
      <button className={clsx(styles.button, {[styles.active]: isActive('TV', true)})} onClick={() => handleChange('TV', true )}> <Icon name="icon-tv" width={32} height={32} />TV</button>
      <button className={clsx(styles.button, {[styles.active]: isActive('bathroom', true)})} onClick={() => handleChange( 'bathroom', true )}><Icon name="icon-ph_shower" width={32} height={32} />Bathroom</button>
        </div>
         <h3 className={styles.line}>Vehicle Type</h3>
            <div  className={styles.kategory}>
               
      <button className={clsx(styles.button, {[styles.active]: isActive('form', "panelTruck")})} onClick={() => handleChange( 'form', "panelTruck" )}><Icon name="icon-bi_grid-1x2" width={32} height={32} />Van</button>
      <button className={clsx(styles.button, {[styles.active]: isActive('form', "fullyIntegrated")})} onClick={() => handleChange( 'form', "fullyIntegrated" )}><Icon name="icon-bi_grid" width={32} height={32} />Fully integrated</button>
      <button className={clsx(styles.button, {[styles.active]: isActive('form', "alcove")})} onClick={() => handleChange( 'form', "alcove" )}><Icon name="icon-bi_grid-3x3" width={32} height={32} />Alcove</button>
        </div>
        <button type="button" className={styles.bigbutton} onClick={handleSearch}>Search</button>
        </div>
    );
};
export default FiltersPanel;