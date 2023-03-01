import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom";

import SingleProductCard from "./components/views/SingleProductCard/SingleProductCard";
import Header from 'HomePageMFE/Header'








 import Footer from 'HomePageMFE/Footer'
 

import "./index.scss";

const App = () => {

  const[matches, setMatches]=useState(
  window.matchMedia("(min-width: 768px)").matches
  )
  useEffect(()=>{
    window.matchMedia("(min-width:768)").addEventListener('change',e=> setMatches(e.matches))
    
  },[])
return(
   <>  
   
   <Header/>
   
   

  <div>
  

      {matches && <SingleProductCard/>}
      {!matches && <SingleProductCard/>}
      
      
   
  </div>
  <div>
  <Footer/>
  </div>

  </>
);
}
ReactDOM.render(<App />, document.getElementById("app"));
