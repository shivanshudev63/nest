import React from "react";
import PropTypes from "prop-types";

export default function CarouselCard({ image, title }) {
  return (
    <div
      class="card mt-4 "
      style={{
        width: "18rem",
        height: "auto",
        boxShadow: "1px 2px 9px black",
      }}
    >
      <img src={image} alt={title} className="img-fluid" />
      <div
        class="card-body overflow-auto d-flex text-center"
        style={{ background: "	#F5F5F5", color: "#191970" }}
      >
        <span className="card-title ">
          <strong style={{ overflowWrap: "break-word" }}>{title}</strong>
        </span>
      </div>
    </div>
  );
}

CarouselCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
