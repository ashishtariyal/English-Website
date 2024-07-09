import React from "react";
import { useState } from "react";

function Common() {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };
    return (
      <>
      <section id="header" className="d-flex align-items-center">
      <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">

              <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex  justify-content-center flex-column ramram shadow-lg p-6 mb-5 bg-body rounded divv">
                <div className="div5">
                  <marquee class="marque">
                <span>Great Learning - </span>
                <span>Very Efficient - </span>
                <span>Very Impressive </span>
                </marquee>
                </div>
                <h1>
                Spoken English
                <br></br>
                <strong className="branded">  Learning</strong></h1>
                <p className="my-3"> <b>J</b>oin this Spoken English course to upgrade your communication skills, pronunciation, vocabulary, and professional communication. Also gain a competitive edge in your communication.</p>
                <div className="mt-3">
                </div>
              </div>

              
              <div className="col-lg-6 order-1 order-lg-2 header-img">
              </div>
              </div>


       
              <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" >
                    <div class="carousel-inner " data>
                      <div class="carousel-item active">
                        <img src="https://media.istockphoto.com/id/1410336912/photo/happy-teacher-and-schoolgirl-giving-high-five-during-class-at-school.webp?b=1&s=170667a&w=0&k=20&c=VzOy6zKCCYu_zVlu-KUwK_ujKYUJxbDERgSyEANQ-8w=" style={{borderRadius:"10px"}} class="d-block w-100" alt="..."/>
                      </div>
                      <div class="carousel-item">
                        <img src="https://img.freepik.com/premium-photo/english-distance-learning-kids-homeschooling-distance-learning-children-girl-student-study-online-with-video-call-teacher_493343-9877.jpg" style={{borderRadius:"10px"}} class="d-block w-100" alt="..."/>
                      </div>
                      <div class="carousel-item">
                        <img src="https://anglo.edu.py/wp-content/uploads/2020/09/insight-image-online-teaching.jpg" style={{borderRadius:"10px"}} class="d-block w-100" alt="..."/>
                      </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                      <span class="carousel-control-next-icon" aria-hidden="true"></span>
                      <span class="visually-hidden">Next</span>
                    </button>
                    </div>
          


              <div className="div3">
              <h2 className="shadow-lg p-3 mb-5 bg-body rounded">What will you learn in Spoken English ?</h2>
                <ul>
                  <li >Personal Communication</li>
                  <li>Professional Communication</li>
                  <li>Correct Usage of Also and As well and Too</li>
                  <li>English Vocabulary</li>
                </ul>
                </div>

                <div className="div4">
              <h1 >About this English Course</h1>
              <p>
                  {showFullDescription ? (
                    <>
                      This online Spoken English course will introduce you to
                      the basics of communication skills. The course then
                      discusses concepts and the different elements of
                      communication. It will then enrich your knowledge of
                      different professional jargon and teach the correct usage
                      of such words in professional communication. It discusses
                      essential rules of verbal communication and their
                      components with relevant examples.
                      <br />
                      <br />
                      In addition, you will also learn homophones, the correct
                      usage of Also, As well, and Too, and the difference
                      between words like Alone and Lonely. This course
                      shares the importance of having a solid hold on English
                      vocabulary and having proper pronunciation and vocabulary
                      for some important English words at the end. You will be
                      equipped with the best skills to adapt to professional
                      communication.
                    </>
                  ) : (
                    <>
                      This online Spoken English course will introduce you to
                      the basics of communication skills. The course then
                      discusses concepts and the different elements of
                      communication.
                    </>
                  )}
                </p>
                {showFullDescription ? null : (
                  <button onClick={toggleDescription} className="btn btn-outline-info" style={{color:"#61677A"}}>
                    Read More
                  </button>
                )}
                
                </div>

                <div className="div6">
              <h1 className="shadow p-1 mb-5 body rounded border border-black">Course Outline</h1>
             
              <p className="dida3">
  <div className="dida"><a className="btn btn-light " data-bs-toggle="collapse" href="#multiCollapseExample1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1"> Q.1 Introduction to Communication Skills</a></div>
<br></br>
 
</p>
<div class="row">
  <div class="col">
    <div class="collapse multi-collapse" id="multiCollapseExample1">
      <div class="card card-body hello">
     <p> The course's first module introduces you to effective communication and discusses the essential elements of communication and empathy.</p>
 
      </div>
    </div>
  </div>
 
</div>

<br></br>

<p>
<div className="dida"><a className="btn btn-light" data-bs-toggle="collapse" href="#multiCollapseExample2" role="button" aria-expanded="false" aria-controls="multiCollapseExample2"> Q.2  What is Professional Communication?</a> </div>
<br></br>
 
</p>
<div class="row">
  <div class="col">
    <div class="collapse multi-collapse" id="multiCollapseExample2">
      <div class="card card-body hello">
     <p> In this course module, you will learn the basics of professional communication. Also, you will understand the importance of active listening and its role in professional communication. </p>
      </div>
    </div>
  </div>
 
</div>

<br></br>

<p>
<div className="dida"> <a className="btn btn-light" data-bs-toggle="collapse" href="#multiCollapseExample4" role="button" aria-expanded="false" aria-controls="multiCollapseExample4"> Q.3 Rules of Verbal Communication</a> </div>
 
</p>
<div class="row">
  <div class="col">
    <div class="collapse multi-collapse" id="multiCollapseExample4">
      <div class="card card-body hello">
     <p> In this course module, you will understand what verbal communication is all about. You will learn about the essential rules associated with it. It discusses the components of verbal communication and their categorizations with relevant examples. </p>
      </div>
    </div>
  </div>
 
</div>
                </div>
                <br></br>
                  <hr></hr>

                <div className="dida2"><span className="dida9">Frequently Asked Questions</span>
                <div><h4 className="dida1">Q. <span className="dida4">What are the prerequisites required to learn the Spoken English course?</span></h4>
                <p style={{color:"#61677A"}}>-> No prerequisites are required to learn this online Spoken English course.</p>
                </div>
                </div>

               
                <div><h4 className="dida1">Q. <span className="dida4">Is it worth learning Spoken English?</span></h4>
                <p style={{color:"#61677A"}}>-> Yes, Spoken English is one of the most demanded skills in any field, and English is one of the most used languages in the corporate world. Good personal and professional communication skills help you to present your ideas and opinions. </p>
                </div>

                

                <hr></hr>
                <br></br><br></br>
                <br></br><br></br>
                <hr></hr>

                <div className="d-flex flex-column justify-content-center w-100 h-auto dida5">
              <h2 style={{textDecoration:"underline"} }>Spoken English</h2>
                <p style={{marginTop:"20px"}}>
                <b>S</b>poken English refers to the ability to effectively communicate in English through speech. This includes proper pronunciation, grammar, vocabulary, and the ability to hold a conversation in a variety of situations.

                Spoken English is important for a number of reasons. In today's increasingly globalized world, the ability to speak English fluently is often seen as a valuable skill that can open doors to new opportunities in both personal and professional life. It can help with travelling, studying abroad, or working with international clients or colleagues. It can also increase self-confidence and improve communication skills in other areas of life.
                  <br></br>
                  <br></br><br></br>
                  <b>There are several ways to learn spoken English, including</b>
                  <br></br>
                  <br></br>
                  <div >
                    <ul className="dida6">
                  <li ><p><b>Immersion :</b> Surrounding yourself with English-speaking people, such as through travel or studying abroad, can help improve your speaking skills.</p></li>
                  </ul>
                  </div>
                  
                  <div >
                    <ul className="dida6">
                  <li><p><b>Practice:</b> Regularly speaking with native English speakers, or even just practising speaking English with friends or family, can help improve your speaking skills.</p></li>
                  </ul>
                  </div>

                  <div >
                    <ul className="dida6">
                  <li><p><b>English Courses:</b> Enrolling in a  spoken English course, either in-person or online, can help you learn spoken English in a structured setting. A spoken English course, in particular, can provide focused training on pronunciation, grammar, and conversation skills.</p></li>
                  </ul>
                  </div>

                  <div >
                    <ul className="dida6">
                  <li><p><b> Reading and Listening to English Materials:</b> Reading English books, watching English movies, and listening to English podcasts can help improve vocabulary, pronunciation, and comprehension skills.</p></li>
                  </ul>
                  </div>
                </p>
                
                </div>

              </div>
              </div>
              </div>
      </section>
      <div className="footer">
        <p className="f1">Trending Words</p>

        <ul className="trending-list">
          <li>Exquisite</li>
          <li>Resplendent</li>

          <li>Eloquent</li>
          <li>Opulent</li>

          <li>Magnificent</li>
          <li>Prestigious</li>
          <li>Impeccable</li>
          <li>Sophisticated</li>
          <li>Superlative</li>
          <li>Pinnacle</li>
          <li>Transcendent</li>
          <li>Grandiose</li>
          <li>Sumptuous</li>
          <li>Sterling</li>
          <li>Distinguished</li>
          <li>Majestic</li>
          <li>Splendid</li>
          <li>Admirable</li>
          <li>Regal</li>
          <li>Consummate</li>
          <li>Conversant</li>
          <li>Amiable</li>
          <li>Cordial</li>
          <li>Efficient</li>
        
        </ul>
      </div>
      </>
    )
  }
  
  export default Common;
