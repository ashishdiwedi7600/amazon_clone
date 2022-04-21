import React from 'react'
import Carousel from './carousel';
import Cardview from './cardview';
import Footer from '../dashboard/helper/footer';
import './Home.css'
import Header from '../dashboard/helper/header';

function Container() {
    return (
        <> 
           
            <div className="container" style={{ width:"100vw",backgroundColor: '#dddddd !important',overflowY:'scroll'}}>
                <Header/>
                <Carousel />
                <Cardview />
                <Footer/>
            </div>
   
          
        </>
    )
}

export default Container;