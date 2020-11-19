import React, { useState, useEffect } from "react";

const CrudForm = (props) => {
  const initialFieldValues = {
    jobTitle: "",
    employer: "",
    location: "",
    jobDescription: "",
  };
  var [values, setValues] = useState(initialFieldValues);

  useEffect(() => {
    if (props.currentId === "")
      setValues({
        ...initialFieldValues,
      });
    else
      setValues({
        ...props.crudObjects[props.currentId],
      });
  }, [props.currentId, props.crudObjects]);

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
    //   job title
    <form autoComplete="off" onSubmit={handleFormSubmit}>
      <div className="form-group input-group">
        <div className="input-group-prepend">
          <div className="input-group-text">
            {/* <i className="fas fa-user"></i> */}
          </div>
        </div>
        <input
          className="form-control"
          placeholder="Job Title"
          name="jobTitle"
          value={values.jobTitle}
          onChange={handleInputChange}
        />
      </div>
      {/* employer */}
      <div className="form-row">
        <div className="form-group input-group col-md-6">
          <div className="input-group-prepend">
            <div className="input-group-text">
              <i className="fas fa-mobile-alt"></i>
            </div>
          </div>
          <input
            className="form-control"
            placeholder="Employer"
            name="employer"
            value={values.employer}
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
      {/* job description */}
      <div className="form-group">
        <textarea
          className="form-control"
          placeholder="Job Description"
          name="jobDescription"
          value={values.jobDescription}
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
export default CrudForm;
