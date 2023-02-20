import "./App.css";
import AllCountries from "./components/views/AllCountries";
import ByRegion from "./components/views/ByRegion";
import ByName from "./components/views/ByName";
import Header from "./components/Header";
import NotFound from "./components/NotFound";
import { Route, Routes } from "react-router-dom";

function App() {

  return (
    <div className="App">
     
{/* show the Header component, then add the routes to the pages components*/}
      <Header/>
      
      <Routes>
        <Route path="/" element={<AllCountries/>}/>
        <Route path="/ByName" element={<ByName/>}/>
        <Route path="/ByRegion" element={<ByRegion/>}/>
        <Route path="*" element={<div> 404 page not found </div>} />

      </Routes>
     
    </div>
  );
}

export default App;
