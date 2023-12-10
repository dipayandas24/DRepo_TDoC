import React from 'react';
import './RepoCard2.scss';

const RepoCard2 = ({ repoName }) => {
  return (
    <div className="repo-card-2">
      <div className="repo-card-2-header">
        <h3 className="repo-card-2-name">{repoName}</h3>
        <p className="repo-card-2-description">this is a new project</p>
      </div>
      <div className="repo-card-2-footer">
        <span className="repo-card-2-stat">forked from lugnitdgp/TDoC<i className="fa fa-code-fork"></i></span>
        <div className="repo-card-2-language">
          <span className="repo-card-2-language-badge">🟡 JavaScript</span>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default RepoCard2;
