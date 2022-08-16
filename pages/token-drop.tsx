import {
  ChainId,
  useAddress,
  useClaimToken,
  useMetamask,
  useNetwork,
  useNetworkMismatch,
  useTokenDrop,
} from "@thirdweb-dev/react";
import React, { useState } from "react";
import CodeSnippet from "../components/guide/CodeSnippet";
import codeSnippets from "../const/codeSnippets";
import contractAddresses from "../const/contractAddresses";
import styles from "../styles/Home.module.css";

export default function TokenDrop() {
  // Wallet Connection
  const address = useAddress();
  const connectWallet = useMetamask();

  // Network Detection
  const networkMismatch = useNetworkMismatch();
  const [, switchNetwork] = useNetwork();

  const tokenDrop = useTokenDrop(contractAddresses[6].address);
  const { mutate: claimTokens } = useClaimToken(tokenDrop);
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
              href="https://portal.thirdweb.com/pre-built-contracts/token-drop"
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
            onClick={() =>
              address
                ? networkMismatch
                  ? switchNetwork && switchNetwork(ChainId.Mumbai)
                  : claimTokens({
                      amount,
                      to: address,
                    })
                : connectWallet()
            }
          >
            Claim Tokens
          </button>
        </div>
      </div>
      <hr className={`${styles.divider} ${styles.spacerTop}`} />
      {/* Code Snippet */}
      <h2>How It Works</h2>

      <CodeSnippet text={codeSnippets.tokenDrop} />
    </div>
  );
}
