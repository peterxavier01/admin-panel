import "./Chart.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";

const Chart = ({ title, data, dataKey }) => {
  return (
    <div className="chart">
      <h3 className="chart-title">{title}</h3>
      <ResponsiveContainer className="chart-container" aspect={3}>
        <BarChart
          className="bar-chart"
          data={data}
          margin={{
            top: 2,
            right: 5,
            left: 10,
            bottom: 2,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <Tooltip />
          <Bar dataKey={dataKey} fill="var(--tertiary-clr)" />
          <Bar dataKey={dataKey} fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
