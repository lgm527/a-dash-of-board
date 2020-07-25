import React from 'react';
import { Link } from 'react-router-dom'

export default class Footer extends React.Component {
    render() {
        return (
            <footer className="footer">
                <div className="container-fluid">
                <nav>
                    <ul className="footer-menu">
                    <li>
                        <Link to="/">
                        Home
                        </Link>
                    </li>
        
                    </ul>
                    <p className="copyright text-center">
                    © 2020
                </p>
                </nav>
                </div>
          </footer>
        )
    }
}