import { ThreeCircles } from 'react-loader-spinner';
import styles from "./Loader.module.css";

const Loader = () => {
    return (
        <div className={styles.loader}>
            <ThreeCircles
                visible={true}
                height="100"
                width="100"
                color="#c12e1aff"
                ariaLabel="three-circles-loading"
                wrapperStyle={{}}
                wrapperClass=""
            />
        </div>
    );
};
export default Loader;
