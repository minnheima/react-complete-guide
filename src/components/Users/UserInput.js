import React, { useState, useRef } from "react";
import classes from "./UserInput.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const UserInput = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();
  // const [enteredName, setEnteredName] = useState("");
  // const [enteredAge, setEnteredAge] = useState("");
  const [isError, setIsError] = useState();

  const userSubmitHandler = (e) => {
    e.preventDefault();
    const enteredUserName = nameInputRef.current.value;
    const enteredUserAge = ageInputRef.current.value;
    if (enteredUserName.trim().length === 0 || enteredUserAge.trim().length === 0) {
      setIsError({
        title: "Invalid input",
        message: "Please enter a valid name and age(non-empty values).",
      });
      return;
    }
    if (+enteredUserAge < 1) {
      // + = string -> number
      setIsError({
        title: "Invalid age",
        message: "Please enter a valid age (> 0).",
      });
      return;
    }
    props.onAddUser(enteredUserName, enteredUserAge);
    // setEnteredName("");
    // setEnteredAge("");
    // useRef로 DOM을 직접 조작하는 것은 별로 좋은거 같지는 않아보인다 (단순 read only이면..okay) 일단 알아두자!
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
  };

  // const userNameChangeHandler = (e) => {
  //   setEnteredName(e.target.value);
  // };
  // const userAgeChangeHandler = (e) => {
  //   setEnteredAge(e.target.value);
  // };
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
              // value={enteredName}
              // onChange={userNameChangeHandler}
              ref={nameInputRef}
            />
          </div>
          <div className="user-form__age">
            <label htmlFor="userage">Age</label>
            <input
              id="userage"
              type="number"
              // value={enteredAge}
              // onChange={userAgeChangeHandler}
              ref={ageInputRef}
            />
          </div>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};
export default UserInput;
