import styles from './CamperGallery.module.css';


export const CamperGallery = ({ gallery }: { gallery: string[] }) => {
    if (!gallery.length) return null;
    return (
        <div className={styles.gallery}>
            {gallery.map((url, i) => (
                <img key={i} src={url} alt={`Campers photo ${i + 1}`} className={styles.image} />
            ))}
        </div>
    );
};