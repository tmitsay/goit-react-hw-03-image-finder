import { Component } from 'react';

import { Modal } from 'components/Modal/Modal';
import css from './ImageGalleryItem.module.css';

export class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
  };

  toggleModal = () => {
    this.setState(prevState => ({
      isModalOpen: !prevState.isModalOpen,
    }));
  };

  // openModal = largeImage => {
  //   this.setState({
  //     currentImage: largeImage,
  //     isModalOpen: true,
  //   });
  // };

  render() {
    const { isModalOpen } = this.state;
    const { image } = this.props;

    return (
      <li className={css.item}>
        <img
          className={css.image}
          src={image.webformatURL}
          alt={image.tags}
          onClick={this.toggleModal}
        />
        {isModalOpen && (
          <Modal
            largeImageImageURL={image.largeImageImageURL}
            onClose={this.toggleModal}
          />
        )}
      </li>
    );
  }
}
