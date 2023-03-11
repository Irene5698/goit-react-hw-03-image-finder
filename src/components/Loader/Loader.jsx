import css from 'components/Loader/Loader.module.css';
import { RotatingLines } from 'react-loader-spinner';
const Loader = () => {
  return (
    <div className={css.loader}>
      <RotatingLines height="50" width="50" />
    </div>
  );
};

export { Loader };
