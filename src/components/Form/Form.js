import React, { useState } from "react";
import Instruction from "../Instructions/Instruction";
import "./Form.css";

export const Form = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    contact: "",
    access: "",
  });
  const [show, setShow] = useState(false);
  const [toggle, setToggle] = useState(false);

  const [emptyFields, setEmptyFields] = useState([]);
  const [error, setError] = useState("");
  const [showError, setShowError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault(); //prevents refresing of page

    const validEmail = new RegExp(
      "^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$"
    );

    if (data?.name?.length < 5) {
      //name
      setError("Name must be at least 5 characters long!");
      setShowError(true);
      setEmptyFields([...emptyFields, "name"]);
    } else if (data?.email?.length > 0) {
      console.log("Hello");
      if (validEmail(data?.email)) {
        setEmptyFields((emptyFields) => [...emptyFields, "email"]);
        setError("Please enter email!");
        setShowError(true);
      }
    } else if (data?.contact?.length !== 10) {
      // contact
      setEmptyFields((emptyFields) => [...emptyFields, "contact"]);
      setError("Contact number must be at exacty 10 digits long!");
      setShowError(true);
    } else if (data?.access?.length <= 0) {
      //acess code
      setError("Please enter Access Code!");
      setShowError(true);
      setEmptyFields((emptyFields) => [...emptyFields, "access"]);
    } else {
      setError("");
      setShowError(false);
      setShow(true);
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h1>Interaction Title</h1>
        <div className="ui form_div">
          <div>
            <h4>Description</h4>
            <p className="description_p">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum
              itaque minus modi culpa ratione perferendis magni asperiores neque
              officiis id.
            </p>
          </div>
          <div>
            <div className="field">
              {/* <label>Name</label> */}
              <span>
                <i className="bx bx-user icon"></i>
              </span>
              <input
                type="text"
                name="name"
                placeholder="Enter Your Name"
                value={data?.name}
                onChange={(e) => setData({ ...data, name: e.target.value })}
                autoComplete="off"
              />
            </div>
            <div className="field">
              {/* <label>Email</label> */}
              <span>
                <i className="bx bx-envelope icon"></i>
              </span>
              <input
                type="text"
                name="email"
                placeholder="Enter Your Email"
                value={data?.email}
                onChange={(e) => setData({ ...data, email: e.target.value })}
                autoComplete="off"
              />
            </div>
            <div className="field">
              {/* <label>Phone No.</label> */}
              <span>
                <i className="bx bx-phone-call icon"></i>
              </span>
              <input
                type="text"
                name="phone"
                placeholder="Enter Your Phone Number"
                value={data?.contact}
                onChange={(e) => setData({ ...data, contact: e.target.value })}
                autoComplete="off"
              />
            </div>
            <div className="field">
              {/* <label>Access Code</label> */}
              <span>
                <i className="bx bx-lock-alt icon"></i>
              </span>
              <input
                type="text"
                name="access"
                placeholder="Enter access code"
                value={data?.access}
                onChange={(e) => setData({ ...data, access: e.target.value })}
                className={emptyFields?.includes("email") ? "error_field" : ""}
                autoComplete="off"
              />
            </div>
            {showError && (
              <div className="error">
                {error}
                <i
                  className="uil uil-times-circle"
                  onClick={() => setShowError(!showError)}
                ></i>
              </div>
            )}
          </div>
          <button className="fluid ui button blue" onClick={handleSubmit}>
            Validate to Start
          </button>
          <div style={{ marginTop: "20px" }}>
            {show && (
              <div>
                <Instruction />
                <button
                  style={{ marginTop: "15px" }}
                  onClick={() => setToggle(true)}
                >
                  Start Test
                </button>
                {toggle && (
                  <div className="modal">
                    <div className="overlay">
                      <div className="modal-content">
                        <h6>Are You Sure You want to start the test?</h6>
                        <p className="modal_p">
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit. Laborum itaque minus modi culpa ratione
                          perferendis magni asperiores neque officiis id.
                        </p>
                        <div className="buttons">
                          <button>Yes</button>
                          <button onClick={() => setToggle(false)}>No</button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};
