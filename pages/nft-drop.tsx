import { useNFTDrop, useUnclaimedNFTs } from "@thirdweb-dev/react";
import React from "react";
import CodeSnippet from "../components/guide/CodeSnippet";
import codeSnippets from "../const/codeSnippets";
import contractAddresses from "../const/contractAddresses";
import styles from "../styles/Home.module.css";

export default function NFTDrop() {
  const nftDrop = useNFTDrop(contractAddresses[0].address);

  return (
    <div className={styles.container}>
      <div className={styles.collectionContainer}>
        <div className={styles.detailPageContainer}>
          <h1>NFT Drop</h1>
          <hr className={`${styles.smallDivider} ${styles.detailPageHr}`} />

          <p>
            thirdweb&apos;s <b>NFT Drop</b> lazy mints your NFT and makes it
            available to be claimed by your users.
          </p>

          <p>
            When you create a drop inside your NFT Drop contract, the NFT is not
            minted yet. We prepare everything for your audience, so that they
            can mint it. The user who claims an NFT mints it, and transfers it
            to their wallet.
          </p>

          <p>
            <a
              className={styles.lightPurple}
              href="https://portal.thirdweb.com/contracts/nft-drop"
            >
              Check out the documentation here.
            </a>
          </p>
        </div>
        <img
          src={`/yellow_star.png`}
          alt={"Example NFT Image"}
          width={300}
          height={300}
        />
        <button
          className={`${styles.mainButton} ${styles.spacerBottom}`}
          onClick={() => nftDrop?.claim(1)}
        >
          Claim An NFT
        </button>
      </div>
      <hr className={`${styles.divider} ${styles.spacerTop}`} />
      {/* Code Snippet */}
      <h2>How It Works</h2>

      <CodeSnippet text={codeSnippets.nftDrop} />
    </div>
  );
}
