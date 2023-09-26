import React from 'react'

function Contact() {
  return (
    <div>
      <h2 className='heading'>hello contact</h2>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.8837490094365!2d75.86379917400812!3d22.695371128461897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd3edbca24ed%3A0xc8f8fbba0fed0cc8!2sPROGRAMMERS%20POINT!5e0!3m2!1sen!2sin!4v1687165184135!5m2!1sen!2sin"
        width="100%" height="300" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      <div className='container mt-5 mb-5'>
        <div className='contact-form'>
          <form action='' method='POST' className='formcontrol'>
            <label htmlFor="exampleFormControlInput1" className="form-label">UserName</label>
            <input type="text" name='username' className="form-control" id="exampleFormControlInput1" placeholder="username" autoComplete='off' required/>
          
            <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
            <input type="email" name='email' className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" autoComplete='off' required/>
          
            <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" required></textarea>
            <input type='submit' className='btn btn-primary' placeholder='Send'/>
          </form>
        </div>
      </div>
    </div>

  )
}

export default Contact
