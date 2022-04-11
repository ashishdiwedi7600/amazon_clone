import React from 'react';
import { Collapse } from 'antd';
import 'antd/dist/antd.css';
import { CaretRightOutlined } from '@ant-design/icons';
import AmazonLogo from '../images/amazon.in_.jpg'
const { Panel } = Collapse;


export default function Password() {
    return (
        <>
            <div style={{ height: "auto", paddingBottom: "15px" }}>
                <div style={{ width: "125px", height: '50px', margin: "auto", marginTop: "5px" }}>
                    <img src={AmazonLogo} alt="not available"
                        style={{ width: '100%', height: "100%", objectFit: 'strech' }}
                    ></img>
                </div>

                <div style={{ display: "flex", height: "auto", width: "350px", margin: 'auto', border: '1px solid lightgray', borderRadius: "4px", marginBottom: "10px" }}>

                    <div style={{ display: "flex", flexDirection: "column", width: "80%", margin: "auto", paddingTop: "25px", paddingBottom: "25px", gap: "15px" }}>


                        <h2 style={{ height: "6px", fontWeight: "500", fontSize: "30px" }}>Sign-In</h2>
                        <div style={{ display: "flex", flexDirection: "column", gap: "5px", marginTop: "15px" }}>
                            <b style={{ fontSize: "0.9em" }}>Enter Email or Phone no.</b>
                            <input type='text' style={{ height: "2em", border: "1px solid gray" }}></input>
                        </div>
                        <button style={{ height: "2.5em", background: "linear-gradient(to bottom,#f8e3ad,#EEBA37)", border: "1px solid #c89411" }}>Continue</button>
                        <div style={{ display: "flex", flexWrap: "wrap", width: "100%", heigth: "auto" }}>
                            <p style={{ fontSize: "0.8em", marginTop: '0px' }}>By continuing, you agree to Amazon's <span
                                style={{ color: "blue" }}>
                                conditions of use <span style={{ color: "black" }}>and</span> privacy heading
                            </span></p>

                            <Collapse style={{ marginLeft: '0px' }}
                                bordered={false}
                                defaultActiveKey={['1']}
                                expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
                                className="site-collapse-custom-collapse"
                            >
                                <Panel style={{ backgroundColor: "white", textDecorationColor: 'blue' }} header="Need Help?" key="1" className="site-collapse-custom-panel">
                                    <p style={{color:"blue"}}>ForgotPassword</p>
                                    <p style={{color:"blue"}}>Other issues with Sign-In</p>
                                </Panel>

                            </Collapse>



                        </div>

                    </div>




                </div>

                    <div style={{ display: "flex", justifyContent: "center" }}><p style={{
                        width: "350px", marginTop: "40px",
                        textAlign: "center",
                        borderBottom: "1px solid lightgray",
                        lineHeight: "0.1em",
                        margin: "10px 0 20px"
                    }}><a style={{
                        background: "#fff", color: "gray", fontSize: '0.8em',
                        padding: "0 10px"
                    }}>New to Amazon?</a></p></div>
                    <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                        <button style={{
                            width: "350px", height: "29px", border: "1px solid lightgray", borderRadius: "2px",
                            boxShadow: "0 1px 0 rgb(255 ,255, 255 / 60%) inset",
                            borderRadius: "2px"
                        }}>Create your Amazon Account</button>

                    </div>
            </div>
            <div style={{ display: "flex", gap: "28px", justifyContent: "center", width: "100%", height: '4em', alignItems: "center", background: "linear-gradient(to bottom,rgba(0,0,0,.14),rgba(0,0,0,.03) 3px,transparent)" }}>
                <a style={{ color: "blue", fontSize: "0.8em" }}> Conditions of Use  </a>
                <a style={{ color: "blue", fontSize: "0.8em" }}> Privacy Notice  </a>
                <a style={{ color: "blue", fontSize: "0.8em" }}> Help  </a>

            </div>
            <div style={{ width: "100%", textAlign: "center", fontSize: "0.8em" }}>© 1996-2022, Amazon.com, Inc. or its affiliates </div>


        </>
    )
}
