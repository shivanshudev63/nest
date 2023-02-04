import React from "react";

const ServiceMenu = () => {
  return (
    <>
      <div className="col-3 ">
        <div
          className="mx-3 servicepadding servicemenu smallservicemenu"
          style={{ boxShadow: "1px 2px 9px black" }}
        >
          <div
            className=" px-2 p-1 pt-3 servicemenu smallservicemenu"
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
              className="tablehover servicemenu p-2 smallservicemenu "
              style={{ borderBottom: "solid lightgrey" }}
            >
              IDEA BANK
            </div>
          </a>
          <a href="/agroecological">
            <div
              className="tablehover servicemenu p-2 smallservicemenu "
              style={{ borderBottom: "solid lightgrey" }}
            >
              AGRO-ECOLOGICAL SERVICES
            </div>
          </a>
          <a href="/tribalentrepreneurship">
            <div
              className="tablehover servicemenu p-2 smallservicemenu "
              style={{ borderBottom: "solid lightgrey", overflow: "hidden" }}
            >
              TRIBAL ENTREPRENEURSHIP
            </div>
          </a>
          <a href="/promotingeducation">
            {" "}
            <div
              className="tablehover servicemenu p-2 smallservicemenu "
              style={{ borderBottom: "solid lightgrey", overflow: "hidden" }}
            >
              PROMOTING EDUCATION
            </div>
          </a>
          <a href="/promotionofsports">
            <div
              className="tablehover servicemenu p-2 smallservicemenu "
              style={{ borderBottom: "solid lightgrey", overflow: "hidden" }}
            >
              PROMOTION OF SPORTS
            </div>
          </a>
          <a href="/tribalwelfare">
            {" "}
            <div
              className="tablehover servicemenu p-2 smallservicemenu "
              style={{ borderBottom: "solid lightgrey", overflow: "hidden" }}
            >
              TRIBAL WELFARE
            </div>
          </a>
          <a href="/environmentcare">
            <div
              className="tablehover servicemenu p-2 smallservicemenu "
              style={{ borderBottom: "solid lightgrey", overflow: "hidden" }}
            >
              ENVIRONMENT CARE
            </div>
          </a>
          <a href="/agritech">
            {" "}
            <div
              className="tablehover servicemenu p-2 smallservicemenu "
              style={{ borderBottom: "solid lightgrey", overflow: "hidden" }}
            >
              AGRITECH
            </div>
          </a>
          <a href="/sportspromotion">
            <div
              className="tablehover servicemenu p-2 smallservicemenu "
              style={{ borderBottom: "solid lightgrey", overflow: "hidden" }}
            >
              SPORTS PROMOTION
            </div>
          </a>
          <a href="/dronetechnology">
            <div
              className="tablehover servicemenu p-2 smallservicemenu "
              style={{ borderBottom: "solid lightgrey", overflow: "hidden" }}
            >
              DRONE PROMOTION
            </div>
          </a>
          <a href="/defencepromotion">
            <div
              className="tablehover servicemenu p-2 smallservicemenu "
              style={{ borderBottom: "solid lightgrey", overflow: "hidden" }}
            >
              DEFENCE PROMOTION
            </div>
          </a>
          <a href="/technologiespromotion">
            <div
              className="tablehover servicemenu p-2 smallservicemenu "
              style={{ borderBottom: "solid lightgrey", overflow: "hidden" }}
            >
              TECHNOLOGIES PROMOTION
            </div>
          </a>
          <a href="/fpo">
            {" "}
            <div
              className="tablehover servicemenu p-2 smallservicemenu "
              style={{ borderBottom: "solid lightgrey" }}
            >
              FPO
            </div>
          </a>
          <a href="/naturalfarming">
            <div
              className="tablehover servicemenu p-2 smallservicemenu "
              style={{ borderBottom: "solid lightgrey", overflow: "hidden" }}
            >
              NATURAL FARMING
            </div>
          </a>
          <a href="/educational">
            <div
              className="tablehover servicemenu p-2 smallservicemenu "
              style={{ borderBottom: "solid lightgrey", overflow: "hidden" }}
            >
              EDUCATIONAL SERVICES
            </div>
          </a>
        </div>
      </div>
    </>
  );
};

export default ServiceMenu;
