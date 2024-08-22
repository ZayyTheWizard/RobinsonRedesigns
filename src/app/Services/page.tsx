import Navbar from "../components/NavBar/navbar";
import Styles from "./page.module.css";
import { data } from "./data";
import ServiceList from "../components/ServiceList/ServiceList";
import Link from "next/link";

export default function Services() {
  return (
    <main className={Styles.main}>
      <div className={Styles.navbar}>
        <Navbar />
      </div>
      <h1 className={Styles.title}>Services</h1>
      <ServiceList data={data} />
      <div className={Styles.serviceFooter}>
        <h2>Need a service not Listed?</h2>
        <Link href="/ContactUs">Contact Us</Link>
      </div>
    </main>
  );
}
