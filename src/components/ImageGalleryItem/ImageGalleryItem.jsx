import PropTypes from "prop-types";
import s from "./ImageGalleryItem.module.css";

function ImageGalleryItem({ images }) {
  return (
    <>
      {images.map((image) => (
        <li key={image.id} className={s.ImageGalleryItem}>
          <img
            className={s.ImageGalleryItemImage}
            src={image.webformatURL}
            data-image={image.largeImageURL}
            alt=""
          />
        </li>
      ))}
    </>
  );
}

ImageGalleryItem.propTypes = {
  images: PropTypes.array,
};

export default ImageGalleryItem;
