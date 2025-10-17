import styles from './CamperGallery.module.css';


export const CamperGallery = ({ photos }: { photos: string[] }) => {
    if (!photos.length) return null;
    return (
        <div className={styles.gqllery}>
            {photos.map((url, i) => (
                <img key = {i} src={url} alt={`Campers photo ${i + 1}`} className={styles.image} />
            ))}
        </div>
    )
}