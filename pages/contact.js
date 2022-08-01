import React from "react";
import Head from "next/head";

import styles from "../../styles/Industries.module.css";

import ContactForm from "../components/ContactForm";

const contact = () => {
  return (
    <>
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
    </>
  );
};

export default contact;
