import React from 'react'

export const Results = ({correctAnswers,totalQuestions}) => {
    return (
        <div>
            <div>
                <div>
                    {correctAnswers}
                </div>
                <div>Respuestas correctas</div>
            </div>
            <div>
                <div>
                    {totalQuestions}
                </div>
                <div>
                    Preguntas contestadas
                </div>
            </div>
        </div>
    )
}
