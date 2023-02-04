import React from "react";
import web from "../../images/bg_single_team-2.jpg";
import "./Service.css";
import ServiceMenu from "./ServiceMenu";
import Comment from "./Comment";

function AgriTech() {
  return (
    <>
      <section className=" d-flex align-items-center">
        <div className="container-fluid nav_bg">
          <div className="row">
            <div className="col-12 px-0 mx-auto head-text servicetxt">
              <div
                className="col-md-12  header-img serviceimg"
                style={{
                  boxShadow: "1px 2px 9px black",
                }}
              >
                <img src={web} className="img-fluid" alt="" />
              </div>
              <div className="text-on-image servicetxt">
                <h3 className="px-1">
                  <strong>AGRITECH</strong>
                </h3>
                <p>
                  <strong>
                    {" "}
                    &nbsp;Home &nbsp; {" > "} &nbsp;Service&nbsp; {" > "}{" "}
                    &nbsp;AGRITECH
                  </strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="d-flex justify-content-center mb-5 servicepadding servicewidth">
        <div className="col-10 row">
          {" "}
          <div className="col-9" style={{ boxShadow: "1px 2px 9px black" }}>
            <div className="d-flex justify-content-center mt-5 ">
              <img
                src="./images/service30.jpg"
                alt=""
                style={{ width: "50%", boxShadow: "1px 2px 9px black" }}
              />
            </div>
            <div className="px-5 mx-5 mt-5 servicepadding">
              <p>
                NEST IS PROMOTING AGRITECH among Farmers To Bring REVOLUTIONARY
                Changes, Possible through Modern Technological and Commercial
                Approach to Agricultural Sector. Agritech primarily refers to an
                ecosystem of companies and startup enterprises that are
                capitalizing on technological advancements to deliver products
                or services for increasing yield, efficiency – both in terms of
                time and cost, and profitability for farmers across the
                agriculture value chain. The various segments within the
                agritech sector, which support the overall value chain are:
              </p>{" "}
            </div>
            <ul className=" px-5  mx-5 servicepadding">
              <li className="py-2">
                <strong>Market linkage – farm inputs:</strong> Digital
                marketplace and physical infrastructure to link farmers to
                inputs.
              </li>
              <li className="py-2">
                <strong>Biotech:</strong> Research on plant and animal life
                sciences and genomics.
              </li>
              <li className="py-2">
                <strong> Farming as a service:</strong> Farm equipment for rent
                on a pay-per-use basis.
              </li>
              <li className="py-2">
                <strong> Precision agriculture and farm management:</strong> Use
                of geospatial or weather data, IOT, sensors, robotics etc. to
                improve productivity; farm management solutions for resource and
                field management, etc.
              </li>
              <li className="py-2">
                <strong> Farm mechanization and automation:</strong> Industrial
                automation using machinery, tools and robots in seeding,
                material handling, harvesting, etc.{" "}
              </li>
              <li className="py-2">
                <strong>Farm infrastructure:</strong> Farming technologies, such
                as greenhouse systems, indoor-outdoor farming, drip irrigation,
                and environmental control, such as heating and ventilation, etc.{" "}
              </li>
              <li className="py-2">
                <strong>Quality management and traceability:</strong>{" "}
                Post-harvest produce handling, quality check and analysis,
                produce monitoring, and traceability in storage and
                transportation.{" "}
              </li>
              <li className="py-2">
                <strong>Supply chain tech and output market linkage:</strong>{" "}
                Digital platform and physical infrastructure to handle
                post-harvest supply chain and connect farm output with the
                customers.
              </li>
              <li className="py-2">
                <strong>Financial services:</strong> Credit facilities for input
                procurement, equipment, etc. as well as insurance or reinsurance
                of crop.
              </li>
              <li className="py-2">
                <strong>Advisory/ Content:</strong> Information platforms online
                platform for agronomic, pricing, market information.
              </li>
            </ul>
            <div className="d-flex justify-content-center  px-5 my-4 mt-5 servicepadding">
              <h4 style={{ color: "#565387" }}>
                <strong>OVERVIEW OF AGRITECH IN INDIA</strong>
              </h4>
            </div>
            <div className="d-flex justify-content-center ">
              <img
                src="./images/service31.jpg"
                alt=""
                style={{ width: "50%", boxShadow: "1px 2px 9px black" }}
              />
            </div>
            <div className="px-5 mx-5 mt-5 servicepadding">
              <p>
                The overall agritech ecosystem witnessed a revenue growth of
                approximately 85 percent during FY 2019-20. An Ernst & Young
                2020 study pegs the Indian agritech market potential at US$24
                billion by 2025, of which only one percent has been captured so
                far. A study by Bain & Company pegs this potential at US$35
                billion by 2025.
              </p>{" "}
            </div>
            <div className=" px-5 mx-5 my-4 mt-5 servicepadding">
              <h5 style={{ color: "#565387" }}>
                <strong>
                  INPUT MARKET LINKAGE AND FARMING AS A SERVICE (FAAS) SEGMENT
                </strong>
              </h5>
            </div>
            <div className="px-5 mx-5 servicepadding">
              <p>
                This segment is fast picking up pace in India with prominent
                players being AgroStar and BigHaat, which offer missed
                call-based service for farmers ordering inputs and equipments
                along with cash-on-delivery service. These players have been
                able to eliminate multiple levels of intermediaries by
                partnering directly with the producers. Some companies also
                offer services, such as on-demand machinery rental, field
                levelling, and pesticide spraying, as a part of
                farming-as-a-service.{" "}
              </p>{" "}
            </div>
            <div className=" px-5 mx-5 my-4 mt-5 servicepadding">
              <h5 style={{ color: "#565387" }}>
                <strong>
                  SUPPLY CHAIN, POST-HARVEST MANAGEMENT AND OUTPUT MARKET
                  LINKAGE SEGMENT
                </strong>
              </h5>
            </div>
            <div className="px-5 mx-5 servicepadding">
              <p>
                This segment is the largest contributor to the revenue of the
                agritech industry in FY 2020 and also witnessed maximum growth
                among all the segments during the same period. Players in the
                segment are involved in collection, processing, storage, and
                logistics and distribution of agriculture produce from farmers
                to end customers or retailers. Inadequate rural infrastructure
                and lack of traceability along the supply chain has prompted the
                intervention of agritech players in the segment.
              </p>{" "}
            </div>
            <div className=" px-5 mx-5 my-4 mt-5 servicepadding">
              <h5 style={{ color: "#565387" }}>
                <strong>
                  PRECISION FARMING, ANALYTICS, AND ADVISORY SEGMENT
                </strong>
              </h5>
            </div>
            <div className="px-5 mx-5 servicepadding">
              <p>
                This segment offering precision farming solutions and advisory
                services witnessed a growth of approximately 17 percent during
                FY 2020. The startups in this segment address structural issues
                arising out of lack of knowledge about scientific farming
                methods and techniques among famers. These players collect farm
                specific data about soil, weather conditions, humidity, pests
                etc. using IoT sensors or geospatial technology and use their
                analytical capabilities to provide timely insights to the
                farmers. Agritech startups are also coming up with quality
                assessment and grading solutions for large agribusinesses and
                traders. At present, there are approximately 200-250 startups in
                India dealing in these services.
              </p>{" "}
            </div>
            <div className="d-flex justify-content-center px-5 mx-5 my-4 mt-5 servicepadding">
              <h5 style={{ color: "#565387" }}>
                <strong>AGRI FINTECH</strong>
              </h5>
            </div>
            <div className="d-flex justify-content-center">
              <img
                src="./images/service32.jpg"
                alt=""
                style={{ width: "50%", boxShadow: "1px 2px 9px black" }}
              />
            </div>

            <div className="px-5 m-5 servicepadding">
              <p className=" d-flex text-center">
                This segment comprises of agritech startups offering solutions,
                such as credit, insurance, warehouse receipt financing, trade
                financing, etc. Inadequate access to organized credit,
                collateral, and formal documentation is the biggest challenge
                faced by farmers. Agritech players are leveraging technologies,
                such as geo tagging of farm lands and remote crop monitoring, to
                build risk profiles of farmers and ascertain their credit
                worthiness. By partnering with banks, NBFCs, and input
                suppliers, agritech players offer loans at lesser interest rates
                than unorganized lenders. This segment is still developing in
                India and has around 20-40 startups at present.
              </p>{" "}
            </div>

            <div className="d-flex justify-content-center px-5 servicepadding">
              <h4 style={{ color: "#565387" }}>
                <strong>TECHNOLOGY USED IN AGRITECH</strong>
              </h4>
            </div>

            <div className="d-flex justify-content-center px-5 mx-5 my-4 mt-5 servicepadding">
              <h5 style={{ color: "#565387" }}>
                <strong>Smart Farming</strong>
              </h5>
            </div>
            <div className=" d-flex text-center px-5 mx-5 servicepadding">
              <p>
                Smart farming has different categories. It’s used after doing a
                thorough research and inspection of previous conditions. Weather
                forecasts to achieve higher yield, automated irrigation, etc are
                a part of smart farming. It represents the approach to
                agricultural innovation in the whole by adopting various smart
                technologies. In a nutshell, smart farming is harnessing
                collected data, analytics, and machine learning to help farmers
                make decisions about what to grow and how to feed the planet in
                a sustainable way.
              </p>{" "}
            </div>
            <div className="d-flex justify-content-center px-5 mx-5 my-2 servicepadding">
              <h5>
                <strong>Drones and Satellites</strong>
              </h5>
            </div>
            <div className="d-flex justify-content-center">
              <img
                src="./images/service33.jpg"
                alt=""
                style={{ width: "50%", boxShadow: "1px 2px 9px black" }}
              />
            </div>

            <div className=" d-flex text-center px-5 mx-5 mt-4 servicepadding">
              <p>
                Would unmanned aerial vehicles or drones be hovering over
                millions of hectares of farmlands in India? Would they become as
                commonplace as tractors or power tillers on the ground? In her
                2022 Budget speech, Finance Minister Nirmala Sitharaman
                highlighted the government’s resolve to promote what are being
                called kisan drones.
              </p>{" "}
            </div>
            <div className=" d-flex text-center px-5 mx-5 servicepadding">
              <p>
                Using drones and satellites allows a farmer to cover large
                tracts of land quite easily and quickly. Drones and satellites
                help scan the crops and fields in order to measure and monitor.
                They also generate terrain maps. The drone market is exploding,
                on its way to become a multi-billion dollar industry in a short
                span of time. Besides, drones serve other purposes such as
                fighting crop disease, pollination, planting seeds, and food
                security.
              </p>{" "}
            </div>
            <div className="d-flex justify-content-center px-5 mx-5 my-4 servicepadding">
              <h5 style={{ color: "#565387" }}>
                <strong>IoT Sensors</strong>
              </h5>
            </div>
            <div className=" d-flex text-center px-5 mx-5 servicepadding">
              <p>
                Agritech develops internet of things (IoT) based software that
                can track and provide accurate information about the weather,
                humidity, and current condition of soil. What consumed a lot of
                farmers’ time and resources is now available instantaneously.
              </p>{" "}
            </div>
            <div className="d-flex justify-content-center px-5 mx-5 my-4 servicepadding">
              <h5 style={{ color: "#565387" }}>
                <strong>Blockchain</strong>
              </h5>
            </div>
            <div className=" d-flex text-center px-5 mx-5 servicepadding">
              <p>
                You may be wondering how blockchain technology impacts the
                agriculture sector. Well, blockchain connects farmers with
                end-users directly. Consumers can now easily track where, when
                and how the produce originated. This also cuts out the
                middlemen.
              </p>{" "}
            </div>
            <div className="d-flex justify-content-center px-5 mx-5 my-4 servicepadding">
              <h5 style={{ color: "#565387" }}>
                <strong>Vertical Farming</strong>
              </h5>
            </div>
            <div className=" d-flex text-center px-5 mx-5 servicepadding">
              <p>
                As the name suggests, vertical farming involves crop production
                using vertically stacked layers. With the application of LED
                lights to encourage photosynthesis, crops can be grown day and
                night.
              </p>{" "}
            </div>
            <div className="d-flex justify-content-center px-5 mx-5 my-4 servicepadding">
              <h5 style={{ color: "#565387" }}>
                <strong>Automation</strong>
              </h5>
            </div>
            <div className=" d-flex text-center px-5 mx-5 mt-0 my-5 servicepadding">
              <p>
                Automation replaces manual labour with the help of software and
                hardware solutions to increase speed and reduce loss in quality.
                Apart from these, there’s biotech, robotics, and big data too.
                All these advancements have changed the food and agriculture
                industry for good.
              </p>{" "}
            </div>
            <Comment />
          </div>
          <ServiceMenu />
        </div>
      </section>
    </>
  );
}

export default AgriTech;
