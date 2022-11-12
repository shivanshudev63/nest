import React from "react"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from "./components/Home";
import SriNarayanJee from "../src/components/about/SriNarayanJee";
import ManagingTrustee from "../src/components/about/ManagingTrustee";
import JointManagingTrustee from "../src/components/about/JointManagingTrustee";
import Mvv from "../src/components/about/Mvv";
import AgroEcological from "../src/components/servicescomponent/AgroEcological";
import PromotionOfSports from "../src/components/servicescomponent/PromotionOfSports";
import PromotingEducation from "../src/components/servicescomponent/PromotingEducation";
import TribalEntrepreneurship from "../src/components/servicescomponent/TribalEntrepreneurship";
import AdivasiNaturalProductBrand from "../src/components/servicescomponent/AdivasiNaturalProductBrand";
import Educational from "../src/components/servicescomponent/Educational";
import NaturalFarming from "../src/components/servicescomponent/NaturalFarming";
import AgriTech from "../src/components/servicescomponent/AgriTech";
import Fpo from "../src/components/servicescomponent/Fpo";
import TechnologiesPromotion from "../src/components/servicescomponent/TechnologiesPromotion";
import DefencePromotion from "../src/components/servicescomponent/DefencePromotion";
import SportsPromotion from "../src/components/servicescomponent/SportsPromotion";
import IdeaBank from "../src/components/servicescomponent/IdeaBank";
import Team from "./components/Team";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import {Route,Routes,Navigate } from "react-router-dom";
import GoToTop from "./components/GoToTop";

const App =()=>{
    return(
        <>
        <GoToTop />
        <Navbar />
        <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/srinarayanjee" element={<SriNarayanJee />} />
        <Route exact path="/managingtrustee" element={<ManagingTrustee />} />
        <Route exact path="/jointmanagingtrustee" element={<JointManagingTrustee />} />
        <Route exact path="/mvv" element={<Mvv />} />
        <Route exact path="/agroecological" element={<AgroEcological />} />
        <Route exact path="/promotionofsports" element={<PromotionOfSports />} />
        <Route exact path="/promotingeducation" element={<PromotingEducation />} />
        <Route exact path="/tribalentrepreneurship" element={<TribalEntrepreneurship />} />
        <Route exact path="/adivasinaturalproductbrand" element={<AdivasiNaturalProductBrand />} />
        <Route exact path="/educational" element={<Educational />} />
        <Route exact path="/naturalfarming" element={<NaturalFarming />} />
        <Route exact path="/agritech" element={<AgriTech />} />
        <Route exact path="/fpo" element={<Fpo />} />
        <Route exact path="/technologiespromotion" element={<TechnologiesPromotion />} />
        <Route exact path="/defencepromotion" element={<DefencePromotion />} />
        <Route exact path="/sportspromotion" element={<SportsPromotion />} />
        <Route exact path="/ideabank" element={<IdeaBank />} />
       
        <Route exact path="/team" element={<Team/>} />
        <Route exact path="/contact" element={<Contact/>} />
        <Route
        path="*"
        element={<Navigate to="/" replace />} />
        </Routes>
        <Footer />
        </>
    );

};
export default App;