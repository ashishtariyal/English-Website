import React,{useState} from "react";


function Contact() {
    const [copied, setCopied] = useState(false);
    const phoneNumber = "+91 9654251422";

    function handleCopy(){
        navigator.clipboard.writeText(phoneNumber).then(() => {
          setCopied(true);
          setTimeout(() => setCopied(false), 1200); 
        });
      };
  
    return (
      <>
           <div className="container-fluid mb-5">
             <div className="col-11 mx-auto">
      
              <div className=" shadow-lg p-3 mb-5 bg-body rounded container">
                <img src="https://www.alphacs.in/static/alphacs/img/pattern-bg-lightgray.jpg"></img>
              <div className="centered">Contact Us</div>
              </div>
           <div className=" ashu1">Get In Touch</div>
           <div className="heading-line">
            <span className="short-line"></span>
            <span className="long-line"></span>
           </div>

           <div className="ash2">"Unlock confidence and fluency with our English Speaking Course. Embark on a journey of effective communication and cultural exchange. Our expert instructors guide you through interactive lessons, enhancing vocabulary, grammar, and pronunciation. Practice real-world conversations and gain the skills to connect globally. Whether you're a beginner or looking to refine your skills, our course offers a supportive and immersive learning experience. Elevate your career, travel adventures, and social interactions. Join us to master English and open doors to new horizons. Get in touch today and embark on a transformative language learning adventure."</div>
          <div className="shadow-lg p-3 mb-5 bg-body rounded asd">
            <div className="contacts">
                
                        <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12">
                            <div className="contacts-item">
                                <img src="https://www.alphacs.in/static/alphacs/images/alphaimg/contact7.png" alt="phone"/>
                                <div className="content">
                                    <a className="title">Dwarka </a>
                                    {/* <p className="sub-title">Delhi India</p> */}
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12">
                            <div className="contacts-item">
                                <img src="https://www.alphacs.in/static/alphacs/images/alphaimg/contact8.png" alt="phone"/>
                                <div className="content">
                                    <a className="title">tariyalyogita92@gmail.com</a>
                                    {/* <p className="sub-title">Email Support</p> */}

                                </div>
                            </div>
                        </div>
                 
                        <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12">
                            <div className="contacts-item">
                                <img src="https://www.alphacs.in/static/alphacs/images/alphaimg/contact9.png" alt="phone"/>
                                <div className="content">
                                <a className=""> <span className="title" onClick={handleCopy}>
                     {phoneNumber}
                    </span>
                    {copied && <span style={{marginLeft:"25px"}} className="copy-success">Copied!</span>}
                    </a>
                                    {/* <p className="sub-title">Mon-Sat 10am-6pm</p> */}
                                </div>
                            </div>
                        </div>
                  </div>
          </div>

          <div className="azz" >
                        <p >Copyright © 2023 | The Tariyals</p>
                        </div>
                    <div className="azz1">
                        <a style={{textDecoration:"none"}} href="https://www.instagram.com/tariyal_._/"><p>Ⓐ</p></a>
                    </div>
                  
                   
                    

           </div>
           </div>


      </>
    )
  }
  
  export default Contact;
  

  {/* <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 col-12">
                        <ul class="list-unstyled f_menu text-right text-center">

                            <li><a  style={{textDecoration:"none"}}href="/appprivacypolicy.html">Terms of Use</a></li>
                            <li><a  style={{textDecoration:"none"}} href="/appprivacypolicy.html">Privacy Policy</a></li>
                        </ul>
                    </div> */}
