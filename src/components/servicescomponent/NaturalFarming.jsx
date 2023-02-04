import React from "react";
import web from "../../images/bg_single_team-2.jpg";
import "./Service.css";
import ServiceMenu from "./ServiceMenu";
import Comment from "./Comment";

function NaturalFarming() {
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
                  <strong>NATURAL FARMING</strong>
                </h3>
                <p>
                  <strong>
                    {" "}
                    &nbsp;Home &nbsp; {" > "} &nbsp;Service&nbsp; {" > "}{" "}
                    &nbsp;NATURAL FARMING
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
            <div className="d-flex text-center pt-5 pt-3 px-5 m-5  servicepadding">
              <h4 style={{ color: "#565387" }}>
                <strong>
                  NEST IS DEDICATED TO PROMOTE ZERO BUDGET NATURAL FARMING (
                  ZBNF )
                </strong>
              </h4>
            </div>
            <div className="d-flex justify-content-center ">
              <img
                src="./images/service27.jpg"
                alt=""
                style={{ width: "50%", boxShadow: "1px 2px 9px black" }}
              />
            </div>
            <h5 className=" px-5  mt-5 mx-5 servicepadding">
              Zero budget natural farming is a method of chemical-free
              agriculture drawing from traditional Indian practices.
            </h5>
            <ul className=" px-5  mt-3 mx-5 servicepadding">
              <li className="py-2">
                It was originally promoted by agriculturist Subhash Palekar, who
                developed it in the mid-1990s as an alternative to the Green
                Revolution’s methods that are driven by chemical fertilizers and
                pesticides and intensive irrigation.
              </li>
              <li className="py-2">
                It is a unique model that relies on Agro-ecology.
              </li>
              <li className="py-2">
                It aims to bring down the cost of production to nearly zero and
                return to a pre-green revolution style of farming.
              </li>
            </ul>
            <h5 className="px-5 m-5 servicepadding">
              It claims that there is no need for expensive inputs such as
              fertilisers, pesticides and intensive irrigation.
            </h5>
            <div className="d-flex justify-content-center py-3">
              <img
                src="./images/service28.png"
                alt=""
                style={{ width: "50%", boxShadow: "1px 2px 9px black" }}
              />
            </div>
            <div className="px-5 m-5 servicepadding">
              <p className=" d-flex text-center">
                Subash Palekar (Indian Agriculturist and Padma Shri Recipient)
                is the father of Zero Budget Natural Farming (ZBNF). He
                developed it in the mid-1990s as an alternative to the Green
                Revolution methods.The points put-forward by Subash Palekar in
                support of Zero Budget Natural Farming are:Lakhs of farmers are
                using the technique of Zero Budget Natural Farming in different
                agro-climatic zones and soil types. To grow a plant, whatever is
                needed is present in nature. No chemicals are required to grow a
                plant. An example – Earthworm excreta has seven times more
                nitrogen than the soil. Large number of small farmers are using
                this technique as they see Zero Budget Natural Farming as a tool
                that can free them from debts and defaults. It makes farming
                both profitable and sustainable.
              </p>{" "}
            </div>
            <div className="d-flex justify-content-center pt-5 px-5 servicepadding">
              <h4 style={{ color: "#565387" }}>
                <strong>ZBNF IS BASED ON 4 PILLAR</strong>
              </h4>
            </div>
            <ul className=" px-5 mt-3 mx-5 servicepadding">
              <li className="py-2">
                <strong>Jeevamrutha:</strong> It is a mixture of fresh cow dung
                and aged cow urine (both from India’s indigenous cow breed),
                jaggery, pulse flour, water and soil; to be applied on farmland.
              </li>
              <li className="py-2">
                <strong>Bijamrita:</strong> It is a concoction of neem leaves &
                pulp, tobacco and green chilies prepared for insect and pest
                management, that can be used to treat seeds.
              </li>
              <li className="py-2">
                <strong>Acchadana (Mulching):</strong> It protects topsoil
                during cultivation and does not destroy it by tilling.
              </li>
              <li className="py-2">
                <strong>Whapasa:</strong> It is the condition where there are
                both air molecules and water molecules present in the soil.
                Thereby helping in reducing irrigation requirement.
              </li>
            </ul>
            <div className="d-flex justify-content-center py-3">
              <img
                src="./images/service29.png"
                alt=""
                style={{ width: "50%", boxShadow: "1px 2px 9px black" }}
              />
            </div>
            <div className="d-flex justify-content-center pt-5 px-5 servicepadding">
              <h4 style={{ color: "#565387" }}>
                <strong>
                  BENEFITS OF ZBNF ( ZERO BUDGET NATURAL FARMING )
                </strong>
              </h4>
            </div>
            <div className="px-5 m-5 servicepadding">
              <p className=" d-flex text-center">
                With the rising cost of external inputs (fertilizers and
                pesticides), which is the leading cause of indebtedness and
                suicide among farmers. According to the National Sample Survey
                Office (NSSO) data, almost 70% of agricultural households spend
                more than they earn and more than half of all farmers are in
                debt.
              </p>{" "}
            </div>
            <ul className="px-5 m-5 servicepadding">
              <li className="py-2">Since in ZBNF there is the need to spend money or take loans for external inputs, the cost of production could be reduced and farming made into a “zero budget” exercise.</li>
              <li className="py-2">This would break the debt cycle for many small farmers and help to envisage the doubling of farmer’s income by 2022.</li>
              <li className="py-2">At a time when chemical-intensive farming is resulting in soil and environmental degradation, a zero-cost environmentally-friendly farming method is definitely a timely initiative.

</li>
              <li className="py-2">he ZBNF method promotes soil aeration, minimal watering, intercropping, bunds and topsoil mulching and discourages intensive irrigation and deep ploughing.</li>
              <li className="py-2">It suits all crops in all agro-climatic zones.</li>
              <li className="py-2">Citing the benefits of ZBNF, in June 2018, Andhra Pradesh rolled out an ambitious plan to become India’s first State to practise 100% natural farming by 2024.</li>
            </ul>
            

            <Comment />
          </div>
          <ServiceMenu />
        </div>
      </section>
    </>
  );
}

export default NaturalFarming;
