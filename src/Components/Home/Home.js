import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./Home.module.css";

function Home(props) {
  return (
    <div className={styles.container}>
      <div>

        <h1>
            <Link to="/login">Login</Link>
        </h1>
        <br />
        <h1>
            <Link to="/signup">Signup</Link>
        </h1>
      </div>

      <br />
      <br />
      <br />

      <h2>{props.name ? `Welcome - ${props.name}` : "Login please"}</h2>
    </div>
  )
}

export default Home
