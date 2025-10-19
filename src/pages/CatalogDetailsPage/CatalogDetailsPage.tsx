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
import Icon from "../../components/icon";
import Loader from "../../components/Loader/Loader";


const Features = lazy(() => import("../../components/Features/Features"));
const Reviews = lazy(() => import("../../components/Reviews/Reviews"));

export const CatalogDetailsPage = () => { 
    const { id } = useParams<{ id: string }>();
    const dispatch = useDispatch<AppDispatch>();
    const campers = useSelector(selectAllCampers);
    const currentCamper = useSelector(selectCurrentCamper);
    const status = useSelector(selectCampersStatus);
    const [activeTab, setActiveTab] = useState<'features' | 'reviews'>('features');
    useEffect(() => {
    if (!id) return;

    const found = campers.find((item) => item.id === id);
    if (!found && (!currentCamper || currentCamper.id !== id)) {
      dispatch(fetchById(id));
    }
  }, [dispatch, campers, currentCamper, id]);

  const camper = campers.find((item: Camper) => item.id === id) || currentCamper;

  if (status === "idle" || status === "loading") return <Loader/>;
  if (!camper) return <p>Camper not found</p>;
    return (
      <main className={styles.detailsPage}>
        <div className={styles.info}>
          <h1 className={styles.title}>{camper.name}</h1>
          <div className={styles.subinfo}>
          <p className={styles.location}><Icon name="icon-Map" className={styles.icon} /> {camper.location} </p>
            <div className={styles.reting}>
              <Icon name="icon-star" className={styles.icon} />
              <p>{camper.rating}</p>
               <span className={styles.count}>
               ({camper.reviews?.length || 0} reviews)
             </span>
            </div>
            </div>
          <p className={styles.price}>€ {camper.price}</p>
          </div>
            <CamperGallery 
  gallery={camper.photos?.length 
    ? camper.photos 
    : camper.gallery?.length 
      ? camper.gallery.map(photo => photo.thumb) 
      : ["https://via.placeholder.com/300"]} 
/>
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
        <div className={styles.contentWrapper}>
       
                <div className={styles.leftColumn}>
          
            <div className={styles.tabContent}>
                <Suspense fallback={<p> Loading...</p>}>
                    {activeTab === 'features' ? (
                        <Features camper={camper} />
                    ) : (
                        <Reviews reviews={camper.reviews || []} />
                    )}
                        </Suspense>
                        </div>
            </div>
           <div className={styles.rightColumn}>
                    <CamperBookingForm />
                    </div>
            </div>
        </main>
    );
};
export default CatalogDetailsPage;