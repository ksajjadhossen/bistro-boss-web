import { useState } from "react";
import ItemBanner from "../../../Shared/ItemBanner/ItemBanner";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../../hooks/useMenu";
import OrderCard from "../../../components/OrderCard/OrderCard";
import OrderTab from "../../../components/OrderTab/OrderTab";

const OurShop = () => {
  const [tabs, setTabs] = useState(0);
  const [menu] = useMenu();
  const soup = menu.filter((item) => item.category === "soup");
  const dessert = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const salad = menu.filter((item) => item.category === "salad");
  const drinks = menu.filter((item) => item.category === "drinks");

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
        <TabPanel>
          <OrderTab items={salad}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={pizza}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={soup}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={dessert}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={drinks}></OrderTab>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default OurShop;
