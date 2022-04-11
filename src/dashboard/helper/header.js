import React from 'react'
import Image3 from '../../image/amazon.png'


export default function header() {
    return (
        <div style={{ backgroundColor: '#232f3e', width: '100%', height: '50px', display: 'flex', }}>
            <div style={{ backgroundColor: '#232f3e', width: '70%', height: '100%', display: 'flex', justifyContent: 'space-between', fontSize: '15px', }}>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '1.2vw', color: 'white' }}>
                    <a href="" class="ex1" style={{ color: 'white' }} >
                        All</a>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '1.2vw', color: 'white' }}>
                    <a href="" class="ex1" style={{ color: 'white' }}>
                        Best seller
                    </a>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '1.2vw', color: 'white' }}>
                    <a href="" class="ex1" style={{ color: 'white' }}>
                        Mobile
                    </a>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '1.2vw', color: 'white' }}>
                    <a href="" class="ex1" style={{ color: 'white' }}>
                        Customer Service
                    </a>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '1.2vw', color: 'white' }}>
                    <a href="" class="ex1" style={{ color: 'white' }} >
                        Today's Deals
                    </a>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '1.2vw', color: 'white' }}>
                    <a href="" class="ex1" style={{ color: 'white' }} >
                        Fashion
                    </a>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '1.2vw', color: 'white' }}>
                    <a href="" class="ex1" style={{ color: 'white' }} >
                        Electronics
                    </a>
                </div><div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '1.2vw', color: 'white' }}>
                    <a href="" class="ex1" style={{ color: 'white' }}>
                        Prime
                    </a>
                </div><div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '1.2vw', color: 'white' }}>
                    <a href="" class="ex1" style={{ color: 'white' }}>
                        New Release
                    </a>
                </div><div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '1.2vw', color: 'white' }}>
                    <a href="" class="ex1" style={{ color: 'white' }} >
                        Home & Kitchen
                    </a>
                </div>
            </div>

            <div style={{ backgroundColor: '#232f3e', width: '30%', display: 'flex', height: '100%', justifyContent: 'center' }}>

                <img style={{ display: 'flex', justifyContent: 'space-around', height: '100%', width: '10%' }} src={Image3} />
                <div style={{ display: 'flex', justifyContent: 'center', fontSize: '1.2vw', alignItems: 'center', color: 'white' }}>Shopping made easy | Download the app</div>

            </div>
        </div>)
}

