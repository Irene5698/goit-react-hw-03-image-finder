import { Formik } from 'formik';
import css from 'components/Searchbar/Searchbar.module.css';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

const SearchBar = props => {
  const initialValues = {
    inputValue: '',
  };

  const handleSubmit = ({ inputValue }, { resetForm }) => {
    if (inputValue.trim() === '') {
        toast.error('Enter search query!', {
            autoClose: 3000,
          });
      return 
    }

    props.onSubmit(inputValue);
    resetForm();
  };

  return (
    <header className={css.search}>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <form className={css.searchBar}>
          <button type="submit" className={css.searchButton}>
            <span className={css.searchLabel}>Search</span>
          </button>
          <input
            className={css.formInput}
            type="text"
            name="inputValue"
            placeholder="Search images and photos"
          />
        </form>
      </Formik>
    </header>
  );
};



SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export {SearchBar};