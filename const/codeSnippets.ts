const codeSnippets = {
  nftCollection: `export default function NFTCollection() {

  const nftCollection = useNFTCollection("<your-contract-address-here>");
  const { data: nfts } = useNFTList(nftCollection);

  return (
    <div className={styles.nftBoxGrid}>
      {nfts?.map((nft) => (
        <div className={styles.nftBox} key={nft.metadata.id.toString()}>
          <MediaRenderer
            src={nft.metadata.image}
            style={{ width: "100%", borderRadius: 15 }}
          />
          <h3>{nft.metadata.name}</h3>
        </div>
      ))}
    </div>
    )
}`,

  nftDrop: `export default function NFTDrop() {
  const nftCollection = useNFTDrop("<your-contract-address-here>");
  const [allNfts, setAllNfts] = useState<NFTMetadata[]>([]);

  // Fetch NFTs
  useEffect(() => {
    (async () => {
      if (!nftCollection) return;
      const unclaimed = await nftCollection?.getAllUnclaimed();
      setAllNfts(unclaimed as NFTMetadata[]);
    })();
  }, [nftCollection]);

  // Claim an NFT
  const claimNft = async (id: BigNumber) => {
    await nftCollection?.claim(id);
  };

  return (
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
  );
}`,

  edition: `export default function Edition() {
  const editionContract = useEdition("<your-contract-address-here>");
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
      if (!editionContract) return;
      const nfts = await editionContract?.getAll();
      setNfts(nfts);
    })();
  }, [editionContract]);

  return (
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
  );
}`,

  editionDrop: `export default function EditionDrop() {
  const editionDropContract = useEditionDrop("<your-contract-address-here>");
  const [nfts, setNfts] = useState<
    {
      metadata: NFTMetadata;
      supply: BigNumber;
    }[]
  >([]);

  // Fetch NFTs
  useEffect(() => {
    (async () => {
      if (!editionDropContract) {
        return;
      }
      const nfts = await editionDropContract.getAll();
      setNfts(nfts);
    })();
  }, [editionDropContract]);

  return (
    <div className={styles.collectionContainer}>
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
    </div>
  );
}`,

  token: `export default function NFTDrop() {
  const tokenContract = useToken("<your-contract-address-here>");
  const address = useAddress();

  const [balance, setBalance] = useState<CurrencyValue | null>();
  const [totalSupply, setTotalSupply] = useState<CurrencyValue>();

  // Fetch Token Information
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
    <div className={styles.tokenGrid}>
      {/* Total Supply */}
      <div className={styles.tokenItem}>
        <h3 className={styles.tokenLabel}>Total Supply</h3>
        <p className={styles.tokenValue}>
          {totalSupply === undefined
            ? "Loading..."
            : "" +
              totalSupply?.displayValue +
              " " +
              totalSupply?.symbol +
              ""}
        </p>
      </div>

      {/* Balance */}
      <div className={styles.tokenItem}>
        <h3 className={styles.tokenLabel}>Your Balance</h3>
        <p className={styles.tokenValue}>
          {address
            ? balance === undefined
              ? "Loading..."
              : "" + balance?.displayValue + " " + balance?.symbol + ""
            : "Connect Your Wallet"}
        </p>
      </div>
    </div>
  );
}`,

  marketplace: `export default function Marketplace() {
  const marketplace = useMarketplace("<your-contract-address-here>");
  const [listings, setListings] = useState<(DirectListing | AuctionListing)[]>(
    []
  );

  // Fetch Listings
  useEffect(() => {
    (async () => {
      if (!marketplace) return;
      const ls = await marketplace.getActiveListings();
      setListings(ls);
    })();
  }, [marketplace]);

  return (
    <div className={styles.nftBoxGrid}>
      {listings?.map((listing) => (
        <div className={styles.nftBox} key={listing.id.toString()}>
          <MediaRenderer
            src={listing.asset.image}
            style={{ width: "100%", borderRadius: 15 }}
          />
          <h3>{listing.asset.name}</h3>
          <p>
            {listing.buyoutCurrencyValuePerToken.displayValue}{" "}
            {listing.buyoutCurrencyValuePerToken.symbol}
          </p>
          <button
            className={styles.mainButton}
            style={{ marginBottom: 16 }}
            onClick={() =>
              marketplace?.direct.buyoutListing(listing.id, 1)
            }
          >
            Buy
          </button>
        </div>
      ))}
    </div>
  );
}`,
};

export default codeSnippets;
