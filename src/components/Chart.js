import React, { Fragment } from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { useChartProvider } from "../contexts/chartContext";
import {Link} from "react-router-dom"

const data = Array.from({ length: 500 }, (_, index) => ({
  name: `${String.fromCharCode(65 + index)}`,
  uv: Math.floor(Math.random() * 1000),
  pv: Math.floor(Math.random() * 3000),
}));

const Chart = () => {
  const { isLoading, chart } = useChartProvider();
  return (
    <div className="chart">
      {isLoading || chart === null ? (
        chart == null ? (<Fragment></Fragment>) : <Fragment>
                <div class="d-flex justify-content-center">
        <div class="spinner-border text-primary" style={{width: '4rem', height: '4rem'}} role="status">
        </div>
      </div>
        </Fragment>
        
      ) : (
        <Fragment>
          <ResponsiveContainer width="100%" height={500}>
            <LineChart
              width={800}
              height={300}
              data={data}
              margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
            >
              <Line type="monotone" dataKey="uv" stroke="#880808" dot={false} />
              <Line type="monotone" dataKey="pv" stroke="#000080" dot={false} />
              {/* <CartesianGrid stroke="#ccc" strokeDasharray="5 5" /> */}
              <XAxis />
              <YAxis />
              <Legend />

              <Tooltip />
            </LineChart>
          </ResponsiveContainer>
          
          <div class="buttons mt-3 mb-3 text-center">
            <button type="button" class="btn btn-primary mx-2">
              Download
            </button>
          <Link to='/result' className="btn btn-primary mx-2" >Proceed</Link>
          </div>
        </Fragment>
      )}
    </div>
  );
};

export default Chart;
