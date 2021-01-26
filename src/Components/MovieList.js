import React from 'react'

const MovieList = (props)=>  {

const {filterProductsRate , onAdd } = props;

    return (
    <div className="movieListDiv">
        <h1 className="titleMovieList"> Movie List </h1>
        <div className="container">
           {filterProductsRate.map((product , i) => (
               <div key={i} className="product">
                   <h3 title ={product.title}>{product.title}</h3>   
                   <img src={product.posterUrl} alt={product.title}/>
                   <p className ="descreption"> {product.description}</p>                
                   <p className ="rate"> Rate : {product.rate}</p> 
                   <button className ="addButton" onClick={() => onAdd(product)}>Add to Cart</button> 
               </div>
           ))}
        </div>
    </div>
    )
}

export default MovieList;