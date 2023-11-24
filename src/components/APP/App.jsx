import { Component } from 'react';
import { getImages } from 'components/Api/api';
import { Button } from 'components/Button/Button';

import { ImageGallery } from 'components/ImageGallery/ImadeGallery';
import { Searchbar } from 'components/Searchbar/Searchbar';
import css from './App.module.css';
import { Loader } from 'components/Loader/Loader';

export class App extends Component {
  state = {
    searchValue: '',
    error: '',
    images: [],
    isLoading: false,
    currentPage: 1,
  };

  onSubmit = query => {
    this.setState({
      searchValue: query,
      images: [],
      currentPage: 1,
      totalPage: 0,
    });
  };

  onLoadMore = () => {
    this.setState(prevState => ({ currentPage: prevState.currentPage + 1 }));
  };

  addImages = async () => {
    const { searchValue, currentPage } = this.state;

    try {
      this.setState({ isLoading: true });

      const data = await getImages(searchValue, currentPage);

      this.setState(state => ({
        images: [...state.images, ...data.hits],
        isLoading: false,
        totalPage: Math.ceil(data.totalHits / 12),
        error: '',
      }));
    } catch (error) {
      this.setState({ error: 'Sorry image not found...', isLoading: false });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  componentDidUpdate(_, prevState) {
    if (
      prevState.currentPage !== this.state.currentPage ||
      prevState.searchValue !== this.state.searchValue
    ) {
      this.addImages();
    }
  }

  render() {
    const { images, isLoading, totalPage, currentPage, error } = this.state;
    return (
      <div className={css.app}>
        <Searchbar onSubmit={this.onSubmit} />
        {isLoading && <Loader />}

        {error && <h2>{error}</h2>}

        <ImageGallery images={images} />

        {images.length > 0 && totalPage !== currentPage && !isLoading && (
          <Button onClick={this.onLoadMore} />
        )}
      </div>
    );
  }
}
