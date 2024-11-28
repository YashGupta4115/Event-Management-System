import React, { useEffect } from "react";
import { BarChart, Bar, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import "./Bar.css";

const data = [
  { month: "Jan", product1: 35, product2: 65 },
  { month: "Feb", product1: 28, product2: 48 },
  { month: "Mar", product1: 34, product2: 34 },
  { month: "Apr", product1: 32, product2: 12 },
  { month: "May", product1: 40, product2: 10 },
  { month: "Jun", product1: 32, product2: 32 },
  { month: "Jul", product1: 35, product2: 75 },
  { month: "Aug", product1: 55, product2: 35 },
  { month: "Sep", product1: 38, product2: 55 },
  { month: "Oct", product1: 30, product2: 90 },
  { month: "Nov", product1: 25, product2: 15 },
  { month: "Dec", product1: 32, product2: 72 },
];

export const UseWindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] = React.useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handelResize = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handelResize);
    return () => {
      window.removeEventListener("resize", handelResize);
    };
  }, []);
  return windowDimensions;
};

const BarCharts = () => {
  const { width: wWidth } = UseWindowDimensions();
  const chartWidth = wWidth < 768 ? wWidth * 0.6 : 450; // Adjust based on screen width
  const chartHeight = 300; // Smaller height for a compact chart

  return (
    <div className="orders-container" style={{ textAlign: "center" }}>
      <BarChart
        width={chartWidth}
        height={chartHeight}
        data={data}
        margin={{
          top: 10,
          right: 20,
          left: 20,
          bottom: 10,
        }}
        barSize={5} // Reduces the bar width
      >
        <CartesianGrid strokeDasharray="3 3" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="product1" stackId="a" fill="#8884d8" />
        <Bar dataKey="product2" stackId="a" fill="#82ca9d" />
      </BarChart>
    </div>
  );
};

export default BarCharts;
