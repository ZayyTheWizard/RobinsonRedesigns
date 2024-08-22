"use client";
import { useState } from "react";
import ContactForm from "../components/ContactForm/ContactForm";
import Navbar from "../components/NavBar/navbar";
import Phone from "../components/Phone/Phone";
import Styles from "./page.module.css";
import { PuffLoader } from "react-spinners";

export default function Contactus() {
  const [isLoading, setisLoading] = useState(false);

  return (
    <main>
      {isLoading ? (
        <main>
          <div className={Styles.loader}>
            <PuffLoader />
          </div>
          <div>
            <div className={Styles.navbar}>
              <Navbar />
            </div>
            <div className={Styles.contactUs}>
              <h1>Contact us by...</h1>
            </div>
            <div className={Styles.content}>
              <Phone />
              <div className={Styles.line}></div>
              <ContactForm setisLoading={setisLoading} />
            </div>
          </div>
        </main>
      ) : (
        <main>
          <div className={Styles.navbar}>
            <Navbar />
          </div>
          <div className={Styles.contactUs}>
            <h1>Contact us by...</h1>
          </div>
          <div className={Styles.content}>
            <Phone />
            <div className={Styles.line}></div>
            <ContactForm setisLoading={setisLoading} />
          </div>
        </main>
      )}
    </main>
  );
}
