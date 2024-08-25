"use client";
import { useEffect, useState } from "react";
import ContactForm from "../components/ContactForm/ContactForm";
import Navbar from "../components/NavBar/navbar";
import Phone from "../components/Phone/Phone";
import Styles from "./page.module.css";
import { PuffLoader } from "react-spinners";
import { Bounce, toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Contactus() {
  const [status, setStatus] = useState<string>("idle");

  const showToast = (message: string) => {
    toast(message, {
      position: "bottom-left",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });
  };

  useEffect(() => {
    const handleStatusChange = (newStatus: string) => {
      setStatus(newStatus);
      if (newStatus === "Success") showToast("😊 Successfully sent message!");
      if (newStatus === "Failure") showToast("❌ Failed to send message!");
    };

    handleStatusChange(status);
  }, [status]);

  return (
    <main>
      {status === "Loading" ? (
        <div className={Styles.loader}>
          <PuffLoader size={150} />
        </div>
      ) : null}
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
          <ContactForm setStatus={setStatus} />
        </div>
      </div>

      <ToastContainer
        position="bottom-left"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
      />
    </main>
  );
}
