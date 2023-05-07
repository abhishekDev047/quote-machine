"use client"
import { useEffect,useState } from "react";
import { BsTwitter } from "react-icons/bs";

 export default function Home() {
  const [quotes, setQuotes] = useState([])
  const [show, setShow] = useState({})
  const commas = ` " `;
  const link = `https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${show.text}`

const newQuote = async ()=>{
let url = "https://type.fit/api/quotes";
let parsedData = await fetch(url);
let data = await parsedData.json();

setQuotes(data);
let random = Math.floor(Math.random() * data.length);
const quote = data[random]; 
// console.log(quote)
setShow(quote)
};
 
const randomQuote = ()=>{
  let random = Math.floor(Math.random() * quotes.length);
const quote = quotes[random]; 
// console.log(quote)
setShow(quote)
}
useEffect(() => {
newQuote();
}, []);

  return (
 <div className='flex flex-col items-center justify-center p-5 bg-zinc-700 w-screen h-screen text-white'>
 <div id='quote-box' className='w-3/4  rounded-md h-3/4 flex flex-col items-center my-auto px-3'>
<div id="quote-text" className=' text-2xl '>
<i>{commas} </i>
 {show.text}
 <i>{commas}</i>
</div>

<div id="author" className="text-end text-sm w-full">
 {show.author}
</div>
<div className="w-full flex flex-row justify-between mt-2 pt-5">
  <button  className="p-2 bg-zinc-800 rounded-md text-white">
    <a id='tweet-quote' href={link} target="_blank"> <BsTwitter/></a>
  </button>
<button id="new-quote" className="p-2 bg-zinc-800 rounded-md text-white" onClick={randomQuote}>New</button>
</div>
 </div>
 </div>
  )
}
