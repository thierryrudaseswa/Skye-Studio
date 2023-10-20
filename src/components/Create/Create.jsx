import React, { useState } from "react";
import "./Create.css"; // Make sure you have the correct CSS file
import { DownOutlined } from "@ant-design/icons";
import Button from "@mui/material/Button";
import BasicModal from "../modal/modal";
import "../SideBar/SideBar";
import "../Shoe/Shoe";

const colors = {
  red: "#FF781F",
  green: "#d86fdd",
  blue: "#1F28FF",
};

const Create22 = () => {
  const [textColor, setTextColor] = useState("black");
  const [image, setImage] = useState(null);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
    }
  };

  const changeTextColor = (color) => {
    setTextColor(colors[color]);
    changeInputTextColor(colors[color]);
  };

  const changeInputTextColor = (color) => {
    const inputElements = document.querySelectorAll('input[type="text"]');
    inputElements.forEach((input) => {
      input.style.color = color;
    });
  };

  const inputStyle = {
    color: textColor,
  };

  return (
    <div className="mainBIr">
      <div onClick={handleOpen}>
        <div className="menu">
          <img src="/images/Chat.png" alt="" />
          <p>My Design</p>
        </div>
      </div>
      <BasicModal open={open} handleClose={handleClose}>
        <form action="">
          <div className="rightBI">
            <div className="headBI">Business Information</div>
            <div className="InputBI">
              <input
                type="text"
                name="names"
                placeholder="Your Full name*"
                style={inputStyle}
              />
              <input
                type="text"
                name="names"
                placeholder="Your Business Name *"
                style={inputStyle}
              />
              <input
                type="text"
                name="names"
                placeholder="Your Business Description*"
                style={inputStyle}
              />
              <input
                type="text"
                name="names"
                placeholder="Call to Action*"
                style={inputStyle}
              />
              <div className="container-file">
                <div className="Browser">
                  <input
                    type="text"
                    className="inputbro"
                    placeholder="Upload Your Business Logo *"
                    style={inputStyle}
                  />

                  {image && (
                    <div className="uploadedImage">
                      <p>preview:</p>
                      <img src={image} alt="Uploaded" width="300" />
                    </div>
                  )}
                </div>
                <div className="file-container">
                  <label className="filebutton" htmlFor="file-upload">
                    Upload a file
                  </label>
                  <input
                    id="file-upload"
                    type="file"
                    onChange={handleImageUpload}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="leftBI">
            <div className="headleft">
              <p>What is your Business Category*</p>
              <div className="inputcat">
                <input type="text" placeholder="input" style={inputStyle} />
                <DownOutlined className="downout" />
                <div className="badge">
                  <span>Fashion X</span>
                  <span>Fashion X</span>
                  <span>Fashion X</span>
                </div>
              </div>
            </div>
            <div className="inputLEft">
              <input
                type="number"
                placeholder="Phone Number *"
                style={inputStyle}
              />
              <input
                type="email"
                placeholder="Your Business Email Address *"
                style={inputStyle}
              />
              <input
                type="text"
                placeholder="webSite(Optional)"
                style={inputStyle}
              />
            </div>
            <div className="bottomLeft">
              <div className="buttonleft">
                <button>Choose Your Main Color</button>
                <div className="belowbut">
                  <p>Your 3 color Palette</p>
                  <div className="colorsChosen">
                    <div
                      className="color"
                      onClick={() => changeTextColor("red")}
                      style={{ background: colors.red }}
                    ></div>
                    <div
                      className="color"
                      onClick={() => changeTextColor("green")}
                      style={{ background: colors.green }}
                    ></div>
                    <div
                      className="color"
                      onClick={() => changeTextColor("blue")}
                      style={{ background: colors.blue }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="submitbutton">
              <button>Submit</button>
            </div>
          </div>
        </form>
      </BasicModal>
    </div>
  );
};

export default Create22;
