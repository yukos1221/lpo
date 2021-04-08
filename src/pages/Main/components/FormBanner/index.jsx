import { Checkbox } from '@material-ui/core';
import React from 'react'
import { createUseStyles } from "react-jss"
import Button from '../../../../components/Button';
import styles from "./styles"

const useStyles = createUseStyles(styles);

const FormBanner = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <h3 className={classes.bannerName}>
        Подать заявку
      </h3>
      <form className={classes.form}>
        <div className={classes.leftPart}>
          <div className={classes.inputBlock}>
            <label className={classes.labelStrong} htmlFor="projectName">название вашего проекта</label>
            <input className={classes.input} name="projectName" id="projectName" />
          </div>
          <div className={classes.inputBlock}>
            <label className={classes.label} htmlFor="link">ссылки на ресурсы проекта (сайт, соцсети)</label>
            <input className={classes.input} name="link" id="link" />
          </div>
          <div className={classes.rowWithCheckbox}>
            <div className={classes.inputBlock} style={{flex: 1}}>
              <label className={classes.label} htmlFor="name">ваше имя</label>
              <input className={classes.input} name="name" id="name" />
            </div>
            <div className={classes.checkboxBlock}>
              <Checkbox
                defaultChecked
                color="black"
                id="adult"
                name="adult"
                className={classes.checkbox}
                inputProps={{ 'aria-label': 'checkbox with default color' }}
              />
              <label htmlFor="adult" className={classes.checkboxLabel}>мне есть 18</label>
            </div>
          </div>
          <div className={classes.inputBlock}>
            <label className={classes.label} htmlFor="telegram">ваш телеграм</label>
            <input className={classes.input} name="telegram" id="telegram" />
          </div>
          <div className={classes.inputBlock}>
            <label className={classes.label} htmlFor="email">ваш email</label>
            <input className={classes.input} name="email" id="email" type="email" />
          </div>
          <div className={classes.inputBlock}>
            <label className={classes.label} htmlFor="city">ваш город</label>
            <input className={classes.input} name="city" id="city" />
          </div>
        </div>
        <div className={classes.rightPart}>
          <div className={classes.inputBlock}>
            <label className={classes.label} htmlFor="projectDescription">описание проекта  //  дата, идея, число участников</label>
            <textarea className={classes.textArea} name="projectDescription" id="projectDescription" />
          </div>
          <div className={classes.inputBlock}>
            <label className={classes.label} htmlFor="helpDescription">описание необходимой помощи</label>
            <textarea className={classes.textArea} name="helpDescription" id="helpDescription" />
          </div>
          <Button className={classes.submitButton}>
            Отправить заявку
          </Button>
        </div>
      </form>
    </div>
  )
}

export default FormBanner