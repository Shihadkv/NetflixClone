import React,{useEffect,useState} from "react";
import './RowPost.css'
import {imageUrl,API_KEY} from '../../constants/constants'
import axios from '../../axios'
import YouTube from "react-youtube";

function RowPost(props) {

  const [movies, setmovies] = useState([])
  const [urlId,setUrlId] = useState('')
  useEffect(()=>{
    axios.get(props.url).then(response=>{
        
           setmovies(response.data.results)
    }).catch(err=>{
     
    })
  })

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    }
  }

 const handleMovie = (id)=>{

    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
      if(response.data.results.length !== 0){
        setUrlId(response.data.results[0])
      }else{
        console.log("Array is empty");
      }
    })
 }


  return (
    <div className="row">
      <h2>{props.title}</h2>
      <div className="posters">
        {movies.map((obj)=>
              <img onClick={()=>handleMovie(obj.id)}   className= {props.isSmall ? 'smallposter': 'poster'} 
              src={`${imageUrl+obj.backdrop_path}`}
               alt="poster"
            />
        )}
        
      </div>
      
     {  urlId  &&  <YouTube opts={opts} videoId={urlId.key}/>}
    </div>
  );
}

export default RowPost;
