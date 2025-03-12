import { useState } from "react";
import ItemBanner from "../../../Shared/ItemBanner/ItemBanner";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const OurShop = () => {
  const [tabs, setTabs] = useState([0]);
  return (
    <div>
      <ItemBanner
        img="https://i.ibb.co.com/Vp3XMN24/banner2.jpg"
        title="Our Shop"
        description="Would you like to try this dish?"
      />

      <Tabs defaultIndex={tabs} onSelect={(index) => setTabs(index)}>
        <TabList>
          <Tab>Salad</Tab>
          <Tab>Pizza</Tab>
          <Tab>Soups</Tab>
          <Tab>Desserts</Tab>
          <Tab>Drinks</Tab>
        </TabList>
        <TabPanel></TabPanel>
        <TabPanel></TabPanel>
      </Tabs>
    </div>
  );
};

export default OurShop;
