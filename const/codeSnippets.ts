const codeSnippets = {
  nftCollection: `export default function NFTCollection() {
  const nftCollection = useNFTCollection("<your-contract-address-here>");
  const { data: nfts } = useNFTs(nftCollection);

  return (
    <div>
      {nfts?.map((nft) => (
        <div key={nft.metadata.id.toString()}>
          <ThirdwebNftMedia
            metadata={nft.metadata}
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
        onClick={() => nftDrop?.claim(1)}
      >
        Mint
      </button>
    </div>
  );
}`,

  edition: `export default function Edition() {
  const editionContract = useEdition("<your-contract-address-here>");
  const { data: nfts } = useNFTs(editionContract);

  return (
    <div>
        {nfts?.map((nft) => (
          <div key={nft.metadata.id.toString()}>
            <ThirdwebNftMedia
              metadata={nft.metadata}
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
  const { data: nfts } = useNFTs(editionDropContract);

  return (
    <div>
      {nfts?.map((nft) => (
        <div key={nft.metadata.id.toString()}>
          <ThirdwebNftMedia
            metadata={nft.metadata}
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
  );
}`,

  token: `export default function Token() {
  const tokenContract = useToken("<your-contract-address-here>");
  const address = useAddress();
  const { data: balance } = useTokenBalance(tokenContract, address);
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
  const { data: listings } = useActiveListings(marketplace);

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
