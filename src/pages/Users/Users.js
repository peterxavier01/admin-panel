import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Users.css";
import axios from "axios";
import { DeleteOutline } from "@material-ui/icons";

const Users = () => {
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const url = "https://fakerapi.it/api/v1/companies?_quantity=10";

    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(url);
        const content = response.data.data;
        setClients(content);
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

  const handleDelete = (id) => {
    setClients(clients.filter((client) => client.id !== id));
  }

  return (
    <div className="users table-responsive">
      <table>
        <thead>
          <tr>
            <th>Client Name</th>
            <th>Email</th>
            <th>Phone No.</th>
            <th>Gender</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {clients
            ? clients?.map((client, index) => (
                <tr key={index}>
                  <td className="image-data">
                    <img src={client.image} alt="team"></img>
                    {client.name}
                  </td>
                  <td>{client.email}</td>
                  <td>{client.phone}</td>
                  <td>{client?.contact.gender}</td>
                  <td className="actions">
                    <Link to={`/user/${client.id}`}>Edit</Link>
                    <DeleteOutline className="deleteIcon" onClick={() => handleDelete(client.id)} />
                  </td>
                </tr>
              ))
            : null}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
