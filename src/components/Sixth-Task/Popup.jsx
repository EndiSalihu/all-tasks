import { useState } from "react";
import PopupCard from "./PopupCard";
import './Popup.css';


const Popup = () => {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => setShowPopup(!showPopup);

  return (
    <div>
      <button className="popup-button" onClick={togglePopup}>Show popup</button>

      {showPopup && <PopupCard onClose={togglePopup}/>}
    </div>
  );
};

export default Popup;
