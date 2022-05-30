import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import contractAddresses from "../const/contractAddresses";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const router = useRouter();

  return (
    <>
      {/* Content */}
      <div className={styles.container}>
        {/* Top Section */}
        <h1 className={styles.h1}>thirdweb Contract Example Hub</h1>
        <p className={styles.explain}>
          Learn how to code basic projects for each contract we have at{" "}
          <b>
            <a
              href="https://thirdweb.com/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.purple}
            >
              thirdweb
            </a>
          </b>
          .
        </p>

        <hr className={styles.divider} />

        <div className={styles.contractBoxGrid}>
          {contractAddresses.map((c) => (
            <div
              className={styles.contractBox}
              key={c.name}
              onClick={() => router.push(`${c.link}`)}
            >
              <div className={styles.contractImage}>
                <img src={c.icon} />
              </div>
              <h3 className={styles.cardName}>{c.name}</h3>
              <p className={styles.description}>{c.description}</p>
            </div>
          ))}
        </div>

        <a
          className={`${styles.mainButton} ${styles.bigSpacerTop} ${styles.noUnderline}`}
          role="button"
          href="https://portal.thirdweb.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Get Started
        </a>
      </div>
    </>
  );
};

export default Home;
