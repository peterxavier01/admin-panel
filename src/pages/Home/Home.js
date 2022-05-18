import Chart from "../../components/Chart/Chart";
import InfoBox from "../../components/InfoBox/InfoBox";
import "./Home.css";
import {userData} from "../../data";
import WidgetLg from "../../components/WidgetLg/WidgetLg";
import WidgetSm from "../../components/WidgetSm/WidgetSm";

const Home = () => {
  return (
    <div className="Home">
      <InfoBox />
      <Chart data={userData} title="User Analytics" grid dataKey="Active User"/>
      <div className="widget-block">
        <WidgetSm className="widget-sm"/>
        <WidgetLg className="widget-lg"/>
      </div>
    </div>
  );
};

export default Home;
