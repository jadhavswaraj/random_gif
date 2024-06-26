import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
// import Spinner from './Spinner';



const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
const Tag = () => {
  const[tag,setTag]=useState('');
  const [gif, setGif] = useState('');
  // const [loading,setLoading] = useEffect(false);

async function fetchData(){
  // setLoading(true)
  const url=`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
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

  function changeHandler(event){
            setTag(event.target.value);
        }

  return (
    <div className="w-1/2  bg-[#fb923c] rounded-lg border border-black
    flex flex-col items-center gap-y-5 mt-[15px]">
      <h1 className='text-2xl underline uppercase font-bold mt-15px'>Random {tag} Gif</h1>
      <img src={gif} width="450"/>
{/*      
      {
        loading ? (<Spinner/>) : (<img src={gif} width="450"/>)
      } */}
     
      <input
        className='w-10/12 bg-[#fee2e2] rounded-lg text-lg py-1 mb-[3px] text-center'
        onChange={changeHandler}
        value={tag}
      />

      <button onClick={clickHandler} 
      className='w-10/12 bg-[#fee2e2] rounded-lg text-lg py-1 mb-[20px]'
      >Generate</button>
   
    </div>
  )
}



export default Tag

// import React from 'react'
// import { useState } from 'react';
// import axios from 'axios';
// import { useEffect } from 'react';
// import Spinner from './Spinner';



// const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
// const Tag = () => {

//   const[tag,setTag]=useState('');
//   const [gif, setGif] = useState('');
//   const [loading,setLoading] = useEffect(false);

// async function fetchData(){
//   setLoading(true);
//   const url=`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
//   const {data}=await axios.get(url);
//   const imageSource=data.data.images.downsized_large.url;
//   console.log(imageSource);
//   setGif(imageSource);
//   setLoading(false);

// }

// useEffect (() =>{
//   fetchData();
// },[])

//   function clickHandler(){
//     fetchData();
//   }

//     function changeHandler(event){
//         setTag(event.target.value);
//     }

//   return (
//     <div className="w-2/5  bg-[#fca5a5] rounded-lg border border-black
//     flex flex-col items-center gap-y-5 mt-[15px]">
//       <h1 className='text-2xl underline uppercase font-bold mt-15px'>Random {tag} Gif</h1>
     
//       {
//         loading ? (<Spinner/>) : (<img src={gif} width="450"/>)
//       }
     
//       <input
//         className='w-10/12 bg-[#fee2e2] rounded-lg text-lg py-1 mb-[3px] text-center'
//         onChange={changeHandler}
//         value={tag}
//       />

//       <button onClick={clickHandler} 
//       className='w-10/12 bg-[#fee2e2] rounded-lg text-lg py-1 mb-[20px]'
//       >Generate</button>
   
//     </div>
//   )
// }



// export default Tag