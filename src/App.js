import React, { useState } from 'react';
import UsersList from './components/UI/UsersList/UsersList';
import UserForm from './components/UI/UserForm/UserForm';
import ErrorModal from './components/UI/ErrorModal/ErrorModal';

const App = () => {
  const [users, setUsers] = useState([]);
  const [isDisplayed, setIsDesplayed] = useState(false);
  const [isValid, setIsValid] = useState({"status":true, "input":""});
  
  const userHandler = (user)=>{
    if(user.username.length === 0){
      setIsDesplayed(true);
      return setIsValid({"status":false, "input":"username"});
    }
    if(user.age <= 0){
      setIsDesplayed(true);
      return setIsValid({"status":false, "input":"Age"});
    }
    setUsers([...users, user]);
  }
  return (
    <div>
      <UserForm userHandler={userHandler}/>
      <UsersList users={users}/>
      {isDisplayed && <ErrorModal setIsDesplayed={setIsDesplayed} message={isValid.input} />}
      
    </div>
  );
};

export default App;
