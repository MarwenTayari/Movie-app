import React from 'react'

const Filter = (props)=> {
 
const {handleInput , handleInputRate, filterPro, filterRate} = props;

        return (
            <div className = "filterDiv">            
                <p className="filterName" >Searching By Title : </p>
             <input  type="text" onChange={handleInput} placeholder="Type a movie title" className="inputTitle" value={filterPro}/>               
             <p className ="ratep">Searching By Rate : </p>
             <input  type="number" onChange={handleInputRate} placeholder="Type a Rate" className="inputTitle filterRate" value={filterRate}/>                            
            </div>
        )
    }    

export default Filter;