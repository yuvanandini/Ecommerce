
import React, { useState } from 'react';

import ota_milk_front from '../assets/header_images/ota_milk_front.png'




function Checkout() {

    const [selectedOption, setSelectedOption] = useState(""); // State to track selected option

    // Function to handle option selection
    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };
    const [saveCardDetails, setSaveCardDetails] = useState(false); // State to track whether card details should be saved

    // Function to handle checkbox change
    const handleCheckboxChange = () => {
        setSaveCardDetails(!saveCardDetails); // Toggle the state when checkbox is clicked
    };


    return (
        <>

            <section className='my-5'>
                <div className='container ' >
                    <div className='row text-center  '>

                        <div className='col-4 onlu_for_line_up_the_btn  z_index_matters'>
                            <button className='laying_page_text' >Login</button>
                        </div>

                        <div className='col-4 onlu_for_line_up_the_btn z_index_matters'>
                            <button className='laying_page_text' >Billing & Shopping</button>
                        </div>

                        <div className='col-4 onlu_for_line_up_the_btn z_index_matters'>
                            <button className='laying_page_text active_bg_payment' >Payment</button>
                        </div>

                    </div>
                    <hr className='line-through-buttons' />
                </div>
            </section>

            <section>


                <div className='container   for_height_gg bg_ligit_checkout'>
                    <div className='row'>
                        <div className='col-md-6 only_padding_chechkout only_for_sm_payment_checkout order-2 order-md-1'>
                            <h3 className='payment_heading_sm_divice'>Payment</h3>
                            <hr></hr>

                            <div>
                                <div className='mt-3'>
                                    <p> <strong>Pay With:</strong> </p>
                                    <div className='row '>
                                        <div  >
                                            <input
                                                type="radio"
                                                id="creditCard"
                                                value="creditCard"
                                                checked={selectedOption === "creditCard"}
                                                onChange={handleOptionChange}
                                                className='  me-1'


                                            />
                                            <label htmlFor="creditCard"> Card</label>

                                            <input
                                                type="radio"
                                                id="paypal"
                                                value="paypal"
                                                checked={selectedOption === "paypal"}
                                                onChange={handleOptionChange}
                                                className='ms-4 me-1'

                                            />
                                            <label className='me-4' htmlFor="bank">Bank</label>

                                            <input
                                                type="radio"
                                                id="bankTransfer"
                                                value="bankTransfer"
                                                checked={selectedOption === "bankTransfer"}
                                                onChange={handleOptionChange}
                                                className='  me-1'

                                            />
                                            <label htmlFor="bankTransfer">UPI</label>
                                        </div>
                                    </div>
                                </div>

                                <div className='mt-3'>
                                    <p> <strong>Card Number</strong> </p>
                                    <input className='  only_md_ard_input' placeholder='  1234 - 5678 - 9012'></input>
                                </div>

                                <div className='mt-3 row'>
                                    <div className='col-6'>

                                        <p> <strong>Expiration Date</strong> </p>
                                        <input className='check_out_card_input' placeholder='  MM/YY'></input>
                                    </div>
                                    <div className='col-6   '>

                                        <p> <strong>CVV</strong> </p>
                                        <input className='check_out_card_input' placeholder='  123 '></input>

                                    </div>
                                </div>


                                <div className=' my-4'>
                                    <input
                                        type="checkbox"
                                        id="saveCardDetails"
                                        checked={saveCardDetails}
                                        onChange={handleCheckboxChange}
                                    />
                                    <label className='save_details' htmlFor="saveCardDetails">Save Card Details</label>
                                </div>



                                <button className='ind_rupees '>Pay IND Rupees</button>

                            </div>


                        </div>




                        <div className='col-md-6 only_padding_chechkout order-1  order-md-2'>
                            <h3 className='payment_heading_sm_divice'>  Order Summary</h3>
                            <hr></hr>

                            <div>
                                <div  style={{ overflowY: 'auto', maxHeight: '350px', overflowX: 'hidden' }}>
                                    <div className='row'>
                                        <div className='col-3 col-md-3 col-lg-3'>
                                            <img className="img-fluid checlout_page_img" src={ota_milk_front} alt={ota_milk_front} />
                                        </div>
                                        <div className='col-5 col-md-5 col-lg-5'>
                                            <p className='checlout_page_name'>Cacao Powder by Mason & Co.</p>
                                            <p className='checlout_page_product'>Chocolates</p>
                                        </div>
                                        <div className='col-4 col-md-4 col-lg-3'>
                                            <p className='checlout_page_price'>₹695.00</p>
                                            <p className='checlout_page_qty'>Qty: 2</p>
                                        </div>
                                    </div>

                                    <hr></hr>
                                    <div className='row'>
                                        <div className='col-3 col-md-3 col-lg-3'>
                                            <img className="img-fluid checlout_page_img" src={ota_milk_front} alt={ota_milk_front} />
                                        </div>
                                        <div className='col-5 col-md-5 col-lg-5'>
                                            <p className='checlout_page_name'>Cacao Powder by Mason & Co.</p>
                                            <p className='checlout_page_product'>Chocolates</p>
                                        </div>
                                        <div className='col-4 col-md-4 col-lg-3'>
                                            <p className='checlout_page_price'>₹695.00</p>
                                            <p className='checlout_page_qty'>Qty: 2</p>
                                        </div>
                                    </div>

                                    <hr></hr><div className='row'>
                                        <div className='col-3 col-md-3 col-lg-3'>
                                            <img className="img-fluid checlout_page_img" src={ota_milk_front} alt={ota_milk_front} />
                                        </div>
                                        <div className='col-5 col-md-5 col-lg-5'>
                                            <p className='checlout_page_name'>Cacao Powder by Mason & Co.</p>
                                            <p className='checlout_page_product'>Chocolates</p>
                                        </div>
                                        <div className='col-4 col-md-4 col-lg-3'>
                                            <p className='checlout_page_price'>₹695.00</p>
                                            <p className='checlout_page_qty'>Qty: 2</p>
                                        </div>
                                    </div>

                                    <hr></hr>

                                    
                                </div>

                                <div className=' d-flex  sub_total_div mt-3'>

                                    <input className='gift_input' placeholder='    Gift or discount code'></input>
                                    <button className='apply_btn_gift'>Apply</button>

                                </div>
                                <hr></hr>


                                <div className='  d-flex  sub_total_div'>
                                    <p className='para_text_checkout'>Subtotal</p>
                                    <p className='para_text_checkout'>₹695.00</p>
                                </div>
                                <div className='  d-flex  sub_total_div'>
                                    <p className='para_text_checkout'>Shipping</p>
                                    <p className='para_text_checkout'>₹0.00</p>
                                </div>

                                <hr></hr>

                                <div className='  d-flex  sub_total_div'>
                                    <p className='para_text_checkout'>Total    <br></br> <span className='including_txs'>Including $2.24 in taxes</span> </p>
                                    <p className='total_price'>₹0.00</p>
                                </div>




                            </div>

                        </div>

                    </div>


                    <div className='row my-4'>
                        <div className='col-lg-6 col-md-12 only_padding_chechkout'>
                            <p className='trms_txt'>Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our privacy policy.</p>
                        </div>
                    </div>
                </div>

            </section>

        </>
    )
}

export default Checkout;