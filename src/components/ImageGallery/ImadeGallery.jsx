import { Component } from 'react';
import { Loader } from 'components/Loader/Loader';
import { getImages } from 'components/Api/api';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Button } from 'components/Button/Button';

import css from './ImageGallery.module.css';

export class ImageGallery extends Component {
  state = {
    page: 1,
    images: [],
    isLoading: false,
  };

  onLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  addImages = async () => {
    try {
      this.setState({ isLoading: true });
      const data = await getImages(this.props.value);
      this.setState({ images: data, isLoading: false });
    } catch (error) {
      this.setState({ error: 'Sorry image not found...', isLoading: false });
    }
  };

  async componentDidUpdate(prevProps, prevState) {
    if (prevProps.value !== this.props.value) {
      const newData = await getImages(this.props.value);
      this.setState({ images: newData });
    }

    if (
      prevState.page !== this.state.page &&
      prevProps.value === this.props.value
    ) {
      const newPage = await getImages(this.props.value, this.state.page);
      this.setState(prevState => ({
        images: [...prevState.images, ...newPage],
      }));
    }
  }

  render() {
    const { images, isLoading } = this.state;
    return (
      <>
        {isLoading && <Loader />}
        {
          <ul className={css.gallery}>
            {images.map(image => {
              return (
                <ImageGalleryItem
                  key={image.id}
                  image={image.webformatURL}
                  bigImage={image.largeImageURL}
                  onClick={this.props.onClick}
                />
              );
            })}
          </ul>
        }
        {images.length >= 12 && <Button onClick={this.onLoadMore} />}
      </>
    );
  }
}
