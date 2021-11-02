import Card from 'components/Card';
import Search from 'components/Search';

const Catalog = () => {
  return (
    <div className="container">
      <div className="row">
          <Search />
        </div>
      <div className="row">
        <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-3">
          <Card />
        </div>
        <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-3">
          <Card />
        </div>
        <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-3">
          <Card />
        </div>
        <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-3">
          <Card />
        </div>
        <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-3">
          <Card />
        </div>
      </div>
    </div>
  );
};

export default Catalog;
