const codeSnippets = {
  nftCollection: `export default function NFTCollection() {

  const nftCollection = useNFTCollection("<your-contract-address-here>");
  const { data: nfts } = useNFTList(nftCollection);

  return (
    <div>
      {nfts?.map((nft) => (
        <div key={nft.metadata.id.toString()}>
          <ThirdwebNftMedia
            metadata={nft.metadata}
            style={{ width: "100%", borderRadius: 15 }}
          />
          <h3>{nft.metadata.name}</h3>
        </div>
      ))}
    </div>
  )
}`,

  nftDrop: `export default function NFTDrop() {
  const nftDrop = useNFTDrop("<your-contract-address-here>");

  return (
    <div>
      <button
        className={styles.mainButton}
        style={{ marginBottom: 16 }}
        onClick={() => nftDrop?.claim(1)}
      >
        Mint
      </button>
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
    <div>
        {nfts?.map((nft) => (
          <div key={nft.metadata.id.toString()}>
            <MediaRenderer
              src={nft.metadata.image}
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
        <div>
          {nfts?.map((nft) => (
            <div key={nft.metadata.id.toString()}>
              <ThirdwebNftMedia
                metadata={nft.metadata}
                style={{ width: "100%", borderRadius: 15 }}
              />
              <h3>{nft.metadata.name}</h3>
              <button
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

  token: `export default function Token() {
  const tokenContract = useToken("<your-contract-address-here>");
  const address = useAddress();
  const { data: balance } = useTokenBalace(tokenContract, address);
  const { data: totalSupply } = useTokenSupply(tokenContract);

  return (
    <div>
      {/* Total Supply */}
      <div>
        <h3>Total Supply</h3>
        <p>
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
      <div>
        <h3>Your Balance</h3>
        <p>
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
  const { data: listings } = useMarketplaceListings(marketplace);

  return (
    <div>
      {listings?.map((listing) => (
        <div key={listing.id.toString()}>
          <ThirdwebNftMedia
            metadata={{ ...listing.asset }}
          />
          <h3>{listing.asset.name}</h3>
          <p>
            {listing.buyoutCurrencyValuePerToken.displayValue}
            {" "}
            {listing.buyoutCurrencyValuePerToken.symbol}
          </p>
          <button onClick={() => marketplace?.direct.buyoutListing(listing.id, 1)}>
            Buy
          </button>
        </div>
      ))}
    </div>
  );
}`,
};

export default codeSnippets;
