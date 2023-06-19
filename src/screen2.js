import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import './styles.css';
import Header from "./header";

function Screen2(){
  const location = useLocation(); 
  const {idd} = location.state;
  const [showss,setShowss]=useState([]);
  const [show,setShow]=useState([]);   
  useEffect(() => {
    fetch("https://api.tvmaze.com/search/shows?q=all")
    .then((res)=>res.json())
    .then(data=>{
      const arr=data.map(item=>item.show);
      setShowss(arr);
      setShow(showss.filter( 
        (item)=>{
      if(item.id===idd)return item}));
    })
  }, []);
 
  return (
    <>    
      <Header/>
    <div className="container mx-5 my-3">      
      {show.map((item)=> 
      <> 
       <div className="heading" key={item}>
        <h1 className='py-4'>{item.name}</h1>   
        <h5>Genre: </h5>  
        <p> {item.genres}</p> <br/>
        <h5>Language: </h5> 
        <p>{item.language}</p> 
        <br/>   
        <h5>Rating: </h5><p>{item.rating.average}</p><br/> 
        <h5>Status: </h5><p>{item.status} </p>
        <br/> 
        {(item.status=='Running')?
          <>
            <h5>When : </h5> 
            <p> {item.schedule.days},{item.schedule.time }  </p>
            <br/> 
            <a className='py-3' href={`https://www.tvmaze.com/shows/${item.id}`}>
            <button className="btn btn-danger ">Book Now</button>
            </a>
          </> 
        :  <></>
        }    
        <div className="summary mx-2 ">
          {item.summary} 
        </div> 
      </div>
      <div className="details">
        <img className="img-fluid "  src={item.image.medium} 
          style={{    
          height:'100%',
          width:'45%',float:'right',
          marginTop:'-34vw'}}/>
      </div>       
      <br/>
    </>
    )}
    </div> 
    </>
  );  
}
export default Screen2;