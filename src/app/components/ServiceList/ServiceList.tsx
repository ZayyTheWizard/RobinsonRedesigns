import Image from "next/image";
import Styles from "./ServiceList.module.css";
import Link from "next/link";

type dataProp = {
  src: string;
  name: string;
  description: string;
};

interface ServiceListProps {
  data: dataProp[];
}

const ServiceList: React.FC<ServiceListProps> = ({ data = [] }) => {
  // Render the list of services
  return (
    <div className={Styles.container}>
      {data.map((service, index) => (
        <div
          key={index}
          className={index % 2 == 0 ? Styles.contentOdd : Styles.contentEven}
        >
          <div className={Styles.imageContainer}>
            <Image
              src={service.src}
              alt={service.name}
              width={400}
              height={400}
              className={Styles.imageStyles}
              loading="lazy"
            />
          </div>

          <div className={Styles.descriptors}>
            <h2>{service.name}</h2>
            <p className={Styles.para}>{service.description}</p>
            <Link href={"/ContactUs"}>Free Quote</Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServiceList;
