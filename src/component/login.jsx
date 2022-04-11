import React from 'react'

export default function Login() {
  return (
    <div style={{ display: "flex", gap: "10px", height: "75vh", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>

            <h1>Sign-In</h1>
            <form style={{ display: "flex", flexDirection: "column", gap: "10px",width:"500px" }}>


                <div style={{ display: "flex", width: "60%",height:"7vh", flexDirection: "column" }}>
                    <label htmlFor="Email or mobile phone number"><b>Email or mobile phone number</b></label>
                    <input style={{height:"3.25vh"}} type="text" name="Email or mobile phone number" id="Email or mobile phone number" />
                </div>

                {/* <div style={{ display: "flex", flexDirection: "column" }}> */}
                    {/* <label htmlFor="PASSWORD">PASSWORD</label> */}
                    {/* <input type="text" name="PASSWORD" id="PASSWORD" /> */}
                {/* </div> */}



                <button type="submit" style={{ backgroundColor: "#f3d078", height: "30px",width:"60%",border:"1px solid black"}} >Continue</button>
                <p style={{fontSize:"0.8em"}}>By continuing, you agree to Amazon's  <a style={{color:"blue"}}> Conditions of Use <span style={{color:"black"}}>and </span>Privacy Notice.</a></p>
                

                {/* <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}> */}
                    {/* <Link to="/ForgotPassword?" style={{ textDecorationLine: "none" }}>ForgotPassword? */}
                    {/* </Link> */}


                {/* </div> */}

            </form>
        </div>
  )
}
