import React, { useEffect, useState } from "react";
import "./Users.css";
import axios from "axios";

const Users = () => {
  const [details, setDetails] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const url = "https://fakerapi.it/api/v1/companies?_quantity=10";

    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(url);
        const content = response.data.data;
        setDetails(content);
      } catch (error) {
        setError(error);
        console.log("error", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <h1 className="loading">Fetching clients' list...</h1>;

  if (error) console.log(error);

  const detailValues = Object.values(details).map((value) => {
    return value.contact;
  });

  return (
    <div className="users">
      <table>
        <thead>
          <tr>
            <th>Full Name</th>
            <th>Email</th>
            <th>Phone No.</th>
            <th>Gender</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="image-data">
              <img src={detailValues[0]?.image} alt="team"></img>
              <span>{detailValues[0]?.firstname} {detailValues[0]?.lastname}</span>
            </td>
            <td>{detailValues[0]?.email}</td>
            <td>{detailValues[0]?.phone}</td>
            <td>{detailValues[0]?.gender}</td>
          </tr>
          <tr>
            <td className="image-data">
              <img src={detailValues[1]?.image} alt="team"></img>
              {detailValues[1]?.firstname} {detailValues[1]?.lastname}
            </td>
            <td>{detailValues[1]?.email}</td>
            <td>{detailValues[1]?.phone}</td>
            <td>{detailValues[1]?.gender}</td>
          </tr>
          <tr>
            <td className="image-data">
              <img src={detailValues[2]?.image} alt="team"></img>
              {detailValues[2]?.firstname} {detailValues[2]?.lastname}
            </td>
            <td>{detailValues[2]?.email}</td>
            <td>{detailValues[2]?.phone}</td>
            <td>{detailValues[2]?.gender}</td>
          </tr>
          <tr>
            <td className="image-data">
              <img src={detailValues[3]?.image} alt="team"></img>
              {detailValues[3]?.firstname} {detailValues[3]?.lastname}
            </td>
            <td>{detailValues[3]?.email}</td>
            <td>{detailValues[3]?.phone}</td>
            <td>{detailValues[3]?.gender}</td>
          </tr>
          <tr>
            <td className="image-data">
              <img src={detailValues[4]?.image} alt="team"></img>
              {detailValues[4]?.firstname} {detailValues[4]?.lastname}
            </td>
            <td>{detailValues[4]?.email}</td>
            <td>{detailValues[4]?.phone}</td>
            <td>{detailValues[4]?.gender}</td>
          </tr>
          <tr>
            <td className="image-data">
              <img src={detailValues[5]?.image} alt="team"></img>
              {detailValues[5]?.firstname} {detailValues[5]?.lastname}
            </td>
            <td>{detailValues[5]?.email}</td>
            <td>{detailValues[5]?.phone}</td>
            <td>{detailValues[5]?.gender}</td>
          </tr>
          <tr>
            <td className="image-data">
              <img src={detailValues[6]?.image} alt="team"></img>
              {detailValues[6]?.firstname} {detailValues[6]?.lastname}
            </td>
            <td>{detailValues[6]?.email}</td>
            <td>{detailValues[6]?.phone}</td>
            <td>{detailValues[6]?.gender}</td>
          </tr>
          <tr>
            <td className="image-data">
              <img src={detailValues[7]?.image} alt="team"></img>
              {detailValues[7]?.firstname} {detailValues[7]?.lastname}
            </td>
            <td>{detailValues[7]?.email}</td>
            <td>{detailValues[7]?.phone}</td>
            <td>{detailValues[7]?.gender}</td>
          </tr>
          <tr>
            <td className="image-data">
              <img src={detailValues[8]?.image} alt="team"></img>
              {detailValues[8]?.firstname} {detailValues[8]?.lastname}
            </td>
            <td>{detailValues[8]?.email}</td>
            <td>{detailValues[8]?.phone}</td>
            <td>{detailValues[8]?.gender}</td>
          </tr>
          <tr>
            <td className="image-data">
              <img src={detailValues[9]?.image} alt="team"></img>
              {detailValues[9]?.firstname} {detailValues[9]?.lastname}
            </td>
            <td>{detailValues[9]?.email}</td>
            <td>{detailValues[9]?.phone}</td>
            <td>{detailValues[9]?.gender}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Users;
