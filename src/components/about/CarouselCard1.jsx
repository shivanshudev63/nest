import React from "react";
import PropTypes from "prop-types";

export default function CarouselCard({ image, title }) {
  return (
    <div class="card m-4 " style={{width: "18rem",height:"18rem",boxShadow: "1px 2px 9px black"}}>
     <img src={image} alt={title} className="img-fluid"/>
      
</div>



  );
}

CarouselCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
