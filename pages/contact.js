import React from "react";

import styles from "../styles/Contact.module.css";

import ContactForm from "../components/ContactForm";
import Link from "next/link";

const contact = () => {
  return (
    <div className={styles.cont}>
      <div className='flex items-center justify-center'>
        <Link href='/dashboard-tutorials'>
          <a className='text-2xl text-blue-600 hover:underline'>Tutorials</a>
        </Link>
        <div className='mx-10'>
          <Link href='/shortcuts'>
            <a className='text-2xl  text-blue-600 hover:underline'>
              Keyboard shortcuts
            </a>
          </Link>
        </div>
      </div>
      <div className={styles.contactRow}>
        <div className={styles.contactColumn}>
          <h3 className='mb-6'>Contact Us</h3>
          <h4 className='mb-2'>Ariadne Maps GmbH</h4>
          <p className='mb-24'>
            Brecherspitzstraße 8<br />
            81541 München
            <br />
            +49 174 4079675 <br />
            contact@ariadnemaps.com
          </p>
        </div>

        <div className={styles.contactColumn}>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default contact;
