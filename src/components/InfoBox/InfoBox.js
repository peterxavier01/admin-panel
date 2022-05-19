import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import "./InfoBox.css";
//@ts-check

const InfoBox = () => {
  return (
    <div className="info-container">
      <div className="info-box">
        <p className="info-title">Revenue</p>
        <div className="amount-container">
          <span className="amount">$2044</span>
          <span className="trend">
            <p className="trend-value negative">-5.3</p>
            <ArrowDownward className="arrow-down" />
          </span>
        </div>
        <p>Compared to last week</p>
      </div>

      <div className="info-box">
        <p className="info-title">Sales</p>
        <div className="amount-container">
          <span className="amount">$3022</span>
          <span className="trend">
            <p className="trend-value negative">-2.7</p>
            <ArrowDownward className="arrow-down" />
          </span>
        </div>
        <p>Compared to last week</p>
      </div>

      <div className="info-box">
        <p className="info-title">Revenue</p>
        <div className="amount-container">
          <span className="amount">$2044</span>
          <span className="trend">
            <p className="trend-value positive">+1.3</p>
            <ArrowUpward className="arrow-up" />
          </span>
        </div>
        <p>Compared to last week</p>
      </div>
    </div>
  );
};

export default InfoBox;
