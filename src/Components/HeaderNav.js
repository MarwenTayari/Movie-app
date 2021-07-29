import React from 'react'
import {  Link, withRouter } from 'react-router-dom';
import Filter from './Filter.js'

const HeaderNav = (props) => {

const {filterProducts, handleInput, handleInputRate, cartItems, filterPro, filterRate} = props; 

    return (
        props.location.pathname ==="/Movie-app/" ?
        <div>
                <header> 
                <Filter filterProducts={filterProducts} handleInput={handleInput} handleInputRate={handleInputRate} filterPro={filterPro} filterRate={filterRate}/>
                <div className="Btns">
                    <Link  to="/Movie-app/Cart" className="movieBtn"> <p className="pBtns"> &#x27A9; Movie Cart ({cartItems.length}) </p> </Link>
                </div>
                </header> 
        </div> : 
        <div>
                <header> 
                    <div className="Btns">
                        <Link  to="/Movie-app/" className="movieBtn"> <p className="pBtns"> &#x27A9; Movie List </p> </Link>
                    </div>
                </header> 
        </div>
           
    )
}

export default withRouter(HeaderNav);