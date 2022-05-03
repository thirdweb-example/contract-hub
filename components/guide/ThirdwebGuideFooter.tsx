import styles from "../../styles/Thirdweb.module.css";
import React from "react";

type Props = {
  onLearnMore: () => void;
};

const githubUrl = "https://github.com/thirdweb-example/magic-link-next-ts";
const deployUrl =
  "https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fthirdweb-example%2Fmagic-link-next-ts&env=NEXT_PUBLIC_MAGIC_LINK_API_KEY";

export default function ThirdwebGuideFooter({ onLearnMore }: Props) {
  return (
    <div className={styles.footerContainer}>
      {/* Left Side column */}
      <div className={styles.left}>
        <div>
          <h4>Built with 💜 using</h4>
        </div>
        <div>
          <a
            href={"https://thirdweb.com/"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={`/logo.png`} alt="Thirdweb Logo" width={135} />
          </a>
        </div>
      </div>

      {/* Right Side column */}
      <div className={styles.right}>
        <a className={styles.secondaryButton} onClick={onLearnMore}>
          Learn More
        </a>

        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.secondaryButton}
          style={{ textDecoration: "none" }}
        >
          View on GitHub
        </a>

        <a
          href={deployUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.mainButton}
          style={{ textDecoration: "none" }}
        >
          Deploy Your Own
        </a>
      </div>
    </div>
  );
}
