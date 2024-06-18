import React, { useState, useEffect } from 'react';
import logo from '../assets/footer_logo.png';
import { Navbar, Nav, Form, FormControl, Button, NavDropdown, InputGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faShoppingCart, faHeart } from '@fortawesome/free-solid-svg-icons';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import iconcard2 from '../assets/iconcard2.png';
import iconcard3 from '../assets/iconcard3.png';
import flagimg from '../assets/flagimg.png'
import Apicalls from '../Apicalls';
import { useSelector } from "react-redux";


function Nav_mini() {
    return (
        <section >
            <div className='container d-block d-lg-none ' >
                <Navbar >
                    <Navbar.Brand href="#home" className='nav_con '>
                        <a href='/'>        <img
                            src={logo}
                            width="80"
                            height="80"
                            className="d-inline-block align-top"
                            alt="Logo"
                        /></a>
                    </Navbar.Brand>

                    <div className='d-flex flex-row '>
                        <div className='mx-2' id='search'>
                            <Form inline className=''>
                                <div className="input-group">
                                    <FormControl
                                        type="text"
                                        placeholder="Search..."
                                        className="mr-sm-2 search_bar_mini"
                                    />
                                </div>
                            </Form>
                        </div>
                        <div className='mx-2'>
                            <a href="/usercart" style={{ textDecoration: 'none' }} ><button className="cart-button">
                                <i class="bi bi-person-fill"></i>
                            </button></a>
                        </div>
                        <div className='mx-2'>
                            <button className="list-button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">
                                <i class="bi bi-list"></i>
                            </button>
                        </div>
                    </div>
                </Navbar>
                <div
                    class="offcanvas offcanvas-start"
                    data-bs-scroll="true"
                    tabindex="-1"
                    id="offcanvasWithBothOptions"
                    aria-labelledby="offcanvasWithBothOptionsLabel"
                    style={{ width: '300px' }}
                >
                    <div class="offcanvas-header">
                        <h5 class="offcanvas-title" id="offcanvasWithBothOptionsLabel"></h5>
                        <button
                            type="button"
                            class="btn-close"
                            data-bs-dismiss="offcanvas"
                            aria-label="Close"
                        ></button>
                    </div>
                    <div class="offcanvas-body ">
                        {/* categories */}
                        <div>
                            <label><strong>Categories</strong></label>
                            <div className='men_btn m-3'><a href="./beauty" style={{ textDecoration: 'none', color: '#509264' }}>
                                Beauty</a> <hr />
                            </div>
                            <div className='men_btn m-3'><a href="./babycare" style={{ textDecoration: 'none', color: '#509264' }}>
                                Baby Care</a><hr />
                            </div>
                            <div className='men_btn m-3'><a href="./cleaning" style={{ textDecoration: 'none', color: '#509264' }}>
                                Cleaning Essential</a><hr />
                            </div>
                            <div className='men_btn m-3'><a href="./food" style={{ textDecoration: 'none', color: '#509264' }}>
                                Food</a><hr />
                            </div>
                            <div className='men_btn m-3'><a href="./green" style={{ textDecoration: 'none', color: '#509264' }}>
                                Green Packaging</a><hr />
                            </div>
                            <div className='men_btn m-3'><a href="./health" style={{ textDecoration: 'none', color: '#509264' }}>
                                Health & Wellness</a><hr />
                            </div>
                            <div className='men_btn m-3'><a href="./stationery" style={{ textDecoration: 'none', color: '#509264' }}>
                                Stationary</a><hr />
                            </div>
                        </div>
                        {/* Menu pages */}
                        <div style={{ paddingBottom: '50px' }}>
                            <label><strong>Menu</strong></label>
                            <div className='men_btn_main m-3'><a href="/about" style={{ textDecoration: 'none', color: 'black' }}>
                                About</a><hr />
                            </div>
                            <div className='men_btn_main m-3'><a href="/basic-vichaar" style={{ textDecoration: 'none', color: 'black' }}>
                                Basic Vichaar</a><hr />
                            </div>
                            <div className='men_btn_main m-3'><a href="/blog" style={{ textDecoration: 'none', color: 'black' }}>
                                Blogs</a><hr />
                            </div>
                            <div className='men_btn_main m-3'><a href="/nutritionist" style={{ textDecoration: 'none', color: 'black' }}>
                                Nutritionist’s Talk</a><hr />
                            </div>
                            <div className='men_btn_main m-3'><a href="/contact" style={{ textDecoration: 'none', color: 'black' }}>
                                Contact</a><hr />
                            </div>
                        </div>
                    </div>
                </div>



            </div>
        </section>
    );
}

function Mob_nav() {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        // Determine the initial active index based on the current URL path
        const currentPath = window.location.pathname;
        const initialActiveIndex = currentPath === '/' ? 0 : currentPath === '/usercart' ? 2 : currentPath === '/wishlist' ? 3 : currentPath === '/blog' ? 4 : 5;
        setActiveIndex(initialActiveIndex);
    }, []); // Run only once when the component mounts

    function activeLink(index) {
        setActiveIndex(index);
    }

    return (
        <div className='d-block d-lg-none bottom-fixed'>
            <div className='navigation '>
                <ul>
                    <li className={`list ${activeIndex === 0 ? 'active' : ''}`} onClick={() => activeLink(0)}>
                        <a href='/'>
                            <span className='icon'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" viewBox="0 0 25 25" fill="white" className='text-center'>
                                    <path d="M19.7915 9.07288L14.2363 4.75205C13.7488 4.37278 13.1487 4.16687 12.5311 4.16687C11.9134 4.16687 11.3134 4.37278 10.8259 4.75205L5.26963 9.07288C4.93572 9.33255 4.66556 9.6651 4.47979 10.0451C4.29402 10.4251 4.19755 10.8426 4.19775 11.2656V18.7656C4.19775 19.3181 4.41725 19.848 4.80795 20.2387C5.19865 20.6294 5.72855 20.8489 6.28109 20.8489H18.7811C19.3336 20.8489 19.8635 20.6294 20.2542 20.2387C20.6449 19.848 20.8644 19.3181 20.8644 18.7656V11.2656C20.8644 10.4083 20.4686 9.59892 19.7915 9.07288Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M16.6663 15.625C14.3643 17.0135 10.633 17.0135 8.33301 15.625" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </span>
                            {/* <span className='text'>Account</span> */}
                        </a></li>
                    <li className={`list ${activeIndex === 3 ? 'active' : ''}`} onClick={() => activeLink(3)}>
                        <a href='/wishlist'>
                            <span className='icon'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="30" fill="current" viewBox="0 0 16 10">
                                    <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314" />
                                </svg>
                            </span>
                            {/* <span className='text'>Search</span> */}
                        </a></li>
                    <li className={`list ${activeIndex === 2 ? 'active' : ''}`} onClick={() => activeLink(2)}>
                        <a href='/usercart'>
                            <span className='icon'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="black" class="bi bi-bag-dash pt-2" viewBox="0 0 18 14" className=''>
                                    <path fill-rule="evenodd" d="M5.5 10a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1-.5-.5" />
                                    <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z" />
                                </svg>

                            </span>
                            {/* <span className='text'>Cart</span> */}
                        </a></li>
                    <li className={`list ${activeIndex === 4 ? 'active' : ''}`} onClick={() => activeLink(4)}><a href='/blog'>

                        <span className='icon'><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 25 25" fill="white">
                            <path d="M12.5 11.4583C14.8012 11.4583 16.6667 9.59285 16.6667 7.29167C16.6667 4.99048 14.8012 3.125 12.5 3.125C10.1988 3.125 8.33333 4.99048 8.33333 7.29167C8.33333 9.59285 10.1988 11.4583 12.5 11.4583Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M6.25 21.875V19.7917C6.25 18.6866 6.68899 17.6268 7.47039 16.8454C8.25179 16.064 9.3116 15.625 10.4167 15.625H14.5833C15.6884 15.625 16.7482 16.064 17.5296 16.8454C18.311 17.6268 18.75 18.6866 18.75 19.7917V21.875" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg></span>
                        {/* <span className='text'>Home</span> */}
                    </a></li>
                    <li className={`list ${activeIndex === 5 ? 'active' : ''}`} onClick={() => activeLink(5)}><a href='/contact'>
                        <span className='icon'><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="black" class="bi bi-card-list" viewBox="0 0 16 15">
                            <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2z" />
                            <path d="M5 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 8m0-2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m0 5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m-1-5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0M4 8a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m0 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0" />
                        </svg></span>
                        {/* <span className='text'>Home</span> */}
                    </a></li>
                    <div className='indicator'></div>
                </ul>
            </div>
        </div>
    );
}

function Firstone() {
    const [subCategories, setSubCategories] = useState([])
    const [categories, setCategories] = useState([])
    const user = useSelector((state) => state.user.auth.user)

    useEffect(() => {
        Promise.all([
            Apicalls.get('sub-category'),
            Apicalls.get('category')
        ]).then(([subCategoriesData, categoryData]) => {
            setSubCategories(subCategoriesData.data)
            setCategories(categoryData.data)
        }).catch((err) => {
            console.log(err)
        })
    }, [])

    return (

        <>


            < section style={{ backgroundColor: "#EBF3E8" }}>

                <div className='container d-none d-lg-block'>

                    <Navbar expand="lg" >
                        <Navbar.Brand href="#home" className='nav_con'>
                            <a href='/'>        <img
                                src={logo}
                                width="80"
                                height="80"
                                className="d-inline-block align-top"
                                alt="Logo"
                            /></a>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav  " className='  nav_text' >
                            <Nav className="mr-auto nav_con_text_pp">
                                <Nav.Link href="/about" >About</Nav.Link>
                                <Nav.Link href="/basic-vichaar">Basic Vichaar</Nav.Link>
                                <Nav.Link href="/blog">Blog</Nav.Link>
                                <Nav.Link href="/nutritionist">Nutritionist’s Talk</Nav.Link>
                                <Nav.Link href="/contact">Contact Us</Nav.Link>
                                {/* <button className='become_vender  '>Become Vendor <i class="bi bi-arrow-right"></i></button> */}
                            </Nav>
                            <Form inline className='nav_con_search'>
                                <div className="input-group raf">
                                    <FormControl
                                        type="text"
                                        placeholder="Search..."
                                        className="mr-sm-2 search_bar"
                                    />
                                </div>
                            </Form>

                            {/* 
                            <div className="input-group-append ">
                                        <Button className='search_icon' variant="outline-secondary">
                                            <FontAwesomeIcon icon={faSearch} />
                                        </Button>
                                    </div> */}

                            <Nav className=" nav_con_main  d-flex   "  >
                                <div>
                                    <Nav.Link href={user?.ID ? '' : "/login"}>     <div className="    only_sm_login" style={{ display: 'inline-block', borderRadius: '50%', height: '40px', width: '40px', }}>

                                        <FontAwesomeIcon icon={faUser} />

                                    </div></Nav.Link></div>
                                <div className='mrgsm'>
                                    <Nav.Link href="/usercart">   <div className="only_cart_sm     only_sm_cart" style={{ display: 'inline-block', borderRadius: '50%', height: '40px', width: '40px', }}>
                                        <FontAwesomeIcon icon={faShoppingCart} style={{ color: '#ffffff' }} />
                                    </div></Nav.Link></div>
                                <div className='mrkkm'>
                                    <Nav.Link href="/wishlist">   <div className="only_wish_sm     only_sm_cart" style={{ display: 'inline-block', borderRadius: '50%', height: '40px', width: '40px', }}>
                                        <FontAwesomeIcon icon={faHeart} style={{ color: '#ffffff' }} />
                                    </div></Nav.Link></div>

                            </Nav>

                        </Navbar.Collapse>


                    </Navbar>

                </div>

            </section>

            <Nav_mini />
            <Mob_nav />


            <section className='' style={{ backgroundColor: "#509264" }}>
                <div className=' maaq_con nav_green_box p-2'>
                    <div class="marquee">

                        <div>
                            <img src={iconcard2} alt={iconcard2} className='img-fluid ' style={{ width: 20, height: 20 }} /> &nbsp; FREE SHIPPING ON ORDERS OVER RS.1500  &nbsp; |  &nbsp;
                            <img src={flagimg} alt={flagimg} className='img-fluid ' style={{ width: 20, height: 20 }} />  PAN INDIA  &nbsp;  |  &nbsp;
                            <img src={iconcard3} alt={iconcard3} className='img-fluid ' style={{ width: 20, height: 20 }} /> &nbsp; CASH ON DELIVERY |  &nbsp;
                            <img src={iconcard2} alt={iconcard2} className='img-fluid ' style={{ width: 20, height: 20 }} /> &nbsp; FREE SHIPPING ON ORDERS OVER RS.1500 | &nbsp;
                            <img src={flagimg} alt={flagimg} className='img-fluid ' style={{ width: 20, height: 20 }} /> &nbsp;   PAN INDIA  &nbsp; | &nbsp;
                            <img src={iconcard3} alt={iconcard3} className='img-fluid ' style={{ width: 20, height: 20 }} />  &nbsp; CASH ON DELIVERY &nbsp;
                            <img src={iconcard2} alt={iconcard2} className='img-fluid ' style={{ width: 20, height: 20 }} /> &nbsp; FREE SHIPPING ON ORDERS OVER RS.1500  &nbsp; |  &nbsp;
                            <img src={flagimg} alt={flagimg} className='img-fluid ' style={{ width: 20, height: 20 }} />  PAN INDIA  &nbsp;  |  &nbsp;
                            <img src={iconcard3} alt={iconcard3} className='img-fluid ' style={{ width: 20, height: 20 }} /> &nbsp; CASH ON DELIVERY |  &nbsp;

                            <img src={iconcard2} alt={iconcard2} className='img-fluid ' style={{ width: 20, height: 20 }} /> &nbsp; FREE SHIPPING ON ORDERS OVER RS.1500 | &nbsp;
                            <img src={flagimg} alt={flagimg} className='img-fluid ' style={{ width: 20, height: 20 }} /> &nbsp;   PAN INDIA  &nbsp; | &nbsp;
                            <img src={iconcard3} alt={iconcard3} className='img-fluid ' style={{ width: 20, height: 20 }} />  &nbsp; CASH ON DELIVERY &nbsp;  <img src={iconcard2} alt={iconcard2} className='img-fluid ' style={{ width: 20, height: 20 }} /> &nbsp; FREE SHIPPING ON ORDERS OVER RS.1500  &nbsp; |  &nbsp;
                            <img src={flagimg} alt={flagimg} className='img-fluid ' style={{ width: 20, height: 20 }} />  PAN INDIA  &nbsp;  |  &nbsp;
                            <img src={iconcard3} alt={iconcard3} className='img-fluid ' style={{ width: 20, height: 20 }} /> &nbsp; CASH ON DELIVERY |  &nbsp;

                            <img src={iconcard2} alt={iconcard2} className='img-fluid ' style={{ width: 20, height: 20 }} /> &nbsp; FREE SHIPPING ON ORDERS OVER RS.1500 | &nbsp;
                            <img src={flagimg} alt={flagimg} className='img-fluid ' style={{ width: 20, height: 20 }} /> &nbsp;   PAN INDIA  &nbsp; | &nbsp;
                            <img src={iconcard3} alt={iconcard3} className='img-fluid ' style={{ width: 20, height: 20 }} />  &nbsp; CASH ON DELIVERY &nbsp;    </div>


                    </div>

                </div>
            </section>


            < section className='shadow d-none d-lg-block' style={{ backgroundColor: "#ffffff" }}>
                <div className='container'>
                    <div className='d-flex nav_third_card '>
                        {
                            categories.map((category) => {
                                return <div ><p><a href={"/products/" + category.ID} style={{ textDecoration: 'none', color: 'black' }}>{category.categoryName}</a> </p> </div>
                            })
                        }
                        {/* <div ><p><a href="./beauty" style={{ textDecoration: 'none', color: 'black' }}>Beauty</a> </p> </div>
                        <div ><p><a href="./babycare" style={{ textDecoration: 'none', color: 'black' }}>Baby Care</a> </p> </div>
                        <div ><p><a href="./cleaning" style={{ textDecoration: 'none', color: 'black' }}>Cleaning Essentials</a> </p> </div>
                        <div ><p><a href="./food" style={{ textDecoration: 'none', color: 'black' }}>Food</a> </p> </div>
                        <div ><p><a href="./green" style={{ textDecoration: 'none', color: 'black' }}>Green Packaging</a> </p> </div>
                        <div ><p><a href="./health" style={{ textDecoration: 'none', color: 'black' }}> Health & Wellness</a> </p> </div>
                        <div ><p><a href="./stationery" style={{ textDecoration: 'none', color: 'black' }}>Stationery</a> </p> </div> */}
                        {/* <div ><p> Baby Care</p> </div>
                        <div ><p> Cleaning Essentials</p> </div>
                        <div ><p> Food</p> </div>
                        <div ><p> Green Packaging</p> </div>
                        <div ><p> Health & Welness</p> </div>
                        <div ><p> Stationery</p> </div> */}
                    </div>
                </div>
            </section>
            {/* <section className='d-block d-lg-none'>
                <div className='container '>
                    <Navbar expand="lg" className='nav-mini'>
                        <Navbar.Brand   >
                            <label><h6>Categorys</h6></label>
                        </Navbar.Brand>

                        <Navbar.Toggle aria-ccontrolers="basic-nav-bar-nav" style={{ fontSize: '0.8rem' }} />
                        <Navbar.Collapse id="basic-navbar-nav" className='nav_text'>
                            <Nav>
                                <Nav.Link href='./beauty'>Beauty</Nav.Link>
                                <Nav.Link href='./babycare'>Baby Care</Nav.Link>
                                <Nav.Link href='./cleaning'>Cleaning Essentials</Nav.Link>
                                <Nav.Link href='./food'>Food</Nav.Link>
                                <Nav.Link href='./green'>Green Packaging</Nav.Link>
                                <Nav.Link href='./health'>Health & Wellness</Nav.Link>
                                <Nav.Link href='./stationery'>Stationary</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </div>

            </section> */}
        </>


    );


}



export default Firstone;