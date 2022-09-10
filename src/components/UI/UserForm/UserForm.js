import React, { useId, useState } from 'react'
import Button from '../Button/Button';
import TextField from '../TextField/TextField';
import styles from './UserForm.module.css';

const UserForm = (props) => {
  const {userHandler} = props;
  const [username, setUsername] = useState("");
  const [age, setAge] = useState(0);
  const [id] = useId();
  const nameOnChangeHandler = (e)=>{
    e.preventDefault();
    setUsername(e.target.value);

  }
  const ageOnChangeHandler = (e)=>{
    e.preventDefault();
    if(e.target.value.match(/^[ 0-9]+$/)){
      setAge(e.target.value);
    }
  }

  const onSubmitHandler = (e)=>{
    e.preventDefault();
    userHandler({username, age, id});
    setUsername("");
    setAge(0);
  }

  return (
    <form className={styles.form}  onSubmit={onSubmitHandler}>
      <TextField label={"Username"} onChange={nameOnChangeHandler} value={username}/>
      <TextField label={"Age (Years)"} onChange={ageOnChangeHandler} value={age}/>
      <Button label="Add User" />
    </form>
  )
}

export default UserForm