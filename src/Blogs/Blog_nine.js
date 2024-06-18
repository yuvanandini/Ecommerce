import React from 'react'
import { Nav, NavDropdown, Navbar, Container } from 'react-bootstrap'

// Images
import blog_instagram from '../assets/blog_instagram.png'
import facebook from '../assets/facebook.png'
import share from '../assets/share.png'
import blog_twitter from '../assets/blog_twitter.png'
import blogtitlepage_img1 from '../assets/blogtitlepage_img1.png'
import news from '../assets/news.png'
import hot_news from '../assets/hot_news.png'
import blogimg2_sample from '../assets/blogimg2_sample.png'
import comment_img from '../assets/comment_img.png'

function Blog_nine() {
  return (
    <>
    <div className='blogdetails_section1 mt-5'>
    <div className='container'>
        <div className='row'>
            <div className='col-lg-8 col-md-8 col-sm-12'>
                <h1 className='section1_heading1'>Omega-3 in a Vegan Diet</h1>
                <p className='section1_paragraph1'>VEGAN VICHAAR</p>
                <div className='row'>
                    <div className='col-lg-6 col-md-5 col-sm-6'>
                        <p>November 16, 2023 7:36 PM</p> 
                    </div>
                    <div className='col-lg-6 col-md-7 col-sm-6 '>
                    <div className='socialmedia'>
                        <img src={share} alt={share} className='img-fluid '/>
                        <img src={blog_instagram} alt={blog_instagram} className='img-fluid ms-3'/>
                        <img src={facebook} alt={facebook} className='img-fluid ms-3'/>
                        <img src={blog_twitter} alt={blog_twitter} className='img-fluid ms-3'/>
                    </div>  
                    </div>
                </div>
                <img src={blogtitlepage_img1} alt={blogtitlepage_img1} className='img-fluid'/>
                <p className='section1_paragraph2'>Omega-3 fatty acids are essential for heart and brain health. While traditionally found in fish, vegans can still benefit by choosing plant-based sources. These healthy fats support heart function, reduce inflammation, and boost brain performance. 
                </p>
                <p className='section1_paragraph2'> So, even without fish, vegans can maintain a nutritious diet and enjoy the perks of omega-3s. It's a win-win for health-conscious plant eaters!</p>


                <h1 className='journey_heading'>Understanding Omega-3 Fatty Acids:</h1>
                <p className='journey_paragraph1'>Omega-3 fatty acids are polyunsaturated fats categorized into three main types: alpha-linolenic acid (ALA), Eicosapentaenoic Acid (EPA), and Docosahexaenoic Acid (DHA). While ALA is primarily found in plant sources, EPA and DHA are predominantly sourced from marine life. Vegans, however, can efficiently obtain the required omega-3 fatty acids by incorporating specific plant-based foods into their diets.</p>
                <img src={blogtitlepage_img1} alt={blogtitlepage_img1} className='img-fluid'/>

                <h1 className='teastore_heading'>Optimizing Omega-3 Intake on a Vegan Diet</h1>
                <p className="teastore_paragraph">On a vegan journey, obtaining essential omega-3 fatty acids is easily achievable through plant-based sources such as flaxseeds, chia seeds, walnuts, hemp seeds, and algal oil supplements. Flaxseeds stand out, packing an impressive 2,400 mg of omega-3 in just one tablespoon, while options like walnuts and chia seeds offer convenient and delicious ways to boost intake. Algal oil supplements provide a sustainable and cruelty-free source of vegan DHA, essential for supporting vital bodily functions.</p>
                <p className='teastore_paragraph'>Supplementation may be necessary for some individuals to ensure optimal omega-3 levels, especially considering the importance of maintaining a balance between omega-3 and omega-6 fatty acids for overall health. By prioritizing whole, unprocessed foods and mindful oil consumption, vegans can unlock the power of omega-3, supporting personal well-being and contributing to a more sustainable and compassionate world.</p>
            </div>
            <div className='col-lg-4 col-md-4 col-sm-12 d-none d-md-block'>
                <div className='row'>
                    <div className='col-lg-12 col-md-12 col-sm-12'>
                        <div className='d-flex flex-row'>
                            <h1 className='hotnews_heading'>Hot News</h1>
                            <img src={hot_news} alt={hot_news} className='img-fluid'/>
                        </div>
                    </div>
                    <div className='col-lg-4 col-md-12 col-sm-12'>
                        <div className='d-flex flex-row justify-content-center'>
                            <img src={blogimg2_sample} alt={blogimg2_sample} className='img-fluid'/>
                        </div>
                    </div>
                    <div className='col-lg-8 col-md-12 col-sm-12'>
                    <p className='news_para1 mt-2 text-center'>Veganism: A Mindful Lifestyle for Everyone</p>
                    </div>
                    <div className='col-lg-4 col-md-12 col-sm-12'>
                        <div className='d-flex flex-row justify-content-center'>
                            <img src={blogimg2_sample} alt={blogimg2_sample} className='img-fluid'/>
                        </div>
                    </div>
                    <div className='col-lg-8 col-md-12 col-sm-12'>
                    <p className='news_para1 mt-2 text-center'>Veganism: A Mindful Lifestyle for Everyone</p>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-lg-12 col-md-12 col-sm-12'>
                        <div className='d-flex flex-row mt-3'>
                            <h1 className='hotnews_heading'>TRENDING NEWS</h1>
                            <img src={news} alt={news} className='img-fluid'/>
                        </div>
                    </div>
                    <div className='col-lg-4 col-md-12 col-sm-12'>
                        <div className='d-flex flex-row justify-content-center'>
                            <img src={blogimg2_sample} alt={blogimg2_sample} className='img-fluid'/>
                        </div>
                    </div>
                    <div className='col-lg-8 col-md-12 col-sm-12'>
                    <p className='news_para1 mt-2 text-center'>Revealing Remedy of Masala Chai: The Chai History with The Tea Shore</p>
                    </div>
                    <div className='col-lg-4 col-md-12 col-sm-12'>
                        <div className='d-flex flex-row justify-content-center'>
                            <img src={blogimg2_sample} alt={blogimg2_sample} className='img-fluid'/>
                        </div>
                    </div>
                    <div className='col-lg-8 col-md-12 col-sm-12'>
                    <p className='news_para1 mt-2 text-center'>Veganism’s Positive Impact on the Ecosystem: Lessons from COVID-19</p>
                    </div>
                    <div className='col-lg-4 col-md-12 col-sm-12'>
                        <div className='d-flex flex-row justify-content-center'>
                            <img src={blogimg2_sample} alt={blogimg2_sample} className='img-fluid'/>
                        </div>
                    </div>
                    <div className='col-lg-8 col-md-12 col-sm-12'>
                    <p className='news_para1 mt-2 text-center'>Embracing Vegan Living: One Switch at a Time with Vegan Vichar</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
   </div>

<div className='blogdetails_section2 mt-5' style={{background:'#F9F7F080'}}>
<div className="container">
    <div className='row'>
        <div className='col-lg-8 col-md-8 col-sm-12'>
            <h1 className='section2_heading1 text-center mt-4'>leave a comment</h1>
            <p className='section2_paragraph text-center'>And join the conversation</p>
            <div className='d-flex flex-row justify-content-center'>
                <input type="text" placeholder='| write something .....' className='write_something'/>
            </div>
            <div  className='d-flex flex-row justify-content-center'>
                <button className='comment_button mt-3'>comment</button>
            </div>

            <div className='d-flex flex-row justify-content-center mt-5'>
                <img src={comment_img} alt={comment_img} className='img-fluid'/>
                <div className='ms-4' >
                    <h1 className='comment_name'>Teja Mallipudi</h1>
                    <p className='comment_para'>And join the conversation</p>
                </div>
            </div>
            <div className='d-flex flex-row justify-content-center mt-4'>
                <img src={comment_img} alt={comment_img} className='img-fluid'/>
                <div className='ms-4' >
                    <h1 className='comment_name'>ram pinapothula </h1>
                    <p className='comment_para'>And join the conversation</p>
                </div>
            </div>
            <div className='d-flex flex-row justify-content-center mt-4'>
                <img src={comment_img} alt={comment_img} className='img-fluid'/>
                <div className='ms-4'>
                    <h1 className='comment_name'>Satya</h1>
                    <p className='comment_para'>And join the conversation</p>
                </div>
            </div>
        </div>
    </div>
</div>
</div>

  </>
  )
}

export default Blog_nine