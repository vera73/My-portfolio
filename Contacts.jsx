import React from 'react'
import { Formik } from 'formik';
import emailjs from '@emailjs/browser'
import {useRef} from 'react'
import {useState} from 'react'

export default function Contacts() {



  const sendEmail = () => {
    // emailjs.sendForm('service_fgirm0m', 'template_ae5ubfv', form.current, 'gNJB-N2Jt58y5Z2Sp')
    //   .then((result) => {
    //       console.log(result.text);
    //   }, (error) => {
    //       console.log(error.text);
    //   });
  };




  return (
     <div>
     <h1>Send me a message</h1>
     <Formik
       initialValues={{ email: ''}}
       validate={values => {
         const errors = {};
         if (!values.email) {
           errors.email = 'Required';
         } else if (
           !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
         ) {
           errors.email = 'Invalid email address';
         }
         return errors;
       }}
       onSubmit={(values, { setSubmitting }) => {
           setSubmitting(false);
          //  sendEmail();
       }}
     >
       {({
         values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
         isSubmitting,
       }) => (
         <form onSubmit={handleSubmit}>
          <label>Email</label>
          <div className='form-wrapper'>
           <input 
            placeholder="email@gmail.com"
             type="email"
             name="email"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.email}
           />
           {errors.email && touched.email && errors.email}
           </div>

           <label>Message</label>
           <div className='form-wrapper'>
            <textarea name='message'/>
           </div>

           <button type="submit" disabled={isSubmitting}>
             Submit
           </button>

         </form>
       )}
     </Formik>
 
     {/* {true && <p>The message has been sent successfuly</p>} */}
   </div>
   
 );
  
}
