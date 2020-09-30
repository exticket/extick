import React from 'react'

export default function LinkButton({ url, text, className }) {
    return (
        <a href={url} className={"link-button " + className} >
            {text}
        </a>
    )
}
