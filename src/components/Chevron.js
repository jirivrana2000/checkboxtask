import React from 'react'
import '../styles/Chevron.css'

const Chevron = ({ index }) => {
    return (
        <div
            className='chevron'
            key={index}
            style={{
                opacity: 1 - (index * 0.1)
            }}
        >
        </div>
    )
}

export default Chevron