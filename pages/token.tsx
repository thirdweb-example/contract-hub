import { useAddress, useToken } from "@thirdweb-dev/react";
import { CurrencyValue } from "@thirdweb-dev/sdk";
import React, { useEffect, useState } from "react";
import CodeSnippet from "../components/guide/CodeSnippet";
import contractAddresses from "../const/contractAddresses";
import styles from "../styles/Home.module.css";

export default function NFTDrop() {
  const tokenContract = useToken(contractAddresses[4].address);
  const address = useAddress();

  const [balance, setBalance] = useState<CurrencyValue | null>();
  const [totalSupply, setTotalSupply] = useState<CurrencyValue>();

  // Fetch NFTs
  useEffect(() => {
    (async () => {
      const balanceOfUser = address
        ? await tokenContract?.balanceOf(address)
        : null;
      setBalance(balanceOfUser);

      const supply = await tokenContract?.totalSupply();
      setTotalSupply(supply);
    })();
  }, [address, tokenContract]);

  return (
    <div className={styles.container}>
      <div className={styles.collectionContainer}>
        <div style={{ maxWidth: "800px" }}>
          <h1>Token</h1>
          <hr
            className={styles.smallDivider}
            style={{ marginTop: 0, marginBottom: 32 }}
          />
          <p>
            The Token contract is suited for projects in which you want to
            create <b>your own currency</b>. This currency can be purchased and
            traded between users on an exchange, utilized to buy and sell NFTs
            in a marketplace, and much more.
          </p>
          <p>
            This can be combined with other contracts like NFT Drop , Splits ,
            Edition Drop , and Marketplace for even greater functionality.
          </p>
          <p>
            <a
              style={{ color: "#e011a7" }}
              href="https://portal.thirdweb.com/contracts/token"
            >
              Check out the documentation here.
            </a>
          </p>
        </div>

        <div className={styles.tokenGrid}>
          {/* Total Supply */}
          <div className={styles.tokenItem}>
            <h3 className={styles.tokenLabel}>Total Supply</h3>
            <p className={styles.tokenValue}>
              {totalSupply === undefined && "Loading..."}
              {totalSupply?.displayValue} {totalSupply?.symbol}
            </p>
          </div>

          {/* Balance */}
          <div className={styles.tokenItem}>
            <h3 className={styles.tokenLabel}>Your Balance</h3>
            <p className={styles.tokenValue}>
              {balance === undefined && "Loading..."}
              {balance === null && "Connect wallet to view"}
              {balance?.displayValue} {balance?.symbol}
            </p>
          </div>
        </div>
      </div>
      <hr className={styles.divider} style={{ marginTop: 32 }} />
      {/* Code Snippet */}
      <h2>How It Works</h2>

      <CodeSnippet text={``} />
    </div>
  );
}
