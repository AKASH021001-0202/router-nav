import {  Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./component/Navbar";
import All from "./component/All";
import FullStackDevelopment from "./component/FullStackDevelopment";
import Career from "./component/Career";
import DataScience from "./component/DataScience";
import Cyber from "./component/Cyber";


function App() {
  return (
    <>

    
      <Navbar />
    <div className="container">
     
        <Routes>
        
          <Route index path="/" element={<All />} />
          <Route
            path="/full-stack-development"
            element={<FullStackDevelopment />}
          />
          <Route path="/career" element={<Career />} />
          <Route path="/data-science" element={<DataScience />} />
          <Route path="/cyber-security" element={<Cyber />} />
        </Routes>
        </div>
    </>
  );
}

export default App;
