import type { Review } from '../../types/Campers';
import Icon from '../icon';
import styles from './Reviews.module.css';


const Reviews = ({ reviews }: { reviews: Review[] }) => {
    if (!reviews.length) return <p>Not reviews yet</p>;
    return (
        <div className={styles.reviews}>
            {reviews.map((review, index) => (
                <div key={index} className={styles.reviewItem}>
                    <strong>{review.reviewer_name}</strong>
                    <Icon name="icon-star" className={styles.icon} />
                    <p>{review.rating}</p>
                    <p>{review.comment}</p>
                  
                </div>
            ))}
        </div>
    );
};
export default Reviews;