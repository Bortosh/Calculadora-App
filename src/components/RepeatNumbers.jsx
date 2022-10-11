import React from "react";
import Button from "./Button";


const RepeatNumbers = ({onClickNumber}) => {
    
    const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

    const renderButtons = () => {
        const render = numeros.map(item => <Button key={item} text={item.toString()} clickHandler={onClickNumber} />)
        return render
    }

    return (
        <>
        {
            renderButtons()
        }
        </>
    )
}

export default RepeatNumbers;
