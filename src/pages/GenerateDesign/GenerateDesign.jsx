import React from 'react'
import "./GenerateDesign.module.css"
import SideBar from '../../components/SideBar/SideBar';
import Middle from '../../components/Middle/Middle';
import TopBarGenerate from '../../components/TopBarGenerate/TopBarGenerate';
import TopBAr from '../../components/TopBar/TopBAr';


const GenerateDesign = () => {
  return (
    <div className='main'>
        <div className="main3">
          <div className="sidebar">
            <SideBar />
          </div>
          <div className="middle">
            <div className="topbar">
            <TopBAr isCreateDesignPage={true} />
            </div>
            <div className="middle">
              <Middle />
            </div>
          </div>;
        </div>
      
    </div>
  )
}

export default GenerateDesign;
