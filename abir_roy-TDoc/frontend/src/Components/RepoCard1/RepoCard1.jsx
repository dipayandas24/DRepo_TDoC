import React from 'react';
import './RepoCard1.scss';

const RepoCard1 = ({ name, description, language }) => {
  return (
    <div className="repo-card-1">
      <div className="repo-card-1-header">
        <h3 className="repo-card-1-name">{name}<span>D-Hub_TdoC</span></h3>
        <span className="repo-card-1-badge">Public</span>
        <p className="repo-card-1-language">{language}<span>🟡 JavaScript</span></p>
      </div>
    </div>
  );
};

export default RepoCard1;
