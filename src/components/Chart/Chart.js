import "./Chart.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Chart = ({ title, data, dataKey, grid }) => {
  return (
    <div className="chart">
      <h3 className="chart-title">{title}</h3>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={data}>
          <XAxis dataKey="name" stroke="var(--blue)" strokeDasharray="10 10"/>
          <YAxis dataKey={dataKey} stroke="var(--blue)" strokeDasharray="10 10" />
          <Line
            type="monotone"
            dataKey={dataKey}
            stroke="var(--blue)"
          />
          <Tooltip />
          { grid && <CartesianGrid stroke="hsl(0, 1%, 81%)" strokeDasharray="5 5" /> }
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
