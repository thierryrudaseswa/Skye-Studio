import React from "react";
import "./SideBar.css";
import { FiLogOut } from 'react-icons/fi';
import Create22 from "../Create/Create";

function SideBar() {
  return (
    <div className="mainSidebar">
      <div className="main2SideBar22">
        <div className="brand">
        <img src="/images/logo.png" alt="" />
        </div>
        <div className="menus">
         <Create22 />
        </div>
<div className="account">
          <div className="head2">FREE Account</div>

          <ul>
            <li>Schedule 3 Post Per month </li>
            <li>Link only 1 Channel</li>
            <li>Generate 3 Post Design per month</li>
          </ul>
        </div>
        <div className="upgrade">
          <div className="upgrade2">
            <div className="headupgrade">
              <div className="headu">
                Upgrade to <span>PRO Account</span>
              </div>
            </div>
            <div className="parau">
              start you PRO subcription today for only <span>$50/month</span>
            </div>
            <div className="imagelogo">
            <img src="/images/Frame 440.png" alt="" />
            </div>
            <div className="logout3">
         <p>LogOut</p>
          <div className="logoutIcon">
            < FiLogOut />
          </div>
        </div>
          </div>


        </div>
       
      </div>
    </div>
  );
}

export default SideBar;
