import React,{useEffect} from "react";
import { useChartProvider } from "../contexts/chartContext";


const UploadFile = ({contentref}) => {
    const {generateChart,setChart}=useChartProvider();


    const onGenerate = (e) => {
        e.preventDefault();
        contentref.current.classList.add("active");

        generateChart('lol');

    }
  return (
    <div class="form-div">
      <form class="file-form" >
        <input
          class="form-control form-control-sm form-input"
          id="formFileSm"
          type="file"
          accept=".csv"
        />
        <button class="btn btn-primary submit-btn mt-3" onClick={(e)=>onGenerate(e)}>Generate</button>
      </form>
    </div>
  );
};

export default UploadFile;
