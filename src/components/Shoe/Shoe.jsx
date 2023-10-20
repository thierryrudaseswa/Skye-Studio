import React, { useState } from "react";
import "./Shoe.css";
import BasicModal from "../modal/modal";
import { DownOutlined } from "@ant-design/icons";
import Button from "@mui/material/Button";

const colors = {
  red: "#FF781F",
  green: "#d86fdd",
  blue: "#1F28FF",
};

const Shoe = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [textColor, setTextColor] = useState("black");

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

  const [image, setImage] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
    }
  };

  return (
    <>
      <div className="mainCreateDp4">
        <button onClick={handleOpen}>
          <p>Generate a Design</p>
        </button>
      </div>
      <BasicModal open={open} handleClose={handleClose}>
        <div className="SecondGenerateDesgin">
          <div className="rightSecondDes">
            <div className="headright">
              <p> Create a Design</p>
            </div>
            <div className="inputSecDes">
              <input
                type="text"
                placeholder="Post Title *"
                style={inputStyle}
              />
              <input
                type="text"
                placeholder="Description *"
                style={inputStyle}
              />
              <input
                type="text"
                placeholder="Call to Action * "
                style={inputStyle}
              />

              <div className="Browser">
                <input
                  type="text"
                  placeholder="upload 1-3 images/video*"
                  style={inputStyle}
                />
                <div className="uploadplace">
                  <label className="filebutton" htmlFor="upload">
                    Upload afile
                  </label>
                  <input type="file" id="upload" onChange={handleImageUpload} />
                </div>

                {image && (
                  <div className="uploadedImage">
                    <p>preview:</p>
                    <img src={image} alt="Uploaded" width="300" />
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="leftSecondDes">
            <div className="headInput">
              <p>What are you Designing For *</p>
              <input type="text" placeholder="Input" style={inputStyle} />
              <DownOutlined className="downout" />
            </div>
            <div className="inputrightDes">
              <input
                type="number"
                placeholder="Phone Number (Optional)"
                style={inputStyle}
              />
              <input
                type="email"
                placeholder="Email Address (Optional)"
                style={inputStyle}
              />
              <input
                type="text"
                placeholder="Website (Optional)"
                style={inputStyle}
              />
            </div>
            <div className="colorsRight">
              <div className="oneSide">
                {" "}
                <p>colors</p>
                <div className="colorsChosen2">
                  <div
                    className="color2"
                    style={{ backgroundColor: colors.red }}
                    onClick={() => changeTextColor("red")}
                  ></div>
                  <div
                    className="color2"
                    style={{ backgroundColor: colors.green }}
                    onClick={() => changeTextColor("green")}
                  ></div>
                  <div
                    className="color2"
                    style={{ backgroundColor: colors.blue }}
                    onClick={() => changeTextColor("blue")}
                  ></div>
                </div>
              </div>
              <div className="secSide">
                <p>Logo</p>
                <img src="/images/logo3.png" alt="" />
              </div>
            </div>
            <div className="generateSub">
              <button>Generate Design</button>
            </div>
          </div>
        </div>
      </BasicModal>
    </>
  );
};

export default Shoe;
