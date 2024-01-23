import React from 'react'
import Chevron from './Chevron'
import '../styles/ChevronContainer.css'

const ChevronContainer = ({ checkboxes }) => {
    return (
        <div className='chevronContainer'>
            {checkboxes.map((isChecked, index) => (
                isChecked && <Chevron key={index} index={index} />
            ))}
        </div>
    )
}

export default ChevronContainer