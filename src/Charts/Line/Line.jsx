import "./Line.css";
import { UseWindowDimensions } from "../Bar/Bar";
import {
  LineChart,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
} from "recharts";

const LineCharts = () => {
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

  const wWidth = UseWindowDimensions().width;
  const wHeight = 400;
  return (
    <div className={"orders-container"}>
      <LineChart
        width={wWidth < 768 ? wWidth * 0.8 : 600}
        height={wHeight}
        data={data}
        majorGridLines="0"
        minorGridLines="0"
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis dataKey="product2" />
        <Legend></Legend>
        <Tooltip />
      </LineChart>
    </div>
  );
};
export default LineCharts;
