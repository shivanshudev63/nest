import React from "react";
import HomeCarousel from "./HomeCarousel";
import Carousel from "./Carousel";
import web1 from "../images/child.jpg";
import web2 from "../images/amar_kr_sinha.jpg";
import web3 from "../images/home3.png";
import web4 from "../images/home10.png";
import web5 from "../images/home17.jpeg";
import web6 from "../images/home18.png";
import web7 from "../images/home19.png";
import web8 from "../images/home20.jpg";
import web9 from "../images/home19.png";
import web10 from "../images/home21.jpg";
import web11 from "../images/home22.jpg";
import web12 from "../images/home23.png";
import web13 from "../images/home24.png";
import web14 from "../images/home25.jpeg";
import Carousel1 from "./Carousel1";
import Carousel2 from "./Carousel2";
import Carousel3 from "./Carousel3";
import YoutubeEmbed from "./YoutubeEmbed";
import "../index.css";

function Home() {
  return (
    <>
      <section
        className="mb-5 p-5 align-items-center"
        style={{ background: "whitesmoke" }}
      >
        <div className="container nav_bg " style={{ width: "80%" }}>
          <HomeCarousel />
        </div>

        <div className="container mt-5 pt-5">
          <div className="row pt-5">
            <div className="col-10 mx-auto d-flex justify-content-evenly">
              <div className="col-5 mt-5 mb-3" style={{ position: "relative" }}>
                <a href="https://www.youtube.com/watch?v=iYy6wzkwaGg&t=121s">
                  <img src={web1} className="img-fluid" alt="" />
                </a>
                <div
                  style={{
                    fontSize: "80px",
                    position: "absolute",
                    bottom: "20%",
                    left: "40%",
                  }}
                >
                  <a
                    href="https://www.youtube.com/watch?v=iYy6wzkwaGg&t=121s"
                    style={{ color: "red" }}
                  >
                    {" "}
                    <i class="fa-brands fa-youtube"></i>
                  </a>
                </div>
              </div>

              <div className="col-5 mt-5 ">
                <div className="mt-5">
                  <span style={{ color: "orange" }}>
                    <h5>
                      <strong>Our Poject Mission</strong>
                    </h5>
                  </span>
                  <h1 className="mb-3" style={{ color: "#565387" }}>
                    <strong>TODAY...TOWARDS... TOMMORROW</strong>
                  </h1>
                </div>
                <div>
                  <Carousel />
                </div>
                <div className="py-5">
                  <a
                    href="/missionvisionvalues"
                    style={{ textDecoration: "none" }}
                  >
                    <h5
                      style={{
                        background: "#FF9933",
                        width: "40%",
                        borderTopRightRadius: "15px",
                        borderBottomRightRadius: "15px",
                        color: "white",
                      }}
                    >
                      <strong className="py-1 d-flex  justify-content-center ">
                        LEARN MORE
                      </strong>
                    </h5>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="d-flex justify-content-center mt-5 mx-5 py-5"
          style={{ boxShadow: "1px 2px 9px grey" }}
        >
          <div
            class="card mx-5 mt-3"
            style={{ width: "18rem", color: "white", height: "18rem" }}
          >
            <img
              src={web2}
              className="img-fluid "
              alt="SHRI AMAR KUMAR SINHA"
            />
            <div
              class="card-body"
              style={{
                boxShadow: "1px 2px 9px grey",
                background: "#565387",
                height: "5rem",
              }}
            >
              <h6 class="card-title">
                <strong>MANAGING TRUSTEE</strong>
              </h6>
              <h6 class="card-title">
                <strong>SHRI AMAR KUMAR SINHA</strong>
              </h6>
            </div>
          </div>

          <div className="col-6 p-4 text-center">
            <span>
              We introduce as NEST (NARAYANJEE EDUCATIONAL SERVICE TRUST) is a
              registered organization with a objective of integration of several
              services and consultancies which lead a sustainable development by
              integration of resources ( technocrats , technologies or several
              private, public and governmental scheme/program ) and users (
              client , community and institutions ). Our platform is enabling
              the ecosystem for expansion , replication, high returns of
              services in context to Human Capital ( Skills, Ability and Labour
              ) , Social Capital ( network , Formalized groups, Sanctions ,
              Norms, Relationships) ,Natural Capital ( Land, water, agriculture,
              trees, mines etc. ) , Physical Capital ( Transport, infrastructure
              , waste, energy , communication etc.). Entire approach of NEST has
              been focusing on collaborative efforts for the solutions with like
              minded national and international institutions , individuals and
              governance. Enrich the approach from many years experience of
              Several Institutions and professionals who are involved in Global
              Change and bringing positive impact on the Society.
            </span>
          </div>
        </div>
        <div className="col-10 my-5 py-5 " style={{ marginLeft: "10%" }}>
          <Carousel1 />
        </div>

        <div
          className="m-5 py-5 row"
          style={{ background: "#565387 ", boxShadow: "1px 2px 9px black" }}
        >
          <h1
            className="d-flex justify-content-center"
            style={{ color: "white", fontWeight: "bolder" }}
          >
            PROJECT ASHWINI
          </h1>
          <div className="col-10" style={{ width: "76%" }}>
            <Carousel2 />
          </div>
          <div className="col-2 d-flex justify-content-center mt-5">
            <img
              style={{
                width: "100%",
                height: "70%",
                marginLeft: "45%",
                boxShadow: "1px 2px 9px black",
                borderRadius: "10px",
              }}
              src={web3}
              className="img-fluid  mt-5 "
              alt="SHRI AMAR KUMAR SINHA"
            />
          </div>
        </div>
        <div
          className="m-5 py-5 row"
          style={{ background: "#565387 ", boxShadow: "1px 2px 9px black" }}
        >
          <h1
            className="d-flex justify-content-center"
            style={{ color: "white", fontWeight: "bolder" }}
          >
            PROJECT ASHOK
          </h1>
          <div className="col-10" style={{ width: "76%" }}>
            <Carousel3 />
          </div>
          <div className="col-2 d-flex justify-content-center mt-5">
            <img
              style={{
                width: "100%",
                height: "70%",
                marginLeft: "45%",
                boxShadow: "1px 2px 9px black",
                borderRadius: "10px",
              }}
              src={web4}
              className="img-fluid  mt-5 "
              alt="SHRI AMAR KUMAR SINHA"
            />
          </div>
        </div>
        <div
          className="m-5 pt-5 row"
          style={{ background: "#565387 ", boxShadow: "1px 2px 9px black" }}
        >
          <h1
            className="d-flex justify-content-center"
            style={{ color: "white", fontWeight: "bolder" }}
          >
            PROJECT AVINASH
          </h1>
          <div className="col-8 d-flex justify-content-center">
            <div
              class="card m-5"
              style={{
                width: "18rem",
                boxShadow: "1px 2px 9px black",
                height: "70%",
                fontWeight: "bold",
              }}
            >
              <img
                class="card-img-top"
                src={web6}
                alt="idea bank"
                style={{ borderRadius: "5px" }}
              />
              <div class="card-body">
                <p class="card-text">IDEA BANK</p>
              </div>
            </div>
            <div
              class="card my-5"
              style={{
                width: "18rem",
                boxShadow: "1px 2px 9px black",
                height: "70%",
                fontWeight: "bold",
              }}
            >
              <img
                class="card-img-top"
                src={web7}
                alt="educational services"
                style={{ borderRadius: "5px" }}
              />
              <div class="card-body">
                <p class="card-text">EDUCATIONAL SERVICES</p>
              </div>
            </div>
          </div>

          <div className="col-4 d-flex justify-content-center mt-5">
            <img
              src={web5}
              className="img-fluid mt-5"
              style={{
                marginRight: "40%",
                height: "60%",
                boxShadow: "1px 2px 9px black",
                borderRadius: "5px",
              }}
              alt="SHRI AMAR KUMAR SINHA"
            />
          </div>
        </div>

        <div className="m-5 ">
          <h1 className="pt-5 d-flex justify-content-center">
            <strong>NEST (NARAYANJEE EDUCATIONAL TRUST)</strong>
          </h1>
          <p className="pt-3 d-flex text-center">
            NEST is Founded on Inspiration from the Stellar accomplishments By
            Sri Narayan Jee Who have worked for Social Causes Since 1947. NEST
            Focus is on Covering All Dimensions of Socio-Economic Welfare at
            Local, National and Global Scale. NEST strives continuously for
            sustenance and enhancement of Social Service in every field of its
            activity, which covers Environmental care, Tribal Welfare,
            Agriculture, Sports Culture and Entrepreneurship through the Tools
            Of Education, Scientific Innovations and Economic Support.
          </p>
          <div>
            <img
              src={web8}
              className="img-fluid mt-3 "
              style={{
                height: "60%",

                borderRadius: "5px",
              }}
              alt="SHRI AMAR KUMAR SINHA"
            />
          </div>
          <h4 className="pt-5 pb-2 d-flex justify-content-center">
            <strong>GOKULNEST PROMOTE SPORTS IN JHARKHAND</strong>
          </h4>
          <div className="d-flex justify-content-center ">
            {" "}
            <YoutubeEmbed embedId="rokGy0huYEA" />
          </div>
        </div>

        <div className="row col-10 m-5 d-flex justify-content-center">
          <div className="col-9">
            <h4 className="d-flex justify-content-center">
              <strong>EDUCATION</strong>
            </h4>
            <p className="d-flex text-center">
              Children are the future of a nation. For an emerging country like
              india, development of unpriviliged childern holds the key to the
              progress of nation itself,and their education is the corner stone
              of this progress. But education for children cannot be achieved
              without ensuring the welfare of the family – a child can go to
              school only when the family, particularly the mother is healthy
              and empowered; the family has decent livelihood opportunities and
              a steady income. Mission education is a national level programme
              of, NEST FOUNDATION which is committed to providing basic
              education and helathcare to underprivileged children. NEST
              FOUNDATION believes that whether you are addressing healthcare,
              poverty, population control, unemployment or human rights, there’s
              no better place to start than in the corridors of
              education.Education is both the means as well as the end to a
              better life; means, because it empowers an individual to earn
              his/her livelihood and at the end because it increases ones’s
              awareness on a range of issue – from healthcare to appropriate
              socail behaviour to understanding one’s rights, and in the process
              evolve as a better citizen.
            </p>
          </div>
          <div className="col-3">
            <img
              src={web9}
              className="img-fluid mx-5  "
              style={{
                height: "20rem",
                borderRadius: "5px"
              }}
              alt="SHRI AMAR KUMAR SINHA"
            />
          </div>
        </div>
        <div className=" mt-5 d-flex justify-content-center">
          <div class="card mt-5" style={{ width: "18rem", height: "13rem" }}>
            <img
              class="card-img-top"
              src={web10}
              alt=""
              style={{ height: "13rem" }}
            />
          </div>
          <div class="card mt-5" style={{ width: "18rem", height: "13rem" }}>
            <img
              class="card-img-top"
              src={web11}
              alt=""
              style={{ height: "13rem" }}
            />
          </div>
          <div class="card mt-5" style={{ width: "18rem" }}>
            <img
              class="card-img-top"
              src={web12}
              alt=""
              style={{ height: "13rem" }}
            />
          </div>
          <div class="card mt-5" style={{ width: "18rem" }}>
            <img
              class="card-img-top"
              src={web13}
              alt=""
              style={{ height: "13rem" }}
            />
          </div>
          <div class="card mt-5" style={{ width: "18rem" }}>
            <img
              class="card-img-top"
              src={web14}
              alt=""
              style={{ height: "13rem" }}
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
