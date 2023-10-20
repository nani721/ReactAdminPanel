import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import './Bredcrumb.css';

const Breadcrumb = () => {

    const location = useLocation();
    const pathnames = location.pathname.split('/').filter((x) => x);
    if (pathnames.length === 0) {
        return null; // Don't render breadcrumbs on the home page
    }
    return (
        <div className='breadcrumb_section '>
            <div className='d-flex justify-content-between'>
            <h1 className='section-header'>{pathnames}</h1>
            <ul className='breadcrumb'>
                <li>
                    <Link to="/">Home</Link>
                </li>
                {pathnames.map((path, index) => (
                    <li key={path} className='sub-link'>
                        <Link to={`/${path}`}>{path}</Link>
                    </li>
                ))}
            </ul>
            </div>
        </div>
    );
};

export default Breadcrumb
