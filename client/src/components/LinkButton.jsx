import React from 'react'

export default function LinkButton({ text, className }) {
    return (
        <button className={className} >
            {text}
        </button>
    )
}
