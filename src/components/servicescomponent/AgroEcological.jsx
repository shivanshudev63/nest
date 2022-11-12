import React from "react";
import web from "../../images/bg_single_team-2.jpg";
import "./Service.css";
import { NavLink } from "react-router-dom";
import ServiceMenu from "./ServiceMenu";
import  Comment from "./Comment";

function agroecological() {
  return (
    <>
      <section className=" d-flex align-items-center">
        <div className="container-fluid nav_bg">
          <div className="row">
            <div className="col-12 px-0 mx-auto head-text">
              <div
                className="col-md-12  header-img "
                style={{
                  boxShadow: "1px 2px 9px black",
                }}
              >
                <img src={web} className="img-fluid" alt="" />
              </div>
              <div className="text-on-image">
                <h3 className="px-1">
                  <strong>AGRO-ECOLOGICAL SERVICES</strong>
                </h3>
                <p>
                  <strong>
                    {" "}
                    &nbsp;Home &nbsp; {" > "} &nbsp;Service&nbsp; {" > "}{" "}
                    &nbsp;AGRO-ECOLOGICAL SERVICES
                  </strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="d-flex justify-content-center mb-5">
        <div className="col-10 row">
          {" "}
          <div className="col-9" style={{ boxShadow: "1px 2px 9px black" }}>
            <div className="d-flex justify-content-center pt-5">
              <h4 style={{ color: "#565387" }}>
                <strong>AGRO-ECOLOGICAL SERVICES :</strong>
              </h4>
            </div>
            <div className="d-flex justify-content-center">
              <h4 style={{ color: "#565387" }}>
                <strong>INTEGRATING ENVIRONMENTAL CARE WITH AGRICULTURE</strong>
              </h4>
            </div>
            <div className="pt-3 px-5">
              <p>
                Today’s food and agricultural systems have succeeded in
                supplying large volumes of food to global markets. However,
                high-external input, resource-intensive agricultural systems
                have caused massive deforestation, water scarcities,
                biodiversity loss, soil depletion and high levels of greenhouse
                gas emissions. Despite significant progress in recent times,
                hunger and extreme poverty persist as critical global
                challenges. Even where poverty has been reduced, pervasive
                inequalities remain, hindering poverty eradication. Integral to
                FAO’s Common Vision for Sustainable Food and Agriculture,
                Agro-ecology is a key part of the global response to this
                climate of instability, offering a unique approach to meeting
                significant increases in our food needs of the future while
                ensuring no one is left behind.
              </p>{" "}
              <p>
                Agro-ecology is an integrated approach that simultaneously
                applies ecological and social concepts and principles to the
                design and management of food and agricultural systems. It seeks
                to optimize the interactions between plants, animals, humans and
                the environment while taking into consideration the social
                aspects that need to be addressed for a sustainable and fair
                food system.
              </p>
              <p>
                {" "}
                Agro-ecology is not a new invention. It can be identified in
                scientific literature since the 1920s, and has found expression
                in family farmers’ practices, in grassroots social movements for
                sustainability and the public policies of various countries
                around the world. More recently, agro-ecology has entered the
                discourse of international and UN institutions.
              </p>
            </div>
            <div className="d-flex justify-content-center py-3">
              <img src="./images/service1.png" alt="" />
            </div>
            <div className="pt-3 px-5">
              <p>
                In a context of a changing climate and growing concerns for more
                healthy food systems, agro ecology is gaining momentum as a
                scientific discipline, sustainable farming approach and social
                movement. There is growing anecdotal and case study evidence of
                its multiple benefits, from climate resilience to farm
                productivity. Yet its promotion in public agricultural policies,
                research and extension is still limited.
              </p>
              <p>
                {" "}
                It calls for consolidating the evidence base for agro ecology
                through multi-dimensional tools that not only measure yields,
                but also its many other benefits. Economic, Environmental and
                Social. Mainstreaming agro ecology will require a fundamental
                cultural and philosophical shift in how we as a society define
                ‘productive’ and ‘efficient’ agriculture.
              </p>
            </div>
            <span className="pt-3 px-5">
              NEST has following 10 steps to address the services on
              agro-ecological services :-
            </span>
            <div className="d-flex justify-content-center pt-3 px-5">
              <table class="table table-bordered">
                <tbody>
                  <tr>
                    <th scope="row">1.</th>
                    <td id="tablehover">DIVERSITY</td>
                  </tr>
                  <tr>
                    <th scope="row"></th>
                    <td id="tablehover">
                      Diversification is key to agro-ecological transitions to
                      ensure food security and nutrition while conserving,
                      protecting and enhancing natural resources.{" "}
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">2.</th>
                    <td id="tablehover">
                      CO-CREATION AND SHARING OF KNOWLEDGE{" "}
                    </td>
                  </tr>
                  <tr>
                    <th scope="row"></th>
                    <td id="tablehover">
                      Agricultural innovations respond better to local
                      challenges when they are co-created through participatory
                      processes.{" "}
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">3.</th>
                    <td id="tablehover">SYNERGIES</td>
                  </tr>
                  <tr>
                    <th scope="row"></th>
                    <td id="tablehover">
                      Building synergies enhances key functions across food
                      systems,supporting production and multiple ecosystem
                      services.{" "}
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">4.</th>
                    <td id="tablehover">EFFICIENCY</td>
                  </tr>
                  <tr>
                    <th scope="row"></th>
                    <td id="tablehover">
                      Innovative agro-ecological practices produce more using
                      less external resources.{" "}
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">5.</th>
                    <td id="tablehover">RECYCLING</td>
                  </tr>
                  <tr>
                    <th scope="row"></th>
                    <td id="tablehover">
                      More recycling means agricultural production with lower
                      economic and environmental costs.
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">6.</th>
                    <td id="tablehover">RESILIENCE</td>
                  </tr>
                  <tr>
                    <th scope="row"></th>
                    <td id="tablehover">
                      Enhanced resilience of people, communities and ecosystems
                      is key to sustainable food and agricultural systems{" "}
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">7.</th>
                    <td id="tablehover">HUMAN AND SOCIAL VALUES</td>
                  </tr>
                  <tr>
                    <th scope="row"></th>
                    <td id="tablehover">
                      Protecting and improving rural livelihoods, equity and
                      social well-being is essential for sustainable food and
                      agricultural systems.{" "}
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">8.</th>
                    <td id="tablehover">CULTURE AND FOOD TRADITIONS</td>
                  </tr>
                  <tr>
                    <th scope="row"></th>
                    <td id="tablehover">
                      By supporting healthy, diversified and culturally
                      appropriate diets, agro-ecology contributes to food
                      security and nutrition while maintaining the health of
                      ecosystems.{" "}
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">9.</th>
                    <td id="tablehover">RESPONSIBLE GOVERNANCE</td>
                  </tr>
                  <tr>
                    <th scope="row"></th>
                    <td id="tablehover">
                      •Sustainable food and agriculture requires responsible and
                      •effective governance mechanisms at different scales –
                      from local to national to global.{" "}
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">10.</th>
                    <td id="tablehover">CIRCULAR AND SOLIDARITY ECONOMY</td>
                  </tr>
                  <tr>
                    <th scope="row"></th>
                    <td id="tablehover">
                      Circular and solidarity economies that reconnect producers
                      and consumers provide innovative solutions for living
                      within our planetary boundaries while ensuring the social
                      foundation for inclusive and sustainable development.{" "}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="pt-3 px-5">
              <h6>
                NEST has offered interlinked relationship services on regulating
                , provisioning, cultural and agricultural.
              </h6>
            </div>
            <div className="pt-3 px-5">
              <table class="table table-bordered">
                <thead>
                  <tr>
                    <th scope="col">Regulating Services</th>
                    <th scope="col">Provisioning services</th>
                    <th scope="col">Cultural services</th>
                    <th scope="col">Agricultural Practices</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Air flow regulations</td>
                    <td>Biomass based energy</td>
                    <td>Aesthetic values</td>
                    <td>Complex landspares</td>
                  </tr>
                  <tr>
                    <td>Carbon</td>
                    <td>Fiber</td>
                    <td>Cultural heritage</td>
                    <td>Cover crops</td>
                  </tr>
                  <tr>
                    <td>Climate regulation</td>
                    <td>Fodder</td>
                    <td>Environmental education</td>
                    <td>Crop diversification</td>
                  </tr>
                  <tr>
                    <td>Erosion protection</td>
                    <td>Food</td>
                    <td>Inspiration</td>
                    <td>Field margins</td>
                  </tr>
                  <tr>
                    <td>Pest control</td>
                    <td>Genetic material</td>
                    <td>Recreation</td>
                    <td>Livestock combinations</td>
                  </tr>
                  <tr>
                    <td>Soil fertility</td>
                    <td>Medicinal resources</td>
                    <td>Relax</td>
                    <td>No/light tillage</td>
                  </tr>
                  <tr>
                    <td>Seed dispersal</td>
                    <td>Ornamental resources</td>
                    <td>Scientific knowledge</td>
                    <td>No/natural fertilizer</td>
                  </tr>
                  <tr>
                    <td>Pollination</td>
                    <td>Raw Material</td>
                    <td>Sense of Place</td>
                    <td>No/natural herbicides</td>
                  </tr>
                  <tr>
                    <td>Waste treatment</td> <td>Timber</td> <td>Tourism</td>{" "}
                    <td>No/natural pesticides</td>
                  </tr>
                  <tr>
                    <td>Water flow regulations</td> <td></td>{" "}
                    <td>Traditional ecological knowledge</td>{" "}
                    <td>Residue retention on soil</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className=" py-5 mt-3 d-flex justify-content-center">
              <img
                style={{ boxShadow: "1px 2px 9px black" }}
                src="./images/service2.png"
                alt=""
              />
            </div>
            
           
           <Comment />
          </div>
          <ServiceMenu />
        </div>
      </section>
    </>
  );
}

export default agroecological;
