import React from 'react'
import { createUseStyles } from "react-jss"
import Button from '../../../../components/Button'
import styles from "./styles"
import { HashLink } from 'react-router-hash-link';

const useStyles = createUseStyles(styles);

const MainBanner = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <h1 className={classes.mainTitle}>Либертарианский проектный офис</h1>
      <h2 className={classes.secondTitle}>
        ФИНАНСОВАЯ и организационная ПОМОЩЬ ЛИБЕРТАРИАНЦАМ
        В РЕАЛИЗАЦИИ ИХ НЕКОММЕРЧЕСКИХ ПРОЕКТОВ
      </h2>
      <h3 className={classes.description}>
        Помогаем либертарианцам, которые ищут возможности реализации своих некоммерческих проектов, найти полное или частичное финансирование.<br />
        Мы некоммерческое свободное объединение граждан, которое существует
        на пожертвования попечителей.
      </h3>
      <div className={classes.buttonsRow}>
        <HashLink smooth to="/#application">
          <Button className={classes.button}>
            Подать заявку
          </Button>
        </HashLink>
      </div>
      {/* top */}
      <div className={classes.linesTopMobile}>
        <svg width="204" height="31" fill="none" xmlns="http://www.w3.org/2000/svg"><path stroke="#232323" strokeWidth="3" d="M173.466.297v30.228M.5 23.181h202.535" /></svg>
      </div>
      <div className={classes.linesTopDesktop}>
        <svg width="497" height="75" fill="none" xmlns="http://www.w3.org/2000/svg"><path stroke="#232323" strokeWidth="3" d="M423.146 0v74.014M.578 56.981h495.919" /></svg>
      </div>
      <div className={classes.linesTopDesktopMax}>
        <svg width="1059" height="111" fill="none" xmlns="http://www.w3.org/2000/svg"><path stroke="#232323" strokeWidth="3" d="M1000.82 0v110.962M0 86.5h1058.95" /></svg>
      </div>
      {/* bottom-left */}
      <div className={classes.linesBottomMobile}>
        <svg width="279" height="221" fill="none" xmlns="http://www.w3.org/2000/svg"><path stroke="#232323" strokeWidth="3" d="M-15.879 219.468h84.125M94.605 157.19v46.884M51.283.212v220.756M-42.56 176.146h321.22M-92.66 132.824h222.014" /></svg>
      </div>
      <div className={classes.linesBottomDesktop}>
        <svg width="529" height="360" fill="none" xmlns="http://www.w3.org/2000/svg"><path stroke="#232323" strokeWidth="3" d="M9.483 225.821h480.722M50.335 50.1v309.808M202.952 114.982v204.514M126.643.981v263.174M-37.513 149.513h565.809M-125.761 73.205h437.045" /></svg>
      </div>
      <div className={classes.linesBottomDesktopMax}>
        <svg width="1000" height="455" fill="none" xmlns="http://www.w3.org/2000/svg"><path stroke="#232323" strokeWidth="3" d="M47.893 285.064h607.258M99.103 62.694V454.05M291.892 144.654V403M195.498.646v332.447M-11.474 188.67l1010.726-.001M-122.95 92.275h552.085" /></svg>
      </div>
      {/* bottom-right */}
      <div className={classes.linesBottomSmall}>
        <svg width="413" height="117" fill="none" xmlns="http://www.w3.org/2000/svg"><path stroke="#232323" strokeWidth="3" d="M253.202 84.992h271.902M363.281.564v115.675M320.121 14.023v72.469M277.136 42.231v70.916M.47 41.831h428.066" /></svg>
      </div>
      <div className={classes.linesBottomMedium}>
        <svg width="673" height="199" fill="none" xmlns="http://www.w3.org/2000/svg"><path stroke="#232323" strokeWidth="3" d="M434.722 146.354h467.457M622.894.125v198.87M548.691 23.264v124.59M474.792 71.76v121.918M.224 72.151H736.16" /></svg>
      </div>
      <div className={classes.linesBottomMax}>
        <svg width="907" height="259" fill="none" xmlns="http://www.w3.org/2000/svg"><path stroke="#232323" strokeWidth="3" d="M564.893 191.064h607.257M808.892.654V259M712.498 30.713v161.851M616.498 93.713v158.38M.45 94.67l956.031-.001" /></svg>
      </div>
    </div>
  )
}

export default MainBanner