import { Component } from 'react';
import { Loader } from 'components/Loader/Loader';
import LoadMore from 'components/Button/Button';
import { fetchData } from 'components/Services/pixabayAPI';
import css from 'components/App.module.css';
import { SearchBar } from 'components/Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';

export class App extends Component {
  state = {
    images: [],
    showModal: false,
    page: 1,
    loading: false,
    query: null,
    showLoadMore: false,
    error: null,
  };

  componentDidUpdate(_, prevState) {
    const { query, page } = this.state;
    if (page !== prevState.page || query !== prevState.query) {
      this.setState({
        loading: true,
      });

      fetchData(query, page)
        .then(data => {
          this.setState(prevState => ({
            images: [...prevState.images, ...data.hits],
            showLoadMore: page < Math.ceil(data.totalHits / 12),
          }));
          console.log(data.hits);
        })
        .catch(error => console.log(error))
        .finally(() => this.setState({ loading: false }));
    }
  }

  getValue = value => {
    this.setState({ query: value, page: 1, images: [] });
  };

  onLoad = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    const { images, loading, showLoadMore } = this.state;

    return (
      <div className={css.app}>
        <SearchBar onSubmit={this.getValue} />
        <ImageGallery data={images} />
        {loading && <Loader />}
        {!loading && showLoadMore && <LoadMore onLoad={this.onLoad} />}
      </div>
    );
  }
}
