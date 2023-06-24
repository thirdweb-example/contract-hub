import { Web3Button } from "@thirdweb-dev/react";
import CodeSnippet from "../components/guide/CodeSnippet";
import codeSnippets from "../const/codeSnippets";
import contractAddresses from "../const/contractAddresses";
import styles from "../styles/Home.module.css";

export default function NFTDrop() {
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
              href="https://portal.thirdweb.com/pre-built-contracts/nft-drop"
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
        <Web3Button
          contractAddress={contractAddresses[1].address}
          action={(contract) => contract.erc721.claim(1)}
          theme="dark"
          onSuccess={() => alert("Claimed NFT!")}
          onError={(err) => alert(err)}
        >
          Claim NFT
        </Web3Button>
      </div>
      <hr className={`${styles.divider} ${styles.spacerTop}`} />
      {/* Code Snippet */}
      <h2>How It Works</h2>

      <CodeSnippet text={codeSnippets.nftDrop} />
    </div>
  );
}
