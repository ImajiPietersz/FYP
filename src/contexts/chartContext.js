import React, { createContext, useState, useContext } from "react";

const ChartContext = createContext();

export const ChartProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [chart, setChart] = useState(null);

  const generateChart = (file) => {
    setIsLoading(true);
    setChart(file);
    console.log(chart);
        setTimeout(() => {
            setIsLoading(false);
        }, 1000);
    };


  return (
    <ChartContext.Provider value={{ isLoading, generateChart, chart }}>
      {children}
    </ChartContext.Provider>
  );
};

export const useChartProvider = () => {
  return useContext(ChartContext);
};
