import React, { useState } from 'react';
import { Collapse } from 'antd';
import 'antd/dist/antd.css';
import { CaretRightOutlined } from '@ant-design/icons';
import AmazonLogo from '../../images/am.jpeg'
import Input from './customInput';
const { Panel } = Collapse;


export default function Signup() {


    const [allValues, setAllValues] = useState({
        Name: { value: "", isValid: "" },
        phone: { value: "", isValid: "" },
        email: { value: "", isValid: "" },
        password :{value:"",isValid:""},
        
    })
  
    const inputContent=(key,value,isValid)=>{
              setAllValues((allValues)=>({...allValues,[key]:{value,isValid}}))
    }
    console.log(allValues);

    return (
        <>
            <div style={{ height: "auto", paddingBottom: "15px" }}>
                <div style={{ width: "125px", height: '50px', margin: "auto", marginTop: "5px" }}>
                    <img src={AmazonLogo} alt="not available"
                        style={{ width: '100%', height: "100%", objectFit: 'strech' }}
                    ></img>
                </div>
                <div style={{ display: "flex", height: "auto", width: "350px", margin: 'auto', border: '1px solid lightgray', borderRadius: "4px", marginBottom: "12px" }}>

                    <div style={{ display: "flex", flexDirection: "column", width: "80%", margin: "auto", paddingTop: "25px", paddingBottom: "25px", gap: "15px" }}>
                        <h2 style={{ height: "6px", fontWeight: "500", fontSize: "30px", marginBottom: "18px" }}>Create Account</h2>
                        <div style={{ display: "flex", flexDirection: "column", gap: "3px" }}>
                            <b style={{ fontSize: "0.9em" }}>Your name</b>
                            <Input type='text'
                                name="Name"
                                inputContent={inputContent}
                                placeholder="Name..."
                                style={{ height: "2em", border: "1px solid black", borderRadius: "4px" }}></Input>
                                {allValues.Name.isValid && <small style={{color:"red"}}> <i>enter name</i> </small>}

                        </div>

                        <div style={{ display: "flex", flexDirection: "column", gap: "3px"}}>
                            <b style={{ fontSize: "0.9em" }}>Mobile Number </b>
                            <Input type="text"
                            inputContent={inputContent}
                                placeholder="Phone..."
                                name="phone"
                            ></Input>
                             {allValues.phone.isValid && <small style={{color:"red"}}> <i>enter valid phone</i> </small>}


                        </div>

                        

                        <div style={{ display: "flex", flexDirection: "column", gap: "3px" }}>
                            <b style={{ fontSize: "0.9em" }}>Email</b>
                            <Input type='text'
                                inputContent={inputContent}
                                name="email"
                                placeholder='Email'></Input>
                            {allValues.email.isValid &&  <small style={{color:"red"}}> <i>enter valid email</i> </small>}
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", gap: "3px" }}>
                            <b style={{ fontSize: "0.9em" }}>Password</b>
                            <Input type='text'
                                inputContent={inputContent}
                                name="password"
                                placeholder='At least 6 caracters'></Input>
                            <b style={{ fontSize: "0.8em" }}><i>i</i>  Passwords must be at least 6 characters.</b>
                            {allValues.password.isValid &&  <small style={{color:"red"}}> <i>enter strong password</i> </small>}
                        </div>

                        <button style={{ height: "2.5em", background: "linear-gradient(to bottom,#f8e3ad,#EEBA37)", border: "1px solid #c89411", borderRadius: "4px" }}>Continue</button>
                        <div style={{ display: "flex", flexWrap: "wrap", width: "100%", heigth: "auto" }}>
                            <p style={{ fontSize: "0.8em", marginTop: '0px' }}>By continuing, you agree to Amazon's <span
                                style={{ color: " #0066c0" }}>
                                conditions of use <span style={{ color: "black" }}>and</span> privacy heading
                            </span></p>

                            <div style={{
                                display: "flex", justifyContent: "center", width: "100%", height: '4em',flexDirection:"column",
                                alignItems: "center", background: "linear-gradient(to bottom,rgba(0,0,0,.14),rgba(0,0,0,.06) 0px,transparent)"
                            }}>
                                 <div style={{ width: "100%", textAlign: "start", fontSize: "0.9em" }}>Already have an account?<a style={{ color: " #0066c0", }}>Sign in</a> </div>
                            <div style={{ width: "100%", textAlign: "start", fontSize: "0.9em" }}>Buying for work?<a style={{ color: " #0066c0", }}>Create a free business account</a>
                            </div>
                            </div>

                           
                        </div>
                    </div>
                </div>

            </div>
            <div className='Background' style={{ display: "flex", gap: "28px", justifyContent: "center", width: "100%", height: '4em', alignItems: "center", background: "linear-gradient(to bottom,rgba(0,0,0,.14),rgba(0,0,0,.03) 3px,transparent)" }}>
                <a style={{ color: " #0066c0", fontSize: "0.8em" }}> Conditions of Use  </a>
                <a style={{ color: " #0066c0", fontSize: "0.8em" }}> Privacy Notice  </a>
                <a style={{ color: " #0066c0", fontSize: "0.8em" }}> Help  </a>

            </div>
            <div style={{ width: "100%", textAlign: "center", fontSize: "0.8em" }}>© 1996-2022, Amazon.com, Inc. or its affiliates </div>


        </>
    )
}