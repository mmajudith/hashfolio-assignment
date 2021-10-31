import React,{ useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'

import { getRecords } from '../redux/actions/recordsAction'
 
 function Dashboard() {

  const  { results } = useSelector(state => state.records)
  console.log(results)
  const dispatch = useDispatch()

  useEffect(()=>{

    dispatch(getRecords())
    
  },[]);

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
                  results.map((el,id) => (<div key={id}>
                      <p>{el.next_review_date}</p>
                  </div>))
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
 