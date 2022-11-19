import React, { useEffect, useState } from "react";
import Instruction from "../Instructions/Instruction";
import "./Form.css";

export const Form = () => {
  const initialValues = { name: "", email: "", phone: "", access: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [show, setShow] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors, formValues, isSubmit]);
  const validate = (values) => {
    const errors = {};
    if (!values.name) {
      errors.name = "Name is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    }
    if (!values.access) {
      errors.access = "Access Code is required!";
    }
    if (!values.phone) {
      errors.phone = "Phone No. is required! ";
    }
    return errors;
  };

  const showInstruction = () => {
    if (isSubmit === true) {
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
                <i className="bx bx-user"></i>
              </span>
              <input
                type="text"
                name="name"
                placeholder="Enter Your Name"
                value={formValues.name}
                onChange={handleChange}
                autoComplete="off"
              />
              <p>{formErrors.name}</p>
            </div>
            <div className="field">
              {/* <label>Email</label> */}
              <span>
                <i className="bx bx-envelope"></i>
              </span>
              <input
                type="text"
                name="email"
                placeholder="Enter Your Email"
                value={formValues.email}
                onChange={handleChange}
                autoComplete="off"
              />
              <p>{formErrors.email}</p>
            </div>
            <div className="field">
              {/* <label>Phone No.</label> */}
              <span>
                <i className="bx bx-phone-call"></i>
              </span>
              <input
                type="text"
                name="phone"
                placeholder="Enter Your Phone Number"
                value={formValues.phone}
                onChange={handleChange}
                autoComplete="off"
              />
              <p>{formErrors.phone}</p>
            </div>
            <div className="field">
              {/* <label>Access Code</label> */}
              <span>
                <i className="bx bx-lock-alt"></i>
              </span>
              <input
                type="text"
                name="access"
                placeholder="Enter Your Access Code"
                value={formValues.access}
                onChange={handleChange}
                autoComplete="off"
              />
              <p>{formErrors.access}</p>
            </div>
          </div>
          <button className="fluid ui button blue" onClick={showInstruction}>
            Validate to Start
          </button>
          <div style={{ marginTop: "20px" }}>
            {show && (
              <div>
                <Instruction />
                <button style={{ marginTop: "15px" }}>Start Test</button>
              </div>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};
