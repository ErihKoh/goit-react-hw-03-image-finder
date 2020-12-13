import ImageGalleryItem from "../ImageGalleryItem";
import s from "./ImageGallery.module.css";

function ImageGallery({ images, onClick }) {
  return (
    <ul className={s.ImageGallery} onClick={onClick}>
      <ImageGalleryItem images={images} />
    </ul>
  );
}

export default ImageGallery;
