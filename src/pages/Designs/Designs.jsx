import React from 'react'
import SideBar from '../../components/SideBar/SideBar';
import TopBAr from '../../components/TopBar/TopBAr';
import DesignShow from '../../components/DesignShow/DesignShow';
import "./Design.css"



const Designs = () => {
  return (
    <div className='mainDesign'>
        <div className="mainDesign2">
          <div className="sidebar">
            <SideBar />
          </div>
          <div className="middleDesign">
            <div className="topbar">
            <TopBAr isDesign={true}/>
            </div>
            <div className="middleDesign2">
              {/* <Middle /> */}
              <DesignShow />
            </div>
          </div>
        </div>
      
    </div>
  )
}

export default Designs;
