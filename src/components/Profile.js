import React from "react";
import Crud2 from "./Crud2.js";

function Profile({ user }) {
  return (
    <div className="row">
      <div className="col-md-8 offset-md-2">
        <Crud2 user={user} />
      </div>
    </div>
  );
}

export default Profile;
