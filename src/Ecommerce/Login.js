import React, { useState } from 'react';
import secondlogo from '../assets/login_second_logo2 .png';
import firstlogo from '../assets/login_second_logo1.png';
import googlelogo from '../assets/google_loginPage.png';
import { Button } from 'react-bootstrap';
import Apicalls from '../Apicalls';
import store from '../store';
import { storeUser, storeUserError } from '../AuthActions';
import { useNavigate } from 'react-router-dom';


function Login() {

    const [data, setData] = useState({ email: '', password: '' })
    const [requiredFields, setRequiredFields] = useState({ email: '', password: '' })
    const [errorMessage, setErrorMessage] = useState('')
    const [buttonLoading, setButtonLoading] = useState(false)
    const navigate = useNavigate()

    const signin = () => {
        let object = requiredFields;
        let isValid = true;
        if (!data.email || data.email.trim() === '') {
            isValid = false
            object.email = 'red'
        }
        else {
            object.email = ''
        }
        if (!data.password || data.password.trim() === '') {
            isValid = false
            object.password = 'red'
        }
        else {
            object.password = ''
        }
        console.log(isValid, object)
        setRequiredFields(object)
        if (isValid) {
            setButtonLoading(true)
            Promise.all(
                [
                    Apicalls.post('customer/login', data)
                ]
            ).then(([data]) => {
                console.log(data.data.message === 'Login successful')
                if (data.data.message === 'Login successful') {
                    console.log(data)
                    store.dispatch(storeUser(data.data.user))
                    if (window.history.state.usr === 'register') {
                        navigate('/')
                    }
                    else {
                        navigate(-1, { state: 'buyproduct' })
                    }
                }
                else {
                    setErrorMessage('Invalid Credentials')
                    store.dispatch(storeUserError())
                }
            }).catch((error) => {
                setErrorMessage('Invalid Credentials')
            }).finally(() => {
                setButtonLoading(false)
            })
        }
    }

    console.log(requiredFields, errorMessage)

    return (
        <>
            {/* First section */}
            <section>


                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-lg-6 col-md-6 login_first_section d-flex justify-content-center align-items-center my-5'>
                            <div>

                                <div style={{ textAlign: 'center' }}>
                                    <img src={firstlogo} alt={firstlogo} className='img-fluid d-md-none' />
                                </div>
                                <h1 className='welcome'>Welcome back</h1>
                                <h6 className='enteryourdetails'>Welcome back! Please enter your details.</h6>

                                <form style={{ fontFamily: 'fantasy' }}>
                                    <div>
                                        <label className='mb-2 mt-2 email'>Email</label>
                                        <br />
                                        <input type="email" style={{ borderColor: requiredFields['email'] }} onChange={(e) => setData({ ...data, email: e.target.value })} placeholder='Enter Your email' className='info_only_md_ard_input2' />
                                    </div>
                                    <div>
                                        <label className='mb-2 mt-2  password'>Password</label>
                                        <br />
                                        <input type="password" onChange={(e) => setData({ ...data, password: e.target.value })} style={{ borderColor: requiredFields['password'] }} placeholder='Enter Your Password' className='info_only_md_ard_input2' />
                                    </div>


                                    <div className='my-3'>
                                        <div className=' d-flex  justify-content-between'>

                                            <div className='col-lg-7 d-flex'>
                                                <div>
                                                    <input type="checkbox" />
                                                    &nbsp; &nbsp;
                                                </div>
                                                <div>
                                                    <p className='remember'>Remember for  password</p>
                                                </div>
                                                &nbsp; &nbsp;
                                            </div>
                                            <div className='col-lg-4'>
                                                <p className='remember remember1'>Forgot Password</p>
                                            </div>
                                        </div>
                                    </div>


                                    <div style={{ color: 'red' }}>{errorMessage}</div>
                                    <Button variant="success" onClick={() => {
                                        signin();
                                        console.log("hi")
                                    }}
                                        disabled={buttonLoading}
                                        size="lg" className="ps-5 pe-5 btn-lg w-100 mb-3">Sign in</Button>
                                    <Button variant="warning" onClick={() => {
                                        navigate('/register')
                                    }}
                                        disabled={buttonLoading}
                                        size="lg" className="ps-5 pe-5 btn-lg w-100 mb-3">Don't have a account Register</Button>

                                    <Button variant="" size="lg" className="ps-5 pe-5 btn-lg w-100 signwithgoogle" style={{ border: '1px solid black' }}>
                                        <img src={googlelogo} alt={googlelogo} className='img-fluid' />
                                        Sign in with Google
                                    </Button>


                                    {/* <div className='mt-3'>
                            <input type="email" placeholder=' Sign in with Google' className='btn   w-100' style={{ border:'1px solidblack'}} />
                        </div> */}


                                    <p className='my-5'>Don't have an account? <span className='signup'>Sign up</span></p>

                                </form>
                            </div>
                        </div>

                        <div className='col-lg-6 col-md-6 login_second_section d-none d-md-flex justify-content-center align-items-center'>
                            <img src={secondlogo} alt={secondlogo} className='img-fluid' />
                        </div>

                    </div>
                </div>

            </section>

        </>
    )
}

export default Login