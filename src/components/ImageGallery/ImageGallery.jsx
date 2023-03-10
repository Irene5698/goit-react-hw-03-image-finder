import css from 'components/ImageGallery/ImageGallery.module.css'
import PropTypes, { shape } from 'prop-types';


const ImageGallery = ({ data }) => {
  return (
    <>
      <ul className={css.imageGallery}>
        {data.map(({ webformatURL, ...otherProps }, index) => (
          <li className={css.imageGalleryItem}
            key={index}
            image={webformatURL}
            {...otherProps}
          ></li>
        ))}
      </ul>
    </>
  );
};

ImageGallery.propTypes = {
  data: PropTypes.arrayOf(shape({ webformatURL: PropTypes.string.isRequired }))
    .isRequired,
};

export { ImageGallery };