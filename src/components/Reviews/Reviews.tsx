import type { Review } from '../../types/Campers';
import Icon from '../icon';
import styles from './Reviews.module.css';


const Reviews = ({ reviews }: { reviews: Review[] }) => {
    if (!reviews.length) return <p>Not reviews yet</p>;
    return (
        <div className={styles.reviews}>
            {reviews.map((review, index) => (
                <div key={index} className={styles.reviewItem}>
                    <h3>{review.reviewer_name}</h3>
                    <div className={styles.rating}>
                       <Icon name="icon-star" className={styles.icon} />
                    <p>{review.reviewer_rating}</p>
                    </div>
                
                    <p>{review.comment}</p>
                  
                </div>
            ))}
        </div>
    );
};
export default Reviews;


