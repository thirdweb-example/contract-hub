import { ThirdwebNftMedia, useEdition, useNFTs } from "@thirdweb-dev/react";
import React from "react";
import CodeSnippet from "../components/guide/CodeSnippet";
import codeSnippets from "../const/codeSnippets";
import contractAddresses from "../const/contractAddresses";
import styles from "../styles/Home.module.css";

export default function Edition() {
  const editionContract = useEdition(contractAddresses[3].address);
  const { data: nfts, isLoading } = useNFTs(editionContract);

  return (
    <div className={styles.container}>
      <div className={styles.collectionContainer}>
        <div className={styles.detailPageContainer}>
          <h1>Edition </h1>
          <hr className={`${styles.smallDivider} ${styles.detailPageHr}`} />

          <p>
            thirdweb&apos;s Edition contract lets you mint multiple NFTs based
            on the same file.
          </p>

          <p>
            Each of the NFTs share the same ID and same image, but now you can
            have multiple of them. This type of NFT is also called one-of-many
            with ERC-1155.
          </p>

          <p>
            <a
              className={styles.lightPurple}
              href="https://portal.thirdweb.com/contracts/edition"
            >
              Check out the documentation here.
            </a>
          </p>
        </div>
        {!isLoading ? (
          <div className={styles.nftBoxGrid}>
            {nfts?.map((nft) => (
              <div className={styles.nftBox} key={nft.metadata.id.toString()}>
                <ThirdwebNftMedia
                  metadata={nft.metadata}
                  className={styles.nftMedia}
                />
                <h3>{nft.metadata.name}</h3>
                {/* @ts-ignore */}
                <p>Quantity: {nft.supply?.toNumber()}</p>
              </div>
            ))}
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
      <hr className={`${styles.divider} ${styles.spacerTop}`} />
      {/* Code Snippet */}
      <h2>How It Works</h2>

      <CodeSnippet text={codeSnippets.edition} />
    </div>
  );
}
