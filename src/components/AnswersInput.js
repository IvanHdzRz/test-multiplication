import React from 'react'

export const AnswersInput = ({value,onChange,name,verifyAnswerd}) => {
    return (
        <form onSubmit={(e)=>{e.preventDefault(); verifyAnswerd();}}>
            <input type="number" name={name} value={value} onChange={onChange} />
            <button type="submit">
                Calificar
            </button>
        </form>
    )
}
