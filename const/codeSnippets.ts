const codeSnippets = {
  nftCollection: `export default function NFTCollection() {
  const {contract: nftCollection} = useContract("<your-contract-address-here>");
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

  signatureDrop: `import { Web3Button } from "@thirdweb-dev/react";

export default function SignatureDrop() {
  return (
    <Web3Button
      contractAddress={"{{contract-address}}"}
      action={(contract) => contract.erc721.claim(1)}
      onSuccess={() => alert("Claimed NFT!")}
      onError={(err) => alert(err)}
    >
      Claim NFT
    </Web3Button>
  );
}
`,

  nftDrop: `import { Web3Button } from "@thirdweb-dev/react";

export default function NFTDrop() {
  return (
    <Web3Button
      contractAddress={"{{contract-address}}"}
      action={(contract) => contract.erc721.claim(1)}
      onSuccess={() => alert("Claimed NFT!")}
      onError={(err) => alert(err)}
    >
      Claim NFT
    </Web3Button>
  );
}
`,

  edition: `export default function Edition() {
  const { contract: editionContract } = useContract("<your-contract-address-here>");
  const { data: nfts } = useNFTs(editionContract);

  return (
    <div>
        {nfts?.map((nft) => (
          <div key={nft.metadata.id.toString()}>
            <ThirdwebNftMedia
              metadata={nft.metadata}
            />
            <h3>{nft.metadata.name}</h3>
            <p>Quantity: {nft.supply}</p>
          </div>
        ))}
    </div>
  );
}`,

  editionDrop: `export default function EditionDrop() {
  const { contract: editionDropContract } = useContract("<your-contract-address-here>");
  const { data: nfts } = useNFTs(editionDropContract);

  return (
    <div>
      {nfts?.map((nft) => (
        <div key={nft.metadata.id.toString()}>
          <ThirdwebNftMedia
            metadata={nft.metadata}
          />
          <h3>{nft.metadata.name}</h3>
          <Web3Button
            contractAddress={"{{contract-address}}"}
            action={(contract) =>
              contract.erc1155.claim(1, nft.metadata.id)
            }
            onSuccess={() => alert("Claimed NFT!")}
            onError={(err) => alert(err)}
          >
            Claim
          </Web3Button>
        </div>
      ))}
    </div>
  );
}`,

  token: `export default function Token() {
  const { contract: tokenContract } = useContract(contractAddresses[4].address);
  const { data: totalSupply } = useTokenSupply(tokenContract);

  return (
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
  );
}`,

  marketplace: `export default function Marketplace() {
  const { contract: marketplace } = useContract(
    contractAddresses[5].address,
    "marketplace"
  );
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
          <Web3Button
            colorMode="dark"
            accentColor="#F213A4"
            contractAddress={contractAddresses[5].address}
            action={() => marketplace?.buyoutListing(listing.id, 1)}
            onError={(error) => alert(error)}
            onSuccess={() => alert("Success!")}
          >
            Buy
          </Web3Button>
        </div>
      ))}
    </div>
  );
}`,

  tokenDrop: `export default function TokenDrop() {
  const [amount, setAmount] = useState<string>("");

  return (
    <div>
      <input
        type="text"
        placeholder="Amount to claim"
        onChange={(e) => setAmount(e.target.value)}
      />
      <Web3Button
        contractAddress={contractAddresses[6].address}
        action={(contract) => contract.erc20.claim(amount)}
        colorMode="dark"
        accentColor="#F213A4"
      >
        Claim
      </Web3Button>
    </div>
  );
}`,
};

export default codeSnippets;
