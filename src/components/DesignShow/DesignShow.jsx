import React from "react";
import "./DesignShow.css";
import DataArray from "../../Data/ViewImage";

const DesignShow = () => {
  return (
    <div className="DesignShow">
      <div className="headDesign">
        <div className="allText">All My Designs</div>
        <div className="uploadDesign">upload Design</div>
      </div>
      <div className="ViewDesign">
        {DataArray.map((item, index) => (
          
            <div className="OneView" key={index}>
              <div className="ViewImage">
                <img src={item.image} alt="" />
              </div>
              <div className="NameView">{item.text}</div>
              <div className="ViewButton">
                <button>View</button>
              </div>
            </div>
          
        ))}
      </div>
    </div>
  );
};

export default DesignShow;
