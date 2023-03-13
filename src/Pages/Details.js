import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Alchemy, Network } from 'alchemy-sdk';
import { useEffect, useState } from 'react';

const settings = {
    apiKey: process.env.REACT_APP_ALCHEMY_API_KEY,
    network: Network.ETH_MAINNET,
  };

const alchemy = new Alchemy(settings);

function Details() {
    let navigate = useNavigate();

    const [blockNonce, setBlockNonce] = useState();
    const [blockHash, setBlockHash] = useState();
    const [blockNumber, setBlockNumber] = useState();
    const [blockMiner, setBlockMiner] = useState();
    const [blockTimestamp, setBlockTimestamp] = useState();
    const [blockTransactions, setBlockTransactions] = useState();
  
    useEffect(() => {
      async function getBlockWithTransactions() {
        setBlockNonce(await (await alchemy.core.getBlockWithTransactions()).nonce);
        setBlockHash(await (await alchemy.core.getBlockWithTransactions()).hash);
        setBlockNumber(await (await alchemy.core.getBlockWithTransactions()).number);
        setBlockMiner(await (await alchemy.core.getBlockWithTransactions()).miner);
        setBlockTimestamp(await (await alchemy.core.getBlockWithTransactions()).timestamp);
        setBlockTransactions(await (await alchemy.core.getBlockWithTransactions()).transactions);
      }
  
      getBlockWithTransactions();
    });

  
    return(
        <html>
            <body>
                <center>
                    <h5>Nonce: {blockNonce}</h5>
                    <h5>Hash: {blockHash}</h5>
                    <h5>Number: {blockNumber}</h5>
                    <h5>Miner: {blockMiner}</h5>
                    <h5>Timestamp: {blockTimestamp}</h5>
                </center>
            </body>
        </html>
    );
  }

export default Details;