import "./App.css";
import Chart from "./components/Chart";
import FaultDetection from "./components/FaultDetection";
import UploadFile from "./components/UploadFile";
import Welcome from "./components/Welcom";
import { ChartProvider } from "./contexts/chartContext";
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import { useRef } from "react";

function App() {
  const contentRef = useRef(null);
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Welcome/>}/>
        <Route exact path='/generate' element={<ChartProvider>
      <div className="content" ref={contentRef}>
        <div>
    {/* //       <h4 style={{textAlign:"center"}}>Topic Here</h4> */}
         <UploadFile contentref={contentRef} />
       </div>
        <Chart />
      </div>
    </ChartProvider>}/>
        <Route exact path='/result' element={<FaultDetection/>}/>
      </Routes>
    </Router>
    // <Welcome/>

    // <ChartProvider>
    //   <div className="content" ref={contentRef}>
    //     <div>
    //       {/* <h4 style={{textAlign:"center"}}>Topic Here</h4> */}
    //       <UploadFile contentref={contentRef} />
    //     </div>
    //     <Chart />
    //   </div>
    // </ChartProvider>
    // <FaultDetection/>

  );
}

export default App;
