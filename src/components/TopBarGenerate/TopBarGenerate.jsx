import React from "react";
 import "./TopBarGenerate.css"
import { FaChevronDown } from 'react-icons/fa';

const TopBarGenerate = () => {
  return (
    <div className="maintopBar">
      <div className="above2">
        <div className="schedul2">
            <p>Generate Design</p>
          <p>Schedule a Post</p>
        </div>
        {/* <div className="profile">
          <div className="prof">
            <div className="image">
              <img src="/images/thierry.jpg" alt="" />
              <div className="welcNames">
                <p>Welcome back,</p>
                <h1>Dreannan</h1>
              </div>
            </div>

            <div className="icon">
              <FaChevronDown  color="#1E2875"/>
            </div>
          </div>
        </div> */}
      </div>

      {/* <div className="below">
      <div className="box">
          <div className="boxLeft">
            <div className="words">
            <h>25 Pending Post </h> 
            <p>In Total</p>
            </div>
          </div>
          <div className="boxRight">
            <div className="boxIcon">
            <img src="/images/Mask.png" alt="" />
            </div>
          </div>
        </div>
        <div className="box">
          <div className="boxLeft">
            <div className="words">
            <h>500 Posted </h> 
            <p>In Total</p>
            </div>
          </div>
          <div className="boxRight">
            <div className="boxIcon2">
            <img src="/images/Mask.png" alt="" />
            </div>
          </div>
        </div>
        <div className="box">
          <div className="boxLeft">
            <div className="words">
            <h>20 Remaining </h> 
            <p>In Total</p>
            </div>
          </div>
          <div className="boxRight">
            <div className="boxIcon3">
            <img src="/images/Mask.png" alt="" />
            </div>
          </div>
        </div>
      </div> */}

      
    </div>
  );
};

export default TopBarGenerate;
