import React, { useState, useEffect } from "react";
import CrudForm from "./CrudForm";
import fire from "../fire";

const Crud = ({ user }) => {
  var [crudObjects, setCrudObjects] = useState({});
  var [currentId, setCurrentId] = useState("");

  useEffect(() => {
    fire
      .database()
      .ref()
      .child("crud")
      .on("value", (snapshot) => {
        if (snapshot.val() != null)
          setCrudObjects({
            ...snapshot.val(),
          });
      });
  }, []);

  const addOrEdit = (obj) => {
    if (currentId === "")
      fire
        .database()
        .ref()
        .child("crud")
        .push({ ...obj, userId: user.uid }, (err) => {
          if (err) console.log(err);
          else setCurrentId("");
        });
    else
      fire
        .database()
        .ref()
        .child(`crud/${currentId}`)
        .set({ ...obj, userId: user.uid }, (err) => {
          if (err) console.log(err);
          else setCurrentId("");
        });
  };

  const onDelete = (currentId) => {
    window.confirm("Are you sure?");
    fire.database().ref(`crud/${currentId}`).remove();
  };

  return (
    <React.Fragment>
      <div class="jumbotron jumbotron-fluid">
        <div class="container">
          <h1 class="display-4 text-center">Job Board</h1>
          <p>
            This page is for recruiters to share current job openings. Please
            submit position title, employer, location and simple job
            description.
          </p>
          <p>
            Job seekers, please contact us if you want to be considered for any
            listed jobs. <a href="mailto:jwpeterkim@gmail.com">Click here</a>
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-5">
          <CrudForm {...{ addOrEdit, currentId, crudObjects }} />
        </div>
        <div className="col-md-7">
          <div>
            <h1
              style={{ textAlign: "center", fontSize: "20px", color: "grey" }}
            >
              Current Job Openings
            </h1>
            <table
              className="table table-borderless table-stripped"
              style={{ fontSize: "15px", margin: "auto" }}
            >
              <thead className="thead-light">
                <tr>
                  <th>Job Title</th>
                  <th>Employer</th>
                  <th>Location</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody style={{ color: "grey" }}>
                {Object.keys(crudObjects).map((id) => {
                  return (
                    <tr key={id}>
                      <td>{crudObjects[id].jobTitle}</td>
                      <td>{crudObjects[id].employer}</td>
                      <td>{crudObjects[id].location}</td>
                      <td>
                        {crudObjects[id].userId === user.uid ? (
                          <React.Fragment>
                            <a
                              className="btn text-primary"
                              onClick={() => {
                                setCurrentId(id);
                              }}
                            >
                              <input type="submit" value="edit" />

                              {/* <FontAwesomeIcon icon="pencil-alt" /> */}
                            </a>
                            <a
                              className="btn text-primary"
                              onClick={() => {
                                onDelete(id);
                              }}
                            >
                              {/* <i className="far fa-trash-alt"></i> */}
                              <input type="submit" value="delete" />
                            </a>{" "}
                          </React.Fragment>
                        ) : null}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Crud;
