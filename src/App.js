import "./App.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import SignUp from "./pages/signup/SignUp";
import Login from "./pages/login/Login";
import Forgot from "./pages/forgot/Forgot";
import Category from "./components/Category/Category";
import Home from "./pages/Home/Home";
import ImageDownLoad from "./components/ImagedownLoad/ImageDownLoad";
import Designs from "./pages/Designs/Designs";
import GenerateDesign from "./pages/GenerateDesign/GenerateDesign";
import CreateDesignPage from "./components/CreateDesignPage/CreateDesignPage";
import Shoe from "./components/Shoe/Shoe";
import CreatePage from "./components/createPage/createPage";
import CreateDesignPage2 from "./components/CreateDesignPage2/CreateDesignPage2";
import BasicModal from "./components/modal/modal";
import { Button } from "@mui/material";

function App() {
  return (
    <div className="App">
      <Router>
     <Routes>
     <Route exact path="/" element={<Home/>} />
        <Route  exact path="/login" element={<Login/>} />
        <Route exact path="/signup" element={<SignUp/>} />
        <Route exact path="/forgot" element={<Forgot/>} />
        <Route exact path="/design" element={<Designs/>} />
        <Route exact  path ="/imageDownload" element={<ImageDownLoad/>} />
        <Route exact path="/generateDesign" element={<GenerateDesign/>} />
     </Routes>
      </Router>   
    </div>
  );
}

export default App;


 {/* <SignUp /> */}
      {/* <Login /> */}
      {/* <Forgot /> */}
      {/* <Category /> */}
      {/* <Home /> */}
      {/* <ImageDownLoad /> */}
      {/* <Designs /> */}
      {/* <GenerateDesign /> */}
      {/* <CreateDesignPage2 /> */}
      {/* <CreatePage /> */}
      {/* <Shoe /> */}