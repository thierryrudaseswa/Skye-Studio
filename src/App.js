import "./App.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import SignUp from "./pages/signup/SignUp";
import Login from "./pages/login/Login";
import Forgot from "./pages/forgot/Forgot";
import Category from "./components/Category/Category";
import Create22 from "./components/Create/Create";
import Designs from "./pages/Designs/Designs";

import Shoe from "./components/Shoe/Shoe";

import CreateDesignPage2 from "./components/CreateDesignPage2/CreateDesignPage2";
import BasicModal from "./components/modal/modal";
import ChooseCategory from "./pages/ChooseCategory/ChooseCategory";
import ChooseCategory2 from "./pages/ChooseCategory2/ChooseCategory2";



function App() {
  return (
    <div className="App">
      <Router>
     <Routes>
     
        <Route  exact path="/login" element={<Login/>} />
        <Route exact path="/signup" element={<SignUp/>} />
        <Route exact path="/forgot" element={<Forgot/>} />
        <Route exact path="/design" element={<Designs/>} />
       <Route exact path="/Choose" element={<ChooseCategory/>} />
        <Route exact path="/Choose2" element={<ChooseCategory2/>} />
        <Route exact path="/123" element={<Category />} />
        <Route exact path="/create" element={<Create22/>}/>
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