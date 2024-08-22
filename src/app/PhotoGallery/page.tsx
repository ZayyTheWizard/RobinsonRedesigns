"use client";
import { useEffect, useState } from "react";
import Navbar from "../components/NavBar/navbar";
import { getImagesFromS3 } from "../pages/getImages";
import Styles from "./page.module.css";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { PuffLoader } from "react-spinners";

interface SlideImage {
  src: string;
  width?: number;
  height?: number;
  alt?: string;
}

export default function PhotoGallery() {
  const [imageUrls, setImageUrls] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [currIdx, setCurrIdx] = useState<number>(-1);

  const fetchImages = async () => {
    try {
      const urls = await getImagesFromS3();
      setImageUrls(urls); // Update the state with the fetched URLs
    } catch (error) {
      console.error("Failed to fetch images:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  if (loading) {
    return (
      <div className={Styles.loader}>
        <PuffLoader />
      </div>
    ); // or any other loading indicator
  }

  const slides: SlideImage[] = imageUrls.map((url) => ({
    src: url,
    width: 500, // Optional: You can specify the width and height if known
    height: 500,
    alt: "Gallery Image", // Optional: Add an alt text if necessary
  }));

  return (
    <main>
      <div className={Styles.navbarStyles}>
        <Navbar />
      </div>
      <Lightbox
        open={currIdx >= 0}
        close={() => {
          setCurrIdx(-1);
        }}
        slides={slides}
        index={currIdx}
      />
      <div className={Styles.gallery}>
        {imageUrls.map((url, index) => (
          <div
            key={index}
            className={Styles.image}
            onClick={() => {
              setCurrIdx(index);
            }}
          >
            <Image src={url} width={500} height={500} alt={`Image ${index}`} />
          </div>
        ))}
      </div>
    </main>
  );
}
