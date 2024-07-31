import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import { dataTabs } from "./dataTabs";
import Card from './../Third-Task/Card';
import './ReactTabs.css';

const ReactTabs = () => {
  return (
    <Tabs className="react-tabs">
      <TabList className="tab-list">
        {dataTabs.map(({name}, index) => (
          <Tab key={index} className="tab">{name}</Tab>
        ))}
      </TabList>

      {dataTabs.map((tab, index) => (
        <TabPanel key={index} className="tab-panel">
          {tab.content.map(({title, firstPrice, secondPrice}, cardIndex) => (
            <Card key={cardIndex} title={title} firstPrice={firstPrice} secondPrice={secondPrice} />
          ))}
        </TabPanel>
      ))}
    </Tabs>
  );
};

export default ReactTabs;
