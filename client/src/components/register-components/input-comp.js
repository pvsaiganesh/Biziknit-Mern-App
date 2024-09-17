import React from "react";
import "../register.scss";
import "react-datepicker/dist/react-datepicker.css";
import "react-datepicker/dist/react-datepicker-cssmodules.css";

const InputComp = ({ label, type, func, onChange, key }) => {
  return (
    <div className=" p-1 pb-1 ps-1 pe-1 w-100">
      <div className="input-group-sm">
        <label htmlFor="basic-url" className="form-label">
          {label}
        </label>

        {type === "select" && (
          <select className="form-select" onChange={onChange} id={key}>
            <option defaultValue></option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        )}
        {type === "file" && (
          <input
            type={type}
            onChange={onChange}
            className="form-control"
            id={key}
            aria-describedby="basic-addon3 basic-addon4 button-addon2"
          />
        )}
        {type === "date" && (
          <input
            type={type}
            onChange={onChange}
            className="form-control"
            id={key}
            aria-describedby="basic-addon3 basic-addon4 button-addon2"
          />
        )}
        {type === "password" && (
          <input
            type={type}
            onChange={onChange}
            className="form-control"
            id={key}
            aria-describedby="basic-addon3 basic-addon4 button-addon2"
          />
        )}
      </div>
      {type === "textarea" && (
        <div className="input-group-sm mb-3">
          <textarea
            onChange={onChange}
            className="form-control"
            placeholder=""
            id={key}
          ></textarea>
        </div>
      )}
      {type === "location" && (
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            onChange={onChange}
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
            id={key}
          />
          <span class="input-group-text">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="white"
              className="bi bi-geo-alt"
              viewBox="0 0 16 16"
            >
              <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10" />
              <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
            </svg>
          </span>
        </div>
      )}
      {label === "Full Name" && (
        <input
          type={type}
          onChange={onChange}
          required
          className="form-control"
          id={key}
          aria-describedby="basic-addon3 basic-addon4 button-addon2"
        />
      )}
      {label === "Name of Firm" && (
        <input
          type={type}
          onChange={onChange}
          className="form-control"
          id={key}
          aria-describedby="basic-addon3 basic-addon4 button-addon2"
        />
      )}
      {label === "Phone Number" && (
        <input
          type={type}
          onChange={onChange}
          required
          className="form-control"
          id={key}
          aria-describedby="basic-addon3 basic-addon4 button-addon2"
        />
      )}
      {label === "Address" && (
        <input
          type={type}
          onChange={onChange}
          className="form-control"
          id={key}
          aria-describedby="basic-addon3 basic-addon4 button-addon2"
        />
      )}
      {label === "Landmark" && (
        <input
          type={type}
          onChange={onChange}
          className="form-control"
          id={key}
          aria-describedby="basic-addon3 basic-addon4 button-addon2"
        />
      )}
      {label === "Pin code" && (
        <input
          type={type}
          onChange={onChange}
          className="form-control"
          id={key}
          aria-describedby="basic-addon3 basic-addon4 button-addon2"
        />
      )}
      <div class="invalid-feedback">Please choose a username.</div>
    </div>
  );
};

export default InputComp;
