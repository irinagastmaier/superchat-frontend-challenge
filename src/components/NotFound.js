import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
    return (
        <div className="container">
            <div className="row">
                <h1 className="title">404 Page Not Found</h1>
                <Link to ="/" className="btn">Go back</Link>
            </div>
            
        </div>
    )
}
