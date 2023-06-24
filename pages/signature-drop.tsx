import { Web3Button } from "@thirdweb-dev/react";
import CodeSnippet from "../components/guide/CodeSnippet";
import codeSnippets from "../const/codeSnippets";
import contractAddresses from "../const/contractAddresses";
import styles from "../styles/Home.module.css";

export default function SignatureDrop() {
  return (
    <div className={styles.container}>
      <div className={styles.collectionContainer}>
        <div className={styles.detailPageContainer}>
          <h1>Signature Drop</h1>
          <hr className={`${styles.smallDivider} ${styles.detailPageHr}`} />
          <p>
            The Signature Drop contract uses the ERC721A standard to release a
            collection of unique one-of-one NFTs with lower gas fees for your
            community compared to the regular ERC721 standard used in the NFT
            Drop.
          </p>
          <p>
            You lazy-mint your NFTs by uploading the metadata and configuring a
            single claim phase, laying out the rules for how your users can
            claim NFTs from your drop; such as an allowlist, release date, or
            delayed reveal.
          </p>
          <p>
            The &ldquo;signature&rdquo; in the name refers to the
            signature-based minting feature, that allows you to grant users the
            ability to mint NFT(s) based on a custom set of criteria, checked
            on-demand. This feature is optional and separate from the claim
            phase conditions.
          </p>
          <p>
            <a
              className={styles.lightPurple}
              href="https://portal.thirdweb.com/pre-built-contracts/signature-drop"
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
          contractAddress={contractAddresses[0].address}
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

      <CodeSnippet text={codeSnippets.signatureDrop} />
    </div>
  );
}
