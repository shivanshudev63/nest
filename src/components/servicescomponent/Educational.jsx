import React from "react";
import web from "../../images/bg_single_team-2.jpg";
import "./Service.css";
import ServiceMenu from "./ServiceMenu";
import Comment from "./Comment";

function Educational() {
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
                  background: "#565387",
                  height: "15rem",
                }}
              ></div>
              <div className="text-on-image">
                <h3 className="px-1">
                  <strong>EDUCATIONAL SERVICES</strong>
                </h3>
                <p>
                  <strong>
                    {" "}
                    &nbsp;Home &nbsp; {" > "} &nbsp;Service&nbsp; {" > "}{" "}
                    &nbsp;EDUCATIONAL SERVICES
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
            <div className="pt-3 px-5 mx-5 mt-5 ">
              <p className=" d-flex text-center">
                JOURNEY OF NEST OWE THEIR EFFORTS TO OUR INSPIRATION SRI NARAYAN
                JEE WHO HAVE WORKED FOR Socio-economic upliftment of the tribals
                of this region especially in the field of education among tribal
                people.
              </p>{" "}
            </div>
            <div className="d-flex justify-content-center pt-2">
              <img
                src="./images/service20.png"
                alt=""
                style={{ width: "50%", boxShadow: "1px 2px 9px black" }}
              />
            </div>
            <p className=" d-flex text-center mx-5 px-5 mt-5">
              Since 1947 INDEPENDENCE, SRI NARAYAN JEE Through Sewa Mandal’s
              activities, helped in imparting education to children. By the year
              1972-73, it had nearly 500 (Five hundred) centers – Primary and
              Secondary High Schools, residential Schools Teachers Training
              Schools and Hostels both boys and girls- catering to the needs of
              about 20000 (twenty thousand) students.
            </p>
            <div className="d-flex justify-content-center py-3">
              <img
                src="./images/service21.png"
                alt=""
                style={{ width: "50%", boxShadow: "1px 2px 9px black" }}
              />
            </div>
            <p className=" d-flex text-center mx-5 px-5 mt-5">
              Taking Inspiration from His Great Work NEST is To work for
              economical, political and socially marginalized communities for
              their holistic advancement and implementing customized, effective,
              scalable and replicable models for community development through
              development at Foundation level like Child Care and Education.
            </p>
            <h5 className="d-flex text-center mx-5 px-5 pt-3">
              1. NEST is working specially to Spread the Light Of Education To
              Tribal and Backward Classes.
            </h5>
            <div className="d-flex justify-content-center py-3">
              <img
                src="./images/service8.png"
                alt=""
                style={{ width: "50%", boxShadow: "1px 2px 9px black" }}
              />
            </div>
            <h5 className="d-flex text-center mx-5 px-5 pt-3">
              2. NEST is to work For Career Guidance for the Students especially
              in the Backward Areas:
            </h5>
            <div className="d-flex justify-content-center py-3">
              <img className="m-3"
                src="./images/service22.png"
                alt=""
                style={{ width: "35%", boxShadow: "1px 2px 9px black" }}
              />
              <img className="m-3"
                src="./images/service23.png"
                alt=""
                style={{ width: "35%", boxShadow: "1px 2px 9px black" }}
              />
            </div>
            
           
            <h5 className="d-flex text-center mx-5 px-5 pt-3">
              3. NEST is working to build Nationalism among Youth by Promoting
              Defence Careers In The Indian Armed Forces.
            </h5>
            <div className="d-flex justify-content-center py-3">
              <img
                src="./images/service24.png"
                alt=""
                style={{ width: "50%", boxShadow: "1px 2px 9px black" }}
              />
            </div>
            <h5 className="d-flex text-center mx-5 px-5 pt-3">
              4. NEST is specially targeting Students with the Scientific bend
              of Mind who have the potential to become Scientists. NEST through
              their Programs Promoting their Goals and ensuring they Serve
              Indian Research Organisations Like DRDO, ISRO, Indian Atomic
              Research Centres, Environmental Research, Agricultural Research
              Organizations, Avoiding BRAIN DRAIN ISSUE which currently NATION
              is Facing. Most of Indian Brain Talents are Moving Out of Country
              Limiting our Brain Power. Also ensuring These Talents See them
              Through as Research Line requires lot of Financial resources.
            </h5>
            <div className="d-flex justify-content-center py-3">
              <img className="m-3"
                src="./images/service25.png"
                alt=""
                style={{ width: "35%", boxShadow: "1px 2px 9px black" }}
              />
              <img className="m-3"
                src="./images/service8.png"
                alt=""
                style={{ width: "35%", boxShadow: "1px 2px 9px black" }}
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

export default Educational;
