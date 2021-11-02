import { Link } from 'react-router-dom';

import './styles.css';

const Search = () => {
  return (
    <div className="base-card search-card mx-auto" >
      <div className="search-input">
       <input type="text" />
      </div>
      <div className="search-button">
        <Link to="/catalogs">
          <button className="btn btn-secondary fw-bold">BUSCAR</button>
        </Link>
      </div>
    </div>
  );
};

export default Search;