import React from "react";
import web from "../../images/vikas.png";

function JoinManagingTrustee() {
  return (
    <>
      <section className=" d-flex align-items-center">
        <div className="container-fluid nav_bg">
          <div className="row">
            <div className="col-12 px-0 mx-auto head-text">
              <div
                className="col-md-12  header-img "
                style={{
                  background: "#565387",
                  height: "15rem",
                  boxShadow: "1px 2px 9px black",
                }}
              ></div>
              <div className="text-on-image">
                <h3 className="px-1">
                  <strong>SHRI VIKAS KUMAR SINHA</strong>
                </h3>
                <p>
                  <strong>
                    {" "}
                    &nbsp;Home &nbsp; {" > "} &nbsp;Joint Managing Trustee
                  </strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="d-flex justify-content-center mb-5">
        <div
          className="col-10 pt-5 px-5 paddedarea"
          style={{ boxShadow: "1px 2px 9px black", fontWeight: "bolder" }}
        >
          <div
            className="d-flex justify-content-center px-5 paddedarea"
            style={{ color: "#565387" }}
          >
            <h1>
              <strong>SHRI VIKAS KUMAR SINHA</strong>
            </h1>
          </div>
          <div
            className="d-flex justify-content-center pt-4 pb-4 managingimage"
            style={{ height: "50%" }}
          >
            <img
              src={web}
              style={{ boxShadow: "1px 2px 9px black" }}
              alt="Shri Amar Kumar Sinha"
            />
          </div>
          <div className="d-flex justify-content-center">
            <h5>
              <strong>JOINT MANAGING TRUSTEE</strong>
            </h5>
          </div>
          <div className="px-5 mx-5 pt-3 paddedarea">
            <p>
              Stellar accomplishments By Sri Narayan Jee and Later On His Team
              expanded the frontiers of knowledge and Efforts every day. In this
              era of Globalization and Expansion Of Social causes the obvious
              focus is on Covering All Dimensions Of Social and Human Issues.
              NEST strives continuously for sustenance and enhancement of Social
              Service in every field of its activity, which covers Environmental
              care, Tribal Welfare, Education, Agriculture. Besides This Given
              the Background Of Sri Narayan Jee Participation in Independence
              Movement Of India, We at NEST continues to work on His Nation
              First Principle By Launching SERVE INDIA PROJECT Through Promotion
              Of Scientists, Defence and Sports.
            </p>
            <p>
              The extension of NEST opportunities to an ever-increasing group of
              Associates adds a dimension of experience to Our Mission. Our Team
              learn the joy as well as the rigours of new discovery, and acquire
              skills of inquiry, evaluation, and communication that provide a
              foundation for the next phases of NEST Efforts to Contribute to
              the Human Cause in All Dimensions.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default JoinManagingTrustee;
