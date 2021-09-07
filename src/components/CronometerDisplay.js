import React from 'react'
import Styles from './CronometerDisplay.module.css'
export const CronometerDisplay = ({seconds,isRunning}) => {
    return (
        <div className={Styles.cronometerContainer}>
            <h3 className={Styles.title}>
                tiempo restante:
            </h3>
            <p className={`${Styles.seconds} ${isRunning?Styles.secondsAnimated:""} ${seconds<5&&Styles.warning}`}>
                {seconds}
            </p>
        </div>
    )
}
