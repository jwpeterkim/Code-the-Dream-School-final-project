import React from "react";
import Crud from "./Crud.js";

function JobBoard({ user }) {
  return (
    <div className="row">
      <div className="col-md-8 offset-md-2">
        <Crud user={user} />
      </div>
    </div>
  );
}

export default JobBoard;
