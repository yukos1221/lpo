import React from 'react'
import { createUseStyles } from "react-jss"
import styles from "./styles"
import logo from '../../assets/images/lpoLogo.png'

const useStyles = createUseStyles(styles);

const Header = () => {
  const classes = useStyles();

  const navTitles = [
    'проекты',
    'подать заявку',
    'о нас',
  ]

  return (
    <header className={classes.container}>
      <div className={classes.logoBlock}>
        <img src={logo} className={classes.logo} />
        <div className={classes.logoText}>
          Либертарианский<br />
          <span className={classes.marked}>проектный</span><br />
          офис
        </div>
      </div>
      <nav className={classes.nav}>
        <ul className={classes.navList}>
          {navTitles.map((item, index) => (
            <li className={classes.navItem} key={index}>
              {item}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Header