import React from "react";

const YoutubeItem = (props) => {
  return (
    <div className={`youtube-item ${props.className}`}>
      <div className="youtube-image">
        <img src={props.image} alt="" />
      </div>
      <div className="youtube-footer">
        <img src={props.avt} alt="" className="youtube-avt" />
        <div className="youtube-info">
          <h3 className="youtube-title">{props.title || "Title example"}</h3>
          <h4 className="youtube-author">
            {props.author || "This is example author"}
          </h4>
        </div>
      </div>
    </div>
  );
};

export default YoutubeItem;
