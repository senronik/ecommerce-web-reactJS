import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {useFormik} from 'formik'
import { NavLink } from 'react-router-dom'

import { signupSchema } from "../schemas/Schema.js";

const initialValues={
    name:'',
    email:'',
    password:'',
    confirm_password:'',
}
const Registration = () => {
   const {values,handleBlur,handleChange,touched,handleSubmit,errors}= useFormik({
        initialValues:initialValues,
        validationSchema:signupSchema,
        onSubmit:(values)=>{
            console.log(values);
        }
    })
    return (
        <>
            <div className='wrapper bg-dark d-flex align-items-center justify-content-center w-100'>
                <div className='login'>
                <h2 className='mb-3'>User Login</h2>
                    <form className='needs-validation' onSubmit={handleSubmit}>                     
                        <div className='form-group mb-2'>
                            <label htmlFor='email' className='form-label'>Email Address</label>
                            <input 
                            type='email'
                            name='email'
                            autoComplete='off'
                            id='email'
                            placeholder='Email Address'
                            className='form-control' 
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            
                            />
                            <div className='text-danger'>
                               { errors.email && touched.email ? (<p>{errors.email}</p>):null}
                            </div>
                        </div>
                        <div className='form-group mb-2'>
                            <label htmlFor='password' className='form-label'>Password</label>
                            <input
                             type='password' 
                             name='password'
                             autoComplete='off'
                             id='password'
                             placeholder='Password'
                             className='form-control'
                             value={values.password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            
                            />
                            <div className='text-danger'>
                               { errors.password && touched.password ? (<p>{errors.password}</p>):null}
                            </div>
                        </div>
                        <div className='form-group form-check mb-2'>
                            <input type='checkbox'  className='form-check-input' />
                            <label htmlFor='checkbox' className='form-check-label'>Remember me</label>
                        </div>
                        <div className='d-flex align-items-center justify-content-between'>
                        <button type='submit' className='btn btn-success block mt-2'>SIGN IN</button>
                        <div>
                        <span>Doesn't have Account ?{" "}</span>
                        <NavLink to={"/registration"} className="nav-link active" aria-current="page"><button type='submit' className='btn btn-success block mt-2'>SIGN UP</button></NavLink>
                        
                        </div>
                        </div>
                    </form>

                </div>
            </div>

        </>
    )
}

export default Registration
