import React from "react";
// import { USERS_PER_PAGE } from "../../utils/constants";
import User from "./item";

let USERS_PER_PAGE = 15;

const Sample = ({ users, page }) => {
  const startIndex = (page - 1) * USERS_PER_PAGE;
  const selectedUsers = users.slice(startIndex, startIndex + USERS_PER_PAGE);
  return (
    <React.Fragment>
      {selectedUsers.map((user, index) => (
        <User key={index} user={user} />
      ))}
    </React.Fragment>
  );
};

export default Sample;
