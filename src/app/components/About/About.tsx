import Image from "next/image";
import Styles from "./About.module.css";

export default function About() {
  return (
    <div className={Styles.aboutContainer}>
      About Us
      <div className={Styles.contentContainer}>
        <div>
          <p className={Styles.paragraph}>
            Founded in 2019, Robinson&apos;s Redesigns is dedicated to providing
            top-quality services at the most competitive prices.
          </p>
          <p className={Styles.paragraph}>
            Our mission is to exceed customer expectations through innovation,
            craftsmanship, and exceptional customer service. We strive to create
            beautiful, functional spaces that reflect our clients&apos; unique
            visions while ensuring affordability and quality in every project.
          </p>
        </div>
        <Image
          src={"/assets/homeLogo.png"}
          width={500}
          height={500}
          alt=""
          className={Styles.img}
        />
      </div>
    </div>
  );
}
