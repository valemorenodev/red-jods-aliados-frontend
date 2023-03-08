import React from 'react'
import style from './Switch.module.css'

function Switch() {
  return (
    <label className={style.switch}>
        <input type='checkbox'/>
        <span className={style.slider}/>
    </label>
  )
}

export default Switch