import React from "react";
import web from "../../images/bg_single_team-2.jpg";
import "./Service.css";
import ServiceMenu from "./ServiceMenu";
import Comment from "./Comment";
import "./Service.css"

function IdeaBank() {
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
                  <strong>IDEA BANK</strong>
                </h3>
                <p>
                  <strong>
                    {" "}
                    &nbsp;Home &nbsp; {" > "} &nbsp;Service&nbsp; {" > "}{" "}
                    &nbsp;IDEA BANK
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
            <div className="d-flex text-center pt-5 px-5 mx-5 servicepadding">
              <h4 style={{ color: "#565387" }}>
                <strong>
                  Aspirants with Brilliant Ideas and Initiative are Unable to
                  See The Light due to many Financial, Technical, Marketing or
                  Legal Challenges.
                </strong>
              </h4>
            </div>
            <div className=" py-5 mt-3 d-flex justify-content-center servicecontentimg">
              <img
                style={{ boxShadow: "1px 2px 9px black" }}
                src="./images/service73.png"
                alt=""
              />
            </div>
            <div className="d-flex text-center pt-5 px-5 mx-5 servicepadding">
              <h4 style={{ color: "#565387" }}>
                <strong>
                  NEST has Initiated PROJECT IDEA IMPLEMENTATION in which Anyone
                  Can Submit Your Ideas Related To START UP BUSINESS, SOCIAL
                  WELFARE, EDUCATION and SCIENTIFIC IDEAS.
                </strong>
              </h4>
            </div>
            <div className=" py-5 mt-3 d-flex justify-content-center servicecontentimg">
              <img
                style={{ boxShadow: "1px 2px 9px black" }}
                src="./images/service74.png"
                alt=""
              />
            </div>
            <div className="d-flex text-center pt-0 py-5 px-5 mx-5 servicepadding">
              <h4 style={{ color: "#565387" }}>
                <strong>
                  We Strive To Bring Your Ideas Into Implementation Stage
                  Through Our Project Initiatives.
                </strong>
              </h4>
            </div>

            <Comment />
          </div>
          <ServiceMenu />
        </div>
      </section>
    </>
  );
}

export default IdeaBank;
