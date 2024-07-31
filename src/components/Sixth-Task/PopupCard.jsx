import './Popup.css';

const PopupCard = ({ onClose }) => {
  return (
    <div className="overlay" onClick={onClose}>
      <div className="popup" onClick={(e) => e.stopPropagation()}>

        <header>
          <h1>Theme Color</h1>
          <p>Change Theme</p>
        </header>

        <menu>
          <div className='details'>
            <h3>Font Color</h3>
            <p>#444444<span style={{background: '#444444'}}></span></p>
          </div>
          <hr />

          <div className='details'>
            <h3>Background Color</h3>
            <p>#FFFFFf<span style={{background: '#ffffff'}}></span></p>
          </div>
          <hr />

          <div className='details'>
            <h3>Button Color</h3>
            <p>#2072EF<span style={{background: '#2072ef'}}></span></p>
          </div>
          <hr />

          <div className='details'>
            <h3>Button Border Color</h3>
            <p>#2072EF<span style={{background: '#2072ef'}}></span></p>
          </div>
          <hr />

          <div className='details'>
            <h3>Buttons Mouseover Color</h3>
            <p>#0053D1<span style={{background: '#0053d1'}}></span></p>
          </div>
        </menu>

        <div>
          <button className='save'>Save</button>
          <button onClick={onClose} className='cancel'>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default PopupCard;
