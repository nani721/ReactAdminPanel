import React from 'react'
import Cards from './Cards'
import Charts from './Charts'
import CustomerList from './CustomerList'
import CustomerList2 from './CustomerList2'
import Cards2 from './Cards2'



function Home({Toggle}){
    return(
    
    <div>
     <h1 className='section-header'>Dashboard</h1>
       <Cards />
       <Charts />
       <div className='row mt-20 mb-20'>
        <div className='col-xl-4 col-lg-6'>
          <div className='card customer-card'>
              <CustomerList />
          </div>
        </div>
        <div className='col-xl-4 col-lg-6'>
          <div className='card'>
              <CustomerList2 />
          </div>
        </div>
        <div className='col-xl-4 col-lg-12'>
           <Cards2 />
        </div>
       </div>
    </div>
     

    )
}

export default Home