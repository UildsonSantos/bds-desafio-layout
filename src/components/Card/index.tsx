import CardImg from 'assets/images/car-card.png';
import { Link } from 'react-router-dom';

import './styles.css';

const Card = () => {
  return (
    <div className="base-card card mx-auto" >
      <div className="card-image">
        <img src={CardImg} alt="Nome do produto" />
      </div>
      <div className="card-container">
        <h6>Audi Supra TT</h6>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, nisi</p>
      </div>
      <div className="card-bottom">
        <Link to="/catalogs">
          <button className="btn btn-secondary fw-bold">COMPRAR</button>
        </Link>
      </div>
    </div>
  );
};

export default Card;
