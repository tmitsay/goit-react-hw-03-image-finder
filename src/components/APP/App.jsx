import { Component } from 'react';

import { Modal } from 'components/Modal/Modal';
import { ImageGallery } from 'components/ImageGallery/ImadeGallery';
import { Searchbar } from 'components/Searchbar/Searchbar';
import css from './App.module.css';

export class App extends Component {
  state = {
    isModalOpen: false,
    searchValue: '',
    currentImage: null,
    error: '',
  };

  toggleModal = event => {
    this.setState(prevState => ({
      isModalOpen: !prevState.isModalOpen,
    }));
  };

  openModal = largeImage => {
    this.setState({
      currentImage: largeImage,
      isModalOpen: true,
    });
  };

  onSubmit = searchValue => {
    this.setState({ searchValue });
  };

  render() {
    const { isModalOpen, searchValue, currentImage, error } = this.state;
    return (
      <div className={css.app}>
        <Searchbar submit={this.onSubmit} />

        {error && <h2>{error}</h2>}
        <ImageGallery value={searchValue} onClick={isModalOpen} />
        <Modal onClick={this.toggleModal} currentImage={currentImage} />
      </div>
    );
  }
}
