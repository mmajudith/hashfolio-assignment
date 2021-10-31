import React,{ useEffect, useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'

import { getRecords } from '../redux/actions/recordsAction'
import CardComponents from './CardComponent'
 
 function Dashboard() {

  const [data, setData] = useState([])

  const dispatch = useDispatch()
  const  { results } = useSelector(state => state.records)
  

  useEffect(()=>{

    dispatch(getRecords())
    if(results){
      setData(results)
    }
    
  },[results]);
  
   return (
        <div className="dash-page-container">

            <div className="list-wrapper">
              <ul className="lists">
                <li className="border-bottom">Portfolios</li>
                <li className="gray">WatchList</li>
                <li className="logout">Logout</li>
              </ul>
            </div>

            <div>
              {
                  data.map((item,id) => ( <CardComponents key={id} items={item}/>))
              }
            </div>

            <div className="next-wrapper">
              <button>Next</button>
            </div>

            <div className="view-all-wrapper">
              <button>See All Baskets</button>
            </div>
        </div>
   )
 }
 
 export default Dashboard
 