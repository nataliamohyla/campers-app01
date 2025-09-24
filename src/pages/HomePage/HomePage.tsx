import { useNavigate } from 'react-router-dom';
import styles from './HomePage.module.css';

const HomePage = () => {
    const navigate = useNavigate();
    return (
        <main className={styles.homepage}>
            <div className={styles.textbox}>
                <h1 className={styles.hone}>Campers of your dreams</h1>
                <h2 className={styles.htwo}>You find everything you want in our catalog</h2>
            
                <button type='button' className={styles.button} onClick={() => navigate('/catalog')}>View Now</button>
            </div>
        </main>
    );
};
export default HomePage;