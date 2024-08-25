"use client";
import { useRef, useState } from "react";
import styles from "./ContactForm.module.css";
import emailjs from "@emailjs/browser";

interface ContactFormProps {
  setStatus: (status: string) => void;
}

export default function ContactForm({ setStatus }: ContactFormProps) {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: any) => {
    e.preventDefault();

    setStatus("Loading");

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICEID ?? "",
        process.env.NEXT_PUBLIC_TEMPLATEID ?? "",
        form.current ?? "",
        {
          publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY ?? "",
        }
      )
      .then(
        () => {
          form.current?.reset();
          setStatus("Success");
        },
        (error: any) => {
          console.log("FAILED...", error.text);
          setStatus("Failure");
        }
      );
  };

  return (
    <form ref={form} className={styles.container} onSubmit={sendEmail}>
      <input
        type="text"
        placeholder="Name"
        className={styles.input}
        name="user_name"
      ></input>
      <input
        type="email"
        placeholder="Email"
        className={styles.input}
        name="user_email"
      ></input>
      <input
        type="text"
        placeholder="Body"
        className={styles.body}
        name="message"
      ></input>
      <button className={styles.buttonStyle}>Submit</button>
    </form>
  );
}
