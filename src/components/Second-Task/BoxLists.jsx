import { cardData } from "./boxData";
import "./SecondTask.css";
import Box from "./Box";

const BoxLists = () => {
  return (
    <section id="box-content">
      {cardData.map(
        ({ id, date, setting, image, name, description, download }) => (
          <Box
            key={id}
            date={date}
            setting={setting}
            img={image}
            name={name}
            description={description}
            download={download}
          />
        )
      )}
    </section>
  );
};

export default BoxLists;
