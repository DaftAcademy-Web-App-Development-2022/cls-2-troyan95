import React from "react";

import { Form, User } from "../index";
import userData from "../../../../../projects/cls-2-troyan95/src/data/userData.json"
import styles from "./Sidebar.module.css";

const Sidebar = () => {
  const handleLogout = (name: string, id: string) => {
    console.log("logout", name, id);
  }

  return (
    <div className={styles.root}>
      <div className={styles.top}>
        <User
          logout={() => handleLogout(userData.name, userData.id)}
          email={userData.email}
          name={userData.name}
          image={userData.url}
        />
      </div>
      <div className={styles.center}>
        <Form />
      </div>
    </div>
  )
}

export default Sidebar;
