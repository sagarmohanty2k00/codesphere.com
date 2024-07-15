import React, { useState } from "react";
import "./SideNav.css"; // Assuming you have a CSS file for styling

const SideNav = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggleNav = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      className={`l-navbar ${isExpanded ? "expanded" : "collapsed"}`}
      id="nav-bar"
    >
      <button
        type="button"
        className="nav-toggle-button"
        onClick={handleToggleNav}
      >
        {!isExpanded ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="currentColor"
            className="nav-toggle-text"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="currentColor"
            className="nav-toggle-text"
            viewBox="0 0 16 16"
          >
            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
          </svg>
        )}
      </button>
      <nav className="nav">
        <div className="nav_list">
          <a href="#" className="nav_link active">
            {isExpanded ? (
              <span className="nav_name">Python Programming</span>
            ) : (
              <img
                src="https://s3.dualstack.us-east-2.amazonaws.com/pythondotorg-assets/media/community/logos/python-logo-only.png"
                className="nav_logo"
              />
            )}
          </a>
        </div>
      </nav>
    </div>
  );
};

export default SideNav;
