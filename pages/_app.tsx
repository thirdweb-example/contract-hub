import React from "react";
import type { AppProps } from "next/app";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import "../styles/globals.css";
import Head from "next/head";
import ThirdwebGuideFooter from "../components/guide/ThirdwebGuideFooter";
import ThirdwebGuideOverlay from "../components/guide/ThirdwebGuideOverlay";
import Header from "../components/Header";

// This is the chainId your dApp will work on.
const activeChainId = ChainId.Mumbai;

function MyApp({ Component, pageProps }: AppProps) {
  const [showGuideOverlay, setShowGuideOverlay] = React.useState(false);
  return (
    <ThirdwebProvider desiredChainId={activeChainId}>
      <ThirdwebGuideOverlay
        show={showGuideOverlay}
        setShow={setShowGuideOverlay}
      />
      <Head>
        <title>thirdweb Contract Example Hub</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="thirdweb Example Repository to Showcase How To Use thirdweb's NFT contracts, Marketplace contracts, and token contracts. "
        />
        <meta
          name="keywords"
          content="thirdweb nft contract example, thirdweb nft tutorial, thirdweb nft guide, thirdweb marketplace, thirdweb marketplace guide, thirdweb token guide"
        />
      </Head>
      <Header />
      <Component {...pageProps} />
      <ThirdwebGuideFooter />
    </ThirdwebProvider>
  );
}

export default MyApp;
