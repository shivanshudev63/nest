import React from "react";
import web from "../../images/bg_single_team-2.jpg";
import "./Service.css";
import ServiceMenu from "./ServiceMenu";
import Comment from "./Comment";

function promotionofsports() {
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
                  <strong>PROMOTION OF SPORTS</strong>
                </h3>
                <p>
                  <strong>
                    {" "}
                    &nbsp;Home &nbsp; {" > "} &nbsp;Service&nbsp; {" > "}{" "}
                    &nbsp;PROMOTION OF SPORTS
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
            <div className="d-flex justify-content-center pt-5">
              <h4 style={{ color: "#565387" }}>
                <strong>NEST is Actively Promoting Sports amongst Children from Tribal Areas!</strong>
              </h4>
            </div>
           
            <div className="py-5 px-5 d-flex justify-content-center servicecontentimg">
            <img src="./images/service3.png" alt="" style={{width:"50%", boxShadow: "1px 2px 9px black" }}/>
             </div>
             <div className="py-5 px-5 d-flex justify-content-center servicecontentimg">
            <img src="./images/service4.png" alt="" style={{width:"50%", boxShadow: "1px 2px 9px black" }}/>
             </div>
             <h5 className="d-flex text-center px-5 mx-5 ">NEST is also promotingRural,  tradition of indigenous sports and Tribal Games closer to Tribal Culture.</h5>
             <div className="py-5 px-5 d-flex justify-content-center servicecontentimg">
            <img src="./images/service5.png" alt="" style={{width:"50%", boxShadow: "1px 2px 9px black" }}/>
             </div>
            
            
            <Comment />
          </div>
         <ServiceMenu />
        </div>
      </section>
    </>
  );
}

export default promotionofsports;
