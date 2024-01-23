import React from 'react'
import '../styles/Form.css'

const Form = ({ checkboxes, handleCheckboxChange }) => {
    return (
        <form>
            {checkboxes.map((isChecked, index) => (
                <div key={index}>
                    <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={() => handleCheckboxChange(index)}
                    />
                </div>
            ))}
        </form>
    )
}

export default Form