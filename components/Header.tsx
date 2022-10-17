import Link from "next/link";
import React from "react";
import styles from "../styles/Home.module.css";

export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.left}>
        <div>
          <Link href="/">
            <img
              src={`/logo.png`}
              alt="Thirdweb Logo"
              className={styles.headerLogo}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
