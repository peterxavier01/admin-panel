import "./WidgetLg.css";
import src from "../../assets/profile1.jpg";

const WidgetLg = () => {
  const transactions = [
    {
      src: src,
      name: "Tommy Shelby",
      date: "May 4, 2022",
      amount: "$10300.89",
      status: "Approved",
      id: 1,
    },
    {
      src: src,
      name: "John Shelby",
      date: "May 5, 2022",
      amount: "$133.89",
      status: "Approved",
      id: 2,
    },
    {
      src: src,
      name: "Arthur Shelby",
      date: "May 6, 2022",
      amount: "$203.89",
      status: " Declined",
      id: 3,
    },
    {
      src: src,
      name: "Ada Shelby",
      date: "May 7, 2022",
      amount: "$503.89",
      status: "Pending",
      id: 4,
    },
    {
      src: src,
      name: "Freddie Thorne",
      date: "May 8, 2022",
      amount: "$453.89",
      status: "Pending",
      id: 5,
    },
    {
      src: src,
      name: "Polly Gray",
      date: "May 9, 2022",
      amount: "$9323.89",
      status: "Declined",
      id: 6,
    },
  ];

  const Button = ({ text }) => {
    return <button className={"widget-lg-btn " + text}>{text}</button>;
  };

  return (
    <div className="widget-lg">
      <h3 className="widget-title">Customer Transactions</h3>
      <div className="table-responsive">
        <table className="customers">
          <thead>
            <tr>
              <th>Customer</th>
              <th>Date</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction.id}>
                <td className="widget-lg-name-block">
                  <img src={src} alt="customer" className="widget-lg-img"></img>
                  <p className="widget-lg-name">{transaction.name}</p>
                </td>
                <td className="widget-lg-date">{transaction.date}</td>
                <td className="widget-lg-amount">{transaction.amount}</td>
                <td>
                  <Button className="widget-lg-btn" text={transaction.status} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default WidgetLg;
