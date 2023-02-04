import React from "react";
import "./About.css"
function Mvv() {
  return (
    <>
      <section className="d-flex align-items-center">
        <div className="container-fluid nav_bg">
          <div className="row">
            <div className="col-12 px-0 mx-auto head-text">
              <div
                className="col-md-12 header-img"
                style={{
                  background: "#565387",
                  height: "15rem",
                  boxShadow: "1px 2px 9px black",
                }}
              ></div>
              <div className="text-on-image">
                <h3 className="px-1">
                  <strong>MISSION/ VISION /VALUES</strong>
                </h3>
                <p>
                  <strong>
                    {" "}
                    &nbsp;Home &nbsp; {" > "} &nbsp;MISSION/ VISION /VALUES
                  </strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="d-flex justify-content-center mb-5">
        <div
          className="col-12 pt-5 px-5 paddedarea"
          style={{ boxShadow: "1px 2px 9px black", fontWeight: "bolder" }}
        >
          <div
            className="d-flex justify-content-center px-5 paddedarea"
            style={{ color: "black" }}
          >
            <h3>
              <strong>WHO WE ARE</strong>
            </h3>
          </div>
          <div
            className="d-flex justify-content-center px-5 paddedarea"
            style={{ color: "#565387" }}
          >
            <h1 className="my-3">
              <strong>NEST (NARAYANJEE EDUCATIONAL SERVICE TRUST)</strong>
            </h1>
          </div>

          <div className="px-5 mx-5 pt-3 paddedarea">
            <p>
              NEST is Founded on Inspiration from the Stellar accomplishments By
              Sri Narayan Jee Who have worked for Social Causes Since 1947. NEST
              Focus is on Covering All Dimensions of Socio-Economic Welfare at
              Local, National and Global Scale. NEST strives continuously for
              sustenance and enhancement of Social Service in every field of its
              activity, which covers Environmental care, Tribal Welfare,
              Agriculture, Sports Culture and Entrepreneurship through the Tools
              Of Education, Scientific Innovations and Economic Support.
            </p>
            <div className="d-flex justify-content-center">
              <div className="py-5">
                <table class="table">
                  <thead
                    className="thead-dark"
                    style={{ background: "#565387", color: "white" }}
                  >
                    <tr>
                      <th
                        scope="col "
                        className="d-flex justify-content-center"
                      >
                        OUR MISSION
                      </th>
                      <th scope="col">
                        <div className="px-5 mx-5 value">OUR VALUES</div>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        {" "}
                        Network Of People, Skills, Experience and Geniuses to
                        make a positive global impact
                      </td>
                    </tr>
                    <tr>
                      <td> Nature Care</td>
                      <td>Gain Insight into Who You Are and What You Do</td>
                    </tr>
                    <tr>
                      <td>
                        {" "}
                        Ensuring the Ultimate Human Spark ‘ The Idea ‘ See The
                        Light Of Success
                      </td>
                    </tr>{" "}
                    <tr>
                      <td> Employment Solutions</td>
                    </tr>
                    <tr>
                      <td>
                        {" "}
                        Engineering The Nations Through Technical Education
                      </td>
                      <td>Of All Possessions Wisdom Alone Is Immortal</td>
                    </tr>
                    <tr>
                      <td>
                        {" "}
                        Serve The Nation Through Supporting and Encouraging
                        Young Generation To Join Indian Armed Forces, Indian
                        Defence and Space Research Wings
                      </td>
                    </tr>
                    <tr>
                      <td> Karma Is Accountability</td>
                    </tr>
                    <tr>
                      <td>
                        {" "}
                        Scientist Community to be helped in Completing their
                        Projects which could impact the Nation Technological
                        Growth In a Significant Way
                      </td>
                    </tr>
                    <tr>
                      <td>
                        {" "}
                        Sports Culture Promotion as Spirit Of Sports Binds the
                        Diverse Nation Of India In an Unparallel Way.
                      </td>
                      <td>Uncertainties And Mystery are Energies Of life</td>
                    </tr>
                    <tr>
                      <td> Tribal Welfare</td>
                    </tr>{" "}
                    <tr>
                      <td> Trust For Carrying The Education Legacy</td>
                    </tr>
                    <tr>
                      <td> Touch with Earth around us through Farming</td>
                      <td>Labour Like Man, and be ready in doing Kindness</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div style={{background:"#565387",color:"white"}}>
              <div className="d-flex justify-content-center mt-5">
                <h4 className="mt-4"><strong>OUR VISION</strong></h4>
              </div>
              <div className="mt-2" style={{background:"grey", height:"1px"}} ></div>
              <p className="m-4 pb-4 ">
              <div className="d-flex text-center">  DEEPLY EMBEDDED is the Principles Of NEST MISSSION and VALUES at
                the core of every decision and action taken for fulfilling OUR
                VISION of</div> <span className="d-flex text-center" style={{color:"yellow"}} >“Taking the Lowest and the Youngest to the Ladder Of
                Progress through Evolutionary Efforts, Embracing Education and
                Values Together and Providing Equal Opportunity To All “</span>
              </p>
            </div>
            <div className="d-flex justify-content-center mb-4"><span>Touch with Earth around us through Farming</span></div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Mvv;
