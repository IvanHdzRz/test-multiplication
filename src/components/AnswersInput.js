import React from 'react'
import Styles from './AnswerInput.module.css'

export const AnswersInput = ({value,onChange,name,verifyAnswerd}) => {
    return (
        <form 
            onSubmit={(e)=>{e.preventDefault(); verifyAnswerd();}}
            className={Styles.answerdContainer}
        >
            <input 
                className={Styles.input}
                type="number" 
                name={name} 
                value={value} 
                onChange={onChange} 
            />
            <button type="submit" className={Styles.btnCheck}>
                Calificar
            </button>
        </form>
    )
}
