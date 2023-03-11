import PropTypes from 'prop-types';
import css from 'components/Button/Button.module.css';

const LoadMore = ({ onLoad }) => {
  return (
    <button className={css.button} onClick={() => onLoad()}>
      Load more
    </button>
  );
};

LoadMore.propTypes = {
  onLoad: PropTypes.func.isRequired,
};

export default LoadMore;
