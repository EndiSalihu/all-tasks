import "./FirstTask.css";
import { cardData } from "./cardData.js";

const CardLists = () => {
  return (
    <section id="card-section">
      {cardData.map(({ id, icon: Icon, title, description }) => (
        <ul key={id} className="card-box">
          <li className="card-item">
            <div className="icon-box">
              <p>{<Icon className="icon" />}</p>
            </div>

            <div>
              <h2>{title}</h2>
              <p>{description}</p>
            </div>
          </li>
        </ul>
      ))}
    </section>
  );
};

export default CardLists;
