import { Button, Modal } from 'antd'
import React, { useState } from 'react'

export default function LocationModal() {

    const [showModal, setShowModal] = useState(false)

    console.log(showModal);
    return (
        <>
            <Button type="primary" onClick={() => setShowModal(!showModal)}>
                Vertically centered modal dialog
            </Button>
            <Modal
                closable={false}
                bodyStyle={{ padding: "0px", height: "240px",  borderRadius: "30px" }}
                centered
                maskClosable={true}
                onCancel={() => setShowModal(!showModal)}
                footer={false}
                visible={showModal}
            >
                <div style={{
                    display: "flex", alignItems: "center", padding: "10px",
                    background: "linear-gradient(to bottom,#f7f7f7,#eaeaea)",
                    width: '100%', height: '4em', backgroundColor: "lightgray"
                }}><
                    b style={{ fontSize: "15px" }}>Choose Your Location</b>
                </div>
                <div style={{ margin: "15px" }}>
                    <div style={{
                        display: "flex", flexWrap: "wrap", fontSize: "0.9em",
                        marginBottom: "10px"
                    }}>
                        Select a delivery location to see product availability and delivery options
                    </div>
                    <button style={{
                        width: "100%", height: "45px",
                        background: "linear-gradient(to bottom,#f8e3ad,#EEBA37)",
                        border: "none", borderRadius: "10px"
                    }}>
                        sign in to see your address
                    </button>




                    <div style={{ display: "flex", justifyContent: "center" }}><p style={{
                    width: "100%", marginTop: "20px",
                    textAlign: "center",
                    borderBottom: "1px solid lightgray",
                    lineHeight: "0.1em",
                    margin: "10px 0 20px"
                }}><a style={{
                    background: "#fff", color: "gray", fontSize: '0.8em',
                    padding: "0 10px"
                }}>or enter an Indian pincode </a></p></div>



                    <div style={{ display: 'flex', gap: "10px", marginBottom: "20px" }}>
                        <input type="text" 
                        style={{ width: "60%", height: "35px",
                            border: "1px solid gray"

                        }} />
                        <button
                            onClick={() => { setShowModal(!showModal) }}

                            style={{
                                height: '35px', width: "40%",
                                backgroundColor: "-internal-light-dark(rgb(239, 239, 239), rgb(59, 59, 59))"
                            }}>Apply</button>


                    </div>
                </div>
            </Modal>
        </>
    )
}
