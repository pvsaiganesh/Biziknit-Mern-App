import React from "react";
import "../home.scss";
const InputComp = ({ placeholder, dropdown }) => {
  return (
    <>
      {dropdown ? (
        <div className="dropdown p-3">
          <div className="btn-group ">
            <button className="btn btn-light btn-sm" type="button">
              Small split button
            </button>
            <button
              type="button"
              className="btn btn-sm btn-light dropdown-toggle dropdown-toggle-split"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <span className="visually-hidden">Toggle Dropdown</span>
            </button>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#Home">
                  Action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#Home">
                  Another action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#Home">
                  Something else here
                </a>
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <div className="input-group-sm p-3">
          <input
            type="input"
            className="form-control"
            placeholder={placeholder}
          />
        </div>
      )}
    </>
  );
};

export default InputComp;
