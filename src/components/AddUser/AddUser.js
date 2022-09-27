import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./AddUser.module.css";

const AddUser = (props) => {
  const [enteredUserName, setEnteredUserName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const addUserHandler = (e) => {
    e.preventDefault();
    //validation
    if (enteredUserName.trim().length === 0 || enteredAge.trim().length === 0)
      return;
    if (+enteredAge < 1) return;

    console.log(enteredUserName, enteredAge);
    setEnteredUserName("");
    setEnteredAge("");
  };

  const userNameHandler = (e) => {
    setEnteredUserName(e.target.value);
  };
  const ageHandler = (e) => {
    setEnteredAge(e.target.value);
  };
  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">User Name</label>
        <input
          id="username"
          type="text"
          value={enteredUserName}
          onChange={userNameHandler}
        />
        <label htmlFor="age">Enter Yor Age</label>
        <input
          id="age"
          type="number"
          value={enteredAge}
          onChange={ageHandler}
        />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};
export default AddUser;