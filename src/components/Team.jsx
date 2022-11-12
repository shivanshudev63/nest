import React from "react";
import web from "../images/bg_single_team-2.jpg";
import Sdata from "./Sdata";
import Card from "./Card";

function Team() {
  return (
    <>
      <section className="mb-5 d-flex align-items-center">
        <div className="container-fluid nav_bg">
          <div className="row">
            <div className="col-12 px-0 mx-auto head-text">
              <div className="col-md-12  header-img ">
                <img src={web} className="img-fluid" alt="" />
              </div>
              <div className="text-on-image">
                <h3>
                  <strong> Our Team</strong>
                </h3>
                <p>
                  <strong> &nbsp;Team &nbsp; {" > "} &nbsp;Our Team</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="my-5" id="header">
        <h1 className="text-center">OUR TEAM MEMBER</h1>
      </section>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4 gx-1">
                {
                    Sdata.map((val, ind)=>{
                        return <Card 
                            imgsrc={val.imgsrc}
                            title={val.title}
                            position={val.position}
                        />
                    })
                }
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Team;
