import React, { useState, useEffect } from "react";

const Crud2Form = (props) => {
  const initialFieldValues = {
    fullName: "",
    skills: "",
    location: "",
    professionalSummary: "",
  };
  var [values, setValues] = useState(initialFieldValues);

  useEffect(() => {
    if (props.currentId === "")
      setValues({
        ...initialFieldValues,
      });
    else
      setValues({
        ...props.crud2Objects[props.currentId],
      });
  }, [props.currentId, props.crud2Objects]);

  const handleInputChange = (e) => {
    var { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    props.addOrEdit(values);
    setValues(initialFieldValues);
  };

  return (
    //   full name
    <form autoComplete="off" onSubmit={handleFormSubmit}>
      <div className="form-group input-group">
        <div className="input-group-prepend">
          <div className="input-group-text">
            {/* <i className="fas fa-user"></i> */}
          </div>
        </div>
        <input
          className="form-control"
          placeholder="Full Name"
          name="fullName"
          value={values.fullName}
          onChange={handleInputChange}
        />
      </div>
      {/* skills */}
      <div className="form-row">
        <div className="form-group input-group col-md-6">
          <div className="input-group-prepend">
            <div className="input-group-text">
              <i className="fas fa-mobile-alt"></i>
            </div>
          </div>
          <input
            className="form-control"
            placeholder="Skills"
            name="skills"
            value={values.skills}
            onChange={handleInputChange}
          />
        </div>
        {/* location */}
        <div className="form-group input-group col-md-6">
          <div className="input-group-prepend">
            <div className="input-group-text">
              <i className="fas fa-envelope"></i>
            </div>
          </div>
          <input
            className="form-control"
            placeholder="Location"
            name="location"
            value={values.location}
            onChange={handleInputChange}
          />
        </div>
      </div>
      {/* professional summary */}
      <div className="form-group">
        <textarea
          className="form-control"
          placeholder="Professional Summary"
          name="professionalSummary"
          value={values.professionalSummary}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <input
          type="submit"
          value={props.currentId === "" ? "Save" : "Update"}
          className="btn-btn-primary btn-block"
        />
      </div>
    </form>
  );
};
export default Crud2Form;
