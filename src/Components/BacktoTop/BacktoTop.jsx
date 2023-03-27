import React from 'react'
import './BacktoTop.css'
import { Link } from 'react-router-dom'

function BacktoTop() {
    return (
        <>
            <Link to ="#" class="back-to-top d-flex align-items-center justify-content-center"><i
                class="bi bi-arrow-up-short"></i></Link>
        </>
    )
}

export default BacktoTop