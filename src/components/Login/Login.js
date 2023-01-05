import React, { useState, useEffect, useReducer } from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";

const USER_INPUT = "USER_INPUT";
const INPUT_BLUR = "INPUT_BLUR";

const emailReducer = (state, action) => {
  if (action.type === USER_INPUT) {
    return { value: action.val, isValid: action.val.includes("@") };
  }
  if (action.type === INPUT_BLUR) {
    return { value: state.value, isValid: state.value.includes("@") };
  }
  return { value: "", isValid: false };
};

const passwordReducer = (state, action) => {
  if (action.type === USER_INPUT) {
    return { value: action.val, isValid: action.val.trim().length > 6 };
  }
  if (action.type === INPUT_BLUR) {
    return { value: state.value, isValid: state.value.trim().length > 6 };
  }
  return { value: "", isValid: false };
};
const Login = (props) => {
  // const [enteredEmail, setEnteredEmail] = useState("");
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState("");
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, dispatchEmail] = useReducer(emailReducer, { value: "", isValid: null });
  const [passwordState, dispatchPW] = useReducer(passwordReducer, { value: "", isValid: null });

  useEffect(() => {
    console.log("EFFECT RUNNING"); // 처음 마운트/렌더링 될 떄 한 번만 실행된다
    return () => {
      console.log("EFFECT CLEANUP"); // login을 하고 component가 제거되면 실행된다
    };
  }, []);

  // useEffect(() => {
  //   const identifier = setTimeout(() => {
  //     console.log("Checking form validity");
  //     setFormIsValid(enteredEmail.includes("@") && enteredPassword.trim().length > 6);
  //   }, 500);
  //   return () => {
  //     console.log("CLEANUP");
  //     clearTimeout(identifier); // cleanup 함수 실행될 때 타이머 제거(새 타이머 설정하기 전 마지막 타이머 삭제)
  //   };
  // }, [enteredEmail, enteredPassword]);

  const emailChangeHandler = (event) => {
    // setEnteredEmail(event.target.value);
    dispatchEmail({ type: USER_INPUT, val: event.target.value });
    setFormIsValid(event.target.value.includes("@") && passwordState.isValid);
  };

  const passwordChangeHandler = (event) => {
    // setEnteredPassword(event.target.value);
    dispatchPW({ type: USER_INPUT, val: event.target.value });
    setFormIsValid(emailState.isValid && event.target.value.trim().length > 6);
  };

  const validateEmailHandler = () => {
    dispatchEmail({ type: INPUT_BLUR });
  };

  const validatePasswordHandler = () => {
    dispatchPW({ type: INPUT_BLUR });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(emailState.value, passwordState.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div className={`${classes.control} ${emailState.isValid === false ? classes.invalid : ""}`}>
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div className={`${classes.control} ${passwordState.isValid === false ? classes.invalid : ""}`}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={passwordState.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button
            type="submit"
            className={classes.btn}
            disabled={!formIsValid}
          >
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
