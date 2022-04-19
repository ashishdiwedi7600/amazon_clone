import React, { useEffect, useState } from 'react';
import 'antd/dist/antd.css';
import './drawer1.css';
import Data from '../subsidemenu/data.json'
import { Drawer, Button, Menu } from 'antd';
import Icon, { UserOutlined, RightOutlined, ArrowLeftOutlined } from '@ant-design/icons';
import SubMenu from 'antd/lib/menu/SubMenu';
// import Amazon from './amazon.jpg'

export default function Drawer1() {
  const [id, setId] = useState('')
  const [openDrawer, setopenDrawer] = useState(false)
  const [openSubDrawer, setopenSubDrawer] = useState(null)

  const showDrawer = () => {
    setopenDrawer(!openDrawer);
  };
  const openSidemenu = () => {
    setopenSubDrawer(!openSubDrawer)
  }

  return (
    <>
      {/* <img style={{ height: '100%', width: '100%', top: '0px' }} src={Amazon} /> */}
      <span> <Button className='btn' type="primary" onClick={showDrawer}> Open</Button></span>

      <Drawer style={{ padding: '0px' }}
        placement="left"
        closable={false}
        maskClosable={true}
        onClose={() => { setopenDrawer(false) }}
        visible={openDrawer}>

        <div class='header' style={{ background: '#232f3e', width: '365px', height: '50px', position: 'fixed' }} >
          <h2 style={{ padding: '8px 0px 0px 35px', margin: '0px', color: 'white', alignItem: 'center', gap: '5px', fontWeight: '700' }} >{<UserOutlined />}  Hello, Sign in</h2>
        </div>
        <div class='sidemenu' style={{ position: 'relative' }} >
          <div style={{
            fontSize: '18px', padding: '14px 0px 5px 36px', borderBottom: '2px', fontWeight: '700', lineHeight: '24px', color: '#111', textTransform: 'capitalize', display: 'inline-block'
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
          </div><hr />

          <div className='borderBtm' style={{
            fontSize: '18px', padding: '10px 0px 5px 36px', borderBottom: '2px', fontWeight: '700', lineHeight: '24px', color: '#111', textTransform: 'capitalize', display: 'inline-block'
          }} >    Digital Content And Devices     </div>
          <div style={{ display: "flex", flexDirection: "column", lineHeight: '40px', fontSize: '14px', color: "black", borderBottom: '1px' }}>
            <a href={openSidemenu} onClick={openSidemenu} style={{ display: "flex", padding: '0px 36px ', justifyContent: "space-between" }}>
              <a id="0" className='items'
                onClick={(e) => {
                  setId(e.target.id);
                  console.log(e.target.id);
                }} >Echo & Alexa</a><Icon className='icon' component={RightOutlined} />
            </a>
            <a href={openSidemenu} onClick={openSidemenu} style={{ display: "flex", padding: '0px 36px', justifyContent: "space-between" }}>
              <a id="1" className='items'
                onClick={(e) => {
                  setId(e.target.id);
                  console.log(e.target.id);
                }}>Fire TV </a><Icon className='icon' component={RightOutlined} />
            </a>
            <a href={openSidemenu} onClick={openSidemenu} style={{ display: "flex", padding: '0px 36px', justifyContent: "space-between" }}>
              <a id='2' className='items'
                onClick={(e) => {
                  setId(e.target.id);
                  console.log(e.target.id);
                }}>Kindle E-Readers & eBooks </a><Icon className='icon' component={RightOutlined} />
            </a>
            <a href={openSidemenu} onClick={openSidemenu} style={{ display: "flex", padding: '0px 36px', justifyContent: "space-between" }}>
              <a id='3' className='items'
                onClick={(e) => {
                  setId(e.target.id);
                  console.log(e.target.id);
                }}>Audible Audiobooks</a><Icon className='icon' component={RightOutlined} />
            </a>
            <a href={openSidemenu} onClick={openSidemenu} style={{ display: "flex", padding: '0px 36px', justifyContent: "space-between" }}>
              <a id='4' className='items'
                onClick={(e) => {
                  setId(e.target.id);
                  console.log(e.target.id);
                }}>Amazon Prime Video </a><Icon className='icon' component={RightOutlined} />
            </a>
            <a href={openSidemenu} onClick={openSidemenu} style={{ display: "flex", padding: '0px 36px', justifyContent: "space-between" }}>
              <a id='5' className='items'
                onClick={(e) => {
                  setId(e.target.id);
                  console.log(e.target.id);
                }}>Amazon Prime Music </a><Icon className='icon' component={RightOutlined} />
            </a>
          </div><hr />

          <div className='borderBtm' style={{
            fontSize: '18px', padding: '10px 0px 5px 36px', borderBottom: '2px', fontWeight: '700', lineHeight: '24px', color: '#111', textTransform: 'capitalize', display: 'inline-block'
          }} >Shop By Department</div>
          <div style={{ display: "flex", flexDirection: "column", lineHeight: '40px', fontSize: '14px', paddingBottom: '5px', color: "black", borderBottom: '2px' }}>
            <a href={openSidemenu} onClick={openSidemenu} style={{ display: "flex", padding: '0px 36px', justifyContent: "space-between" }}>
              <a id='6' className='items'
                onClick={(e) => {
                  setId(e.target.id);
                  console.log(e.target.id);
                }}>Mobiles, Computers </a><Icon className='icon' component={RightOutlined} />
            </a>
            <a href={openSidemenu} onClick={openSidemenu} style={{ display: "flex", padding: '0px 36px', justifyContent: "space-between" }}>
              <a id='7' className='items'
                onClick={(e) => {
                  setId(e.target.id);
                  console.log(e.target.id);
                }}>TV, Appliances, Electronics  </a><Icon className='icon' component={RightOutlined} />
            </a>
            <a href={openSidemenu} onClick={openSidemenu} style={{ display: "flex", padding: '0px 36px', justifyContent: "space-between" }}>
              <a id='8' className='items'
                onClick={(e) => {
                  setId(e.target.id);
                  console.log(e.target.id);
                }}>Men's Fashion </a><Icon className='icon' component={RightOutlined} />
            </a>
            <a href={openSidemenu} onClick={openSidemenu} style={{ display: "flex", padding: '0px 36px', justifyContent: "space-between" }}>
              <a id='9' className='items'
                onClick={(e) => {
                  setId(e.target.id);
                  console.log(e.target.id);
                }}>Women's Fashion </a><Icon className='icon' component={RightOutlined} />
            </a>


            <Menu mode="inline" style={{ width: '325px', paddingLeft: '15px' }}>
              <SubMenu key="sub4" title="See All" className='dropdown'>
                <div style={{ display: "flex", flexDirection: "column", lineHeight: '40px', fontSize: '14px', color: "black", borderBottom: '1px' }}>
                  <a href={openSidemenu} onClick={openSidemenu} style={{ display: "flex", padding: '0px 36px ', justifyContent: "space-between" }}>
                    <a id="10" className='items'
                      onClick={(e) => {
                        setId(e.target.id);
                        console.log(e.target.id);
                      }} >Home, Kitchen, Pets</a><Icon className='icon' component={RightOutlined} />
                  </a>
                  <a href={openSidemenu} onClick={openSidemenu} style={{ display: "flex", padding: '0px 36px ', justifyContent: "space-between" }}>
                    <a id="11" className='items'
                      onClick={(e) => {
                        setId(e.target.id);
                        console.log(e.target.id);
                      }} >Beauty, Health, Grocery </a><Icon className='icon' component={RightOutlined} />
                  </a>
                  <a href={openSidemenu} onClick={openSidemenu} style={{ display: "flex", padding: '0px 36px ', justifyContent: "space-between" }}>
                    <a id="12" className='items'
                      onClick={(e) => {
                        setId(e.target.id);
                        console.log(e.target.id);
                      }} >Sports, Fitness, Bags, Luggage</a><Icon className='icon' component={RightOutlined} />
                  </a>
                  <a href={openSidemenu} onClick={openSidemenu} style={{ display: "flex", padding: '0px 36px ', justifyContent: "space-between" }}>
                    <a id="13" className='items'
                      onClick={(e) => {
                        setId(e.target.id);
                        console.log(e.target.id);
                      }} >Toys, Baby Products, Fashion</a><Icon className='icon' component={RightOutlined} />
                  </a>
                  <a href={openSidemenu} onClick={openSidemenu} style={{ display: "flex", padding: '0px 36px ', justifyContent: "space-between" }}>
                    <a id="14" className='items'
                      onClick={(e) => {
                        setId(e.target.id);
                        console.log(e.target.id);
                      }} >Car, Motorbike, Industrial</a><Icon className='icon' component={RightOutlined} />
                  </a>
                  <a href={openSidemenu} onClick={openSidemenu} style={{ display: "flex", padding: '0px 36px ', justifyContent: "space-between" }}>
                    <a id="15" className='items'
                      onClick={(e) => {
                        setId(e.target.id);
                        console.log(e.target.id);
                      }} >Books</a><Icon className='icon' component={RightOutlined} />
                  </a>
                  <a href={openSidemenu} onClick={openSidemenu} style={{ display: "flex", padding: '0px 36px ', justifyContent: "space-between" }}>
                    <a id="16" className='items'
                      onClick={(e) => {
                        setId(e.target.id);
                        console.log(e.target.id);
                      }} >Movies, Music & Video Games</a><Icon className='icon' component={RightOutlined} />
                  </a>
                </div>
              </SubMenu>
            </Menu>
          </div><hr />

          <div className='borderBtm' style={{
            fontSize: '18px', padding: '10px 0px 5px 36px', borderBottom: '2px', fontWeight: '700', lineHeight: '24px', color: '#111', textTransform: 'capitalize', display: 'inline-block'
          }} >    Programs & Features    </div>
          <div style={{ display: "flex", flexDirection: "column", lineHeight: '40px', fontSize: '14px', paddingBottom: '10px', color: "black", display: 'grid', direction: 'column', borderBottom: '2px' }}>
            <a href={openSidemenu} onClick={openSidemenu} style={{ display: "flex", padding: '0px 36px', justifyContent: "space-between" }}>
              <a id='17' className='items'
                onClick={(e) => {
                  setId(e.target.id);
                  console.log(e.target.id);
                }}>Gift Cards & Mobile Recharges </a><Icon className='icon' component={RightOutlined} />
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
            fontSize: '18px', borderBottom: '2px', padding: '10px 0px 5px 36px', fontWeight: '700', lineHeight: '24px', color: '#111', textTransform: 'capitalize', display: 'inline-block'
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
          {/* <----------------subdrawer-------------> */}

          <Drawer style={{ padding: '0px' }}
            placement="right"
            closable={false}
            maskClosable={true}
            onClose={() => { setopenSubDrawer(false) }}
            visible={openSubDrawer}
            getContainer={false} >

            {Data.map((val, key) => {
              if (key == id) {
                return (
                  <>
                    <div className='borderBtm' style={{ top: '0px', width: '365px', fontFamily: ' "Amazon Ember",Arial,sans-serif' }}>
                      <a onClick={openSidemenu} className='items'
                        style={{ display: "flex", padding: '5px 36px ', justifyContent: "", fontSize: '23px', gap: '10px', paddingBottom: '5px' }}>
                        <Icon className='icon' component={ArrowLeftOutlined} /> {val.text}
                      </a>

                      <hr />

                      <div style={{
                        fontSize: '18px', padding: '12px 0px 5px 36px', borderBottom: '2px', fontWeight: '700', lineHeight: '24px', color: '#111', textTransform: 'capitalize', display: 'inline-block'
                      }} >    {val.title1}     </div>
                      <div style={{ display: "flex", flexDirection: "column", lineHeight: '40px', fontSize: '14px', paddingBottom: '5px', color: "black", borderBottom: '#ddd' }}>

                        <a href='' style={{ display: "flex", padding: '0px 36px ', justifyContent: "space-between" }}>
                          <a className='items'>{val.p1} </a>
                        </a>
                        <a href='' style={{ display: "flex", padding: '0px 36px ', justifyContent: "space-between" }}>
                          <a className='items'>{val.p2} </a>
                        </a>
                        <a href='' style={{ display: "flex", padding: '0px 36px ', justifyContent: "space-between" }}>
                          <a className='items'>{val.p3}</a>
                        </a>
                        <a href='' style={{ display: "flex", padding: '0px 36px ', justifyContent: "space-between" }}>
                          <a className='items'>{val.p4}</a>
                        </a>
                        <a href='' style={{ display: "flex", padding: '0px 36px ', justifyContent: "space-between" }}>
                          <a className='items'>{val.p5}</a>
                        </a>
                        <a href='' style={{ display: "flex", padding: '0px 36px ', justifyContent: "space-between" }}>
                          <a className='items'>{val.p6}</a>
                        </a>
                        <a href='' style={{ display: "flex", padding: '0px 36px ', justifyContent: "space-between" }}>
                          <a className='items'>{val.p7}</a>
                        </a>
                        <a href='' style={{ display: "flex", padding: '0px 36px ', justifyContent: "space-between" }}>
                          <a className='items'>{val.p8}</a>
                        </a>
                        <a href='' style={{ display: "flex", padding: '0px 36px ', justifyContent: "space-between" }}>
                          <a className='items'>{val.p9}</a>
                        </a>
                        <a href='' style={{ display: "flex", padding: '0px 36px ', justifyContent: "space-between" }}>
                          <a className='items'>{val.p10}</a>
                        </a>
                        <a href='' style={{ display: "flex", padding: '0px 36px ', justifyContent: "space-between" }}>
                          <a className='items'>{val.p11}</a>
                        </a>
                        <a href='' style={{ display: "flex", padding: '0px 36px ', justifyContent: "space-between" }}>
                          <a className='items'>{val.p12}</a>
                        </a>
                        <a href='' style={{ display: "flex", padding: '0px 36px ', justifyContent: "space-between" }}>
                          <a className='items'>{val.p13}</a>
                        </a>
                        <a href='' style={{ display: "flex", padding: '0px 36px ', justifyContent: "space-between" }}>
                          <a className='items'>{val.p14}</a>
                        </a>
                        <a href='' style={{ display: "flex", padding: '0px 36px ', justifyContent: "space-between" }}>
                          <a className='items'>{val.p15}</a>
                        </a>
                        <a href='' style={{ display: "flex", padding: '0px 36px ', justifyContent: "space-between" }}>
                          <a className='items'>{val.p16}</a>
                        </a>
                      </div>

                      {val.title2 &&
                        <>
                      <hr /> 
                      <div className='borderBtm' style={{
                        fontSize: '18px', padding: '10px 0px 5px 36px', fontWeight: '700', lineHeight: '24px', color: '#111', textTransform: 'capitalize', display: 'inline-block'
                       }} > {val.title2} </div>
                       <div style={{ display: "flex", flexDirection: "column", lineHeight: '40px', fontSize: '14px', color: "black", borderTop: '1px' }}>
                        <a href='' style={{ display: "flex", padding: '0px 36px ', justifyContent: "space-between" }}>
                          <a className='items'>{val.q1} </a>
                        </a>
                        <a href='' style={{ display: "flex", padding: '0px 36px', justifyContent: "space-between" }}>
                          <a className='items'>{val.q2} </a>
                        </a>
                        <a href='' style={{ display: "flex", padding: '0px 36px', justifyContent: "space-between" }}>
                          <a className='items'>{val.q3} </a>
                        </a>
                        <a href='' style={{ display: "flex", padding: '0px 36px', justifyContent: "space-between" }}>
                          <a className='items'>{val.q4}</a>
                        </a>
                        <a href='' style={{ display: "flex", padding: '0px 36px', justifyContent: "space-between" }}>
                          <a className='items'>{val.q5} </a>
                        </a>
                        <a href='' style={{ display: "flex", padding: '0px 36px', justifyContent: "space-between" }}>
                          <a className='items'>{val.q6} </a>
                        </a>
                        <a href='' style={{ display: "flex", padding: '0px 36px', justifyContent: "space-between" }}>
                          <a className='items'> {val.q7}</a>
                        </a>
                        <a href='' style={{ display: "flex", padding: '0px 36px', justifyContent: "space-between" }}>
                          <a className='items'>{val.q8} </a>
                        </a>
                        <a href='' style={{ display: "flex", padding: '0px 36px', justifyContent: "space-between" }}>
                          <a className='items'>{val.q9} </a>
                        </a>
                        <a href='' style={{ display: "flex", padding: '0px 36px', justifyContent: "space-between" }}>
                          <a className='items'>{val.q10}</a>
                        </a>
                        <a href='' style={{ display: "flex", padding: '0px 36px', justifyContent: "space-between" }}>
                          <a className='items'>{val.q11}</a>
                        </a>
                      </div></>}
                    </div>

                  {val.title3 &&
                        <>
                        <hr/>
                    <div className='borderBtm' style={{
                      fontSize: '18px', padding: '10px 0px 5px 36px', borderBottom: '2px', fontWeight: '700', lineHeight: '24px', color: '#111', textTransform: 'capitalize', display: 'inline-block'
                    }} > {val.title3}     </div>
                    <div style={{ display: "flex", flexDirection: "column", lineHeight: '40px', fontSize: '14px', color: "black", borderTop: '1px' }}>
                      <a href='' style={{ display: "flex", padding: '0px 36px ', justifyContent: "space-between" }}>
                        <a className='items'>{val.r1} </a>
                      </a>
                      <a href='' style={{ display: "flex", padding: '0px 36px', justifyContent: "space-between" }}>
                        <a className='items'>{val.r2} </a>
                      </a>
                      <a href='' style={{ display: "flex", padding: '0px 36px', justifyContent: "space-between" }}>
                        <a className='items'>{val.r3} </a>
                      </a>
                      <a href='' style={{ display: "flex", padding: '0px 36px', justifyContent: "space-between" }}>
                        <a className='items'>{val.r4}</a>
                      </a>
                    </div></>}

                    {val.title4 &&
                    <>
                    <hr />
                    <div className='borderBtm' style={{
                      fontSize: '18px', padding: '10px 0px 5px 36px', borderBottom: '2px', fontWeight: '700', lineHeight: '24px', color: '#111', textTransform: 'capitalize', display: 'inline-block'
                    }} > {val.title4}     </div>
                    <div style={{ display: "flex", flexDirection: "column", lineHeight: '40px', fontSize: '14px', color: "black", borderBottom: '1px' }}>
                      <a href='' style={{ display: "flex", padding: '0px 36px ', justifyContent: "space-between" }}>
                        <a className='items'>{val.s1} </a>
                      </a>
                      <a href='' style={{ display: "flex", padding: '0px 36px', justifyContent: "space-between" }}>
                        <a className='items'>{val.s2} </a>
                      </a>
                      <a href='' style={{ display: "flex", padding: '0px 36px', justifyContent: "space-between" }}>
                        <a className='items'>{val.s3} </a>
                      </a>
                      <a href='' style={{ display: "flex", padding: '0px 36px', justifyContent: "space-between" }}>
                        <a className='items'>{val.s4}</a>
                      </a>
                      <a href='' style={{ display: "flex", padding: '0px 36px', justifyContent: "space-between" }}>
                        <a className='items'>{val.s5} </a>
                      </a>
                      <a href='' style={{ display: "flex", padding: '0px 36px', justifyContent: "space-between" }}>
                        <a className='items'>{val.s6} </a>
                      </a>

                    </div>
                    </>}

                  </>
                )
              }
            })}
          </Drawer>
        </div>
      </Drawer>
    </>
  );
}


