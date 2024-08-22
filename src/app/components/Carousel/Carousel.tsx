"use client";
import { useEffect, useState } from "react";
import Styles from "./Casrousel.module.css";
import Image from "next/image";
import "./Casrousel.module.css";
import Link from "next/link";

type imageProps = {
  images: string[];
};

export default function Carousel({ images }: imageProps) {
  const [curr, setCurr] = useState(0);

  const slideRight = () => {
    setCurr(curr === images.length - 1 ? 0 : curr + 1);
  };

  useEffect(() => {
    setTimeout(() => {
      slideRight();
      console.log(curr);
    }, 2500);
  });

  return (
    <div className={Styles.carousel}>
      <div className={Styles.carsouselWrapper}>
        {images.map((images, index) => {
          return (
            <div
              key={index}
              className={index === curr ? Styles.cardActive : Styles.card}
            >
              <Image
                className={Styles.cardImage}
                src={images}
                alt=""
                width={900}
                height={900}
                loading="lazy"
              />
              <div className={Styles.cardOverlay}>
                <div className={Styles.buttonContainer}>
                  <div>
                    <Image
                      src={"/assets/headingMain.png"}
                      alt=""
                      width={500}
                      height={500}
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <button className={Styles.buttonStyles}>
                      <Link href="/ContactUs">Free Quote</Link>
                    </button>
                    <button className={Styles.buttonStyles}>
                      <Link href="/Services">Services</Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
