import css from 'components/ImageGallery/ImageGallery.module.css';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import PropTypes, { shape } from 'prop-types';

const ImageGallery = ({ data, loadMore }) => {
  return (
    <>
      <ul className={css.imageGallery}>
        {data.map(({ largeImageURL, webformatURL, ...otherProps }, index) => (
          <ImageGalleryItem
            webformatURL={webformatURL}
            largeImageURL={largeImageURL}
            key={index}
          />
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
