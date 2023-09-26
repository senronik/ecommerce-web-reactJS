import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {useFormik} from 'formik'
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
    // console.log(Formik);
    // console.log(errors)
    return (
        <>
            <div className='wrapper bg-dark d-flex align-items-center justify-content-center w-100'>
                <div className='login'>
                <h2 className='mb-3'>Registration Form</h2>
                    <form className='needs-validation' onSubmit={handleSubmit}>                     
                        <div className='form-group mb-2'>
                            <label htmlFor='email' className='form-label'>Name</label>
                            <input 
                            type='text' 
                            name='name'
                            autoComplete='off'
                            id='name'
                            placeholder='Name'
                            className='form-control'
                            value={values.name}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            />
                            <div className='text-danger'>
                               { errors.name && touched.name ? (<p>{errors.name}</p>):null}
                            </div>
                        </div>
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
                        <div className='form-group mb-2'>
                            <label htmlFor='password' className='form-label'>Confirm Password</label>
                            <input
                             type='password' 
                             name='confirm_password'
                             id='confirm_password'
                             autoComplete='off'
                             placeholder='Confirm Password'
                             className='form-control'
                             value={values.confirm_password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            
                            />
                            <div className='text-danger'>
                               { errors.confirm_password && touched.confirm_password ? (<p>{errors.confirm_password}</p>):null}
                            </div>
                        </div>
                        <div className='form-group form-check mb-2'>
                            <input type='checkbox'  className='form-check-input' />
                            <label htmlFor='checkbox' className='form-check-label'>Remember me</label>
                        </div>
                        <button type='submit' className='btn btn-success block mt-2'>SIGN IN</button>
                    </form>

                </div>
            </div>

        </>
    )
}

export default Registration
