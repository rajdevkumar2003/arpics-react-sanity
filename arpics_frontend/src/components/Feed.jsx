import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'

import {client} from '../client';
import MasonryLayout from './MasonryLayout'
import Spinner from './Spinner';
import { feedQuery, searchQuery } from '../utils/data';

const Feed = () => {
  
  const [pins, setPins ]= useState(null);
  const [loading, setLoading] = useState(false);
  const {categoryId}=useParams();

  useEffect(() => {
    setLoading(true);
    if(categoryId) {
       const query=searchQuery(categoryId);
       
       client.fetch(query)
       .then((data)=>{
        setPins(data);
        setLoading(false);
       })

    }else{
       client.fetch(feedQuery)
       .then((data)=>{
        setPins(data);
        setLoading(false);
       })
    }
    
  }, [categoryId]);

  if(loading)return <Spinner message='retreiving data..plz wait!'/>

  return (
    <div>
      {pins&&<MasonryLayout pins={pins} />}
    </div>
  )
}

export default Feed
