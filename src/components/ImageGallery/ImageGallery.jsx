import ImageGalleryItem from "../ImageGalleryItem";
import s from "./ImageGallery.module.css";

function ImageGallery({ images }) {
  return (
    <ul className={s.ImageGallery}>
      <ImageGalleryItem images={images} />
    </ul>
  );
}

export default ImageGallery;
