import React from "react";
import web from "../../images/bg_single_team-2.jpg";
import "./Service.css";
import ServiceMenu from "./ServiceMenu";
import Comment from "./Comment";

function TRIBALENTREPRENEURSHIP() {
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
      <section className="d-flex justify-content-center mb-5  servicepadding servicewidth">
        <div className="col-10 row">
          {" "}
          <div className="col-9" style={{ boxShadow: "1px 2px 9px black" }}>
            <div className="pt-3 px-5 m-5 servicepadding">
              <h4 className=" d-flex text-center">
                NEST Promotes Entrepreneurship among the Youth of Scheduled
                Tribes as this can help in creating new earning Abilities and
                Opportunities.
              </h4>{" "}
            </div>
            <div className="d-flex justify-content-center py-3 ">
              <img
                src="./images/service9.png"
                alt=""
                style={{ width: "50%", boxShadow: "1px 2px 9px black" }}
              />
            </div>
            <div className="px-5 m-5 servicepadding">
              <h4 className=" d-flex text-center">
                NEST helps Aspirant to get awareness about Government and
                Private Welfare Schemes Promoting the Cause Of ST
                Entrepreneurship Promotion:
              </h4>{" "}
            </div>
            <div className="px-5 m-5 servicepadding">
              <h3 className=" d-flex text-center" style={{ color: "#565387" }}>
                <strong>
                  A. The National Schedule Caste - Schedule Tribe Hub
                </strong>
              </h3>
            </div>
            <p className="px-5 servicepadding">
              1. The National SC/ST Hub has been set up to provide professional
              support to Scheduled Caste and Scheduled Tribe Entrepreneurs to
              fulfill the obligations under the Central Government Public
              Procurement Policy for Micro and Small Enterprises Order 2012,
              adopt applicable business practices and leverage the Stand-Up
              India initiative.
            </p>
            <p className="px-5 servicepadding">
              2. The Hub is being implemented by the Ministry of MSME, Govt. of
              India through National Small Industries Corporation (NSIC), a
              public-sector undertaking under the administrative control of this
              Ministry.
            </p>
            <div className="d-flex justify-content-center py-3">
              <img
                src="./images/service10.png"
                alt=""
                style={{ width: "50%", boxShadow: "1px 2px 9px black" }}
              />
            </div>
            <div className="d-flex justify-content-center py-3 servicecontentimg">
              <img
                src="./images/service11.png"
                alt=""
                style={{ boxShadow: "1px 2px 9px black" }}
              />
            </div>
            <div className="px-5 m-5 servicepadding">
              <h3 className=" d-flex justify-content-center" style={{ color: "#565387" }}>
                <strong>B. STAND UP INDIA SCHEME</strong>
              </h3>
            </div>
            <div className="d-flex justify-content-center py-3 servicecontentimg">
              <img
                src="./images/service12.jpg"
                alt=""
                style={{ boxShadow: "1px 2px 9px black" }}
              />
            </div>
            <p className="px-5 pt-5 servicepadding">
              1. Banks have sanctioned Rs 25,586 crore to about 1,14,322
              beneficiaries under the Stand-Up India Scheme in the last five
              years for promoting entrepreneurship among women and SC & STs.
              This scheme, which has been extended up to 2025, covers SC/ST
              and/or women entrepreneurs, above 18 years of age. The objective
              of Stand-Up India is to promote entrepreneurship amongst women,
              Scheduled Castes (SC) & Scheduled Tribes (ST) categories, to help
              them in starting a greenfield enterprise in trading, manufacturing
              and services sector, by both ready and trainee borrowers
            </p>
            <p className="px-5 servicepadding">
              2. Under the scheme, bank loans between Rs 10 lakh and Rs 1 crore are provided to at least one Scheduled Caste/ Scheduled Tribe borrower and at least one woman borrower per bank branch of Scheduled Commercial Banks.
            </p>
            <div className="d-flex justify-content-center py-3 servicecontentimg">
              <img
                src="./images/service13.jpg"
                alt=""
                style={{ boxShadow: "1px 2px 9px black" }}
              />
            </div>
            <div className="d-flex justify-content-center py-3 servicecontentimg">
              <img
                src="./images/service14.jpg"
                alt=""
                style={{ boxShadow: "1px 2px 9px black" }}
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

export default TRIBALENTREPRENEURSHIP;
