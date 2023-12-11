import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Commit.scss";
import Navbar from "../../Components/Navbar/Navbar";

function Commit() {
  const [commits, setCommits] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await axios.get(
      "https://api.github.com/repos/facebook/react/commits"
    );
    setCommits(response.data);
  };

  return (
    <div className="commit-history">
      <Navbar />
      <div className="commit">
        
        <div className="commit-list">
        <h1>Commit History</h1>
          {commits.map((commit) => (
            <div className="commit-item" key={commit.sha}>
              <div className="commit-sha"><span className="detail">Commit ID:</span> {commit.sha}</div>
              <div className="commit-message"><span className="detail">Commit message:</span> {commit.commit.message}</div>
              <div className="commit-author"><span className="detail">Author:</span> {commit.commit.author.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Commit;
