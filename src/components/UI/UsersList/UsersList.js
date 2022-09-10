import React from 'react'
import styles from "./UsersList.module.css"
const UsersList = (props) => {
  const {users} = props;
  return (
    <ul className={styles.users}>
      {
        users.map((item, index)=>{return(
          <li key={index}>{item.username} ({item.age} years old)</li>
        )})
      }
    </ul>
  )
}

export default UsersList