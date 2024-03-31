

// export default App;

import React, { useState } from 'react';
import { ConnectButton, useCurrentAccount } from "@mysten/dapp-kit";
import TopTraders from './TopTraders';
import './styles.css';
import homeImage from './assets/x1.png';
import { requestSuiFromFaucetV0, getFaucetHost } from '@mysten/sui.js/faucet';

import { useTransactionExecution } from './useTransactionExecution';


const App: React.FC = () => {
  const [showTopTraders, setShowTopTraders] = useState(false);
  const currentAccount = useCurrentAccount(); // Hook to get the current connected wallet account

  const toggleTopTraders = () => {
    setShowTopTraders(!showTopTraders);
  };

  const buySui = async () => {
    if (currentAccount?.address) {
      try {
        const response = await requestSuiFromFaucetV0({
          host: getFaucetHost('devnet'),
          recipient: currentAccount.address,
        });
        // If the response has data indicating a success, you can update state or notify the user
        console.log('Successfully requested SUI from the faucet:', response);
        // Update your state or UI here
      } catch (error) {
        console.error('Failed to request SUI from faucet:', error);
        // Handle any errors here
      }
    } else {
      console.log('Please connect your wallet.');
      // Here, you might want to programmatically open the wallet connection dialogue
      // if your dApp setup allows for that
    }
  };

  const sellSui = () => {
    console.log('Sell SUI process');
    // Logic to sell SUI, which you'll need to implement according to your dApp's capabilities
  };

  const tradeSui = async () => {
    console.log('Trade SUI Process');
  };

  return (
    <div className="App">
      <header>
        <div className="header-content">
          <h1>Welcome to Sui NFT Marketplace</h1>
          <ConnectButton />
        </div>
        <nav>
          <ul>
            <li><a href="#" onClick={() => setShowTopTraders(false)}>Home</a></li>
            <li><a href="#" onClick={toggleTopTraders}>Trending</a></li>
            
            {/* ... other nav items ... */}
          </ul>
        </nav>
      </header>

      <main>
        <section className="transaction-buttons">
          <button className="buy-button" onClick={buySui}>Buy SUI</button>
          <button className="sell-button" onClick={sellSui}>Sell SUI</button>
          <button className="trade-button" onClick={tradeSui}>Trade SUI</button>
        </section>

        {!showTopTraders && (
          <section className="home-image">
            <img src={homeImage} alt="Home" />
          </section>
        )}

        {showTopTraders && <TopTraders />}
      </main>

      <footer>
        <p>&copy; 2024 NFT SUI Marketplace</p>
      </footer>
    </div>
  );
};

export default App;

