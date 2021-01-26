import React from 'react'

const MovieCard = (props) => {

      const {cartItems,onRemove } = props ;

return (
      <div className = "movieCard"> 
        <h1 className="titleMovieList"> Movie Cart </h1>               
              <div className ="cardContanier">
              <div className ="cartEmpty" > {cartItems.length === 0 && <div className="emptyCart"> The Cart is empty. </div>} </div>
              { 
               cartItems.map ((item, j) => (
                    <div key={j} className="item">
                         <p className="itemTitle" key={item.title}> {item.title} </p>
                         <img src={item.posterUrl} alt={item.title} className="imgItem"/>
                         <button className="itemBtn" onClick={()=>onRemove(item)}>Remove</button>
                    </div>
              ))}
              </div>
        </div>      
)

}

export default MovieCard ; 