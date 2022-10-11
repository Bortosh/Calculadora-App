import React, { useState } from 'react'
import Functions from './components/Functions'
import Numbers from './components/Numbers'
import MathOperations from './components/MathOperations'
import Result from './components/Result'
import words from 'lodash.words'
import './App.css'

const App = () => {

    const [stack, setStack] = useState('')

    const items = words(stack, /[^-^+^*^/]+/g)
    
    const onClickNumber = (number) => {
        setStack(`${stack}${number}`)
    }
    
    const onClickOperation = (operation) => {
        setStack(`${stack}${operation}`)
    }
    
    const onClickEqual = () => {
        setStack(eval(stack).toString())
    }
    
    const OnContentClear = () => {
        setStack('')
    }
    
    const OnDelete = () => {
        const newString = stack.substring(0, stack.length - 1)
        stack.length > 0
        ?
        setStack(newString)
        :
        console.log('estado vacio')
    }

    const value = items.length > 0 ? items[items.length - 1] : '0'

    return (
        <main className='react-calculator'>
            <Result value={value} />
            <Numbers
                onClickNumber={onClickNumber}
            />
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
