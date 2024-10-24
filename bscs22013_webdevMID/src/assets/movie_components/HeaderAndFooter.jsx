//import { useState } from 'react'
import './HeaderAndFooter.css'

function HeaderAndFooter(){
    return(
        <section id='header-footer' className='header-fppter-section'>
            <h1 className="title">Header Footer Section</h1>
            <p>
                This section includes Header and Footer. It will provide consistant layout and navigation across pages
            </p>
            <div className='logo'>
                <ul>
                    <li className='current'><a href='#welcome'>Welcome</a></li>
                    <li><a href='#movielist'>Movies List</a></li>
                    <li><a href='#movieitems'>Movie Items</a></li>
                    <li><a href='#searchbar'>Search bar</a></li>
                </ul>
            </div>


        </section>
    )
}
export default HeaderAndFooter;