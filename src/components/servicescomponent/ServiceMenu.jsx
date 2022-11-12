import React from "react";


const ServiceMenu=()=>{
    return(
        <>
            <div className="col-3">
            <div className="mx-3 " style={{ boxShadow: "1px 2px 9px black" }}>
              <div
                className=" px-2 p-1 pt-3 servicemenu"
                style={{
                  borderBottom: "solid lightgrey",
                  background: "#565387",
                  color: "white",
                }}
              >
                <h5>{"< "} &nbsp;All Services</h5>
              </div>
              <a href="/ideabank">
                <div
                  className="tablehover servicemenu p-2 "
                  style={{ borderBottom: "solid lightgrey" }}
                >
                  IDEA BANK
                </div>
              </a>
              <a href="/agroecological">
                <div
                  className="tablehover servicemenu p-2 "
                  style={{ borderBottom: "solid lightgrey" }}
                >
                  AGRO-ECOLOGICAL SERVICES
                </div>
              </a>
              <a href="/tribalentrepreneurship">
                <div
                  className="tablehover servicemenu p-2"
                  style={{ borderBottom: "solid lightgrey" }}
                >
                  TRIBAL ENTREPRENEURSHIP
                </div>
              </a>
              <a href="/promotingeducation">
                {" "}
                <div
                  className="tablehover servicemenu p-2"
                  style={{ borderBottom: "solid lightgrey" }}
                >
                  PROMOTING EDUCATION
                </div>
              </a>
              <a href="/promotionofsports">
                <div
                  className="tablehover servicemenu p-2"
                  style={{ borderBottom: "solid lightgrey" }}
                >
                  PROMOTION OF SPORTS
                </div>
              </a>
              <a href="/tribalwelfare">
                {" "}
                <div
                  className="tablehover servicemenu p-2"
                  style={{ borderBottom: "solid lightgrey" }}
                >
                  TRIBAL WELFARE
                </div>
              </a>
              <a href="/environmentcare">
                <div
                  className="tablehover servicemenu p-2"
                  style={{ borderBottom: "solid lightgrey" }}
                >
                  ENVIRONMENT CARE
                </div>
              </a>
              <a href="/agritech">
                {" "}
                <div
                  className="tablehover servicemenu p-2"
                  style={{ borderBottom: "solid lightgrey" }}
                >
                  AGRITECH
                </div>
              </a>
              <a href="/sportspromotion">
                <div
                  className="tablehover servicemenu p-2"
                  style={{ borderBottom: "solid lightgrey" }}
                >
                  SPORTS PROMOTION
                </div>
              </a>
              <a href="/dronetechnology">
                <div
                  className="tablehover servicemenu p-2"
                  style={{ borderBottom: "solid lightgrey" }}
                >
                  DRONE PROMOTION
                </div>
              </a>
              <a href="/defencetechnology">
                <div
                  className="tablehover servicemenu p-2"
                  style={{ borderBottom: "solid lightgrey" }}
                >
                  DEFENCE PROMOTION
                </div>
              </a>
              <a href="/technologiespromotion">
                <div
                  className="tablehover servicemenu p-2"
                  style={{ borderBottom: "solid lightgrey" }}
                >
                  TECHNOLOGIES PROMOTION
                </div>
              </a>
              <a href="/fpo">
                {" "}
                <div
                  className="tablehover servicemenu p-2"
                  style={{ borderBottom: "solid lightgrey" }}
                >
                  FPO
                </div>
              </a>
              <a href="/naturalfarming">
                <div
                  className="tablehover servicemenu p-2"
                  style={{ borderBottom: "solid lightgrey" }}
                >
                  NATURAL FARMING
                </div>
              </a>
              <a href="/educational">
                <div className="tablehover p-2">EDUCATIONAL SERVICES</div>
              </a>
            </div>
          </div>
        </>
    )
}

export default ServiceMenu;