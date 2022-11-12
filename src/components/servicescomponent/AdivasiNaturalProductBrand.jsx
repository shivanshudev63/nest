import React from "react";
import web from "../../images/bg_single_team-2.jpg";
import "./Service.css";
import ServiceMenu from "./ServiceMenu";
import Comment from "./Comment";

function AdivasiNaturalProductBrand() {
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
                  <strong>ADIVASI NATURAL PRODUCT BRAND</strong>
                </h3>
                <p>
                  <strong>
                    {" "}
                    &nbsp;Home &nbsp; {" > "} &nbsp;Service&nbsp; {" > "}{" "}
                    &nbsp;ADIVASI NATURAL PRODUCT BRAND
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
                <strong>ADIVASI NATURAL PRODUCT BRAND</strong>
              </h4>
            </div>
            <div className="pt-3 px-5 m-5">
              <p className=" d-flex text-center">
                NEST is Currently Working with Local Tribal People Of Jharkhand
                to be Organised As Farmer Producer Organisation and develop
                Various Organic/ Natural Products, which are in major Demand.
              </p>{" "}
            </div>
            <div className="d-flex justify-content-center py-3">
              <img
                className="mx-2"
                src="./images/service15.png"
                alt=""
                style={{ width: "25%", boxShadow: "1px 2px 9px black" }}
              />
              <img
                className="mx-2"
                src="./images/service16.png"
                alt=""
                style={{ width: "25%", boxShadow: "1px 2px 9px black" }}
              />
              <img
                className="mx-2"
                src="./images/service17.png"
                alt=""
                style={{ width: "25%", boxShadow: "1px 2px 9px black" }}
              />
            </div>
            <div className="pt-3 px-5 m-5">
              <p className=" d-flex text-center">
                Their is major shift in sales – an apparently high demand for
                cleaner, organic / Natural products – it is not a decision made
                out of curiosity or even just fascination; it is an informed
                choice made by consumers who are thoughtfully selecting
                conscious consumerism. More and more people these days are
                choosing to shop ethically, in order to upkeep sustainability,
                support local sellers & community, and to protect the
                environment.
              </p>{" "}
            </div>
            <div className="pt-3 px-5 m-5">
              <p className=" d-flex text-center">
                Five Reasons for the Rise in Demand for Natural products
              </p>{" "}
              <p className=" d-flex text-center" style={{ fontWeight: "bold" }}>
                1. They are eco-friendly{" "}
              </p>
              <p className=" d-flex text-center" style={{ fontWeight: "bold" }}>
                2. They are chemical free{" "}
              </p>
              <p className=" d-flex text-center" style={{ fontWeight: "bold" }}>
                3. They are handmade{" "}
              </p>
              <p className=" d-flex text-center" style={{ fontWeight: "bold" }}>
                4. They are non-factory made
              </p>
              <p style={{ fontWeight: "bold" }}>
                5. They are sustainable as By using natural products, you power
                ecosystem services to ensure an uninterruptedly healthy planet –
                from a clean supply of air, water, food, and raw materials, to
                disease regulation and space for recreation.{" "}
              </p>
            </div>

            <div className="d-flex justify-content-center py-3">
              <img
                className="mx-2"
                src="./images/service18.png"
                alt=""
                style={{ width: "25%", boxShadow: "1px 2px 9px black" }}
              />
              <img
                className="mx-2"
                src="./images/service19.png"
                alt=""
                style={{ width: "25%", boxShadow: "1px 2px 9px black" }}
              />
            </div>
            <div className="pt-3 px-5 m-5">
              <p className=" d-flex text-center">
                Given the trends NEST is trying To make ADIVASI Brands Enter the
                Market and Help in improving the Economic Conditions of the
                TRIBAL PEOPLE which are Deeply Attached and Rooted to the
                NATURE.
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

export default AdivasiNaturalProductBrand;
