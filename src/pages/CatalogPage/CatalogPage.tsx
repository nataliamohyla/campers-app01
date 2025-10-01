import styles from './CatalogPage.module.css';
import FiltersPanel from '../../components/FiltersPanel/FiltersPanel';
import { CampersCatalog } from '../../components/CampersList/CampersList';

const CatalogPage = () => {
  
    return (
         
        
        <main className={styles.catalog}>
              <div className={styles.content}>
        <FiltersPanel />
        <CampersCatalog />
      </div>
            </main>
    )
};
export default CatalogPage;