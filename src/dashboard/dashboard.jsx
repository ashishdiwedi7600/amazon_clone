import React from 'react'
import Header from './helper/header';
import HeaderMain from './helper/layout';
import Footer from './helper/footer'

export default function Dashboard() {
    return (
        <>

            <HeaderMain />
            <Header />
            <div style={{height:'100vh',width:'100%',backgroundColor:'red'}}></div>
            <Footer />


        </>
    )
}
