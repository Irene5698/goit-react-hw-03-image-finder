import { Component } from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'components/Modal/Modal';
import css from 'components/ImageGalleryItem/ImageGalleryItem.module.css';

export class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };


  render() {
    const { showModal } = this.state;
    const { image, tags, largeImageURL } = this.props;
    return (
      <li className={css.imageGalleryItem}>
        <img src={image} alt={tags} onClick={this.toggleModal} />
        {showModal && (
        <Modal
          onClose={this.toggleModal}
          image={largeImageURL}
          tags={tags}
        />
        )}
      </li>
    );
  }
}

ImageGalleryItem.propTypes = {
  image: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
};

export default ImageGalleryItem;
