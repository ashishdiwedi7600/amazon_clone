import React, { useState } from 'react';
import './signInpopover.css'
import { Button, Popover, Tooltip } from 'antd';
import { Content } from 'antd/lib/layout/layout';
export default function SigninPopover() {

  
  
  const text = (
    <div style={{ width: "100%", display: "grid" }}>
      <button style={{ placeSelf: "center", width: "14em", height: "33px", background: "linear-gradient(to bottom,#f8e3ad,#EEBA37)", border: '1px solid #c89411' }} >
        Sign in
      </button>
      <span style={{ placeSelf: 'center', fontSize: '0.8em' }}>New Customer?
        <a style={{ color: "blue" }} href="#">&nbsp;Click here</a>
      </span>
    </div>

  )

  const content = (
    <div style={{ width: '450px'}}>
      <div style={{ display: 'grid', gridTemplateColumns: '225px 225px', gridTemplateRows: '300px' }}>
        <div style={{ borderRight: "1px solid gray" }} >
          <div style={{ display: 'flex', flexDirection: 'column', gap: "2px", paddingTop: '10px' }}>

            <h4>Your List</h4>

            <a style={{ color: "#444" }} href='#'> Create a Wishlist</a>

            <a style={{ color: "#444" }} href='#'>Wish from any website</a>
            <a style={{ color: "#444" }} href='#'>Baby website</a>
            <a style={{ color: "#444" }} href='#'>Baby website</a>
            <a style={{ color: "#444" }} href='#'>Baby website</a>
            <a style={{ color: "#444" }} href='#'>Discover Your Style </a>
            <a style={{ color: "#444" }} href='#'>View Showroom</a>
          </div>
        </div>
        <div style={{}} >
          <div style={{ display: 'flex', flexDirection: 'column', gap: "2px", paddingLeft: "10px", paddingTop: '10px' }}>
            <h4>Your Account</h4>
            <a style={{ color: "#444" }} href='#'> Your Orders</a>
            <a style={{ color: "#444" }} href='#'>Your Wish List</a>
            <a style={{ color: "#444" }} href='#'>Your Recommendations</a>
            <a style={{ color: "#444" }} href='#'>Your Prime Video</a>
            <a style={{ color: "#444" }} href='#'>Your Subscribe & Save Items</a>
            <a style={{ color: "#444" }} href='#'>Your Gift Card Balance</a>
            <a style={{ color: "#444" }} href='#'>Your Amazon Business Account</a>
            <a style={{ color: "#444" }} href='#'>Your Seller Account</a>
            <a style={{ color: "#444" }} href='#'>Manage Your Content and Devices</a>
          </div>
        </div>
      </div>
    </div>
  )


  return (
    <>
      {/* <svg xmlns="http://www.w3.org/2000/svg" fill="blue" width="24" height="24" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" /></svg> */}
      <Popover placement="bottomRight"
          
          style={{position :'relative', top:"-10px"}}
        trigger='hover'
        title={text} content={content} >
        <button style={{ border:'none',background:"none", width: '45%', display: 'flex', justifyContent: 'center', flexDirection: 'column', textAlign: 'center' }}>
                        <a href="" class="ex1" style={{ display: 'flex', justifyContent: 'center', textAlign: 'center', flexDirection: 'column', height: '85%', width: '90%' }}>
                            <span style={{ fontSize: '1vw', marginTop: '9px', color: 'white' }}>Hello, Sign in </span>
                            <span style={{ fontFamily: 'inherit', fontWeight: '750', fontSize: '1.2vw', color: 'white' }}> Account & Lists</span></a>
                    </button>
      </Popover>
    </>
  );
}

