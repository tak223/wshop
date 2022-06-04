import React, { useState } from 'react'

export const Search = ({handleSubmit}) => {
    const [search, setSearch] = useState('');
  
 
    
  return (
      
    <div>
        <form action="" onSubmit={(e)=>{e.preventDefault();handleSubmit(search)}}>
        <input type="text" onChange={(e)=>setSearch(e.target.value)}/>
        <button>Submit</button>
        </form>
    </div>
  )
}
