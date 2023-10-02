import React from 'react'
import './Home.css';
import SideBar from '../../components/SideBar/SideBar';
import TopBAr from '../../components/TopBar/TopBAr';
import Middle from '../../components/Middle/Middle';


const Home = () => {
  return (
    <div className='main'>
        <div className="main3">
          <div className="sidebar">
            <SideBar />
          </div>
          <div className="middle">
            <div className="topbar">
            <TopBAr isGenerate={true}/>
            </div>
            <div className="middle">
              <Middle />
            </div>
          </div>;
        </div>
      
    </div>
  )
}

export default Home
