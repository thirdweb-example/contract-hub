import { useTokenDrop } from "@thirdweb-dev/react";
import React, { useState } from "react";
import CodeSnippet from "../components/guide/CodeSnippet";
import codeSnippets from "../const/codeSnippets";
import contractAddresses from "../const/contractAddresses";
import styles from "../styles/Home.module.css";

export default function NFTDrop() {
  const tokenDrop = useTokenDrop(contractAddresses[6].address);
  const [amount, setAmount] = useState<string>("");

  return (
    <div className={styles.container}>
      <div className={styles.collectionContainer}>
        <div className={styles.detailPageContainer}>
          <h1>Token Drop</h1>
          <hr className={`${styles.smallDivider} ${styles.detailPageHr}`} />

          <p>
            thirdweb&apos;s <b>Token Drop</b> allows you to release your own
            ERC20 token for a set price.
          </p>

          <p>
            You can define the conditions for when and how your users can claim
            your tokens; including allowlists, release dates, and claim limits.
          </p>

          <p>
            <a
              className={styles.lightPurple}
              href="https://portal.thirdweb.com/contracts/token-drop"
            >
              Check out the documentation here.
            </a>
          </p>
        </div>

        <div className={styles.amountToClaim}>
          <input
            className={`${styles.textInput} ${styles.noGapBottom}`}
            type="text"
            placeholder="Amount to claim"
            onChange={(e) => setAmount(e.target.value)}
          />
          <button
            className={styles.mainButton}
            onClick={() => tokenDrop?.claim(amount)}
          >
            Claim Tokens
          </button>
        </div>
      </div>
      <hr className={`${styles.divider} ${styles.spacerTop}`} />
      {/* Code Snippet */}
      <h2>How It Works</h2>

      <CodeSnippet text={codeSnippets.nftDrop} />
    </div>
  );
}
