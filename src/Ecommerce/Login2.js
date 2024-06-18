import React, { useState } from "react";
import example_bloag_2 from '../assets/example_bloag_2.png';




function Login2() {

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
                            <button className='laying_page_text active_bg_payment' >Login</button>
                        </div>

                        <div className='col-4 onlu_for_line_up_the_btn z_index_matters'>
                            <button className='laying_page_text ' >Billing & Shopping</button>
                        </div>

                        <div className='col-4 onlu_for_line_up_the_btn z_index_matters'>
                            <button className='laying_page_text  ' >Payment</button>
                        </div>

                    </div>
                    <hr className='line-through-buttons' />
                </div>
            </section>

            <section>
                <div className="container for_height_gg ">
                    <div className="login_sg">
                        <div className="row need_to_be_center">
                            <div className="col-md-12 col-lg-6 center_need_section">
                                <div>
                                    <img src={example_bloag_2} alt={example_bloag_2} className='  img-fluid' />
                                </div>
                            </div>
                            <div className="col-md-12 col-lg-6 d-block d-lg-none">
                                <p className="login_para">If you have shopped with us before, please enter your details in the boxes below. If you are a new customer, please proceed to the Billing & Shipping section.</p>
                            </div>
                            <div className="col-md-12 col-lg-6 d-flex flex-column justify-content-center">
                                <div className=''>
                                    <p className='full_name '>Username or email *</p>
                                    <input className='  info_only_md_ard_input2' ></input>
                                </div>
                                <div className='mt-4'>
                                    <p className='full_name '>Password </p>
                                    <input className='  info_only_md_ard_input2' ></input>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-4 d-flex ">
                            <div className="col-md-12 col-lg-6 d-none d-lg-block">
                                <p className="login_para">If you have shopped with us before, please enter your details in the boxes below. If you are a new customer, please proceed to the Billing & Shipping section.</p>
                            </div>
                            <div className="col-md-12 col-lg-6 ">
                                <button className='next_btn_info '>Login</button>
                                <input
                                    className='check_box_size ms-4'
                                    type="checkbox"
                                    id="saveCardDetails"
                                    checked={saveCardDetails}
                                    onChange={handleCheckboxChange}
                                />  &nbsp;
                                <label className='save_account' htmlFor="saveCardDetails"> Remember me</label>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );

}

export default Login2;