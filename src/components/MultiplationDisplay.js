import React from 'react'
import Styles from './MultiplicationDisplay.module.css'
export const MultiplationDisplay = ({a,b}) => {
    return (
        <div className={Styles.mult}>
            {a} x {b} ?
        </div>
    )
}
