import Styles from "./app.module.css";
import Navbar from "./NavBar/navbar";
import Carousel from "./Carousel/Carousel";
import About from "./About/About";

const imgData: string[] = [
  "/homeImages/Home1.jpg",
  "/homeImages/Home2.jpg",
  "/homeImages/Home3.jpg",
];

export default function App() {
  return (
    <main>
      <div className={Styles.navbarStyles}>
        <Navbar></Navbar>
      </div>
      <Carousel images={imgData} />
      <div className={Styles.about}>
        <About />
      </div>
    </main>
  );
}
