import React, { useState } from "react";
import "./App.css";
import UserInput from "./components/UserInput";
import UserList from "./components/UserList";

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
    <div>
      <UserInput onAddUser={addUserHandler} />
      <UserList users={userInfo} />
    </div>
  );
};

export default App;
