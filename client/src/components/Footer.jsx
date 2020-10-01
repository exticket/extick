import React from 'react'

export default function Footer() {
    return (
        <footer>
            <p className="copyright-text">
                © Copyright {new Date().getFullYear()} Extick. All rights reserved.
            </p>
        </footer>
    )
}
