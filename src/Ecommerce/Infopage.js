
import React, { useState } from 'react';

import ota_milk_front from '../assets/header_images/ota_milk_front.png'




function Infopage() {

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
        <  >

            <section className='my-5'>
                <div className='container ' >
                    <div className='row text-center  '>

                        <div className='col-4 onlu_for_line_up_the_btn  z_index_matters'>
                            <button className='laying_page_text' >Login</button>
                        </div>

                        <div className='col-4 onlu_for_line_up_the_btn z_index_matters'>
                            <button className='laying_page_text active_bg_payment' >Billing & Shopping</button>
                        </div>

                        <div className='col-4 onlu_for_line_up_the_btn z_index_matters'>
                            <button className='laying_page_text  ' >Payment</button>
                        </div>

                    </div>
                    <hr className='line-through-buttons' />
                </div>
            </section>

            <section>
                <form>
                    <div className='container for_height_gg sliver_bg '   >
                        <div className='row nee_to_be_center '>



                            <div className='col-md-6 center_need_section '>
                                <div className='   full_name_div  '>
                                    <p className='full_name '>   First Name  </p>
                                    <input className='  info_only_md_ard_input' ></input>
                                </div>


                                <div className='last_div'>
                                    <p className='full_name'>  Last name   </p>
                                    <input className='  info_only_md_ard_input' ></input>
                                </div>



                                <div className='Phone_div '>
                                    <p className='full_name'> Phone *</p>
                                    <input className='  info_only_md_ard_input' ></input>
                                </div>

                                <div className='Email_div '>
                                    <p className='full_name'>Email address *</p>
                                    <input className='  info_only_md_ard_input' ></input>
                                </div>



                            </div>


                            <div className='col-md-6 center_need_section '>
                                <div className='city_div '>
                                    <p className='full_name'>House NO., Building., Road., </p>
                                    <input className='  info_only_md_ard_input' ></input>
                                </div>
                                <div className='Citye_div '>
                                    <p className='full_name'>City</p>
                                    <input className='  info_only_md_ard_input' ></input>
                                </div>

                                <div className='Pincode_div '>
                                    <p className='full_name'>Pincode *</p>
                                    <input className='  info_only_md_ard_input' ></input>
                                </div>

                                <div className='State_div '>
                                    <p className='full_name'>State *</p>
                                    <input className='  info_only_md_ard_input' ></input>
                                </div>


                            </div>


                            <div className='row   ' >
                                <div className='col-md-6 text-center'>
                                    <div className='mt-4 '>
                                        <input
                                            className='check_box_size'
                                            type="checkbox"
                                            id="saveCardDetails"
                                            checked={saveCardDetails}
                                            onChange={handleCheckboxChange}
                                        />  &nbsp;
                                        <label className='save_account  ' htmlFor="saveCardDetails"> Create an account?</label>
                                    </div>
                                </div>

                                <div className='col-md-6 text-center'>
                                    <button className='next_btn_info mt-4'>Next</button>
                                </div>

                            </div>

                        </div>
                    </div>
                </form>
            </section>


        </>
    )
}

export default Infopage;