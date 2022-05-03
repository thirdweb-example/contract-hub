import { MediaRenderer, useEditionDrop, useNFTList } from "@thirdweb-dev/react";
import { NFTMetadata } from "@thirdweb-dev/sdk";
import { BigNumber } from "ethers";
import React, { useEffect, useState } from "react";
import CodeSnippet from "../components/guide/CodeSnippet";
import contractAddresses from "../const/contractAddresses";
import styles from "../styles/Home.module.css";

export default function EditionDrop() {
  const editionDropContract = useEditionDrop(contractAddresses[2].address);
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
      if (!editionDropContract) {
        return;
      }
      const nfts = await editionDropContract.getAll();
      setNfts(nfts);
      setLoading(false);
    })();
  }, [editionDropContract]);

  return (
    <div className={styles.container}>
      <div className={styles.collectionContainer}>
        <div style={{ maxWidth: "800px" }}>
          <h1>Edition Drop</h1>
          <hr
            className={styles.smallDivider}
            style={{ marginTop: 0, marginBottom: 32 }}
          />

          <p>
            thirdweb&apos;s <b>Edition Drop</b> lazy mints your NFT and makes it
            available to be claimed by your users.
          </p>

          <p>
            when you create a drop inside your Edition Drop contract, the NFT is
            not minted yet. We prepare everything for your audience, so that
            they can mint it. The user who claims an NFT, mints it and transfers
            it to their wallet.
          </p>

          <p>
            <a
              style={{ color: "#e011a7" }}
              href="https://portal.thirdweb.com/contracts/edition-drop"
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
                <button
                  className={styles.mainButton}
                  style={{ marginBottom: 16 }}
                  onClick={() => editionDropContract?.claim(nft.metadata.id, 1)}
                >
                  Claim
                </button>
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

      <CodeSnippet text={``} />
    </div>
  );
}
