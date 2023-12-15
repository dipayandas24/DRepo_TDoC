import React from 'react';
import './RepoCard2.scss';
import { Link } from 'react-router-dom';

const RepoCard2 = ({profileName, repoName }) => {
  return (
    <Link to = {`/${profileName}/${repoName}`}style={{ textDecoration: 'none', color: 'inherit' }}>
    <div className="repo-card-2">
      <div className="repo-card-2-header">
        <h3 className="repo-card-2-name">{repoName}</h3>
        <p className="repo-card-2-description">This is a new project</p>
      </div>
      <div className="repo-card-2-footer">
        <span className="repo-card-2-stat">Forked from lugnitdgp/TDoC<i className="fa fa-code-fork"></i></span>
        <div className="repo-card-2-language">
          <span className="repo-card-2-language-badge">🟡 JavaScript</span>
        </div>
      </div>
      
    </div>
    </Link>
  );
};

export default RepoCard2;
