import React, { useEffect, useState } from "react";
import "./Teams.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { DeleteOutline } from "@material-ui/icons";

const Teams = () => {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const url = "https://fakerapi.it/api/v1/persons?_quantity=10";

    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(url);
        const content = response.data.data;
        setTeams(content);
      } catch (error) {
        setError(error);
        console.log("error", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <h1 className="loading">Fetching employees' list...</h1>;

  if (error) console.log(error);

  const handleDelete = (id) => {
    setTeams(teams.filter((team) => team.id !== id));
  }

  return (
    <div className="users table-responsive">
      <table>
        <thead>
          <tr>
            <th>Member Name</th>
            <th>Email</th>
            <th>Phone No.</th>
            <th>Gender</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {teams
            ? teams?.map((team, index) => (
                <tr key={index}>
                  <td className="image-data">
                    <img src={team.image} alt="team"></img>
                    {team.firstname} {team.lastname}
                  </td>
                  <td>{team.email}</td>
                  <td>{team.phone}</td>
                  <td>{team.gender}</td>
                  <td className="actions">
                    <Link to={`/team/${team.id}`}>Edit</Link>
                    <DeleteOutline
                      className="deleteIcon"
                      onClick={() => handleDelete(team.id)}
                    />
                  </td>
                </tr>
              ))
            : null}
        </tbody>
      </table>
    </div>
  );
};

export default Teams;
