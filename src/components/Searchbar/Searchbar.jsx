// import { Formik } from 'formik';
import css from 'components/Searchbar/Searchbar.module.css';
import PropTypes from 'prop-types';

const SearchBar = props => {
  const handleSubmit = e => {
    e.preventDefault();
    let initialValues = e.target[1].value;
    console.log(e.target[1].value);

    if (initialValues.trim() === '') {
      alert('Enter search query!');

      return;
    }

    props.onSubmit(initialValues);
  };

  return (
    <header className={css.search}>
      <form className={css.searchBar} onSubmit={handleSubmit}>
        <button className={css.searchButton}>
          <span className={css.searchLabel}>Search</span>
        </button>
        <input
          className={css.formInput}
          type="text"
          name="inputValue"
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export { SearchBar };
