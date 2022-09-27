import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import style from "./hotel.module.css"
const Hotel = () => {
    const[data,setData]=useState([])
    const[sort,setSort]=useState("")
    const[filter,setfilter]=useState("")
    useEffect(()=>{
        fetch(`https://userdatajson.herokuapp.com/Room`)
        .then((res)=>res.json())
        .then((res)=>{setData(res)
            console.log(res)}
        )
    },[])
//  console.log(data)
  return (<>
  <div className={style.upper}>
    <div>
        <h2>Sort</h2>
        <select name="" id="" value={sort} onChange={(e)=>setSort(e.target.value)}>
            <option value="Select">Select</option>
            <option value="Asc">Asc</option>
            <option value="Desc">Desc</option>
        </select>
    </div>
    <div>
        <h2>Filter</h2>
        <select name="" id="" value={filter} onChange={(e)=>setfilter(e.target.value)}>
        <option value="Select">Select</option>
            <option value="Family">Family</option>
            <option value="Suit">Suit</option>
            <option value="Deluxe">Deluxe</option>
        </select>
    </div>
  </div>
    <div className={style.cards}>
      {data 
      .sort((a, b) => {
            if (sort === "Desc") {
              return a.cost - b.cost;
            } else if (sort === "Asc") {
              return b.cost - a.cost;
            } else {
              return 0 
            }
          })
            .filter((el) => {
            if (filter=="Select"||filter=="") {
              return el;
            } else {
              return el.category === filter;
            }
          })
      .map((el)=>{
         
        return(
           
            <div className={style.card} key={el.id}>
                <div>
                
                <img src="https://images.oyoroomscdn.com/uploads/hotel_image/163323/24ea06535a900059.jpg" alt="Hotel" />
                </div>
                <div className={style.inner}>
                    <p>{el.category}</p>
                    <p>Adults:{el.no_of_persons}</p>
                    <p>Facilities: HD TV</p>
                    <p>Bed Type: {el.bed_type}</p>
                    <p> Price:{el.cost}</p>
                </div>

            </div>
        )
      })}


    </div>
    </>
  )
}

export default Hotel