
import './styles.css';

const Search = () => {
  return (
    <div className="base-card search-card mx-auto" >
      <div className="search-input">
       <input type="text" />
      </div>
      <div className="search-button">
        <a href="/catalogs">
          <button className="btn btn-secondary fw-bold">BUSCAR</button>
        </a>
      </div>
    </div>
  );
};

export default Search;