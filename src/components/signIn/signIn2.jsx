import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import AmazonLogo from '../../images/am.jpeg'
import Input from '../signUp/customInput';

export default function SignIn2() {

   const navi = useNavigate()
    const { state } = useLocation()

    const [password, setPassword] = useState({
        password:{value:"",isValid:""}
    })
    
    const inputContent=(key,value,isValid)=>{
        setPassword((password) => ({ ...password, [key]: { value, isValid } }))
    }

    return (
        <><div style={{ height: "auto", paddingBottom: "15px" }}>
            <div style={{ width: "125px", height: '50px', margin: "auto", marginTop: "5px" }}>
                <img src={AmazonLogo} alt="not available"
                    style={{ width: '100%', height: "100%", objectFit: 'strech' }}
                ></img>
            </div>

            <div style={{ display: "flex", height: "auto", width: "350px", margin: 'auto', border: '1px solid lightgray', borderRadius: "4px", marginBottom: "10px" }}>

                <div style={{ display: "flex", flexDirection: "column", width: "80%", margin: "auto", paddingTop: "5px", paddingBottom: "25px", gap: "15px" }}>


                    <h2 style={{ height: "6px", fontWeight: "500", fontSize: "30px" }}>Sign-In</h2>
                    <div style={{marginTop:"20px"}}>
                        <span style={{fontWeight:"600"}}>
                        {state.emailphone.value}<span ><a style={{color:"#0066c0"}} >&nbsp;Change</a></span>
                        </span>
                        </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
                        <div style={{display:"-webkit-flex",justifyContent:'space-between',width:'100%',fontSize:".9em"}}>
                            <b >Password</b>
                            <a style={{color:"#0066c0" ,fontWeight:"500"}}>forgot password</a>
                        </div>
                        <Input
                            type='password'
                            name="password"
                            inputContent={inputContent}
                            style={{ height: "2em", border: "1px solid gray" }}></Input>
                        {/* {emailPhone.emailphone.isValid && <small style={{ color: "red" }}> <i>enter valid email or phone</i> </small>} */}
                    </div>
                    <button
                        // onClick={handleClick}
                        style={{
                            height: "2.5em",
                            background: "linear-gradient(to bottom,#f8e3ad,#EEBA37)", border: "1px solid #c89411"
                        }}
                    >Continue
                    </button>

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
                <button
                onClick={()=>{navi('/signup')}}
                 style={{width: "350px", height: "29px", border: "1px solid lightgray", borderRadius: "2px",
                    boxShadow: "0 1px 0 rgb(255 ,255, 255 / 60%) inset",
                    borderRadius: "2px",
                    backgroundColor: "linear-gradient(315deg, #ffffff 0%, #d7e1ec 74%);"
                }}>Create your Amazon Account</button>

            </div>
        </div>
            <div style={{ display: "flex", gap: "28px", justifyContent: "center", width: "100%", height: '4em', alignItems: "center", background: "linear-gradient(to bottom,rgba(0,0,0,.14),rgba(0,0,0,.03) 3px,transparent)" }}>
                <a style={{ color: "blue", fontSize: "0.8em" }}> Conditions of Use  </a>
                <a style={{ color: "blue", fontSize: "0.8em" }}> Privacy Notice  </a>
                <a style={{ color: "blue", fontSize: "0.8em" }}> Help  </a>

            </div>
            <div style={{ width: "100%", textAlign: "center", fontSize: "0.8em" }}>© 1996-2022, Amazon.com, Inc. or its affiliates </div>



        </>)
}
