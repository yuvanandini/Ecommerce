// import React from 'react'
import React, { useEffect, useRef, useState } from 'react';
import { Navbar, Nav, NavDropdown, Container, Row, Col, Collapse, Accordion, Button, Card, Modal } from 'react-bootstrap';
import '../App.css';
import Nutritionistpage_Image1 from '../assets/flower03.png'
import Nutritionpage_Image2 from '../assets/Nutritionpage_Image2.png'
import Nutritionpage_Image3 from '../assets/Nutritionpage_Image3.png'
import Nutritionpage_Image4 from '../assets/Nutritionpage_Image4.png'
import Nutritionpage_Image5 from '../assets/Nutritionpage_Image5.png'
import person from '../assets/person.png'
import axios from 'axios';
import Apicalls from '../Apicalls';

export default function Nutritionist() {


  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const [showSecondPara, setShowSecondPara] = useState(false);
  const [showIcon, setShowIcon] = useState(false)

  // Function to toggle the visibility of the second paragraph
  const toggleSecondPara = () => {
    setShowSecondPara(!showSecondPara);
  };


  function checkBodyWidth() {
    const bodyWidth = document.body.clientWidth;
    if (bodyWidth > 780) {
      if (!showIcon) {
        setShowIcon(true)
      }
    } else {
      if (showIcon) {
        setShowIcon(false)
      }
    }
  }

  useEffect(() => {
    checkBodyWidth();
  })

  window.addEventListener('resize', checkBodyWidth);

  const [showSecondPara2, setShowSecondPara2] = useState(false);

  // Function to toggle the visibility of the second paragraph
  const toggleSecondPara2 = () => {
    setShowSecondPara2(!showSecondPara2);
  };

  const [showSecondPara3, setShowSecondPara3] = useState(false);

  // Function to toggle the visibility of the second paragraph
  const toggleSecondPara3 = () => {
    setShowSecondPara3(!showSecondPara3);
  };
  const [data, setData] = useState([]);



  const [showFullDescription, setShowFullDescription] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [queries, setQueries] = useState([]);

  useEffect(() => {
    Promise.all([
      Apicalls.get('queries'),
    ]).then(([queriesData]) => {
      setQueries(queriesData.data)
    }).catch((err) => {
      console.log(err)
    })
  }, [])

  // const toggleAccordion1 = () => {
  //   setOpen1(!open1);
  // };

  // const toggleAccordion2 = () => {
  //   setOpen2(!open2);
  // };

  // const toggleAccordion3 = () => {
  //   setOpen3(!open3);
  // };

  return (
    <>
      {/* <Firstone/> */}
      <section className=" full_bg">
        <div className="Nutrition_section1">
          <Container>
            <div className="d-flex flex-row justify-content-end only for_heading_talk  ">
              <h3 className="Nutritionist_heading    pt-3">Nutritionist Talk </h3>
              <img src={Nutritionistpage_Image1} alt={Nutritionistpage_Image1} className='d-none d-md-block' />
            </div>
          </Container>
        </div>
      </section>
      <div className="Nutrition_section2">
        <Container>
          <Row>
            <Col lg={6} md={6} sm={12}>
              <img src={Nutritionpage_Image2} alt={Nutritionpage_Image2} className="img-fluid round shradhha_img" />
            </Col>
            <Col lg={6} md={6} sm={12} className='d-flex flex-column justify-content-center'>
              <p className="Nutritionist_paragraph1 mt-3">About</p>
              <p className="Nutritionist_paragraph2 ">Shradhha D Toshniwal</p>
              <p className="Nutritionist_paragraph3">Hello, I’m the founder of Fit Fuel by Shraddha, an award-winning Nutritionist & Dietician, and a lifestyle coach based in Pune, India. Previously, I served as the DIRECTOR of “Fat to Slim” from 2020 until mid-2023.
              </p>
              <p className="Nutritionist_paragraph3">I refined my skills in crafting personalized and sustainable nutrition plans, gaining valuable insights into the challenges individuals face on their weight loss journeys.</p>
              <p className="Nutritionist_paragraph3">What sets my approach apart is that I steer clear of fad diets, keto trends, or extravagant salads that deprive individuals of their favourite foods. As a dedicated diet and nutrition expert, I recognize the significance of fostering confidence and comfort in one’s own skin and body. Personally, in 2019, I successfully shed 17 kilograms through the diet plans I devised, and now I’m extending these effective plans to individuals worldwide.</p>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="Nutrition_section3 mt-5 pt-4">
        <Container>
          <Row className="d-flex flex-row justify-content-evenly">
            <Col lg={5} md={5} sm={12}>
              <div className="card2 shadow">
                <div className="d-flex flex-row justify-content-center">
                  <img src={Nutritionpage_Image3} alt={Nutritionpage_Image3} className="img-fluid Nutrition_Image3" />
                </div>
                <p className="p-2 paragraph4 text-center">Book you First Consultation Call</p>
                <div className="d-flex flex-row justify-content-center">
                  <a href='https://pages.razorpay.com/pl_JvAH3LfVxurrGi/view' target='blank'>    <button className=" booknow_button shadow">Book Now</button>  </a>
                </div>
              </div>

            </Col>
            <Col lg={5} md={5} sm={12}>
              <div className="card2 mob_card2 shadow">
                <div className="d-flex flex-row justify-content-center">
                  <img src={Nutritionpage_Image4} alt={Nutritionpage_Image4} className="img-fluid Nutrition_Image3 Nutrition_Image4 " />
                </div>
                <p className="p-2 paragraph4 text-center ">Are You Wedding Day Ready?</p>
                <div className="d-flex flex-row justify-content-center">
                  <a href='https://fitfuelbyshradha.ck.page/69e4032bd0' target='blank'  >    <button className=" booknow_button shadow">Book Now</button>  </a>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>





      {/* <div className="Nutrition_section4">
        <Container>
          <Row>
            <Col lg={12} md={12} sm={12}>
              <div className="d-flex flex-row justify-content-center mt-5">
                 <button className='ask_button'>Ask Question</button>
                <img src={Nutritionpage_Image5} alt={Nutritionpage_Image5} className="img-fluid ms-3" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>


      <div className='container'>
                <div className='row d-flex flex-row justify-content-center mt-5'>
                    <div className='card col-lg-6 col-sm-12'>
                        <div className='d-flex flex-row justify-content-center mt-5'>
                            <button className='ask_button_product'>Ask Question</button> 
                            <img src={Nutritionpage_Image5} alt={Nutritionpage_Image5} className="img-fluid ms-3 ask_img_product" />
                        </div>
                        <div className='col-8   qus_div_ms    mt-3'>
                            <div className=' '>
                                <p className='review_para_text'>Q: &nbsp;  Got a Question? Ask Away!</p>
                                <textarea className='form-control text_area_ask'  ></textarea>
                            </div>
                        </div>
                        <div className='m-3 pe-4 d-flex flex-row justify-content-end'>
                            <button className='ask_button_product_page'>Submit</button>
                        </div>
                    </div>
                </div>
      </div> */}



      <div>
        <div className="Nutrition_section4">
          <Container>
            <Row>
              <Col lg={12} md={12} sm={12}>
                <div className="d-flex flex-row justify-content-center mt-5">
                  <button className='ask_button' onClick={handleShowModal}>Ask Question</button>
                  <img src={Nutritionpage_Image5} alt={Nutritionpage_Image5} className="img-fluid ms-3" />
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        <Modal show={showModal} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>Ask Question</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
              <p><strong>Note:</strong> Please wait we will reply shortly ....</p>
            </div>
            <div className=' ps-4 pe-4'>
              <div>
                <p className='review_para_text'>Name</p>
                <input type='text' placeholder='Enter your Name' className='form-control' />
              </div>
            </div>
            <div className=' ps-4 pe-4'>
              <div>
                <p className='review_para_text'>Email</p>
                <input type='email' placeholder='Enter your email' className='form-control' />
              </div>
            </div>
            <div className=' ps-4 pe-4'>
              <div>
                <p className='review_para_text'>Q: &nbsp; Got a Question? Ask Away!</p>
                <textarea className='form-control  '></textarea>
              </div>
            </div>

          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
              Close
            </Button>
            <Button className=' submit_button_review' onClick={handleCloseModal}>
              Submit
            </Button>
          </Modal.Footer>
        </Modal>
      </div>








      {queries.map((query, index) => {

        const toggleDescription = () => {
          setShowFullDescription(!showFullDescription);
        };

        return (
          <section className='mt-3' key={index}>
            <div className='container Nutrition_section5'>
              <div className='row'>
                <div className='col-12'>
                  <h1 className="Nutritionist_heading3 text-center mt-5">Will I get a good amount of protein from a vegan diet?</h1>
                </div>
                <div className="mob_view_qa">
                  <div className='row'>
                    <div className='col-3 col-md-6 col-lg-3'>
                      <img src={person} alt="Person" className="img-fluid persongimg" />
                    </div>
                    <div className='col-7 col-sm-5 col-md-6 col-lg-9'>
                      <p className="review_card_paragraph1">Asked By</p>
                      <h3 className="Nutritionist_heading4">Rajasekaran</h3>
                      <div className="d-flex flex-row">
                        <p className="review_card_paragraph2">Feb 1, 2024</p>
                        <p className="ms-3">|</p>
                        <p className="review_card_paragraph2 ms-3">2:37pm</p>
                      </div>
                    </div>
                    <div className='d-block d-md-none col-2 col-sm-4'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none" onClick={() => setOpen3(!open3)} className='qa_chevron'>
                        <path d={!open3 ? "M18.3413 15.3143L12.3239 9.33171L6.34136 15.3491" : "M18.3413 9.6857L12.3239 15.6683L6.34136 9.65088"} stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Container for the paragraph and "Read More" link */}
                <div className='col-12'>
                  <div className="rounded p-3"> {/* Background color container */}
                    {/* Render only the first paragraph initially */}
                    <p className="review_card_paragraph">
                      {query.description.split('\n')[0]}
                    </p>

                    {/* Show the full description when "Read More" is clicked */}
                    {showFullDescription && (
                      <p className="review_card_paragraph">
                        {query.description}
                      </p>
                    )}

                    {/* Render "Read More" link only if the description has multiple paragraphs */}
                    {query.description.split('\n').length > 1 && (
                      <a className='read_more_drop_down_nutres' onClick={toggleDescription}>
                        {showFullDescription ? 'Read Less' : 'Read More...'}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}




      {/* <section className='  mt-3'>
        <div className='container Nutrition_section5'>
          <div className='row'>
            <div className='col-12'>
              <h1 className="Nutritionist_heading3 text-center mt-5">Will I get a good amount of protein from a vegan diet?</h1>
            </div>
            <div className="mob_view_qa">
              <div className='row'>
                <div className='col-3 col-md-6 col-lg-3'>
                  <img src={person} alt="Person" className="img-fluid persongimg" />
                </div>
                <div className='col-7 col-sm-5 col-md-6 col-lg-9'>
                  <p className="review_card_paragraph1">Asked By</p>
                  <h3 className="Nutritionist_heading4">Rajasekaran</h3>
                  <div className="d-flex flex-row">
                    <p className="review_card_paragraph2">Feb 1, 2024</p>
                    <p className="ms-3">|</p>
                    <p className="review_card_paragraph2 ms-3">2:37pm</p>
                  </div>
                </div>
                <div className='d-block d-md-none col-2 col-sm-4'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none" onClick={() => setOpen2(!open2)} className='qa_chevron'>
                    <path d={!open2 ? "M18.3413 15.3143L12.3239 9.33171L6.34136 15.3491" : "M18.3413 9.6857L12.3239 15.6683L6.34136 9.65088"} stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </div> */}

      {/* Container for the paragraph and "Read More" link */}
      {/* {
              (open2 || showIcon) && <div className='col-12'>
                <div className="rounded p-3"> */}
      {/* Background color container */}
      {/* <p className="review_card_paragraph"> Absolutely! A well-planned vegan diet can provide you with an adequate amount of protein. While animal products are typically high in protein, there are plenty of plant-based sources that can meet your protein needs.</p> */}

      {/* Show the second paragraph if showSecondPara is true */}
      {/* {showSecondPara2 && (
                    <p className="review_card_paragraph"> Absolutely! A well-planned vegan diet can provide you with an adequate amount of protein. While animal products are typically high in protein, there are plenty of plant-based sources that can meet your protein needs.

                      <br></br><br></br>
                      <br></br>
                      Absolutely! A well-planned vegan diet can provide you with an adequate amount of protein. While animal products are typically high in protein, there are plenty of plant-based sources that can meet your protein needs.</p>
                  )} */}

      {/* Toggle the visibility of the second paragraph when the "Read More" link is clicked */}
      {/* <a className='read_more_drop_down_nutres' onClick={toggleSecondPara2}>{showSecondPara2 ? 'Read Less' : 'Read More...'}</a>
                </div>
              </div>
            }
          </div>
        </div>
      </section> */}




      {/* <section className='  mt-3'>
        <div className='container Nutrition_section5'>
          <div className='row'>
            <div className='col-12'>
              <h1 className="Nutritionist_heading3 text-center mt-5">Will I get a good amount of protein from a vegan diet?</h1>
            </div>
            <div className="mob_view_qa">
              <div className='row'>
                <div className='col-3 col-md-6 col-lg-3'>
                  <img src={person} alt="Person" className="img-fluid persongimg" />
                </div>
                <div className='col-7 col-sm-5 col-md-6 col-lg-9'>
                  <p className="review_card_paragraph1">Asked By</p>
                  <h3 className="Nutritionist_heading4">Rajasekaran</h3>
                  <div className="d-flex flex-row">
                    <p className="review_card_paragraph2">Feb 1, 2024</p>
                    <p className="ms-3">|</p>
                    <p className="review_card_paragraph2 ms-3">2:37pm</p>
                  </div>
                </div>
                <div className='d-block d-md-none col-2 col-sm-4'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none" onClick={() => setOpen1(!open1)} className='qa_chevron'>
                    <path d={!open1 ? "M18.3413 15.3143L12.3239 9.33171L6.34136 15.3491" : "M18.3413 9.6857L12.3239 15.6683L6.34136 9.65088"} stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </div>

            <div className='d-block d-md-none'>
              {
                (open1 || showIcon) && <div className='col-12'>
                  <div className="rounded p-3">  */}
      {/* Background color container */}
      {/* <p className="review_card_paragraph"> Absolutely! A well-planned vegan diet can provide you with an adequate amount of protein. While animal products are typically high in protein, there are plenty of plant-based sources that can meet your protein needs.</p> */}

      {/* Show the second paragraph if showSecondPara is true */}
      {/* {showSecondPara3 && (
                      <p className="review_card_paragraph"> Absolutely! A well-planned vegan diet can provide you with an adequate amount of protein. While animal products are typically high in protein, there are plenty of plant-based sources that can meet your protein needs.

                        <br></br><br></br>
                        Absolutely! A well-planned vegan diet can provide you with an adequate amount of protein. While animal products are typically high in protein, there are plenty of plant-based sources that can meet your protein needs.</p>
                    )} */}

      {/* Toggle the visibility of the second paragraph when the "Read More" link is clicked */}
      {/* <a className='read_more_drop_down_nutres' onClick={toggleSecondPara3}>{showSecondPara3 ? 'Read Less' : 'Read More...'}</a>
                  </div>
                </div>
              }
            </div>
          </div>
        </div>
      </section> */}




      {/* 


       
        <div className="Nutrition_section5 mt-3" onClick={toggleAccordion1} style={{ cursor: 'pointer' }}>
          <div className='container'>
            <div className='row'>
              <div className=' ' >
                <h1 className="Nutritionist_heading3 text-center mt-5">Will I get good amount of protein from vegin diet?</h1>
              </div>
              <div className="mob_view_qa">
                <div className='row'>
                  <div className='col-3 col-md-6 col-lg-3'  >
                    <img src={person} alt="Person" className="img-fluid persongimg" />
                  </div>
                  <div className='col-7 col-sm-5 col-md-6  col-lg-9' >
                    <p className="review_card_paragraph1">Asked By</p>
                    <h3 className="Nutritionist_heading4">Rajasekaran</h3>
                    <div className="d-flex flex-row">
                      <p className="review_card_paragraph2">Feb 1, 2024</p>
                      <p className="ms-3">|</p>
                      <p className="review_card_paragraph2 ms-3">2:37pm</p>
                    </div>
                  </div>
                  <div className='d-block d-md-none  col-2 col-sm-4'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none" onClick={() => setOpen3(!open3)} className='qa_chevron'>
                      <path d="M18.3413 15.3143L12.3239 9.33171L6.34136 15.3491" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>

                  </div>
                </div>
              </div>

              <div className='d-none d-md-block col-12  '>
                <p className="review_card_paragraph">
                  Absolutely! A well-planned vegan diet can provide you with an adequate amount of protein. While animal products are typically high in protein, there are plenty of plant-based sources that can meet your protein needs.{' '}
                  <span className="readmore" onClick={() => setOpen3(!open3)}>
                    Read more
                  </span>
                </p>
              </div>

            </div>
          </div>
        </div>
        <Collapse in={open1}>

          <div className='container'>
            <div className='row'>
              <div className=''  >
                <p className="review_card_paragraph">Absolutely! A well-planned vegan diet can provide you with an adequate amount of protein. While animal products are typically high in protein, there are plenty of plant-based sources that can meet your protein needs. Foods such as legumes (beans, lentils, chickpeas), tofu, tempeh, seitan, quinoa, chia seeds, hemp seeds, and certain vegetables like broccoli and spinach are all excellent sources of protein.
                  It's important to ensure variety in your diet to get a wide range of amino acids that make up complete proteins. Additionally, incorporating complementary foods such as combining grains with legumes or nuts with grains can enhance the quality and quantity of protein in your meals. If you have specific dietary requirements or concerns about meeting your protein needs on a vegan diet, consulting a registered dietitian or nutritionist can be beneficial to help you create a balanced meal plan tailored to your needs.  More</p>
                </div>
              </div>
            </div>
          </div>
    </Collapse>
        <div class Name="Nutrition_section5 mt-3" onClick={toggleAccordion2} style={{ cursor: 'pointer' }}>
        <Container>
          <Row>
            <Col lg={12} md={12} sm={12}>
              <h1 className="Nutritionist_heading3 text-center mt-5">Will I get good amount of protein from vegin diet?</h1>
            </Col>
          <Col lg={12} md={12} sm={12} xs={12} className="mob_view_qa">
              <Row>
              <Col lg={3} md={6} sm={3} xs={3}>
                <img src={person} alt="Person" className="img-fluid persongimg" />
                Col>
              <Col lg={9} md={6} sm={5} xs={7}>
                <p className="review_card_paragraph1">Asked By</p>
                <h3 className="Nutritionist_heading4">Rajasekaran</h3>
                <div className="d-flex flex-row">
                  <p className="review_card_paragraph2">Feb 1, 2024</p>
                  <p className="ms-3">|</p>
                  <p className="review_card_paragraph2 ms-3">2:37pm</p>
                  div>
                Col>
              <Col sm={4} xs={2} className='d-block d-md-none'>
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none" onClick={() => setOpen3(!open3)} className='qa_chevron'>
                  <path d="M18.3413 15.3143L12.3239 9.33171L6.34136 15.3491" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  svg>
                Col>
              Row>
          
        
                <Col lg={12} md={12} sm={12} xs={12} className='d-none d-md-block'>
            <p className="review_card_paragraph">
              Absolutely! A well-planned vegan diet can provide you with an adequate amount of protein. While animal products are typically high in protein, there are plenty of plant-based sources that can meet your protein needs.{' '}
              <span className="readmore" onClick={() => setOpen3(!open3)}>
                Read more
                span>
              p>
            Col>
          w>
    </Container>    
        </div>    
        ollapse in={open2}>
          <div>
            <Container>
              <Row>
                <Col lg={12} md={12} sm={12} xs={12}>
                  <p className="review_card_paragraph">Absolutely! A well-planned vegan diet can provide you with an adequate amount of protein. While animal products are typically high in protein, there are plenty of plant-based sources that can meet your protein needs. Foods such as legumes (beans, lentils, chickpeas), tofu, tempeh, seitan, quinoa, chia seeds, hemp seeds, and certain vegetables like broccoli and spinach are all excellent sources of protein.
                  It's important to ensure variety in your diet to get a wide range of amino acids that make up complete proteins. Additionally, incorporating complementary foods such as combining grains with legumes or nuts with grains can enhance the quality and quantity of protein in your meals. If you have specific dietary requirements or concerns about meeting your protein needs on a vegan diet, consulting a registered dietitian or nutritionist can be beneficial to help you create a balanced meal plan tailored to your needs.  More</p>
                </Col>
              </Row>
              </Container>
          </div>
    </Collaps e> 
         
      <div className="Nutrition_section5 mt-3" onClick={toggleAccordion3} style={{ cursor: 'pointer' }}>
      <Container>
          <Row>
            <Col lg={12} md={12} sm={12}>
              <h1 className="Nutritionist_heading3 text-center mt-5">Will I get good amount of protein from vegin diet?</h1>
            </Col>
            <Col lg={12} md={12} sm={12} xs={12} className="mob_view_qa">
                <Row>
                  <Col lg={3} md={6} sm={3} xs={3}>
                    <img src={person} alt="Person" className="img-fluid persongimg" />
                  </Col>
                  <Col lg={9} md={6} sm={5} xs={7}>
                    <p className="review_card_paragraph1">Asked By</p>
                    <h3 className="Nutritionist_heading4">Rajasekaran</h3>
                    <div className="d-flex flex-row">
                      <p className="review_card_paragraph2">Feb 1, 2024</p>
                      <p className="ms-3">|</p>
                      <p className="review_card_paragraph2 ms-3">2:37pm</p>
                    </div>
                  </Col>
                  <Col sm={4} xs={2} className='d-block d-md-none'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none" onClick={() => setOpen3(!open3)} className='qa_chevron'>
                      <path d="M18.3413 15.3143L12.3239 9.33171L6.34136 15.3491" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  
                  </Col>
                </Row>
              </Col>

              <Col lg={12} md={12} sm={12} xs={12} className='d-none d-md-block'>
                <p className="review_card_paragraph">
                  Absolutely! A well-planned vegan diet can provide you with an adequate amount of protein. While animal products are typically high in protein, there are plenty of plant-based sources that can meet your protein needs.{' '}
                  <span className="readmore" onClick={() => setOpen3(!open3)}>
                    Read more
                  </span>
                </p>
              </Col>

          </Row>
        </Container >
        </div>    
      <Collapse in={open3}>
        <div>
          <Container>
            <Row>
              <Col lg={12} md={12} sm={12} xs={12}>
                <p className="review_card_paragraph">Absolutely! A well-planned vegan diet can provide you with an adequate amount of protein. While animal products are typically high in protein, there are plenty of plant-based sources that can meet your protein needs. Foods such as legumes (beans, lentils, chickpeas), tofu, tempeh, seitan, quinoa, chia seeds, hemp seeds, and certain vegetables like broccoli and spinach are all excellent sources of protein.
                It's important to ensure variety in your diet to get a wide range of amino acids that make up complete proteins. Additionally, incorporating complementary foods such as combining grains with legumes or nuts with grains can enhance the quality and quantity of protein in your meals. If you have specific dietary requirements or concerns about meeting your protein needs on a vegan diet, consulting a registered dietitian or nutritionist can be beneficial to help you create a balanced meal plan tailored to your needs.  More</p>
              </Col>
            </Row>
          </Container>
        </div>
      </Collapse>     
    </div >        
           
         */}
       

    </>
      )
}
