import { MediaRenderer, useNFTDrop } from "@thirdweb-dev/react";
import { NFTMetadata, NFTMetadataOwner } from "@thirdweb-dev/sdk";
import { BigNumber } from "ethers";
import React, { useEffect, useState } from "react";
import CodeSnippet from "../components/guide/CodeSnippet";
import contractAddresses from "../const/contractAddresses";
import styles from "../styles/Home.module.css";

export default function NFTDrop() {
  const nftCollection = useNFTDrop(contractAddresses[0].address);
  const [loading, setLoading] = useState<boolean>(true);
  const [allNfts, setAllNfts] = useState<NFTMetadata[]>([]);

  // Fetch NFTs
  useEffect(() => {
    (async () => {
      const unclaimed = await nftCollection?.getAllUnclaimed();
      setAllNfts(unclaimed as NFTMetadata[]);
      setLoading(false);
    })();
  }, [nftCollection]);

  // Claim an NFT
  const claimNft = async (id: BigNumber) => {
    alert(
      "We won't actually claim this NFT so that it remains available for the demo... But, You can see the code for how to claim the NFTs below."
    );
    return;

    await nftCollection?.claim(id);
  };

  return (
    <div className={styles.container}>
      <div className={styles.collectionContainer}>
        <div style={{ maxWidth: "800px" }}>
          <h1>NFT Drop</h1>
          <hr
            className={styles.smallDivider}
            style={{ marginTop: 0, marginBottom: 32 }}
          />

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
              style={{ color: "#e011a7" }}
              href="https://portal.thirdweb.com/contracts/nft-drop"
            >
              Check out the documentation here.
            </a>
          </p>
        </div>
        {!loading ? (
          <div className={styles.nftBoxGrid}>
            {allNfts?.map((nft) => (
              <div className={styles.nftBox} key={nft.id.toString()}>
                <MediaRenderer
                  src={nft.image}
                  style={{ width: "100%", borderRadius: 15 }}
                />
                <h3>{nft.name}</h3>
                <button
                  className={styles.mainButton}
                  style={{ marginBottom: 16 }}
                  onClick={() => claimNft(nft.id)}
                >
                  Mint
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
