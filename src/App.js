import React, { useState } from "react";
import "./App.css";
import UserInput from "./components/Users/UserInput";
import UserList from "./components/Users/UserList";

const App = () => {
  const [userInfo, setUserInfo] = useState([
    {
      id: 0,
      name: "Max",
      age: "32",
    },
  ]);

  const addUserHandler = (userName, userAge) => {
    setUserInfo((prev) => {
      return [...prev, { id: Math.random().toString(), name: userName, age: userAge }];
    });
  };
  return (
    <React.Fragment>
      <UserInput onAddUser={addUserHandler} />
      <UserList users={userInfo} />
    </React.Fragment>
  );
};

export default App;
