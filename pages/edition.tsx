import { MediaRenderer, useEdition } from "@thirdweb-dev/react";
import { NFTMetadata } from "@thirdweb-dev/sdk";
import { BigNumber } from "ethers";
import React, { useEffect, useState } from "react";
import CodeSnippet from "../components/guide/CodeSnippet";
import codeSnippets from "../const/codeSnippets";
import contractAddresses from "../const/contractAddresses";
import styles from "../styles/Home.module.css";

export default function Edition() {
  const editionContract = useEdition(contractAddresses[3].address);
  const [loading, setLoading] = useState<boolean>(true);
  const [nfts, setNfts] = useState<
    | {
        metadata: NFTMetadata;
        supply: BigNumber;
      }[]
    | undefined
  >([]);

  // Fetch NFTs
  useEffect(() => {
    (async () => {
      if (!editionContract) {
        return;
      }
      const nfts = await editionContract.getAll();
      setNfts(nfts);
      setLoading(false);
    })();
  }, [editionContract]);

  return (
    <div className={styles.container}>
      <div className={styles.collectionContainer}>
        <div style={{ maxWidth: "800px" }}>
          <h1>Edition </h1>
          <hr
            className={styles.smallDivider}
            style={{ marginTop: 0, marginBottom: 32 }}
          />

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
              style={{ color: "#e011a7" }}
              href="https://portal.thirdweb.com/contracts/edition"
            >
              Check out the documentation here.
            </a>
          </p>
        </div>
        {!loading ? (
          <div className={styles.nftBoxGrid}>
            {nfts?.map((nft) => (
              <div className={styles.nftBox} key={nft.metadata.id.toString()}>
                <MediaRenderer
                  src={nft.metadata.image}
                  style={{ width: "100%", borderRadius: 15 }}
                />
                <h3>{nft.metadata.name}</h3>
                <p>Quantity: {nft.supply.toNumber()}</p>
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

      <CodeSnippet text={codeSnippets.edition} />
    </div>
  );
}
