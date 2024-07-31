import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

import "./Accordion.css";
const accordion_data = [
  {
    id: 1,
    title: "Why park a domain name in Parkname ?",
    description:
      "Parkname is the leading industry standard for domain name parking and monetization services. We offer a wide variety of services to help you achieve success.",
  },
];

const Accordion = () => {
  const [selectedTopic, setSelectedTopic] = useState(null);

  const handleShowTopic = (index) =>
    setSelectedTopic(selectedTopic === index ? null : index);

  return (
    <section className="accordion-section">
      {accordion_data.map(({ id, title, description }, index) => {
        return (
          <button key={id} onClick={() => handleShowTopic(index)}>
            <div className="accordion-title">
              <h3>{title}</h3>
              <p>{selectedTopic === index ? <IoIosArrowUp size={25}/>  : <IoIosArrowDown size={25}/>}</p>
            </div>
            {selectedTopic === index && (
              <p className="accordion-content">{description}</p>
            )}
          </button>
        );
      })}
    </section>
  );
};

export default Accordion;
