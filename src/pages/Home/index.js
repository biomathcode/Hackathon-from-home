import { lazy } from "react";

import IntroContent from "../../content/IntroContent.json";
import MiddleBlockContent from "../../content/MiddleBlockContent.json";
import AboutContent from "../../content/AboutContent.json";
import MissionContent from "../../content/MissionContent.json";
import ProductContent from "../../content/ProductContent.json";
import ContactContent from "../../content/ContactContent.json";

import EnergyGeneration from '../../content/EnergyGeneration.json';

//OurSceneraio
import SolarEnergy from '../../content/SolarEnergy.json';
import DemandScheduling from '../../content/DemandScheduling.json'

import EnergyStorage from '../../content/EnergyStorage.json'
import GridIntegration from '../../content/GridIntegration.json'
import MarketIntegration from '../../content/MarketIntegration.json'




const ContactFrom = lazy(() => import("../../components/ContactForm"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));
const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));

const Home = () => {
  return (
    <Container>
      <ScrollToTop />
      <ContentBlock
        type="right"
        first="true"
        title={IntroContent.title}
        content={IntroContent.text}
        button={IntroContent.button}
        icon="solar.png"
        id="intro"
      />
      <MiddleBlock
        title={MiddleBlockContent.title}
        content={MiddleBlockContent.text}
        button={MiddleBlockContent.button}
      />
      <ContentBlock
        type="left"
        title={AboutContent.title}
        content={AboutContent.text}
        section={AboutContent.section}
        icon="home.jpg"
        id="about"
      />
      <ContentBlock
        type="right"
        title={MissionContent.title}
        content={MissionContent.text}
        icon="SystemConfig.jpg"
        id="mission"
      />

      <ContentBlock
        type="left"
        title={ProductContent.title}
        content={ProductContent.text}
        icon="EnergyConsumption.jpg"
        id="product"
      />
      <ContentBlock
        type="right"
        title={EnergyGeneration.title}
        content={EnergyGeneration.text}
        icon="EnergyGeneration.jpg"
        id="mission"
      />
      <h1>Our Scenario</h1>
      <ContentBlock
        type="right"
        title={SolarEnergy.title}
        content={SolarEnergy.text}
        icon={SolarEnergy.image}
        id="stimulation"
      />
      <ContentBlock
        type="left"
        title={DemandScheduling.title}
        content={DemandScheduling.text}
        icon={DemandScheduling.imageOne}
        id="stimulation"
      />
      <ContentBlock
        type="right"
        title={EnergyStorage.title}
        content={EnergyStorage.text}
        icon={EnergyStorage.image}
        id="Stimulation"
      />
      <ContentBlock
        type="right"
        title={GridIntegration.title}
        content={GridIntegration.text}
        icon={GridIntegration.imageOne}
        id="GridInegration"
      />
      <ContentBlock
        type="left"
        title={MarketIntegration.title}
        content={MarketIntegration.text}
        icon={MarketIntegration.image}
        id="MarketInegration"
      />
      <h2>Interactive Report</h2>
      <iframe title="something" src="https://datapane.com/u/fivosd/reports/p2p-exchange/embed/"  width="100%" height="540px" frameBorder="0">Iframe not supported.</iframe>

      <h1>Other Resources</h1>
      <a href="https://datalore.jetbrains.com/notebook/dAWrqiZjzmB3CeEIfAmHgj/jN70VaV7ckid23gzbbheud/">Link to code notebook</a>

       <ContactFrom
        title={ContactContent.title}
        content={ContactContent.text}
        id="contact"
      />

    </Container>
  );
};

export default Home;
