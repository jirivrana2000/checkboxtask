import React, { useState, useEffect } from 'react'
import Form from './Form'
import ChevronContainer from './ChevronContainer'
import '../styles/CheckboxForm.css'

const CheckboxApp = () => {
    const [checkboxes, setCheckboxes] = useState([])

    useEffect(() => {
        // Vytvoření prvního checkboxu při načtení. Je zaškrtnutý, protože vždy musí být minimálně jeden
        setCheckboxes([true])

        // Ověří zda není poslední (jediný) checkbox zaškrtnutý. Je, protože musí, přidá se tak další co už nebude
        handleCheckboxChange(0)
    }, [])

    const handleCheckboxChange = (index) => {
        const updatedCheckboxes = [...checkboxes]
        updatedCheckboxes[index] = !updatedCheckboxes[index]

        // Zajištění, že vždy bude alespoň jeden checkbox zaškrtnutý
        if (!updatedCheckboxes.every((value) => value === false)) {
            setCheckboxes(updatedCheckboxes)

            // Přidání nového checkboxu na konec formuláře, pokud je poslední zaškrtnutý
            if (index === updatedCheckboxes.length - 1 && updatedCheckboxes[index]) {
                setCheckboxes((prevCheckboxes) => [...prevCheckboxes, false])
            }
        }
    }

    return (
        <div className='main'>
            <Form checkboxes={checkboxes} handleCheckboxChange={handleCheckboxChange} />
            <ChevronContainer checkboxes={checkboxes} />
        </div>
    )
}

export default CheckboxApp