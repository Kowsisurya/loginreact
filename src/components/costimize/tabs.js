import React from "react";
import ReactDOM from "react-dom";
import Tab from "./components/Tab";
import TabsPanel from "./components/TabsPanel";

import "./style.css";

function UncontrolledExample() {
  return (
    <>
    <div className="UncontrolledExample">
      <TabsPanel>
        <Tab
         title="Assests/Spend"
          >
          Lorem ipsum dolor amet glossier vinyl fanny pack, echo park mustache
          helvetica hexagon. Pinterest enamel pin flexitarian cred literally air
          plant yr vape small batch ennui taiyaki af. Quinoa kombucha
          asymmetrical, pitchfork 3 wolf moon tilde enamel pin bitters XOXO.
          Gluten-free distillery semiotics, franzen DIY af green juice cornhole
          freegan cloud bread. Master cleanse pok pok edison bulb flannel, banjo
          mlkshk YOLO pour-over. Jean shorts intelligentsia snackwave pug.
        </Tab>
        <Tab
          title="Savings Models"
          subtitle="Our History"
          icon="fas fa-hourglass-start"
        >
          Lorem ipsum dolor amet glossier vinyl fanny pack, echo park mustache
          helvetica hexagon. Pinterest enamel.
        </Tab>
        <Tab title="Dashboard & Analysis">
          Lorem ipsum dolor amet glossier vinyl fanny pack, echo park mustache
          helvetica hexagon. Pinterest enamel pin flexitarian cred literally air
          plant yr vape small batch ennui taiyaki af. Quinoa kombucha
          asymmetrical, pitchfork 3 wolf moon tilde enamel pin bitters XOXO.
          Gluten-free distillery semiotics, franzen DIY af green juice cornhole
          freegan cloud bread. Master cleanse pok pok edison bulb flannel, banjo
          mlkshk YOLO pour-over. Jean shorts intelligentsia snackwave pug.Lorem
          ipsum dolor amet glossier vinyl fanny pack, echo park mustache
          helvetica hexagon. Pinterest enamel pin flexitarian cred literally air
          plant yr vape small batch ennui taiyaki af. Quinoa kombucha
          asymmetrical, pitchfork 3 wolf moon tilde enamel pin bitters XOXO.
          Gluten-free distillery semiotics, franzen DIY af green juice cornhole
          freegan cloud bread. Master cleanse pok pok edison bulb flannel, banjo
          mlkshk YOLO pour-over. Jean shorts intelligentsia snackwave pug.
        </Tab>
      </TabsPanel>
    </div>
    </>
  );
}
export default UncontrolledExample
