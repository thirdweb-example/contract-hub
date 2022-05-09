import {
  ThirdwebNftMedia,
  useNFTCollection,
  useNFTs,
} from "@thirdweb-dev/react";
import React from "react";
import CodeSnippet from "../components/guide/CodeSnippet";
import codeSnippets from "../const/codeSnippets";
import contractAddresses from "../const/contractAddresses";
import styles from "../styles/Home.module.css";

export default function NFTCollection() {
  const nftCollection = useNFTCollection(contractAddresses[1].address);
  const { data: nfts, isLoading } = useNFTs(nftCollection);

  return (
    <div className={styles.container}>
      <div className={styles.collectionContainer}>
        <div style={{ maxWidth: "800px" }}>
          <h1>NFT Collection</h1>
          <hr
            className={styles.smallDivider}
            style={{ marginTop: 0, marginBottom: 32 }}
          />
          <p>
            NFT Collection is for <b>one-of-one NFTs</b> that can be created at
            any time.
          </p>
          <p>
            The NFT Collection is suited for cases where 1 media file is mapped
            to 1 token (NFT). In other words, you don&apos;t want to mint an NFT
            multiple times with the same asset (like an image).
          </p>
          <p>
            <a
              style={{ color: "#e011a7" }}
              href="https://portal.thirdweb.com/contracts/nft-collection"
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
                  style={{ width: "100%", borderRadius: 15 }}
                />
                <h3>{nft.metadata.name}</h3>
              </div>
            ))}
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
      <hr className={styles.divider} style={{ marginTop: 32 }} />
      {/* Code Snippet */}
      <h2>How It Works</h2>

      <CodeSnippet text={codeSnippets.nftCollection} />
    </div>
  );
}
