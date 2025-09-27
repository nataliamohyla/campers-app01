import { useDispatch } from "react-redux";
import { setFilters } from "../../redux/slice/filterSlice";
import Icon from "../icon";
import styles from './FiltersPanel.module.css';

const FiltersPanel = () => {
    const dispatch = useDispatch();

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
      className={styles.input}
      type="text"
      placeholder="Kyiv, Ukraine"
      onChange={(e) => dispatch(setFilters({ location: e.target.value }))}
    />
        </div>
         <h3 className={styles.line}>Vehical Equipment</h3>
              <div  className={styles.options}>
           
      <button className={styles.button} onClick={() => dispatch(setFilters({ AC: true }))}><Icon name="icon-wind" width={32} height={32} />AC</button>
      <button  className={styles.button} onClick={() => dispatch(setFilters({ kitchen: true }))}><Icon name="icon-cup-hot" width={32} height={32} />Kitchen</button>

      <button  className={styles.button} onClick={() => dispatch(setFilters({ automatic: true }))}><Icon name="icon-diagram" width={32} height={32} />Automatic</button>
      <button  className={styles.button} onClick={() => dispatch(setFilters({ TV: true }))}> <Icon name="icon-tv" width={32} height={32} />TV</button>
      <button  className={styles.button} onClick={() => dispatch(setFilters({ bathroom: true }))}><Icon name="icon-ph_shower" width={32} height={32} />Bathroom</button>
        </div>
         <h3 className={styles.line}>Vehicle Type</h3>
            <div  className={styles.kategory}>
               
      <button  className={styles.button} onClick={() => dispatch(setFilters({ form: "panelTruck" }))}><Icon name="icon-bi_grid-1x2" width={32} height={32} />Van</button>
      <button  className={styles.button} onClick={() => dispatch(setFilters({ form: "fullyIntegrated" }))}><Icon name="icon-bi_grid" width={32} height={32} />Fully integrated</button>
      <button  className={styles.button} onClick={() => dispatch(setFilters({ form: "alcove" }))}><Icon name="icon-bi_grid-3x3" width={32} height={32} />Alcove</button>
        </div>
        <button type="button" className={styles.bigbutton}>Search</button>
        </div>
    );
};
export default FiltersPanel;