import { useState, useEffect } from "react";
import style from "./GalleryPage.module.css";
import CardItem from "../../CardItem/CardItem";

const GalleryPage = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const results = localStorage.getItem("images");
    const parsedResults = JSON.parse(results);
    setImages(parsedResults);
  }, []);

  return (
    <>
      <h1>Gallery page</h1>
      <ul className={style.galleryList}>
        {images.map((item) => (
          <CardItem key={item.id} item={item} />
        ))}
      </ul>
    </>
  );
};

export default GalleryPage;
