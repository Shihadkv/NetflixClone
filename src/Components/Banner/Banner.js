import React, { useEffect, useState } from 'react'
import './Banner.css'
import {API_KEY,imageUrl} from '../../constants/constants'

import axios from '../../axios'
function Banner() {
    const [movie, setmovie] = useState()
    useEffect(() => {
      const random = Math.floor((Math.random()* 19) + 1)
      axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
        console.log(response.data.results[0]);
        setmovie(response.data.results[random])
      })
    }, [])
    
    return (

        <div
        style={{backgroundImage: `url(${movie ? imageUrl+movie.backdrop_path : ""})`}}
          className='banner'>
            <div className='content'>
                <h1 className='title'>
               {movie ? movie.title: ""}
                </h1>
                <div className='banner_buttons'>
                    <button className='button'>Play </button>
                    <button className='button'>Play List </button>
                </div>
                <h1 className='description'> {movie ? movie.overview: ""}</h1>
            </div>
             <div className="fade_bottom"></div>

        </div>
    )
}

export default Banner