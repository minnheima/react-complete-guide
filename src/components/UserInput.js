import React, { useState } from "react";
import classes from "./UserInput.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const UserInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [isError, setIsError] = useState();

  const userSubmitHandler = (e) => {
    e.preventDefault();
    setEnteredName("");
    setEnteredAge("");
    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      setIsError({
        title: "Invalid input",
        message: "Please enter a valid name and age(non-empty values).",
      });
      return;
    }
    if (+enteredAge < 1) {
      // + = string -> number
      setIsError({
        title: "Invalid age",
        message: "Please enter a valid age (> 0).",
      });
      return;
    }
    props.onAddUser(enteredName, enteredAge);
  };

  const userNameChangeHandler = (e) => {
    setEnteredName(e.target.value);
  };
  const userAgeChangeHandler = (e) => {
    setEnteredAge(e.target.value);
  };
  const errorHandler = () => {
    setIsError(null);
  };
  return (
    <div>
      {isError && (
        <ErrorModal
          title={isError.title}
          message={isError.message}
          onConfirm={errorHandler}
        />
      )}

      <Card className={classes.user_form}>
        <form onSubmit={userSubmitHandler}>
          <div className="user-form__name">
            <label htmlFor="username">User Name</label>
            <input
              id="username"
              type="text"
              value={enteredName}
              onChange={userNameChangeHandler}
            />
          </div>
          <div className="user-form__age">
            <label htmlFor="userage">Age</label>
            <input
              id="userage"
              type="number"
              value={enteredAge}
              onChange={userAgeChangeHandler}
            />
          </div>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};
export default UserInput;
