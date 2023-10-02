import React from "react";
import "./SideBar.css";
import { FiLogOut } from 'react-icons/fi';

function SideBar() {
  return (
    <div className="mainSidebar">
      <div className="main2SideBar">
        <div className="brand">
        <img src="/images/logo.png" alt="" />
        </div>
        <div className="menus">
          <div className="menu">
            <img src="/images/Calendar.png" alt="" />
            <p>Schedule Post</p>
          </div>
          <div className="menu">
            <img src="/images/Chat.png" alt="" />
            <p>My Design</p>
          </div>
          <div className="menu">
            <img src="/images/Activity.png" alt="" />
            <p>Channels</p>
          </div>
          <div className="menu">
            <img src="/images/Wallet.png" alt="" />
            <p>Pricing</p>
          </div>
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
          </div>


        </div>
        <div className="logout">
          <div className="logout">LogOut</div>
          <div className="logoutIcon">
            
            < FiLogOut />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
