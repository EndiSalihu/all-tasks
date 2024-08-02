import "./SecondTask.css";

const Box = ({ date, setting, img, name, description, download }) => {
  let settingStyle = {};

  if (setting === "New") {
    settingStyle = {
      backgroundColor: "#49de53",
      color: "white",
    };
  } else if (setting === "Fix") {
    settingStyle = {
      backgroundColor: "#0d4cc2",
      color: "white",
    };
  } else {
    settingStyle = {
      backgroundColor: "#ca39ff",
      color: "white",
    };
  }

  return (
    <div className="box">
      <p>
        <b>{date}</b>
      </p>

      <header>
        <p className="setting" style={settingStyle}>
          {setting}
        </p>
        <img src={img} alt="profile-image" />
        <h3>{name}</h3>
      </header>

        <p className="description">{description}</p>
        <button>{download}</button>
    </div>
  );
};

export default Box;
