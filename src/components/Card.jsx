import React from "react";
import {NavLink} from "react-router-dom";

function Card(props) {
  return (
    <>
       <div className="col-md-3 col-10 mx-auto" >
               <a href={props.link}>
               <div className="card shadow p-3 mb-5 bg-white rounded-0" >
  <img className="card-img-top" src={props.imgsrc} alt={props.imgsrc} />
  <div className="card-body">
    <h5 className="card-title font-weight-bold">{props.title}</h5>
    <p className="card-text card-position">{props.position}</p>
    <NavLink to="/#" className="call">+91-9899565492</NavLink>
  </div>
</div>
               </a>
      </div>
    </>
  );
}

export default Card;
