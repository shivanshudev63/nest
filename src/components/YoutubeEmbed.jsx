import React from "react";
import PropTypes from "prop-types";
import "./YoutubeEmbed.css";

const YoutubeEmbed = ({ embedId }) => (
  <div className="video-responsive" style={{width:"100%"}}>
    <iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/iYy6wzkwaGg"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  </div>
);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired,
};

export default YoutubeEmbed;
