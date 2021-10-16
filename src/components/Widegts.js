import React from "react";
import "../css/widegts.css";
import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

const Widegts = () => {
  const newsAriticle = (heading, subtitle) => (
    <div className="widegts__article">
      <div className="widegts__articleLeft">
        <FiberManualRecordIcon />
      </div>
      <div className="widegts__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );
  return (
    <div className="widegts">
      <div className="widegts__header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      {newsAriticle("React is back", "Top New")}
      {newsAriticle("Node js is best for backend", "That's cool")}
    </div>
  );
};

export default Widegts;
