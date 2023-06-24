import React from "react";
import type { AppProps } from "next/app";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import ThirdwebGuideFooter from "../components/guide/ThirdwebGuideFooter";
import Header from "../components/Header";
import Head from "next/head";
import "../styles/globals.css";

// This is the chain your dApp will work on.
const activeChain = "mumbai";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider activeChain={activeChain}>
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
