import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Alchemy, Network } from 'alchemy-sdk';
import { useEffect, useState } from 'react';


const settings = {
  apiKey: process.env.REACT_APP_ALCHEMY_API_KEY,
  network: Network.ETH_MAINNET,
};

const alchemy = new Alchemy(settings);

function Home() {
    let navigate = useNavigate();
    const [blockNumber, setBlockNumber] = useState();

    useEffect(() => {
      async function getBlockNumber() {
        setBlockNumber(await alchemy.core.getBlockNumber());
      }
  
      getBlockNumber();
    });

    return (
        <html>
            <center>
                <body>
                    Block number:
                </body>
                <button
                    onClick={() => {
                        navigate("/details");
                    }}
                >{blockNumber}
                </button>
            </center>
        </html>
    )
}

export default Home;