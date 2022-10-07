import React from 'react'
import Button from './components/Button'
import MathOperations from './components/MathOperations'
import Functions from './components/Functions'
import Result from './components/Result'
import './App.css'

// Función Flecha o Arrow Function
const App = () => {

    const clickHandler = (text) => {
        console.log(text)
    }

    const onClickOperation = (text) => {
        console.log(text)
    }

    const onClickEqual = (text) => {
        console.log(text)
    }

    const OnContentClear = (text) => {
        console.log(text)
    }

    const OnDelete = (text) => {
        console.log(text)
    }


    // Lo que ejecuta la función
    console.log('Renderizacion de App')

    return (
        <main className='react-calculator'>
            <Result value={undefined} />
            <div className="numbers">
                <Button text='1' clickHandler={clickHandler} />
                <Button text='2' clickHandler={clickHandler} />
                <Button text='3' clickHandler={clickHandler} />
                <Button text='4' clickHandler={clickHandler} />
                <Button text='5' clickHandler={clickHandler} />
                <Button text='6' clickHandler={clickHandler} />
                <Button text='7' clickHandler={clickHandler} />
                <Button text='8' clickHandler={clickHandler} />
                <Button text='9' clickHandler={clickHandler} />
                <Button text='0' clickHandler={clickHandler} />
            </div>
            <Functions 
            OnDelete={OnDelete}
            OnContentClear={OnContentClear}
            />
            <MathOperations
                onClickOperation={onClickOperation}
                onClickEqual={onClickEqual}
            />
        </main>)
}

export default App
