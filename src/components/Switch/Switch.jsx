import React from 'react'
import style from './Switch.module.css'

function Switch() {
  // switch for allies status 
  return (
    <label className={style.switch}>
        <input type='checkbox'/>
        <span className={style.slider}/>
    </label>
  )
}

export default Switch