import React, { useState, useEffect } from "react";
import Crud2Form from "./Crud2Form";
import fire from "../fire";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Crud2 = ({ user }) => {
  var [crud2Objects, setCrud2Objects] = useState({});
  var [currentId, setCurrentId] = useState("");

  useEffect(() => {
    fire
      .database()
      .ref()
      .child("crud2")
      .on("value", (snapshot) => {
        if (snapshot.val() != null)
          setCrud2Objects({
            ...snapshot.val(),
          });
      });
  }, []);

  const addOrEdit = (obj) => {
    if (currentId === "")
      fire
        .database()
        .ref()
        .child("crud2")
        .push({ ...obj, userId: user.uid }, (err) => {
          if (err) console.log(err);
          else setCurrentId("");
        });
    else
      fire
        .database()
        .ref()
        .child(`crud2/${currentId}`)
        .set({ ...obj, userId: user.uid }, (err) => {
          if (err) console.log(err);
          else setCurrentId("");
        });
  };

  const onDelete = (currentId) => {
    window.confirm("Are you sure?");
    fire.database().ref(`crud2/${currentId}`).remove();
  };

  return (
    <React.Fragment>
      <div class="jumbotron jumbotron-fluid">
        <div class="container">
          <h1 class="display-4 text-center">Candidate Profiles</h1>
          <p>
            This page is for job seekers to share their profiles. Please submit
            your name, skills, location preference and professional summary.
          </p>
          <p>
            Contact us if you want to know more about a job seeker.{" "}
            <a href="mailto:jwpeterkim@gmail.com">Click here</a>
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-5">
          <Crud2Form {...{ addOrEdit, currentId, crud2Objects }} />
        </div>
        <div className="col-md-7">
          <div>
            <h1
              style={{ textAlign: "center", fontSize: "20px", color: "grey" }}
            >
              List of Job Seekers
            </h1>
            <table
              className="table table-borderless table-stripped"
              style={{ fontSize: "15px", margin: "auto" }}
            >
              <thead className="thead-light">
                <tr>
                  <th>Full Name</th>
                  <th>Skills</th>
                  <th>Location Preference</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody style={{ color: "grey" }}>
                {Object.keys(crud2Objects).map((id) => {
                  return (
                    <tr key={id}>
                      <td>{crud2Objects[id].fullName}</td>
                      <td>{crud2Objects[id].skills}</td>
                      <td>{crud2Objects[id].location}</td>
                      <td>
                        {crud2Objects[id].userId === user.uid ? (
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

export default Crud2;
