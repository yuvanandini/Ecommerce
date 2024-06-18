import React, { useState, useEffect } from 'react';
import Apicalls, { post_url } from '../Apicalls';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Carousel, Container, Row, Col, Button, Card, Modal, Navbar } from 'react-bootstrap';

import maximize from '../assets/maximize-2.png';
import buycard from '../assets/buycard.png';
import natural from '../assets/natural.png'
import gmo from '../assets/gmo.png'
import no_presetives from '../assets/no_presettives.png'
import gluten from '../assets/gulten_free.png'
import iconcard2 from '../assets/iconcard2.png';
import iconcard3 from '../assets/iconcard3.png';
import flagimg from '../assets/flagimg.png';
import { faTruckFast } from '@fortawesome/free-solid-svg-icons';
import { faBox } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import BuyProduct from '../Categorys/BuyProduct';


// import { Carousel, Container, Row, Col, Button, Card, Modal, Navbar } from 'react-bootstrap';




const UserCart = () => {

    // const [cartItems, setCartItems] = useState([]);

    // useEffect(() => {
    //     const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    //     setCartItems(storedCartItems);
    // }, []);

    // const [quantity, setQuantity] = useState(1);
    // const increment = () => {
    //     setQuantity(quantity + 1);
    // };

    // const decrement = () => {
    //     if (quantity > 1) { // prevent quantity from going below 1
    //         setQuantity(quantity - 1);
    //     }
    // };





    // return (
    //     <>
    //         <div className='d-none d-md-block'>
    //             <div className='container my-5'>
    //                 <h1 className='cart_Heading'> Shopping Cart</h1>
    //             </div>

    //             <section>
    //                 <div className='container'>
    //                     <div className='row'>
    //                         <div className='col-2  '>
    //                             <p><strong>product</strong></p>
    //                         </div>
    //                         <div className='col-5'>
    //                             <div className='row'>
    //                                 <div className='col-12 col-md-6'>
    //                                     <p className=' '><strong>Details</strong></p>

    //                                 </div>
    //                                 <div className='col-12 col-md-6'>
    //                                     <p className=' '><strong>price</strong></p>
    //                                 </div>
    //                             </div>

    //                         </div>
    //                         <div className='col-4'>

    //                             <div className='row'>
    //                                 <div className='col-12 col-md-6'>
    //                                     <p><strong>Quantity</strong></p>
    //                                 </div>
    //                                 <div className='col-12 col-md-6 '>
    //                                     <p><strong>Remove</strong></p>


    //                                 </div>
    //                             </div>
    //                         </div>
    //                         <div className='col-1'>
    //                             <p className=' '> <strong>  Total</strong></p>
    //                         </div>
    //                     </div>


    //                     <hr></hr>
    //                 </div>
    //             </section>

    //             {cartItems.map((item, index) => (

    //                 <div key={index} className='container'>
    //                     <div className='row '>
    //                         <div className='col-2   d-flex flex-column justify-content-center'>
    //                             <img src={item.image} className=' add_cart_img  img-fluid   ' />
    //                         </div>

    //                         <div className='col-5 bth_text_div d-flex flex-column justify-content-center'>
    //                             <div className='row'>
    //                                 <div className='col-12 col-md-6  '>
    //                                     <p className='cardpara2'>{item.description}</p>
    //                                     <p className='cardpara1'>{item.title}</p>
    //                                 </div>
    //                                 <div className='col-12 col-md-6  '>
    //                                     <p className='cardpara3'>{item.price}</p>
    //                                 </div>
    //                             </div>
    //                         </div>

    //                         <div className='col-4  d-flex flex-column justify-content-center'>
    //                             <div className='row'>
    //                                 <div className='col-12 col-md-6'>


    //                                     {/* <button>  increment</button> */}
    //                                     {/* <button onClick={incrementCount}>Increment</button> */}
    //                                     <div className='containerquantity_btn'>
    //                                         <button onClick={decrement} className='butt_in_dec' >-</button>
    //                                         <div className='num_quty' >{quantity}</div>
    //                                         <button onClick={increment} className='butt_in_dec'  >+</button>
    //                                     </div>

    //                                 </div>
    //                                 <div className='col-12 col-md-6 trash_icon'>
    //                                     <i className="bi bi-trash" style={{ fontSize: '2em' }}></i>

    //                                 </div>
    //                             </div>
    //                         </div>

    //                         <div className='col-1  d-flex flex-column justify-content-center'>
    //                             <p className='cart_page_price'>{item.price}</p>
    //                         </div>

    //                         <hr></hr>
    //                     </div>
    //                 </div>

    //             ))}


    //         </div>



    //         <div className='  d-md-none'>
    //             <div className='container my-5 text-center'>
    //                 <h1 className='cart_Heading_sm'> Shopping Cart</h1>
    //             </div>

    //             <section>
    //                 <div className='container '>
    //                     <div className='row  '>
    //                         <div className='col-6 text-center '>
    //                             <p><strong>product</strong></p>
    //                         </div>
    //                         <div className='col-6  text-center '>

    //                             <p className=' '><strong>Details</strong></p>


    //                         </div>

    //                     </div>


    //                     <hr></hr>
    //                 </div>
    //             </section>

    //             {cartItems.map((item, index) => (

    //                 <div key={index} className='container'>
    //                     <div className='row '>
    //                         <div className='col-6 mb-4  d-flex flex-column justify-content-center'>
    //                             <img src={item.image} className=' add_cart_img  img-fluid   ' />
    //                         </div>

    //                         <div className='col-5  mb-4  bth_text_div d-flex flex-column justify-content-center'>
    //                             <div className='row'>
    //                                 <div className='col-12 col-md-6  '>
    //                                     <p className='cardpara2'>{item.description}</p>
    //                                     <p className='cardpara1'>{item.title}</p>
    //                                 </div>
    //                                 <div className='col-12 col-md-6  '>
    //                                     <p className='cardpara3'>{item.price}</p>
    //                                 </div>
    //                             </div>
    //                         </div>

    //                         <div className='col-4  d-flex flex-column justify-content-center'>


    //                             <div className='col-6  trash_icon'>
    //                                 <i className="bi bi-trash" style={{ fontSize: '2em' }}></i>

    //                             </div>
    //                         </div>
    //                         <div className='col-4  d-flex flex-column justify-content-center'>

    //                             <div className='col-6 '>

    //                                 <div className='containerquantity_btn'>
    //                                     <button onClick={decrement} className='butt_in_dec' >-</button>
    //                                     <div className='num_quty' >{quantity}</div>
    //                                     <button onClick={increment} className='butt_in_dec'  >+</button>
    //                                 </div>

    //                             </div>

    //                         </div>

    //                         <div className='col-4  d-flex flex-column justify-content-center'>
    //                             <p className='cart_page_price'>{item.price}</p>
    //                         </div>

    //                         <hr></hr>
    //                     </div>
    //                 </div>

    //             ))}


    //         </div>
    //     </>
    // )
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [selectedSubCategory, setSelectedSubCategory] = useState("All");
    const [selectedRating, setSelectedRating] = useState("All");
    const [selectedBrand, setSelectedBrand] = useState("All");
    const [selectedPrice, setSelectedPrice] = useState("All");
    const [subCategories, setSubCategories] = useState([])
    const [categories, setCategories] = useState([])
    const [products, setProducts] = useState([])
    const [brands, setBrands] = useState([])
    const [categoryName, setCategoryName] = useState([])
    const [finalProducts, setFinalProducts] = useState([])
    const user = useSelector((state) => state.user.auth.user)

    console.log(selectedBrand)

    useEffect(() => {
        if (!user?.ID) {
            navigate('/login')
        }
        else {
            Promise.all([
                Apicalls.get('sub-category'),
                Apicalls.get('category'),
                Apicalls.get('brands')
            ]).then(([subCategoriesData, categoryData, brandsData]) => {
                console.log(subCategoriesData)
                setSubCategories(subCategoriesData.data)
                setCategories(categoryData.data)
                setBrands(brandsData.data)
            }).catch((err) => {
                console.log(err)
            })
        }
    }, [])
    const [filteredProducts, setFilteredProducts] = useState([])

    useEffect(() => {
        if (user?.ID) {
            Promise.all([
                Apicalls.get('cart/user/' + user.ID)
            ]).then(([productsData]) => {
                setProducts(productsData.data)
                setFilteredProducts(productsData.data)
                setFinalProducts(productsData.data)
            }).catch((err) => {
                console.log(err)
            })
        }
        else {
            navigate('/login')
        }
    }, [])

    // const filteredProducts = products.filter(product => {
    //     if (
    //         selectedCategory === "All" &&
    //         selectedRating === "All" &&
    //         selectedBrand === "All" &&
    //         selectedPrice === "All"
    //     ) {
    //         return true;
    //     } else {
    //         return (
    //             (selectedCategory === "All" || product.category === selectedCategory) &&
    //             (selectedRating === "All" || product.rating === selectedRating) &&
    //             (selectedBrand === "All" || product.brand === selectedBrand) &&
    //             (selectedPrice === "All" || product.price === selectedPrice)
    //         );
    //     }
    // });
    // const filteredProducts = products.filter(product => {
    //     if (
    //         selectedCategory === "All" &&
    //         selectedRating === "All" &&
    //         selectedBrand === "All" &&
    //         selectedPrice === "All"
    //     ) {
    //         return true;
    //     } else {
    //         return (
    //             (selectedCategory === "All" || product.category === selectedCategory) &&
    //             (selectedRating === "All" || product.rating === selectedRating) &&
    //             (selectedBrand === "All" || product.brand === selectedBrand) &&
    //             (selectedPrice === "All" || product.price === selectedPrice)
    //         );
    //     }
    // });

    useEffect(() => {
        let filteredProducts = finalProducts;
        console.log(selectedRating, selectedBrand, selectedPrice)
        if (selectedRating !== 'All') {
            filteredProducts = filteredProducts.filter(item => {
                console.log(item, item.rating, selectedRating, item.rating === selectedRating)
                if (item.rating.toString() === selectedRating) {
                    return item
                }
            })
            console.log('rating', filteredProducts)
        }
        if (selectedPrice !== 'All') {
            filteredProducts = filteredProducts.filter(item => item.price < selectedPrice)
            console.log('price', filteredProducts)
        }
        if (selectedBrand !== 'All') {
            filteredProducts = filteredProducts.filter(item => item.brandID === selectedBrand)
            console.log('brand', filteredProducts)
        }
        if (selectedSubCategory !== 'All') {
            filteredProducts = filteredProducts.filter(item => item.scID === selectedSubCategory)
            console.log('brand', filteredProducts)
        }
        setFilteredProducts(filteredProducts)
    }, [selectedRating, selectedPrice, selectedBrand, selectedSubCategory])

    console.log(filteredProducts)

    const Sidebar = () => {
        return (
            <>
                <div className="col-2 position-sticky vh-100 side_nav d-flex flex-row justify-content-center d-none d-lg-block ">
                    <div className="sidebar-content overflow-y-auto overflow-x-hidden vh-100">
                        <div className="text-center">
                            <div className="col-12">
                                <div>
                                    <label className="form-label"><h4><b>Categorys</b></h4></label>
                                    <ul className="list-unstyled">
                                        <li>
                                            <a href="#" className={`btn ${selectedCategory === "All" ? "btn-secondary" : ""} ${selectedCategory === "All" ? "selected" : ""}`}>Cart</a>
                                        </li>
                                        {
                                            subCategories && subCategories.map(subCategory => {
                                                return <li>
                                                    {/* <a href="#" className={`btn ${selectedSubCategory === subCategory.ID ? "btn-secondary" : ""} ${selectedSubCategory === subCategory.ID ? "selected" : ""}`} onClick={() => setSelectedSubCategory(subCategory.ID)}>{subCategory.subCategoryName}</a> */}
                                                    <a href="#" className={`btn ${selectedSubCategory === subCategory.ID ? "btn-secondary" : ""} ${selectedSubCategory === subCategory.ID ? "selected" : ""}`} onClick={() => setSelectedSubCategory(subCategory.ID)}>{subCategory.subCategoryName}</a>
                                                </li>
                                            })
                                        }
                                        {/* <li>
                                            <a href="#" className={`btn ${selectedCategory === "Beauty_bath" ? "btn-secondary" : ""} ${selectedCategory === "Beauty_bath" ? "selected" : ""}`} onClick={() => setSelectedCategory("Beauty_bath")}>Beauty & Bath</a>
                                        </li>
                                        <li>
                                            <a href="#" className={`btn ${selectedCategory === "Essential_oils" ? "btn-secondary" : ""} ${selectedCategory === "Essential_oils" ? "selected" : ""}`} onClick={() => setSelectedCategory("Essential_oils")}>Essential Oils</a>
                                        </li>
                                        <li>
                                            <a href="#" className={`btn ${selectedCategory === "Eye_care" ? "btn-secondary" : ""} ${selectedCategory === "Eye_care" ? "selected" : ""}`} onClick={() => setSelectedCategory("Eye_care")}>Eye Care</a>
                                        </li>
                                        <li>
                                            <a href="#" className={`btn ${selectedCategory === "Hair_care" ? "btn-secondary" : ""} ${selectedCategory === "Hair_care" ? "selected" : ""}`} onClick={() => setSelectedCategory("Hair_care")}>Hair Care</a>
                                        </li>
                                        <li>
                                            <a href="#" className={`btn ${selectedCategory === "Lip_care" ? "btn-secondary" : ""} ${selectedCategory === "Lip_care" ? "selected" : ""}`} onClick={() => setSelectedCategory("Lip_care")}>Lip Care</a>
                                        </li>
                                        <li>
                                            <a href="#" className={`btn ${selectedCategory === "Perfumes" ? "btn-secondary" : ""} ${selectedCategory === "Perfumes" ? "selected" : ""}`} onClick={() => setSelectedCategory("Perfumes")}>Perfumes</a>
                                        </li>
                                        <li>
                                            <a href="#" className={`btn ${selectedCategory === "Makeup" ? "btn-secondary" : ""} ${selectedCategory === "Makeup" ? "selected" : ""}`} onClick={() => setSelectedCategory("Makeup")}>Makeup</a>
                                        </li>
                                        <li>
                                            <a href="#" className={`btn ${selectedCategory === "Skin_care" ? "btn-secondary" : ""} ${selectedCategory === "Skin_care" ? "selected" : ""}`} onClick={() => setSelectedCategory("Skin_care")}>Skin Care</a>
                                        </li> */}
                                    </ul>
                                </div>




                            </div>
                            <div className="col-12 my-5">
                                <label className="form-label"><h4><b>Rating</b></h4></label>
                                <ul className="list-unstyled">
                                    <li>
                                        <a href="#" className={`btn ${selectedRating === "All" ? "btn-secondary" : ""}`} onClick={() => setSelectedRating("All")}>All Ratings</a>
                                    </li>
                                    <li>
                                        <a href="#" className={`btn ${selectedRating === "1" ? "btn-secondary" : ""}`} onClick={() => setSelectedRating("1")}>⭐</a>
                                    </li>
                                    <li>
                                        <a href="#" className={`btn ${selectedRating === "2" ? "btn-secondary" : ""}`} onClick={() => setSelectedRating("2")}>⭐⭐</a>
                                    </li>
                                    <li>
                                        <a href="#" className={`btn ${selectedRating === "3" ? "btn-secondary" : ""}`} onClick={() => setSelectedRating("3")}>⭐⭐⭐ </a>
                                    </li>
                                    <li>
                                        <a href="#" className={`btn ${selectedRating === "4" ? "btn-secondary" : ""}`} onClick={() => setSelectedRating("4")}>⭐⭐⭐⭐</a>
                                    </li>
                                    <li>
                                        <a href="#" className={`btn ${selectedRating === "5" ? "btn-secondary" : ""}`} onClick={() => setSelectedRating("5")}>⭐⭐⭐⭐⭐</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-12 my-5">
                                <label className="form-label"><h4><b>Brand</b></h4></label>
                                <ul className="list-unstyled">
                                    <li>
                                        <a href="#" className={`btn ${selectedBrand === "All" ? "btn-secondary" : ""}`} onClick={() => setSelectedBrand("All")}>All Brands</a>
                                    </li>
                                    {
                                        brands && brands.map(subCategory => {
                                            return <li>
                                                <a href="#" className={`btn ${selectedBrand === subCategory.ID ? "btn-secondary" : ""} ${selectedBrand === subCategory.ID ? "selected" : ""}`} onClick={() => setSelectedBrand(subCategory.ID)}>{subCategory.brandName}</a>
                                            </li>
                                        })
                                    }
                                    {/* <li>
                                        <a href="#" className={`btn ${selectedBrand === "Brand A" ? "btn-secondary" : ""}`} onClick={() => setSelectedBrand("Brand A")}>Brand A</a>
                                    </li>
                                    <li>
                                        <a href="#" className={`btn ${selectedBrand === "Brand B" ? "btn-secondary" : ""}`} onClick={() => setSelectedBrand("Brand B")}>Brand B</a>
                                    </li>
                                    <li>
                                        <a href="#" className={`btn ${selectedBrand === "Brand C" ? "btn-secondary" : ""}`} onClick={() => setSelectedBrand("Brand C")}>Brand C</a>
                                    </li>
                                    <li>
                                        <a href="#" className={`btn ${selectedBrand === "Brand D" ? "btn-secondary" : ""}`} onClick={() => setSelectedBrand("Brand D")}>Brand D</a>
                                    </li> */}
                                </ul>
                            </div>
                            <div className="col-12 my-5">
                                <label className="form-label"><h4><b>Price</b></h4></label>
                                <ul className="list-unstyled">
                                    <li>
                                        <a href="#" className={`btn ${selectedPrice === "All" ? "btn-secondary" : ""}`} onClick={() => setSelectedPrice("All")}>All Prices</a>
                                    </li>
                                    <li>
                                        <a href="#" className={`btn ${selectedPrice === "1000" ? "btn-secondary" : ""}`} onClick={() => setSelectedPrice("1000")}>Below 1000</a>
                                    </li>
                                    <li>
                                        <a href="#" className={`btn ${selectedPrice === "5000" ? "btn-secondary" : ""}`} onClick={() => setSelectedPrice("5000")}>Above 5000</a>
                                    </li>
                                    <li>
                                        <a href="#" className={`btn ${selectedPrice === "8000" ? "btn-secondary" : ""}`} onClick={() => setSelectedPrice("8000")}>8000</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
                {/* <div className="col-12 d-block d-lg-none ">
                    <div className="sidebar-content ">
                        <div className="text-center">
                            <div class="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel" style={{ width: '250px' }}>
                                <div class="offcanvas-header">
                                    <h5 class="offcanvas-title" id="offcanvasScrollingLabel">Filters</h5>
                                    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                </div>
                                <div class="offcanvas-body">
                                    <div className="text-center">
                                        <div className="col-12">
                                            <div>
                                                <label className="form-label"><h4><b>Categorys</b></h4></label>
                                                <ul className="list-unstyled">
                                                    <li>
                                                        <a href="#" className={`btn ${selectedCategory === "All" ? "btn-secondary" : ""} ${selectedCategory === "All" ? "selected" : ""}`} onClick={() => setSelectedCategory("All")}>All Categorys</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className={`btn ${selectedCategory === "Beauty_bath" ? "btn-secondary" : ""} ${selectedCategory === "Beauty_bath" ? "selected" : ""}`} onClick={() => setSelectedCategory("Beauty_bath")}>Beauty & Bath</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className={`btn ${selectedCategory === "Essential_oils" ? "btn-secondary" : ""} ${selectedCategory === "Essential_oils" ? "selected" : ""}`} onClick={() => setSelectedCategory("Essential_oils")}>Essential Oils</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className={`btn ${selectedCategory === "Eye_care" ? "btn-secondary" : ""} ${selectedCategory === "Eye_care" ? "selected" : ""}`} onClick={() => setSelectedCategory("Eye_care")}>Eye Care</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className={`btn ${selectedCategory === "Hair_care" ? "btn-secondary" : ""} ${selectedCategory === "Hair_care" ? "selected" : ""}`} onClick={() => setSelectedCategory("Hair_care")}>Hair Care</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className={`btn ${selectedCategory === "Lip_care" ? "btn-secondary" : ""} ${selectedCategory === "Lip_care" ? "selected" : ""}`} onClick={() => setSelectedCategory("Lip_care")}>Lip Care</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className={`btn ${selectedCategory === "Perfumes" ? "btn-secondary" : ""} ${selectedCategory === "Perfumes" ? "selected" : ""}`} onClick={() => setSelectedCategory("Perfumes")}>Perfumes</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className={`btn ${selectedCategory === "Makeup" ? "btn-secondary" : ""} ${selectedCategory === "Makeup" ? "selected" : ""}`} onClick={() => setSelectedCategory("Makeup")}>Makeup</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className={`btn ${selectedCategory === "Skin_care" ? "btn-secondary" : ""} ${selectedCategory === "Skin_care" ? "selected" : ""}`} onClick={() => setSelectedCategory("Skin_care")}>Skin Care</a>
                                                    </li>
                                                </ul>
                                            </div>




                                        </div>
                                        <div className="col-12 my-5">
                                            <label className="form-label"><h4><b>Rating</b></h4></label>
                                            <ul className="list-unstyled">
                                                <li>
                                                    <a href="#" className={`btn ${selectedRating === "All" ? "btn-secondary" : ""}`} onClick={() => setSelectedRating("All")}>All Ratings</a>
                                                </li>
                                                <li>
                                                    <a href="#" className={`btn ${selectedRating === "1" ? "btn-secondary" : ""}`} onClick={() => setSelectedRating("1")}>⭐</a>
                                                </li>
                                                <li>
                                                    <a href="#" className={`btn ${selectedRating === "2" ? "btn-secondary" : ""}`} onClick={() => setSelectedRating("2")}>⭐⭐</a>
                                                </li>
                                                <li>
                                                    <a href="#" className={`btn ${selectedRating === "3" ? "btn-secondary" : ""}`} onClick={() => setSelectedRating("3")}>⭐⭐⭐ </a>
                                                </li>
                                                <li>
                                                    <a href="#" className={`btn ${selectedRating === "4" ? "btn-secondary" : ""}`} onClick={() => setSelectedRating("4")}>⭐⭐⭐⭐</a>
                                                </li>
                                                <li>
                                                    <a href="#" className={`btn ${selectedRating === "5" ? "btn-secondary" : ""}`} onClick={() => setSelectedRating("5")}>⭐⭐⭐⭐⭐</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-12 my-5">
                                            <label className="form-label"><h4><b>Brand</b></h4></label>
                                            <ul className="list-unstyled">
                                                <li>
                                                    <a href="#" className={`btn ${selectedBrand === "All" ? "btn-secondary" : ""}`} onClick={() => setSelectedBrand("All")}>All Brands</a>
                                                </li>
                                                <li>
                                                    <a href="#" className={`btn ${selectedBrand === "Brand A" ? "btn-secondary" : ""}`} onClick={() => setSelectedBrand("Brand A")}>Brand A</a>
                                                </li>
                                                <li>
                                                    <a href="#" className={`btn ${selectedBrand === "Brand B" ? "btn-secondary" : ""}`} onClick={() => setSelectedBrand("Brand B")}>Brand B</a>
                                                </li>
                                                <li>
                                                    <a href="#" className={`btn ${selectedBrand === "Brand C" ? "btn-secondary" : ""}`} onClick={() => setSelectedBrand("Brand C")}>Brand C</a>
                                                </li>
                                                <li>
                                                    <a href="#" className={`btn ${selectedBrand === "Brand D" ? "btn-secondary" : ""}`} onClick={() => setSelectedBrand("Brand D")}>Brand D</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-12 my-5">
                                            <label className="form-label"><h4><b>Price</b></h4></label>
                                            <ul className="list-unstyled">
                                                <li>
                                                    <a href="#" className={`btn ${selectedPrice === "All" ? "btn-secondary" : ""}`} onClick={() => setSelectedPrice("All")}>All Prices</a>
                                                </li>
                                                <li>
                                                    <a href="#" className={`btn ${selectedPrice === "1000" ? "btn-secondary" : ""}`} onClick={() => setSelectedPrice("1000")}>Below 1000</a>
                                                </li>
                                                <li>
                                                    <a href="#" className={`btn ${selectedPrice === "5000" ? "btn-secondary" : ""}`} onClick={() => setSelectedPrice("5000")}>Above 5000</a>
                                                </li>
                                                <li>
                                                    <a href="#" className={`btn ${selectedPrice === "8000" ? "btn-secondary" : ""}`} onClick={() => setSelectedPrice("8000")}>8000</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div > */}
                {/* <div className="col-12 d-block d-lg-none">
                    <Navbar>
                        <div>
                            <label className="form-label"><h4><b>Categorys</b></h4></label>
                            <ul className="list-unstyled">
                                <Nav.Link>
                                    <Nav.Link href="#" className={`btn ${selectedCategory === "All" ? "btn-secondary" : ""} ${selectedCategory === "All" ? "selected" : ""}`} onClick={() => setSelectedCategory("All")}>All Categorys</Nav.Link>
                                </Nav.Link>
                                <li>
                                    <a href="#" className={`btn ${selectedCategory === "Beauty_bath" ? "btn-secondary" : ""} ${selectedCategory === "Beauty_bath" ? "selected" : ""}`} onClick={() => setSelectedCategory("Beauty_bath")}>Beauty & Bath</a>
                                </li>
                                <li>
                                    <a href="#" className={`btn ${selectedCategory === "Essential_oils" ? "btn-secondary" : ""} ${selectedCategory === "Essential_oils" ? "selected" : ""}`} onClick={() => setSelectedCategory("Essential_oils")}>Essential Oils</a>
                                </li>
                                <li>
                                    <a href="#" className={`btn ${selectedCategory === "Eye_care" ? "btn-secondary" : ""} ${selectedCategory === "Eye_care" ? "selected" : ""}`} onClick={() => setSelectedCategory("Eye_care")}>Eye Care</a>
                                </li>
                                <li>
                                    <a href="#" className={`btn ${selectedCategory === "Hair_care" ? "btn-secondary" : ""} ${selectedCategory === "Hair_care" ? "selected" : ""}`} onClick={() => setSelectedCategory("Hair_care")}>Hair Care</a>
                                </li>
                                <li>
                                    <a href="#" className={`btn ${selectedCategory === "Lip_care" ? "btn-secondary" : ""} ${selectedCategory === "Lip_care" ? "selected" : ""}`} onClick={() => setSelectedCategory("Lip_care")}>Lip Care</a>
                                </li>
                                <li>
                                    <a href="#" className={`btn ${selectedCategory === "Perfumes" ? "btn-secondary" : ""} ${selectedCategory === "Perfumes" ? "selected" : ""}`} onClick={() => setSelectedCategory("Perfumes")}>Perfumes</a>
                                </li>
                                <li>
                                    <a href="#" className={`btn ${selectedCategory === "Makeup" ? "btn-secondary" : ""} ${selectedCategory === "Makeup" ? "selected" : ""}`} onClick={() => setSelectedCategory("Makeup")}>Makeup</a>
                                </li>
                                <li>
                                    <a href="#" className={`btn ${selectedCategory === "Skin_care" ? "btn-secondary" : ""} ${selectedCategory === "Skin_care" ? "selected" : ""}`} onClick={() => setSelectedCategory("Skin_care")}>Skin Care</a>
                                </li>
                            </ul>
                        </div>
                    </Navbar>
                </div> */}
            </>
        );
    };

    const Filter = () => {
        return (
            <>
                <div className="row slider_filter m-2" style={{ width: 'auto' }}>
                    <button class=" btn btn-secondary-2 dropdown-toggle" type="button" id="dropdownMenuButton-1" data-bs-toggle="dropdown" aria-expanded="false">
                        Categories
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton-1">
                        <li>
                            <a href="#" className={`btn ${selectedSubCategory === "All" ? "btn-secondary-2" : ""} ${selectedSubCategory === "All" ? "selected" : ""}`} onClick={() => setSelectedSubCategory("All")}>All Categorys</a>
                        </li>
                        {
                            subCategories && subCategories.map(subCategory => {
                                return <li>
                                    <a href="#" className={`btn ${selectedSubCategory === subCategory.ID ? "btn-secondary" : ""} ${selectedSubCategory === subCategory.ID ? "selected" : ""}`} onClick={() => setSelectedSubCategory(subCategory.ID)}>{subCategory.subCategoryName}</a>
                                </li>
                            })
                        }
                        {/* <li>
                            <a href="#" className={`btn ${selectedCategory === "Beauty_bath" ? "btn-secondary-2" : ""} ${selectedCategory === "Beauty_bath" ? "selected" : ""}`} onClick={() => setSelectedCategory("Beauty_bath")}>Beauty & Bath</a>
                        </li>
                        <li>
                            <a href="#" className={`btn ${selectedCategory === "Essential_oils" ? "btn-secondary-2" : ""} ${selectedCategory === "Essential_oils" ? "selected" : ""}`} onClick={() => setSelectedCategory("Essential_oils")}>Essential Oils</a>
                        </li>
                        <li>
                            <a href="#" className={`btn ${selectedCategory === "Eye_care" ? "btn-secondary-2" : ""} ${selectedCategory === "Eye_care" ? "selected" : ""}`} onClick={() => setSelectedCategory("Eye_care")}>Eye Care</a>
                        </li>
                        <li>
                            <a href="#" className={`btn ${selectedCategory === "Hair_care" ? "btn-secondary-2" : ""} ${selectedCategory === "Hair_care" ? "selected" : ""}`} onClick={() => setSelectedCategory("Hair_care")}>Hair Care</a>
                        </li>
                        <li>
                            <a href="#" className={`btn ${selectedCategory === "Lip_care" ? "btn-secondary-2" : ""} ${selectedCategory === "Lip_care" ? "selected" : ""}`} onClick={() => setSelectedCategory("Lip_care")}>Lip Care</a>
                        </li>
                        <li>
                            <a href="#" className={`btn ${selectedCategory === "Perfumes" ? "btn-secondary-2" : ""} ${selectedCategory === "Perfumes" ? "selected" : ""}`} onClick={() => setSelectedCategory("Perfumes")}>Perfumes</a>
                        </li>
                        <li>
                            <a href="#" className={`btn ${selectedCategory === "Makeup" ? "btn-secondary-2" : ""} ${selectedCategory === "Makeup" ? "selected" : ""}`} onClick={() => setSelectedCategory("Makeup")}>Makeup</a>
                        </li>
                        <li>
                            <a href="#" className={`btn ${selectedCategory === "Skin_care" ? "btn-secondary-2" : ""} ${selectedCategory === "Skin_care" ? "selected" : ""}`} onClick={() => setSelectedCategory("Skin_care")}>Skin Care</a>
                        </li> */}
                    </ul>
                    <button class=" btn btn-secondary-2 dropdown-toggle" type="button" id="dropdownMenuButton-2" data-bs-toggle="dropdown" aria-expanded="false">
                        Ratings
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton-2">
                        <li>
                            <a href="#" className={`btn ${selectedRating === "All" ? "btn-secondary-2" : ""}`} onClick={() => setSelectedRating("All")}>All Ratings</a>
                        </li>
                        <li>
                            <a href="#" className={`btn ${selectedRating === "1" ? "btn-secondary-2" : ""}`} onClick={() => setSelectedRating("1")}>⭐</a>
                        </li>
                        <li>
                            <a href="#" className={`btn ${selectedRating === "2" ? "btn-secondary-2" : ""}`} onClick={() => setSelectedRating("2")}>⭐⭐</a>
                        </li>
                        <li>
                            <a href="#" className={`btn ${selectedRating === "3" ? "btn-secondary-2" : ""}`} onClick={() => setSelectedRating("3")}>⭐⭐⭐ </a>
                        </li>
                        <li>
                            <a href="#" className={`btn ${selectedRating === "4" ? "btn-secondary-2" : ""}`} onClick={() => setSelectedRating("4")}>⭐⭐⭐⭐</a>
                        </li>
                        <li>
                            <a href="#" className={`btn ${selectedRating === "5" ? "btn-secondary-2" : ""}`} onClick={() => setSelectedRating("5")}>⭐⭐⭐⭐⭐</a>
                        </li>
                    </ul>
                    <button class=" btn btn-secondary-2 dropdown-toggle" type="button" id="dropdownMenuButton-3" data-bs-toggle="dropdown" aria-expanded="false">
                        Brand
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton-3">
                        {
                            brands && brands.map(subCategory => {
                                return <li>
                                    <a href="#" className={`btn ${selectedBrand === subCategory.ID ? "btn-secondary" : ""} ${selectedBrand === subCategory.ID ? "selected" : ""}`} onClick={() => setSelectedBrand(subCategory.ID)}>{subCategory.brandName}</a>
                                </li>
                            })
                        }
                        {/* <li>
                            <a href="#" className={`btn ${selectedBrand === "All" ? "btn-secondary-2" : ""}`} onClick={() => setSelectedBrand("All")}>All Brands</a>
                        </li>
                        <li>
                            <a href="#" className={`btn ${selectedBrand === "Brand A" ? "btn-secondary-2" : ""}`} onClick={() => setSelectedBrand("Brand A")}>Brand A</a>
                        </li>
                        <li>
                            <a href="#" className={`btn ${selectedBrand === "Brand B" ? "btn-secondary-2" : ""}`} onClick={() => setSelectedBrand("Brand B")}>Brand B</a>
                        </li>
                        <li>
                            <a href="#" className={`btn ${selectedBrand === "Brand C" ? "btn-secondary-2" : ""}`} onClick={() => setSelectedBrand("Brand C")}>Brand C</a>
                        </li>
                        <li>
                            <a href="#" className={`btn ${selectedBrand === "Brand D" ? "btn-secondary-2" : ""}`} onClick={() => setSelectedBrand("Brand D")}>Brand D</a>
                        </li> */}
                    </ul>
                    <button class=" btn btn-secondary-2 dropdown-toggle" type="button" id="dropdownMenuButton-4" data-bs-toggle="dropdown" aria-expanded="false">
                        Price
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton-4">
                        <li>
                            <a href="#" className={`btn ${selectedPrice === "All" ? "btn-secondary-2" : ""}`} onClick={() => setSelectedPrice("All")}>All Prices</a>
                        </li>
                        <li>
                            <a href="#" className={`btn ${selectedPrice === "1000" ? "btn-secondary-2" : ""}`} onClick={() => setSelectedPrice("1000")}>Below 1000</a>
                        </li>
                        <li>
                            <a href="#" className={`btn ${selectedPrice === "5000" ? "btn-secondary-2" : ""}`} onClick={() => setSelectedPrice("5000")}>Above 5000</a>
                        </li>
                        <li>
                            <a href="#" className={`btn ${selectedPrice === "8000" ? "btn-secondary-2" : ""}`} onClick={() => setSelectedPrice("8000")}>8000</a>
                        </li>
                    </ul>
                </div>


            </>
        )
    }
    const [showModal, setShowModal] = useState(false);
    const [showBuyModal, setShowBuyModal] = useState(false);
    const [selectedCard, setSelectedCard] = useState(null);
    const navigate = useNavigate();

    const [mainImage, setMainImage] = useState(null);
    const handleOpenModal = (product) => {
        setSelectedCard(product);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleBuyModal = () => {
        setShowBuyModal(false);
    };

    const handleImageClick = (index) => {
        const images = JSON.parse(selectedCard.productImages);
        const clickedImage = images.splice(index, 1)[0];
        images.unshift(clickedImage);
        setSelectedCard({
            ...selectedCard,
            productImages: JSON.stringify(images),
        });
    }

    console.log(selectedCard)

    const handleMiniImageClick1 = (imageSrc) => {
        setSelectedCard({
            ...selectedCard,
            image: selectedCard.image1,
        });
    };
    const handleMiniImageClick2 = (imageSrc) => {
        setSelectedCard({
            ...selectedCard,
            image: selectedCard.image2,
        });
    };
    const handleMiniImageClick3 = (imageSrc) => {
        setSelectedCard({
            ...selectedCard,
            image: selectedCard.image3,
        });
    };
    const handleMiniImageClick4 = (imageSrc) => {
        setSelectedCard({
            ...selectedCard,
            image: selectedCard.image4,
        });
    };
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (product) => {
        const updatedCart = [...cartItems, product];
        setCartItems(updatedCart);
        // Save updated cart to local storage
        localStorage.setItem('cartItems', JSON.stringify(updatedCart));
    };

    useEffect(() => {
        if (window.history.state === 'buyproduct' && !showBuyModal) {
            setShowBuyModal(true)
        }
    }, [window.history.state])

    return (
        <div className="col-12">
            <div className="text-center mt-4">
                <div className="d-none d-lg-block">
                    <h2 className="Shoppage_Heading1">Cart</h2>
                </div>
                <div className="d-block d-lg-none">
                    <div>
                        <h2 className="Shoppage_Heading12">
                            Cart
                            {/* <button class="btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">
                                <div style={{ color: '#Ad9688' }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-filter-square" viewBox="0 0 16 16">
                                        <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
                                        <path d="M6 11.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5m-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5" />
                                    </svg>
                                </div>

                            </button> */}
                        </h2>
                    </div>
                    <Filter />
                </div>
            </div>
            <div className="main-row">
                <Sidebar />
                <>
                    <div className="col-10 d-none d-lg-block">
                        <div className="container my-4">
                            <div className="row">
                                {filteredProducts.map(product => (
                                    <div className="col-lg-3 col-md-3 col-sm-12 mb-5 " key={product.name}>
                                        <div className="card" style={{ borderRadius: '20px' }}>
                                            <span class="offers">-{product.discount}%</span>
                                            <div className="image_border  hover_img">
                                                <img src={post_url + JSON.parse(product.productImages)[0]} alt={product.name} className='img-fluid shopimg p-3' />
                                                {/* <img src={product.image} alt={product.name} className='img-fluid shopimg p-3' /> */}
                                                <img src={maximize} alt="Maximize" className='img-fluid maxmize_img_car' onClick={() => handleOpenModal(product)} />
                                                {/* <img src={wish_img} alt={wish_img} className='img-fluid maxmize_wish' style={{ cursor: 'pointer' }} onClick={() => addToCart(product.ID)} /> */}



                                            </div>
                                            <div className="d-flex p-2">
                                                <div className="">
                                                    <p className='cardpara1 mt-1'>{product.title}</p>
                                                    <div class="shipping-icons1 mb-2">
                                                        {JSON.parse(product.features).includes('panIndia') && <div class="shipping-icon-wrapper">
                                                            <span className="icon-text">Pan India</span>
                                                            <img src={flagimg}
                                                                alt="Pan India" class="shipping-icon" width={50} height={50} />
                                                        </div>}
                                                        {JSON.parse(product.features).includes('COD') && <div class="shipping-icon-wrapper">
                                                            <span className="icon-text">Cash On Delivery</span>
                                                            <img src={iconcard3}
                                                                alt="Free Shipping" class="shipping-icon" width={50} height={50} />
                                                        </div>}
                                                        {JSON.parse(product.features).includes('freeDelivery') && <div class="shipping-icon-wrapper">
                                                            <span className="icon-text">Above ₹1500</span>
                                                            <img src={iconcard2} alt="COD"
                                                                class="shipping-icon" width={50} height={50} />
                                                        </div>}
                                                    </div>
                                                    <p className='cardpara2'>{product.heading}</p>
                                                    <p className='cardpara3'>{product.price}</p>
                                                    {/* <p className="cardpara4" style={{ float: 'right' }}>
                                                        <img src={buycard} alt={buycard} className="img-fluid buycard" />
                                                    </p> */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                        </div>
                    </div>
                    <div className="col-12 d-block d-lg-none">
                        <div className="container my-4">
                            <div className="row">
                                {filteredProducts.map(product => (
                                    <div className="col-6 col-md-3 col-sm-3 mb-5 " key={product.name}>
                                        <div className="card" style={{ borderRadius: '20px' }}>
                                            <span class="offers">-{product.discount}%</span>
                                            <div className="image_border">
                                                <img src={product.image} alt={product.name} className='img-fluid shopimg p-3' />
                                                <img src={maximize} alt="Maximize" className='img-fluid maxmize_img_car' onClick={() => handleOpenModal(product)} />
                                                {/* <img src={wish_img} alt={wish_img} className='img-fluid maxmize_wish' style={{ cursor: 'pointer' }} onClick={() => addToCart(product.ID)} /> */}

                                            </div>
                                            <div className="d-flex p-2">
                                                <div className="">
                                                    <p className='cardpara1 mt-3'>{product.title}</p>
                                                    <div class="shipping-icons1 mb-2" style={{ width: '100%' }}>
                                                        {JSON.parse(product.features).includes('panIndia') && <div class="shipping-icon-wrapper">
                                                            <span className="icon-text">Pan India</span>
                                                            <img src={flagimg}
                                                                alt="Pan India" class="shipping-icon" width={50} height={50} />
                                                        </div>}
                                                        {JSON.parse(product.features).includes('freeDelivery') && <div class="shipping-icon-wrapper">
                                                            <span className="icon-text">Above ₹1500</span>
                                                            <img src={iconcard3}
                                                                alt="Free Shipping" class="shipping-icon" width={50} height={50} />
                                                        </div>}
                                                        {JSON.parse(product.features).includes('COD') && <div class="shipping-icon-wrapper">
                                                            <span className="icon-text">Cash On Delivery</span>
                                                            <img src={iconcard2} alt="COD"
                                                                class="shipping-icon" width={50} height={50} />
                                                        </div>}
                                                    </div>
                                                    <p className='cardpara2'>{product.heading}</p>
                                                    <p className='cardpara3'>{product.price}</p>
                                                    {/* <p className="cardpara3" style={{ float: 'right' }}>
                                                        <img src={buycard} alt={buycard} className="img-fluid buycard" />
                                                    </p> */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                        </div>
                    </div>

                    <Modal show={showModal} onHide={handleCloseModal} size="xl">
                        <Modal.Header closeButton>
                            <Modal.Title>{selectedCard && selectedCard.title}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            {selectedCard && (
                                <div className="maximized-card row">
                                    <div className='col-md-5 col-xs-12'>

                                        <img src={post_url + JSON.parse(selectedCard.productImages)[0]} alt={selectedCard.title} className='img-fluid' id="mainImage" />
                                        {/* <img src={selectedCard.image} alt={selectedCard.title} className='img-fluid' id="mainImage" /> */}


                                    </div>
                                    <div className='col-md-2'>
                                        {
                                            JSON.parse(selectedCard.productImages).map((item, index) => {
                                                if (index !== 0) {
                                                    return <img src={post_url + JSON.parse(selectedCard.productImages)[index]} alt={selectedCard.title} className='img-fluid' onClick={() => handleImageClick(index)} />
                                                }
                                            })
                                        }
                                        {/* <img src={post_url + JSON.parse(selectedCard.productImages)[1]} alt={selectedCard.title} className='img-fluid' onClick={() => handleMiniImageClick1(selectedCard.image_mini1)} />
                                    <img src={post_url + JSON.parse(selectedCard.productImages)[2]} alt={selectedCard.title} className='img-fluid' onClick={() => handleMiniImageClick2(selectedCard.image_mini2)} />
                                    <img src={post_url + JSON.parse(selectedCard.productImages)[3]} alt={selectedCard.title} className='img-fluid' onClick={() => handleMiniImageClick3(selectedCard.image_mini3)} />
                                    <img src={post_url + JSON.parse(selectedCard.productImages)[4]} alt={selectedCard.title} className='img-fluid' onClick={() => handleMiniImageClick4(selectedCard.image_mini4)} /> */}
                                    </div>




                                    <div className='col-md-5 col-xs-12' style={{ overflowY: 'auto', maxHeight: '400px' }}>
                                        <h6 className='pop_up_cardhead'>{selectedCard.descriptionfull}</h6>
                                        <p >{selectedCard.stars}</p>
                                        <p className="deals_para">{selectedCard.price}</p>
                                        <p className="deals_para1">{selectedCard.quantity} in stock hurry up</p>
                                        <p className="deals_para1">{'⭐'.repeat(selectedCard.rating)}</p>

                                        <div className="button-group row " style={{ display: 'flex', justifyContent: 'space-evenly', marginTop: '1rem' }}>
                                            <Button className='col-5' onClick={() => addToCart(selectedCard)} style={{ border: "1px solid green", backgroundColor: "white", color: "green" }}>Add to cart</Button>
                                            <Button className='col-5 ' variant="success" onClick={() => {
                                                if (!user.ID) {
                                                    navigate('/login', { state: 'buyproduct' })
                                                }
                                                setShowBuyModal(true)
                                            }} >Buy Now</Button>
                                        </div>
                                        <center>
                                            <div className="mb-2 row ms-2 mt-4 text-center   roling_marg     " style={{ width: '100%' }}>
                                                <div className='col-4 d-none d-md-block' style={{ padding: 0 }}>
                                                    <FontAwesomeIcon icon={faBox} />
                                                    <h3 className='deliered_time'>Order Now</h3>
                                                </div>
                                                <div className='col-8  d-none d-md-block ' style={{ padding: 0, marginLeft: '0px' }}>
                                                    <FontAwesomeIcon icon={faTruckFast} />
                                                    <h3 className='deliered_time'>Delivered with in 3 - 5 days</h3>
                                                </div>
                                            </div>
                                        </center>

                                        {/* <select name="cars" className="form-control mt-5">
                                            <option value="Delivery Details">Delivery Details</option>
                                            <option value="saab">Saab</option>
                                            <option value="opel">Opel</option>
                                            <option value="audi">Audi</option>
                                        </select> */}
                                        <br />
                                        <br />

                                        <div class="shipping-icons1 mb-2">
                                            {selectedCard?.features?.includes('1') && <div class="shipping-icon-wrapper">
                                                <span className="icon-text">Pan India</span>
                                                <img src={flagimg}
                                                    alt="Pan India" class="shipping-icon" width={50} height={50} />
                                            </div>}
                                            {selectedCard?.features?.includes('2') && <div class="shipping-icon-wrapper">
                                                <span className="icon-text">Above ₹1500</span>
                                                <img src={iconcard3}
                                                    alt="Free Shipping" class="shipping-icon" width={50} height={50} />
                                            </div>}
                                            {selectedCard?.features?.includes('3') && <div class="shipping-icon-wrapper">
                                                <span className="icon-text">Cash On Delivery</span>
                                                <img src={iconcard2} alt="COD"
                                                    class="shipping-icon" width={50} height={50} />
                                            </div>}
                                        </div>
                                        <div className='col-12 mt-4'>
                                            <div className="mt-5 row">
                                                {/* <div className='col-3 justify_con'>
                                                    <img src={natural} alt={natural} />
                                                    <p className="mt-4">Natural & Organic</p>
                                                </div>
                                                <div className='col-3 justify_con'>
                                                    <img src={gmo} alt={gmo} />
                                                    <br />
                                                    <p className="mt-4">NON  <br></br> GMO</p>
                                                </div>
                                                <div className='col-3  justify_con'>
                                                    <img src={no_presetives} alt={no_presetives} />
                                                    <p className="mt-4" >No Added   Preservatives</p>
                                                </div>
                                                <div className='col-3 justify_con'>
                                                    <img src={gluten} alt={gluten} />
                                                    <p className="mt-4">Gluten Free</p>
                                                </div> */}
                                            </div>
                                            <hr className="m-auto" style={{ border: "none", height: "2px", width: "150px", backgroundColor: "#509264" }} />

                                            <p className="mt-4">{selectedCard.about}</p>
                                            <p className="mb-5">{selectedCard.about2}</p>

                                        </div>
                                    </div>






                                </div>
                            )}
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleCloseModal}>Close</Button>
                        </Modal.Footer>
                    </Modal>

                </>
                <BuyProduct showModal={showBuyModal} handleBuyModal={handleBuyModal} selectedCard={selectedCard} />
            </div>
        </div >
    );
}

export default UserCart