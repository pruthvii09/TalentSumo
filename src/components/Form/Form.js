import React, { useEffect, useState } from "react";
import "./Form.css";

export const Form = () => {
  const initialValues = { name: "", email: "", phone: "", access: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    // console.log(formValues);
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
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    if (!values.name) {
      errors.name = "Name is required";
    }
    if (!values.email) {
      errors.email = "Email is required";
    }
    if (!values.phone) {
      errors.phone = "Phone No. is required";
    }
    if (!values.access) {
      errors.access = "Access Code is required";
    }
    return errors;
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h1>Interaction Title</h1>
        <div className="form_div">
          <div className="ui divider"></div>
          <div className="ui form">
            <div className="field">
              {/* <label>Name</label> */}
              <input
                autoComplete="off"
                type="text"
                name="name"
                placeholder="Enter Your Name"
                value={formValues.name}
                onChange={handleChange}
              />
              <p>{formErrors.name}</p>
            </div>

            <div className="field">
              {/* <label>Email</label> */}
              <input
                autoComplete="off"
                type="text"
                name="email"
                placeholder="Enter Your Email"
                value={formValues.email}
                onChange={handleChange}
              />
              <p>{formErrors.email}</p>
            </div>

            <div className="field">
              {/* <label>Phone No.</label> */}
              <input
                autoComplete="off"
                type="text"
                name="phone"
                placeholder="Enter Your Phone No."
                value={formValues.phone}
                onChange={handleChange}
              />
              <p>{formErrors.phone}</p>
            </div>

            <div className="field">
              {/* <label>Access Code</label> */}
              <input
                autoComplete="off"
                type="text"
                name="access"
                placeholder="Enter Your Access Code "
                value={formValues.access}
                onChange={handleChange}
              />
              <p>{formErrors.access}</p>
            </div>

            <button className="field ui button black">Validate to Start</button>
          </div>
        </div>
      </form>
    </div>
  );
};
