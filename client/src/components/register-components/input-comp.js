import React from "react";
import "../register.scss";
import "react-datepicker/dist/react-datepicker.css";
import "react-datepicker/dist/react-datepicker-cssmodules.css";

const InputComp = ({ label, type, func, onChange }) => {
  return (
    <div className=" p-1 pb-1 ps-1 pe-1 w-100">
      <div className="input-group-sm">
        <label htmlFor="basic-url" className="form-label">
          {label}
        </label>

        {type === "select" && (
          <select
            className="form-select"
            onChange={onChange}
            id="inputGroupSelect01"
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
            id="basic-url"
            aria-describedby="basic-addon3 basic-addon4 button-addon2"
          />
        )}
        {type === "date" && (
          <input
            type={type}
            onChange={onChange}
            className="form-control"
            id="basic-url-1"
            aria-describedby="basic-addon3 basic-addon4 button-addon2"
          />
        )}
        {type === "password" && (
          <input
            type={type}
            onChange={onChange}
            className="form-control"
            id="basic-url-2"
            aria-describedby="basic-addon3 basic-addon4 button-addon2"
          />
        )}
        {type === "number" && (
          <div className="input-group mb-3">
            <input
              type="number"
              className="form-control"
              placeholder="1000"
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
              onChange={onChange}
            />
            <button
              className="btn  bg-button ps-5 pe-5 pt-2 pb-2 text-white"
              type="button "
              id="button-addon2"
            >
              Pay Now
            </button>
          </div>
        )}
      </div>
      {type === "textarea" && (
        <div className="input-group-sm mb-3">
          <textarea
            onChange={onChange}
            className="form-control"
            placeholder=""
            id="floatingTextarea"
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
          />
          <button
            className="btn text-white ps-5 pe-5 pt-2 pb-2 bg-button"
            onClick={func}
            type="button "
            id="button-addon2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="white"
              class="bi bi-geo-alt"
              viewBox="0 0 16 16"
            >
              <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10" />
              <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
            </svg>
          </button>
        </div>
      )}
      {label === "Full Name" && (
        <input
          type={type}
          onChange={onChange}
          className="form-control"
          id="basic-url-4"
          aria-describedby="basic-addon3 basic-addon4 button-addon2"
        />
      )}
      {label === "Name of Firm" && (
        <input
          type={type}
          onChange={onChange}
          className="form-control"
          id="basic-url-5"
          aria-describedby="basic-addon3 basic-addon4 button-addon2"
        />
      )}
      {label === "Phone Number" && (
        <input
          type={type}
          onChange={onChange}
          className="form-control"
          id="basic-url-6"
          aria-describedby="basic-addon3 basic-addon4 button-addon2"
        />
      )}
      {label === "Address" && (
        <input
          type={type}
          onChange={onChange}
          className="form-control"
          id="basic-url-7"
          aria-describedby="basic-addon3 basic-addon4 button-addon2"
        />
      )}
      {label === "Landmark" && (
        <input
          type={type}
          onChange={onChange}
          className="form-control"
          id="basic-url-8"
          aria-describedby="basic-addon3 basic-addon4 button-addon2"
        />
      )}
      {label === "Pin code" && (
        <input
          type={type}
          onChange={onChange}
          className="form-control"
          id="basic-url-9"
          aria-describedby="basic-addon3 basic-addon4 button-addon2"
        />
      )}
    </div>
  );
};

export default InputComp;
