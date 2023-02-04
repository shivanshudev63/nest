import React from "react";
import web from "../../images/home30.jpg";


function ManagingTrustee() {
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
                <h3 className="px-1 ">
                  <strong>SHRI AMAR KUMAR SINHA</strong>
                </h3>
                <p>
                  <strong>
                    {" "}
                    &nbsp;Home &nbsp; {" > "} &nbsp;Managing Trustee
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
              <strong>SHRI AMAR KUMAR SINHA</strong>
            </h1>
          </div>
          <div className="d-flex justify-content-center pt-4 pb-3 managingimage" style={{height:"50%"}}>
            <img src={web} style={{ boxShadow: "1px 2px 9px black"}}  alt="Shri Amar Kumar Sinha" />
          </div>
          <div className="d-flex justify-content-center">
           <h5><strong>MANAGING TRUSTEE</strong></h5>
          </div>
<div className="px-5 mx-5 pt-3 paddedarea">
          <p>
            Our Inspiration Sri Narayan Jee Lived His Life With The Belief That
            Meaningful Change In Society Requires Working Upwards, From The
            Bottom. By uplifting weaker Sections Of Society, he Believed That
            Our society And Country Could Achieve The Impossible. Almost Seventy
            Five Years ago, He Dreamt Of A Self Progressing NATION By Actively
            Participating In ‘Jai Jawan Jai Kisan Movement” and covering Ascent
            Of Tribal Population Through The Powerful Tool Of education
          </p>
          <p>
            We Formed NARAYAN JEE EDUCATIONAL SERVICE TRUST (NEST) Which Is
            Committed Towards Taking Forward The Values Of Our Inspiration Sri
            Narayan Jee.
          </p></div>
        </div>
      </section>
    </>
  );
}

export default ManagingTrustee;
