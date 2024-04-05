import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
// import Spinner from './Spinner';



const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
const Random = () => {

  const [gif, setGif] = useState('');
  // const [loading,setLoading] = useEffect(false);

async function fetchData(){
  // setLoading(true)
  const url=`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
  const {data}=await axios.get(url);
  const imageSource=data.data.images.downsized_large.url;
  console.log(imageSource);
  setGif(imageSource);
  // setLoading(false); 
  // console.log(output);

}

useEffect (() =>{
  fetchData();
},[])

  function clickHandler(){
    fetchData();
  }
  return (
    <div className="w-1/2  bg-[#fca5a5] rounded-lg border border-black
    flex flex-col items-center gap-y-5 mt-[15px]">
      <h1 className='text-2xl underline uppercase font-bold mt-15px'>A Random Gif</h1>
      <img src={gif} width="450"/>
{/*      
      {
        loading ? (<Spinner/>) : (<img src={gif} width="450"/>)
      } */}
     
      <button onClick={clickHandler} 
      className='w-10/12 bg-[#fee2e2] rounded-lg text-lg py-1 mb-[20px]'
      >Generate</button>
   
    </div>
  )
}



export default Random