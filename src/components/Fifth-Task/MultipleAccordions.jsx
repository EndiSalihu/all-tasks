import { useState } from "react";
import './MultipleAccordions.css';
import { multipleAccordion_data } from './multipleAccordionData.js';
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

const MultipleAccordions = () => {
  const [expandedAccordion, setExpandedAccordion] = useState(null); // keeps track of which main accordion is expanded.
  const [expandedSection, setExpandedSection] = useState({}); // keeps track of which section within each expanded accordion is expanded.

  const handleAccordionClick = (index) => {
    setExpandedAccordion(index === expandedAccordion ? null : index);
    setExpandedSection({}); // Close all sections when toggling the main accordion
  };

  const handleSectionClick = (accordionIndex, sectionIndex) => {
    setExpandedSection((prevState) => ({
      ...prevState, [accordionIndex]: prevState[accordionIndex] === sectionIndex ? null : sectionIndex,
    }));
  };

  return (
    <div className="accordion-section">
      {/* Maps through the accordion data and renders each main accordion with its title */}
      {multipleAccordion_data.map((accordion, accordionIndex) => (
        <button key={accordionIndex}>
          <div className="accordion-title" onClick={() => handleAccordionClick(accordionIndex)}>
            <h3>{accordion.title}</h3>
            <p>{expandedAccordion === accordionIndex ? <IoIosArrowUp size={25}/>  : <IoIosArrowDown size={25}/>}</p>
          </div>

          {/* If the main accordion is expanded, it renders the sections within it */}
          {expandedAccordion === accordionIndex && (
            <div className="accordion-content">
              {accordion.items.map((item, sectionIndex) => (
                <button key={sectionIndex}>
                  <div className="accordion-title" onClick={() => handleSectionClick(accordionIndex, sectionIndex)}>
                    <h4>{item.title}</h4>
                    <p>{expandedSection[accordionIndex] === sectionIndex ? <IoIosArrowUp size={25}/> : <IoIosArrowDown size={25}/>}</p>
                  </div>

                  {/* If the section within the main accordion is expanded, it renders the content within */}
                  {expandedSection[accordionIndex] === sectionIndex && (
                    <div>
                      <p>{item.content}</p>
                    </div>
                  )}
                </button>
              ))}
            </div>
          )}
        </button>
      ))}
    </div>
  );
};

export default MultipleAccordions;
