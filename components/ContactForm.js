import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styles from '../styles/Industries.module.css'
import * as EmailValidator from 'email-validator';
import {db} from '../firebase-config'
import { addDoc, collection } from "firebase/firestore";
 
const dbRef = collection(db, "messages");
 

const ContactForm = () => { 
  const form = useRef();

  const [isSent, setSend] = useState(false)
  const [formData, setFormData] = useState({user_name: "", user_email: "", message: ""})
  const [isEmailValid, setEmailValid] = useState('')
  const [loading, setLoading] = useState(false);

  const onChangeForm = (e) =>{
    const {name, value} = e.target
    setFormData({...formData, [name]: value})

  }  
  const Success =()=>{
    return(<div className="  h-2/4 transition-all">
      <h2>Thank you for your message. Our team will contact you shortly</h2>
    </div>)
  }
  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    
  
    // console.log('form ', form.current)
    if (EmailValidator.validate(formData.user_email)) setEmailValid(" ")
    else setEmailValid("Invalid email")  // true

    emailjs
      .sendForm(
        "service_sz5fwrj",
        "template_bo5pqb9",
        form.current,
        "5XnEP5pWWhSJWW48B"
      )
      .then(
        (result) => {
          // console.log(result?.text);
          console.log("message sent to email");
          setSend(true)
         
          
        },
        (error) => {
          console.log(error.text);
        }
      );

    addDoc(dbRef,formData).then((docRef)=>{
      console.log("Firestore document has been added successfully")
    }).catch(efb=>{
      console.log(efb.message)
    })  

    setLoading(false)
  };

  return (
    <>
     
   {isSent?  <Success/>:<div className={styles.contactForm}>
      <form ref={form} onSubmit={sendEmail}>
        <label htmlFor="form_name" className="cursor-pointer">Name</label>
        <input required id="form_name"  type="text" name="user_name" value={formData.user_name} onChange={onChangeForm}/>
        <label htmlFor="form_email" className="cursor-pointer">Email</label>
        <input id="form_email" required type="email" name="user_email" value={formData.user_email} onChange={onChangeForm}/>
        {!isEmailValid && <div>{isEmailValid}</div>}
        <label htmlFor="form_mes" className="cursor-pointer">Message</label>
        <textarea
         
         required id="form_mes" name="message" value={formData.message} onChange={onChangeForm}/>
        
        <button disabled={loading} type="submit">{loading?"Sending...":"Send"}</button>
        
      </form>
       
      <script>
        
    </script>

    </div>}

    
    </>
  );
};

export default ContactForm;