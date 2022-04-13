import React from 'react'
import Carousel from './carousel';
import Cardview from './cardview';


function Container() {
    return (
        <>
            <div className="container" style={{ backgroundColor: '#dddddd !important' }}>
                <Carousel />
                <Cardview />    
                <br/>
                {/* <Carouselss /> */}
            </div>
            
        </>
    )
}

export default Container;