import React from 'react';


const Contact = (props) => {

    console.log("Contact");

    return (
        <div className="row h-100 m-0 p-0 d-flex align-items-center ">
                <span>
                <h1 className="ml-5" style={{color:"#000533"}}>Find me on :</h1>
                <div className="ml-5" style={{width:"56px",height:"10px",backgroundColor:"#f6d4b4"}}></div>
                </span>
                <div style={{width:"56px",height:"10px",backgroundColor:""}}></div>
                <div className="text-white">
                    <a className="text-white" href="https://www.instagram.com/hananhnfi">
                    <div className="rounded p-2 my-2" style={{backgroundColor:"#C13584"}}>
                        <h2>Instagram <i class="fab fa-instagram"></i></h2>
                    </div></a>
                    <div className="rounded p-2 my-2" style={{backgroundColor:"#25D366"}}>
                        <h2>Whatsapp <i class="fab fa-whatsapp"></i></h2>
                    </div>
                    <div className="rounded p-2 my-2 " style={{backgroundColor:"#211F1F"}}>
                        <h2>Github <i class="fab fa-github"></i></h2>
                    </div>
                    <div className="rounded p-2 my-2" style={{backgroundColor:"#0072b1"}}>
                        <h2>Linkedin <i class="fab fa-linkedin"></i></h2>
                    </div>
                    <div className="rounded p-2 my-2" style={{backgroundColor:"#B23121"}}>
                        <h2>Email <i class="fas fa-envelope"></i></h2>
                    </div>
                </div>
                
                    
        </div>
    )
}

export default Contact;