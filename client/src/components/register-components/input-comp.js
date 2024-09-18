import React from "react";
import "../register.scss";
import "react-datepicker/dist/react-datepicker.css";
import "react-datepicker/dist/react-datepicker-cssmodules.css";

const InputComp = ({ label, type, func, onChange, id, pattern, required }) => {
  return (
    <div className=" p-1 pb-1 ps-1 pe-1 w-100">
      <div className="input-group-sm">
        <label htmlFor={id} className="form-label">
          {label}
        </label>

        {type === "select" && (
          <select
            className="form-select"
            onChange={onChange}
            id={id}
            required={required}
          >
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
            id={id}
            aria-describedby="basic-addon3 basic-addon4 button-addon2"
            required={required}
          />
        )}
        {type === "date" && (
          <input
            type={type}
            onChange={onChange}
            className="form-control"
            id={id}
            aria-describedby="basic-addon3 basic-addon4 button-addon2"
            required={required}
          />
        )}
        {type === "password" && (
          <input
            type={type}
            onChange={onChange}
            className="form-control"
            id={id}
            aria-describedby="basic-addon3 basic-addon4 button-addon2"
            required={required}
          />
        )}
      </div>
      {type === "textarea" && (
        <div className="input-group-sm mb-3">
          <textarea
            onChange={onChange}
            className="form-control"
            placeholder=""
            id={id}
            required={required}
          ></textarea>
        </div>
      )}
      {type === "location" && (
        <>
          <input
            type="text"
            className="form-control"
            onChange={onChange}
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
            id={id}
            required={required}
          />
          {/* <span class="input-group-text" id="basic-addon1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="white"
              className="bi bi-geo-alt"
              viewBox="0 0 16 16"
            >
              <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10" />
              <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
            </svg>
          </span> */}
        </>
      )}
      {label === "Full Name" && (
        <input
          type={type}
          onChange={onChange}
          required={required}
          className="form-control"
          id={id}
          aria-describedby="basic-addon3 basic-addon4 button-addon2"
        />
      )}
      {label === "Name of Firm" && (
        <input
          type={type}
          onChange={onChange}
          className="form-control"
          id={id}
          aria-describedby="basic-addon3 basic-addon4 button-addon2"
          required={required}
        />
      )}
      {label === "Phone Number" && (
        <div className="input-group mb-3">
          <span class="input-group-text">+91</span>
          <input
            type={type}
            pattern={pattern}
            onChange={onChange}
            required={required}
            className="form-control"
            id={id}
            aria-describedby="basic-addon3 basic-addon4 button-addon2"
          />
        </div>
      )}
      {label === "Address" && (
        <input
          type={type}
          onChange={onChange}
          className="form-control"
          id={id}
          aria-describedby="basic-addon3 basic-addon4 button-addon2"
          required={required}
        />
      )}
      {label === "Landmark" && (
        <input
          type={type}
          onChange={onChange}
          className="form-control"
          id={id}
          aria-describedby="basic-addon3 basic-addon4 button-addon2"
          required={required}
        />
      )}
      {label === "Pin code" && (
        <input
          type={type}
          onChange={onChange}
          className="form-control"
          id={id}
          aria-describedby="basic-addon3 basic-addon4 button-addon2"
          required={required}
        />
      )}
    </div>
  );
};

export default InputComp;
