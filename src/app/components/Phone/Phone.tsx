import Image from "next/image";
import styles from "./Phone.module.css";

export default function Phone() {
  return (
    <main className={styles.container}>
      <Image src="/assets/phoneThing.png" alt="" width={150} height={150} />
      <h1>+1 (301) 710-3578</h1>
    </main>
  );
}
