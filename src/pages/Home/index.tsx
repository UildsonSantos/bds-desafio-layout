import MainImage from 'assets/images/car-header.png';

import './styles.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="base-card home-card">
        <div className="home-content-container">
          <h1>O carro perfeito para você</h1>
          <p>
            Conheça nossos carros e dê mais um passo na realização do seu sonho
          </p>
        </div>
        <div className="home-image-container">
          <img src={MainImage} alt="Nome do produto" />
        </div>
      </div>
      <div className="base-card sub-home-card">
        <a href="/catalogs">
          <button className="btn btn-secondary fw-bold">VER CATÁLOGO</button>
        </a>
        <p>Comece agora a navegar</p>
      </div>
    </div>
  );
};

export default Home;
