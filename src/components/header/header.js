import React, { Component } from "react"
import { Link } from "@material-ui/core"
import styles from "./header.module.css"

export class Header extends Component {
  render() {
    return <div className={styles.header}>
       
          <Link href="/profile" className = {styles.profile__link}>Profile</Link>
       
      </div>
  }
}
