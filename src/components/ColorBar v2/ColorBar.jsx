import React from 'react'
import style from './ColorBar.module.css'

function ColorBar() {
  return (
    <div className={style.container}>
        <div className={style.lightblue}></div>
        <div className={style.yellow}></div>
        <div className={style.red}></div>
        <div className={style.darkblue}></div>
        <div className={style.green}></div>

    </div>
  )
}

export default ColorBar