import { Component } from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'components/Modal/Modal';
import css from 'components/ImageGalleryItem/ImageGalleryItem.module.css';

export class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState({ showModal: true });
  };

  onClose = () => {
    this.setState({ showModal: false });
  };

  render() {
    const { showModal } = this.state;
    const { tags, largeImageURL, webformatURL } = this.props;
    return (
      <li className={css.imageGalleryItem}>
        <img
          src={webformatURL}
          alt={tags}
          onClick={this.toggleModal}
          className={css.imageGallery}
        />
        {showModal && (
          <Modal
            onClose={this.onClose}
            image={largeImageURL}
            tags={tags}
            showModal={showModal}
          />
        )}
      </li>
    );
  }
}

ImageGalleryItem.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
};

export default ImageGalleryItem;
