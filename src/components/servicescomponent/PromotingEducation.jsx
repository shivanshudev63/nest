import React from "react";
import web from "../../images/bg_single_team-2.jpg";
import "./Service.css";
import ServiceMenu from "./ServiceMenu";
import Comment from "./Comment";

function promotionofeducation() {
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
                  <strong>PROMOTING EDUCATION</strong>
                </h3>
                <p>
                  <strong>
                    {" "}
                    &nbsp;Home &nbsp; {" > "} &nbsp;Service&nbsp; {" > "}{" "}
                    &nbsp;PROMOTING EDUCATION
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
            <div className="pt-3 px-5 m-5 servicepadding">
              <p className=" d-flex text-center">
                NEST attempts to examine and understand the low literacy level
                and education among tribal children in Jharkhand. We understand
                the linkages between education and development. Various
                programmes and schemes have been initiated but very few of them
                have reached the tribal children and benefited them. Many of the
                programmes did not benefit the tribal community because the
                programmes were not contextualized and localized considering
                regional, geographical and physical differences and barriers.
                Other reasons for not reaching the benefits of the programs to
                the tribals are lack of political will, corruption, and lesser
                attention on development in tribal areas. NEST Programs
                highlights the need for special focus on tribal education, which
                is inclusive of context specific traditional and innovative
                interventions.
              </p>{" "}
              
            </div>
            <div className="d-flex justify-content-center py-3">
              <img src="./images/service6.png" alt="" style={{width:"50%", boxShadow: "1px 2px 9px black"}}/>
            </div>
            <div className="d-flex justify-content-center py-3">
              <img src="./images/service7.png" alt="" style={{width:"50%", boxShadow: "1px 2px 9px black"}}/>
            </div>
            <div className="d-flex justify-content-center py-3">
              <img src="./images/service8.png" alt="" style={{width:"50%", boxShadow: "1px 2px 9px black"}}/>
            </div>
            
            
            <Comment />
          </div>
          <ServiceMenu />
        </div>
      </section>
    </>
  );
}

export default promotionofeducation;
