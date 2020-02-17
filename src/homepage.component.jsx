import React from 'react';
import './homepage.styles.scss';

const Homepage = () => (
    <div className='homepage'>
        <div className='directory-menu'>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>Electronics/gaming</h1>
                    <span className='subtitle'>shop now</span>
                </div>
            </div>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>Home deco</h1>
                    <span className='subtitle'>shop now</span>
                </div>
            </div>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>Apparel</h1>
                    <span className='subtitle'>shop now</span>
                </div>
            </div>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>Adults</h1>
                    <span className='subtitle'>shop now</span>
                </div>
            </div>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>Children</h1>
                    <span className='subtitle'>shop now</span>
                </div>
            </div>
        </div>
    </div>
);

export default Homepage;