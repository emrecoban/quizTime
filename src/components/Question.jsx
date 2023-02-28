import React from "react";

export default function Question({q, a, handleAnswer}){
    const answers = JSON.parse(a).map((answer, index)=>{
        return <p 
                    key={index} 
                    className={answer.isHeld ? "selected" : answer.class} 
                    onClick={handleAnswer}
                >
                {answer.a}
                </p>
    })

    return (
        <div className="question">
            <h2>{q}</h2>
            <div className="answers">
                {answers}
            </div>
        </div>
    )
}