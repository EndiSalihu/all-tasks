const Card = ({ title, firstPrice, secondPrice}) => (
  <div className="card">
    <h2>{title}</h2>
    <p>{firstPrice}</p>
    <p>{secondPrice}</p>
    <button>Buy Now</button>
  </div>
);

export default Card