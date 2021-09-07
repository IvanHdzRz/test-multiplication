import React from 'react'
import Styles from './Results.module.css'
export const Results = ({correctAnswers,totalQuestions}) => {
    return (
        <div className={Styles.resultContainer}>
            <div className={Styles.indicator}>
                <div className={Styles.number}>
                    {correctAnswers}
                </div>
                <div className={Styles.title}>
                    Respuestas correctas
                </div>
            </div>
            <div className={Styles.indicator}>
                <div className={Styles.number}>
                    {totalQuestions}
                </div>
                <div className={Styles.title}>
                    Preguntas contestadas
                </div>
            </div>
        </div>
    )
}
