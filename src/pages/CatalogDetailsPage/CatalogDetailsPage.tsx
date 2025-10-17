import { lazy, Suspense, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import type { AppDispatch } from "../../redux/store";
import { selectAllCampers, selectCampersStatus, selectCurrentCamper } from "../../redux/selectors/campersSelector";
import { fetchById } from "../../redux/slice/camperSlice";
import styles from "./CatalogDetailsPage.module.css";
import { CamperGallery } from "../../components/CamperGallery/CamperGallery";
import { CamperBookingForm } from "../../components/BookingForm/BookingForm";
import type { Camper } from "../../types/Campers";


const Features = lazy(() => import("../../components/Features/Features"));
const Reviews = lazy(() => import("../../components/Reviews/Reviews"));

export const CatalogDetailsPage = () => { 
    const { id } = useParams<{ id: string }>();
    const dispatch = useDispatch<AppDispatch>();
    const campers = useSelector(selectAllCampers);
    const currentCamper = useSelector(selectCurrentCamper);
    const status = useSelector(selectCampersStatus);
    const [activeTab, setActiveTab] = useState<'features' | 'reviews'>('features');
console.log('id from useParams:', id);
    useEffect(() => {
    if (!id) return;

    const found = campers.find((item) => item.id === id);
    if (!found && (!currentCamper || currentCamper.id !== id)) {
      dispatch(fetchById(id));
    }
  }, [dispatch, campers, currentCamper, id]);

  const camper = campers.find((item: Camper) => item.id === id) || currentCamper;

  if (status === "idle" || status === "loading") return <p>Loading...</p>;
  if (!camper) return <p>Camper not found</p>;
    return (
        <main className={styles.detailsPage}>
            <h1 className={styles.title}>{camper.name}</h1>
            <p className={styles.location}>{camper.location}</p>
            <p className={styles.price}>€ {camper.price}</p>
            <CamperGallery photos={camper.photos || []} />
            <p className={styles.description}>{camper.description}</p>
            <div className={styles.tabs}>
                <button className={`${styles.tabButton} ${activeTab === 'features' ? styles.active : ''}`}
                    onClick={() => setActiveTab('features')}>Features</button>
                 <button
          className={`${styles.tabButton} ${activeTab === "reviews" ? styles.active : ""}`}
          onClick={() => setActiveTab("reviews")}
        >
          Reviews
        </button>
            </div>
            <div className={styles.tabContent}>
                <Suspense fallback={<p> Loading...</p>}>
                    {activeTab === 'features' ? (
                        <Features camper={camper} />
                    ) : (
                        <Reviews reviews={camper.reviews || []} />
                    )}
                </Suspense>
                <CamperBookingForm/>
            </div>
        </main>
    );
};
export default CatalogDetailsPage;