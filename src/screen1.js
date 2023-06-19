import {useState,useEffect} from 'react';
import './styles.css';   
import { Link } from 'react-router-dom';
import Header from './header';
// import Screen2 from './screen2';

export default function Screen1(){
  const [shows,setShows]=useState([]);
  useEffect(() => {
    fetch("https://api.tvmaze.com/search/shows?q=all")
    .then((res)=>res.json())
    .then(data=>{
      const arr=data.map(item=>item.show);
      setShows(arr);
    }) 
  }, []);    

  return (
    <>
      <Header/>
      <div className='container'>
        <h2 className='my-4 title'>Shows List</h2>
        <div className='row justify-content-center'>
          {shows.map((item,i)=>
        <div className='col-md-4'>
          <div className="card mb-3" style={{width:'18rem'}}>
            <div className='project-img'>
            {item.image!==null ? 
              <img src=
              {item.image.medium}
              className="card-img-top img-fluid "
              alt="project-img"/> :  
              <img src=""
              className="card-img-top img-fluid "
              alt="show-img" style={{marginTop:"170px",marginBottom:'150px'}}/>  }
            </div>
            <div className="card-body">
              <h5 className="card-title mt-4 "
              style={{marginRight:'30px'}}
              >{item.name}</h5>
                <Link to="/shows" state={{ idd: item.id}}
                style={{float:'right',justifyContent:'right',alignItems:'right',
                textAlign:'justify',marginLeft:'25px'}}
                >
                <button className='btn btn-danger b-info my-2'>
                  Get Info
                </button>
                 </Link>
            </div>
          </div>
        </div>
        )}
        {shows.length % 3 !== 0 && (
        <div className={`col-sm-${12 - (shows.length % 3) * 4}`}></div>
        )}
        </div>
        </div>
    </>
  );
}