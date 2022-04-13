import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import 'antd/dist/antd.css';
import './drawer1.css';
// import './echo.css';
import { Drawer, Button, Menu } from 'antd';
import Icon, { UserOutlined, RightOutlined, ArrowLeftOutlined } from '@ant-design/icons';
import SubMenu from 'antd/lib/menu/SubMenu';
import Amazon from './amazon.jpg'
// import Echo from '../echo'

export default function Drawer1() {

  const [closable, setClosable] = useState(false)
  const [openDrawer, setopenDrawer] = useState(false)
  const [openSubDrawer, setopenSubDrawer] = useState(null)

  const showDrawer = () => {
    setopenDrawer(!openDrawer);
  };
  console.log(openDrawer);

  // const handleOnClose = () => {
  //   setClosable(!closable)
  // };

  const openSidemenu = () => {
       setopenSubDrawer(!openSubDrawer)
      }
      console.log(openSubDrawer);
 

  
  
    
    


  return (
    <>
      <img style={{ height: '100%', width: '100%', top: '0px' }} src={Amazon} />
      <span> <Button className='btn' type="primary" onClick={showDrawer}>
        Open
      </Button></span>

      <Drawer style={{ padding: '0px' }}
        placement="left"
        // width={'50%'}
        closable={false}
        maskClosable={true}
        onClose={() => { setopenDrawer(false) }}
        visible={openDrawer}
        // style={{position:"relative"}}
      >

        
          <div class='header'style={{ background: '#232f3e', width: '365px', height: '50px', position: 'fixed' }} >  
            <h2 style={{ padding: '8px 0px 0px 35px', margin: '0px', color: 'white', alignItem: 'center', gap: '5px', fontWeight: '700' }} >{<UserOutlined />}  Hello, Sign in</h2> 
            </div>
            <div class='sidemenu' style={{position:'relative'}} >
          <div className='borderBtm' style={{ top: '0px', fontFamily: ' "Amazon Ember",Arial,sans-serif' }}>
          <div style={{
            fontSize: '18px', padding: '30px 0px 5px 36px', borderBottom: '2px', 
            fontWeight: '700',
            lineHeight: '24px',
            color: '#111',
            textTransform: 'capitalize',
            display: 'inline-block'
          }} >    Trending     </div>
          <div style={{ display: "flex", flexDirection: "column", lineHeight: '40px', fontSize: '14px', paddingBottom: '5px', color: "black", borderBottom: '#ddd' }}>

            <a href='' style={{ display: "flex", padding: '0px 36px ', justifyContent: "space-between" }}>
              <a className='items'>Best Sellers </a>
            </a>
            <a href='' style={{ display: "flex", padding: '0px 36px ', justifyContent: "space-between" }}>
              <a className='items'>New Releases </a>
            </a>
            <a href='' style={{ display: "flex", padding: '0px 36px ', justifyContent: "space-between" }}>
              <a className='items'>Movers and Shakers</a>
            </a>
          </div>
          <hr />

          <div className='borderBtm' style={{
            fontSize: '18px', padding: '10px 0px 5px 36px', borderBottom: '2px', fontWeight: '700',
            lineHeight: '24px',
            color: '#111',
            textTransform: 'capitalize',
            display: 'inline-block'
          }} >    Digital Content And Devices     </div>
          <div  style={{ display: "flex", flexDirection: "column", lineHeight: '40px', fontSize: '14px', color: "black", borderBottom: '1px' }}>
            <a href={openSidemenu} onClick={openSidemenu} style={{ display: "flex", padding: '0px 36px ', justifyContent: "space-between" }}>
              <a    className='items'>Echo & Alexa </a><Icon className='icon' component={RightOutlined} />
            </a>
            <a href={openSidemenu}  onClick={openSidemenu} style={{ display: "flex", padding: '0px 36px', justifyContent: "space-between" }}>
              <a className='items'>Fire TV </a><Icon className='icon' component={RightOutlined} />
            </a>
            <a href='' style={{ display: "flex", padding: '0px 36px', justifyContent: "space-between" }}>
              <a className='items'>Kindle E-Readers & eBooks </a><Icon className='icon' component={RightOutlined} />
            </a>
            <a href='' style={{ display: "flex", padding: '0px 36px', justifyContent: "space-between" }}>
              <a className='items'>Audible Audiobooks</a><Icon className='icon' component={RightOutlined} />
            </a>
            <a href='' style={{ display: "flex", padding: '0px 36px', justifyContent: "space-between" }}>
              <a className='items'>Amazon Prime Video </a><Icon className='icon' component={RightOutlined} />
            </a>
            <a href='' style={{ display: "flex", padding: '0px 36px', justifyContent: "space-between" }}>
              <a className='items'>Amazon Prime Music </a><Icon className='icon' component={RightOutlined} />
            </a>
          </div><hr />

          <div className='borderBtm' style={{
            fontSize: '18px', padding: '10px 0px 5px 36px', borderBottom: '2px', fontWeight: '700',
            lineHeight: '24px',
            color: '#111',
            textTransform: 'capitalize',
            display: 'inline-block'
          }} >Shop By Department</div>
          <div style={{ display: "flex", flexDirection: "column", lineHeight: '40px', fontSize: '14px', paddingBottom: '5px', color: "black", borderBottom: '2px' }}>

            <a href='' style={{ display: "flex", padding: '0px 36px', justifyContent: "space-between" }}>
              <a className='items'>Mobiles, Computers </a><Icon className='icon' component={RightOutlined} />
            </a>
            <a href='' style={{ display: "flex", padding: '0px 36px', justifyContent: "space-between" }}>
              <a className='items'>TV, Appliances, Electronics  </a><Icon className='icon' component={RightOutlined} />
            </a>
            <a href='' style={{ display: "flex", padding: '0px 36px', justifyContent: "space-between" }}>
              <a className='items'>Men's Fashion </a><Icon className='icon' component={RightOutlined} />
            </a>
            <a href='' style={{ display: "flex", padding: '0px 36px', justifyContent: "space-between" }}>
              <a className='items'>Women's Fashion </a><Icon className='icon' component={RightOutlined} />
            </a>
            {/* <a href=''    className='items'>See All <br /></a> */}
            <Menu mode="inline" style={{ width: 278, paddingLeft: '25px' }}>
              <SubMenu key="sub4" title="See All">
                <Menu.Item className='items' key="9">Home, Kitchen, Pets</Menu.Item>
                <Menu.Item className='items' key="10">Beauty, Health, Grocery</Menu.Item>
                <Menu.Item className='items' key="11">Sports, Fitness, Bags, Luggage</Menu.Item>
                <Menu.Item className='items' key="12">Toys, Baby Products, Kids' Fashion</Menu.Item>
                <Menu.Item className='items' key="13">Car, Motorbike, Industrial</Menu.Item>
                <Menu.Item className='items' key="14">Books</Menu.Item>
                <Menu.Item className='items' key="15">Movies, Music & Video Games</Menu.Item>
              </SubMenu>
            </Menu>

          </div><hr />

          <div className='borderBtm' style={{
            fontSize: '18px', padding: '10px 0px 5px 36px', borderBottom: '2px', fontWeight: '700',
            lineHeight: '24px',
            color: '#111',
            textTransform: 'capitalize',
            display: 'inline-block'
          }} >    Programs & Features    </div>
          <div style={{ display: "flex", flexDirection: "column", lineHeight: '40px', fontSize: '14px', paddingBottom: '10px', color: "black", display: 'grid', direction: 'column', borderBottom: '2px' }}>

            <a href='' style={{ display: "flex", padding: '0px 36px', justifyContent: "space-between" }}>
              <a className='items'>Gift Cards & Mobile Recharges </a><Icon className='icon' component={RightOutlined} />
            </a>
            <a href='' style={{ display: "flex", padding: '0px 36px', justifyContent: "space-between" }}>
              <a className='items'>Flight Tickets </a>
            </a>
            <a href='' style={{ display: "flex", padding: '0px 36px', justifyContent: "space-between" }}>
              <a className='items'>#FoundItOnAmazon</a>
            </a>
            <a href='' style={{ display: "flex", padding: '0px 36px', justifyContent: "space-between" }}>
              <a className='items'>Clearance store</a>
            </a>
          </div><hr />

          <div style={{
            fontSize: '18px', borderBottom: '2px', padding: '10px 0px 5px 36px', fontWeight: '700',
            lineHeight: '24px',
            color: '#111',
            textTransform: 'capitalize',
            display: 'inline-block'
          }} >    Help & Settings     </div>
          <div style={{ display: "flex", flexDirection: "column", lineHeight: '40px', fontSize: '14px', paddingBottom: '18px', color: "#111111", display: 'grid', direction: 'column', borderBottom: '2px' }}>

            <a href='' style={{ display: "flex", padding: '0px 36px', justifyContent: "space-between" }}>
              <a className='items'>Your Account</a>
            </a>
            <a href='' style={{ display: "flex", padding: '0px 36px', justifyContent: "space-between" }}>
              <a className='items'>Customer Service</a>
            </a>
            <a href='' style={{ display: "flex", padding: '0px 36px', justifyContent: "space-between" }}>
              <a className='items'>Sign In </a>
            </a>
          </div>
        </div>
        
        {/* <div className='subsidemenu' style={{position:'absolute'}}> */}
      <Drawer style={{ padding: '0px' }}
        placement="right"
        closable={false}
        maskClosable={true}
        onClose={() => { setopenSubDrawer(false) }}
        visible={openSubDrawer}
        getContainer={false}
      
        
      >

        <div className='borderBtm' style={{ top: '0px', fontFamily: ' "Amazon Ember",Arial,sans-serif' }}>
          <a   onClick={openSidemenu} className='items' 
           style={{ display: "flex", padding: '0px 42px ', justifyContent: "", fontSize:'23px', gap:'7px', paddingBottom:'5px' }}>
          <Icon className='icon' component={ArrowLeftOutlined} /> Main Menu 
            </a>
            <hr/>
            <div style={{
            fontSize: '18px', padding: '30px 0px 5px 36px', borderBottom: '2px', 
            fontWeight: '700',
            lineHeight: '24px',
            color: '#111',
            textTransform: 'capitalize',
            display: 'inline-block'
          }} >    Trending     </div>
          <div style={{ display: "flex", flexDirection: "column", lineHeight: '40px', fontSize: '14px', paddingBottom: '5px', color: "black", borderBottom: '#ddd' }}>

            <a href='' style={{ display: "flex", padding: '0px 36px ', justifyContent: "space-between" }}>
              <a className='items'>Best Sellers </a>
            </a>
            <a href='' style={{ display: "flex", padding: '0px 36px ', justifyContent: "space-between" }}>
              <a className='items'>New Releases </a>
            </a>
            <a href='' style={{ display: "flex", padding: '0px 36px ', justifyContent: "space-between" }}>
              <a className='items'>Movers and Shakers</a>
            </a>
          </div>
          <hr />

          <div className='borderBtm' style={{
            fontSize: '18px', padding: '10px 0px 5px 36px', borderBottom: '2px', fontWeight: '700',
            lineHeight: '24px',
            color: '#111',
            textTransform: 'capitalize',
            display: 'inline-block'
          }} >    Digital Content And Devices     </div>
          <div  style={{ display: "flex", flexDirection: "column", lineHeight: '40px', fontSize: '14px', color: "black", borderBottom: '1px' }}>
            <a href={openSidemenu} onClick={openSidemenu} style={{ display: "flex", padding: '0px 36px ', justifyContent: "space-between" }}>
              <a    className='items'>Echo & Alexa </a><Icon className='icon' component={RightOutlined} />
            </a>
            <a href='' style={{ display: "flex", padding: '0px 36px', justifyContent: "space-between" }}>
              <a className='items'>Fire TV </a><Icon className='icon' component={RightOutlined} />
            </a>
            <a href='' style={{ display: "flex", padding: '0px 36px', justifyContent: "space-between" }}>
              <a className='items'>Kindle E-Readers & eBooks </a><Icon className='icon' component={RightOutlined} />
            </a>
            <a href='' style={{ display: "flex", padding: '0px 36px', justifyContent: "space-between" }}>
              <a className='items'>Audible Audiobooks</a><Icon className='icon' component={RightOutlined} />
            </a>
            <a href='' style={{ display: "flex", padding: '0px 36px', justifyContent: "space-between" }}>
              <a className='items'>Amazon Prime Video </a><Icon className='icon' component={RightOutlined} />
            </a>
            <a href='' style={{ display: "flex", padding: '0px 36px', justifyContent: "space-between" }}>
              <a className='items'>Amazon Prime Music </a><Icon className='icon' component={RightOutlined} />
            </a>
          </div><hr />

          <div className='borderBtm' style={{
            fontSize: '18px', padding: '10px 0px 5px 36px', borderBottom: '2px', fontWeight: '700',
            lineHeight: '24px',
            color: '#111',
            textTransform: 'capitalize',
            display: 'inline-block'
          }} >Shop By Department</div>
          <div style={{ display: "flex", flexDirection: "column", lineHeight: '40px', fontSize: '14px', paddingBottom: '5px', color: "black", borderBottom: '2px' }}>

            <a href='' style={{ display: "flex", padding: '0px 36px', justifyContent: "space-between" }}>
              <a className='items'>Mobiles, Computers </a><Icon className='icon' component={RightOutlined} />
            </a>
            <a href='' style={{ display: "flex", padding: '0px 36px', justifyContent: "space-between" }}>
              <a className='items'>TV, Appliances, Electronics  </a><Icon className='icon' component={RightOutlined} />
            </a>
            <a href='' style={{ display: "flex", padding: '0px 36px', justifyContent: "space-between" }}>
              <a className='items'>Men's Fashion </a><Icon className='icon' component={RightOutlined} />
            </a>
            <a href='' style={{ display: "flex", padding: '0px 36px', justifyContent: "space-between" }}>
              <a className='items'>Women's Fashion </a><Icon className='icon' component={RightOutlined} />
            </a>
            {/* <a href=''    className='items'>See All <br /></a> */}
            <Menu mode="inline" style={{ width: 278, paddingLeft: '25px' }}>
              <SubMenu key="sub4" title="See All">
                <Menu.Item className='items' key="9">Home, Kitchen, Pets</Menu.Item>
                <Menu.Item className='items' key="10">Beauty, Health, Grocery</Menu.Item>
                <Menu.Item className='items' key="11">Sports, Fitness, Bags, Luggage</Menu.Item>
                <Menu.Item className='items' key="12">Toys, Baby Products, Kids' Fashion</Menu.Item>
                <Menu.Item className='items' key="13">Car, Motorbike, Industrial</Menu.Item>
                <Menu.Item className='items' key="14">Books</Menu.Item>
                <Menu.Item className='items' key="15">Movies, Music & Video Games</Menu.Item>
              </SubMenu>
            </Menu>

          </div><hr />

            </div>
          
        
        
      </Drawer>
      </div>
      
      {/* </div> */}
     
      </Drawer>
    </>
  );
}


