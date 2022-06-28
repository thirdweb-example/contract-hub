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
  const { mutate: claimNft } = useClaimNFT(nftDrop);

  return (
    <div>
      <button
        onClick={() =>
          claimNft({
            quantity: 1,
            to: address,
          })
        }
      >
        Claim
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
  const { mutate: claimNft } = useClaimNFT(editionDropContract);

  return (
    <div>
      {nfts?.map((nft) => (
        <div key={nft.metadata.id.toString()}>
          <ThirdwebNftMedia
            metadata={nft.metadata}
          />
          <h3>{nft.metadata.name}</h3>
          <button
            onClick={() => 
              claimNft({
                quantity: 1,
                tokenId: nft.metadata.id,
                to: address,
              })
            }
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
  const { mutate: buy } = useBuyNow(marketplace);

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
            <button
              onClick={() =>
                buy({
                  id: listing.id,
                  type: listing.type,
                  buyAmount: 1,
                })
              }
            >
              Buy
            </button>
        </div>
      ))}
    </div>
  );
}`,

  tokenDrop: `export default function TokenDrop() {
  const tokenDrop = useTokenDrop("<your-contract-address-here>");
  const { mutate: claimTokens } = useClaimToken(tokenDrop);
  const [amount, setAmount] = useState<string>("");

  return (
    <div>
      <div className={styles.amountToClaim}>
        <input
          type="text"
          placeholder="Amount to claim"
          onChange={(e) => setAmount(e.target.value)}
        />
        <button
          className={styles.mainButton}
          onClick={() =>
            claimTokens({
              amount: amount,
              to: address,
            })
          }
        >
          Claim Tokens
        </button>
      </div>
    </div>
  );
}`,
};

export default codeSnippets;
