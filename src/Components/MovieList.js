import React from 'react';
import {  Link } from 'react-router-dom';

const MovieList = (props)=>  {

const {filterProductsRate , onAdd , handlechange, submit, form} = props;

    return (
    <div className="movieListDiv">

        <h1 className="titleMovieList"> Movie List </h1>
        
        <div className="movieAddDiv">
            <h2 className="movieAddTitle"> ADDING A MOVIE : </h2>
           <form className="formMovie">
                <label className="movieAddElemType infor">Title : </label>
                    <br/>
                <input placeholder="Type the Movie Title" className="movieAddElem" type="text" name="title" onChange={handlechange} value={form.title}/>
                    <br/>
                <label className="movieAddElemType">Poster URL : </label>
                    <br/>
                <input placeholder="Paste the Movie Poster URL" className="movieAddElem" type="text" name="posterUrl"  onChange={handlechange} value={form.posterUrl}/>
                    <br/>
                <label className="movieAddElemType">Integrated Trailer URL : </label>
                    <br/>
                <input placeholder="Paste the Integrated Trailer URL" className="movieAddElem" type="text" name="trailerURL"  onChange={handlechange} value={form.trailerURL}/>
                    <br/>
                <label className="movieAddElemType">Description : </label>
                    <br/>
                <textarea placeholder="Type the Movie descreption" className="desc" type="text" name="description"  onChange={handlechange} value={form.description}/>
                    <br/>
                <label className="movieAddElemType">Rate (Should be a Number form 0 to 10): </label>
                    <br/>
                 <input className="movieAddElem rateAdd" type="number" name="rate" onChange={handlechange} value={form.rate}/>
                    <br/>
             <button onClick={submit}> Add the Movie </button>
           </form>
       </div>

        <div className="container">
                {filterProductsRate.map((product , i) => ( 
                    <div key={i} className="product">                     
                            <div>
                                <h3 title ={product.title}>{product.title}</h3>                               
                                <img src={product.posterUrl} alt={product.title} style={{display:"Block", marginLeft:"auto", marginRight:"auto"}}/>
                                <Link to={`/Movie-app/Description/${product.title}`} className="trailerBtn"><p className="pBtnTrailer"> &#x27A9; View trailer</p></Link>
                                <p className ="descreption"> {product.description}</p>                
                                <p className ="rate"> Rate : {product.rate}</p>   
                                <button className ="addButton" onClick={() => onAdd(product)}>Add to Cart</button> 
                            </div>    
                    </div>                
                ))}               
        </div>       
    </div>
    )
}

export default MovieList;