// // // // // // // =========================================================
// // import React, { useState } from 'react';
// // import { ConnectButton, useCurrentAccount } from "@mysten/dapp-kit";
// // import { isValidSuiObjectId } from "@mysten/sui.js/utils";
// // import { Box, Container, Flex, Heading } from "@radix-ui/themes";
// // import { Counter } from "./Counter";
// // import { CreateCounter } from "./CreateCounter";
// // import './styles.css'; // Assume all the CSS is in this file
// // import TopTraders from './TopTraders';

// // const App: React.FC = () => {
// //   const currentAccount = useCurrentAccount();
// //   const [counterId, setCounter] = useState<string | null>(() => {
// //     const hash = window.location.hash.slice(1);
// //     return isValidSuiObjectId(hash) ? hash : null;
// //   });

// //   // Placeholder functions, replace with actual logic later
// //   const buySui = () => {
// //     console.log('Initiate SUI buy process');
// //   };

// //   const sellSui = () => {
// //     console.log('Initiate SUI sell process');
// //   };

// //   const tradeSui = () => {
// //     console.log('Initiate SUI trade process');
// //   };

// //   const connectWallet = () => {
// //     console.log('Connect to SUI wallet');
// //   };

// //   return (
// //     <>
// //       <Flex as="header" css={{ background: '$blue600' }}>
// //         {/* Your nav here */}
// //       </Flex>

// //       <Flex
// //         position="sticky"
// //         px="4"
// //         py="2"
// //         justify="between"
// //         css={{
// //           borderBottom: "1px solid var(--gray-a2)",
// //         }}
// //       >
// //         <Box>
// //           <Heading>Welcome to Sui NFT Marketplace</Heading>
// //         </Box>

// //         <Box>
// //           <ConnectButton />
// //         </Box>
// //       </Flex>

// //       {/* Main content */}
// //       <Container as="main">
// //         {/* ... */}
// //         <section className="top-traders">
// //           {/* ... Your traders table here */}
// //         </section>

// //         {/* Wallet connection */}
// //         <section className="wallet-connection">
// //           {currentAccount ? (
// //             // Render the wallet connected content
// //             <Heading>Your Wallet</Heading>
// //           ) : (
// //             // Prompt user to connect their wallet
// //             <button onClick={connectWallet}>lalalalala</button>
// //           )}
// //         </section>

// //         {/* Render Counter or CreateCounter based on condition */}
// //         {currentAccount ? (
// //           counterId ? (
// //             <Counter id={counterId} />
// //           ) : (
// //             <CreateCounter
// //               onCreated={(id) => {
// //                 window.location.hash = id;
// //                 setCounter(id);
// //               }}
// //             />
// //           )
// //         ) : (
// //           <Heading>Please connect your wallet</Heading>
// //         )}
// //       </Container>

// //       <Box as="footer" css={{ background: '$gray900' }}>
// //         {/* Footer content */}
// //       </Box>
// //     </>
// //   );
// // };

// // export default App;

// // // // // // =========================================================
// // // // // // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

// // // // src/App.tsx
// // // import React from 'react';
// // // import { ConnectButton, useCurrentAccount } from "@mysten/dapp-kit";
// // // import { Box, Container, Flex, Heading } from "@radix-ui/themes";
// // // import { Counter } from "./Counter";
// // // import { CreateCounter } from "./CreateCounter";
// // // import TopTraders from './TopTraders'; // Adjust the import path as needed
// // // import './styles.css'; // Ensure the path to styles.css is correct

// // // const App: React.FC = () => {
// // //   const currentAccount = useCurrentAccount();
  
// // //   // Placeholder functions, replace with actual logic later
// // //   const buySui = () => {
// // //     console.log('Initiate SUI buy process');
// // //   };

// // //   const sellSui = () => {
// // //     console.log('Initiate SUI sell process');
// // //   };

// // //   const tradeSui = () => {
// // //     console.log('Initiate SUI trade process');
// // //   };

// // //   const connectWallet = () => {
// // //     console.log('Connect to SUI wallet');
// // //   };

// // //   return (
// // //     <>
// // //       <Flex as="header" css={{ background: '$blue600' }}>
// // //         {/* Your nav here */}
// // //       </Flex>

// // //       <Flex
// // //         position="sticky"
// // //         px="4"
// // //         py="2"
// // //         justify="between"
// // //         css={{
// // //           borderBottom: "1px solid var(--gray-a2)",
// // //         }}
// // //       >
// // //         <Box>
// // //           <Heading>Welcome to Sui NFT Marketplace</Heading>
// // //         </Box>

// // //         <Box>
// // //           <ConnectButton />
// // //         </Box>
// // //       </Flex>

// // //       {/* Main content */}
// // //       <Container as="main">
// // //         {/* ... Other sections of your main content ... */}

// // //         {/* Include the TopTraders component */}
// // //         <TopTraders />

// // //         {/* ... Rest of your main content ... */}
// // //       </Container>

// // //       <Box as="footer" css={{ background: '$gray900' }}>
// // //         {/* Footer content */}
// // //       </Box>
// // //     </>
// // //   );
// // // };

// // // export default App;
// // // // // // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// // // // // &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
// // // // import React from 'react';
// // // // import { ConnectButton, useCurrentAccount } from "@mysten/dapp-kit";
// // // // import { Box, Container, Flex, Heading } from "@radix-ui/react-layout";
// // // // import TopTraders from './TopTraders';
// // // // import './styles.css'; // Ensure the path to styles.css is correct

// // // // const App: React.FC = () => {
// // // //   const currentAccount = useCurrentAccount();

// // // //   // Placeholder functions, replace with actual logic later
// // // //   const buySui = () => {
// // // //     console.log('Initiate SUI buy process');
// // // //   };

// // // //   const sellSui = () => {
// // // //     console.log('Initiate SUI sell process');
// // // //   };

// // // //   const tradeSui = () => {
// // // //     console.log('Initiate SUI trade process');
// // // //   };

// // // //   return (
// // // //     <>
// // // //       <Flex as="header" css={{ background: '$blue600', padding: '20px 0', justifyContent: 'center' }}>
// // // //         <nav>
// // // //           <ul style={{ listStyle: 'none', display: 'flex', gap: '20px', padding: 0 }}>
// // // //             <li><a href="#home" style={{ color: 'white', textDecoration: 'none' }}>Home</a></li>
// // // //             <li><a href="#explore" style={{ color: 'white', textDecoration: 'none' }}>Explore</a></li>
// // // //             <li><a href="#trending" style={{ color: 'white', textDecoration: 'none' }}>Trending</a></li>
// // // //             <li><a href="#wallet" style={{ color: 'white', textDecoration: 'none' }}>Wallet</a></li>
// // // //           </ul>
// // // //         </nav>
// // // //       </Flex>

// // // //       <Flex
// // // //         as="main"
// // // //         css={{
// // // //           flexDirection: 'column',
// // // //           gap: '20px',
// // // //           padding: '20px',
// // // //         }}
// // // //       >
// // // //         <Box css={{ textAlign: 'center' }}>
// // // //           <Heading>Welcome to Sui NFT Marketplace</Heading>
// // // //         </Box>

// // // //         <Flex css={{ justifyContent: 'space-between', alignItems: 'center' }}>
// // // //           <Heading>Your Wallet</Heading>
// // // //           <ConnectButton />
// // // //         </Flex>

// // // //         <TopTraders />

// // // //         {/* Buy, Sell, Trade buttons section */}
// // // //         <Flex css={{ justifyContent: 'center', gap: '20px' }}>
// // // //           <button onClick={buySui} className="buy-button">Buy SUI</button>
// // // //           <button onClick={sellSui} className="sell-button">Sell SUI</button>
// // // //           <button onClick={tradeSui} className="trade-button">Trade SUI</button>
// // // //         </Flex>
// // // //       </Flex>

// // // //       <Box as="footer" css={{ background: '$gray900', color: 'white', textAlign: 'center', padding: '20px' }}>
// // // //         © 2024 Sui NFT Marketplace
// // // //       </Box>
// // // //     </>
// // // //   );
// // // // };

// // // // export default App;

// // // App.tsx
// // // ====================================================================== 3 ============
// import React from 'react';
// import { ConnectButton, useCurrentAccount } from "@mysten/dapp-kit";
// import { Box, Container, Flex, Heading } from "@radix-ui/themes";
// import { Counter } from "./Counter";
// import { CreateCounter } from "./CreateCounter";
// import TopTraders from './TopTraders'; // Adjust the import path as needed
// import './styles.css'; // Ensure the path to styles.css is correct

// // =========
// // import React from 'react';
// // import './styles.css'; // make sure this path is correct for your styles

// const App: React.FC = () => {
//   // Functions to handle the button clicks
//   const buySui = () => {
//     console.log('Buy button clicked');
//     // Here you will put the logic for buying SUI
//   };

//   const sellSui = () => {
//     console.log('Sell button clicked');
//     // Here you will put the logic for selling SUI
//   };

//   const tradeSui = () => {
//     console.log('Trade button clicked');
//     // Here you will put the logic for trading SUI
//   };

//     const connectWallet = () => {
//     console.log('Connect to SUI wallet');
//   };

//   return (
//     <div className="App">
//       {/* Header section */}

//       <header>
//       <Flex as="header" css={{ background: '$blue600' }}>
//         {/* Your nav here */}
//       </Flex>

//       <Flex
//         position="sticky"
//         px="4"
//         py="2"
//         justify="between"
//         css={{
//           borderBottom: "1px solid var(--gray-a2)",
//         }}
//       >
//         <Box>
//           <Heading>Welcome to Sui NFT Marketplace</Heading>
//         </Box>

//         <Box>
//           <ConnectButton />
//         </Box>
//       </Flex>
//         <nav>
//           <ul>
//             <li><a href="#home">Home</a></li>
//             <li><a href="#explore">Explore</a></li>
//             <li><a href="#trending">Trending</a></li>
            
//           </ul>
//         </nav>
//       </header>

//       {/* Main content section */}
//       <main>
//         {/* Section for the transaction buttons */}
//         <section className="transaction-buttons">
//           <button className="buy-button" onClick={buySui}>Buy SUI</button>
//           <button className="sell-button" onClick={sellSui}>Sell SUI</button>
//           <button className="trade-button" onClick={tradeSui}>Trade SUI</button>
          
//         </section>

//         {/* Additional sections for other content */}
//         {/* ... */}
//                  {/* Include the TopTraders component */}
//          <TopTraders />
//       </main>

//       {/* Footer section */}
//       <footer>
//         <p>&copy; 2024 NFT SUI Marketplace</p>
//       </footer>
//     </div>
//   );
// };

// export default App;
// // ====================================================================== 3 ============
// import React, { useState, useEffect } from 'react';
// import { ConnectButton, useCurrentAccount } from "@mysten/dapp-kit";
// import TopTraders from './TopTraders';
// import './styles.css';
// import homeImage from './assets/x1.png';

// const App: React.FC = () => {
//   const [showTopTraders, setShowTopTraders] = useState(false);
//   const currentAccount = useCurrentAccount(); // Hook from @mysten/dapp-kit to get the current account
//   const [isWalletConnected, setIsWalletConnected] = useState(false);

//   useEffect(() => {
//     // Set the wallet connection state based on the current account
//     setIsWalletConnected(!!currentAccount);
//   }, [currentAccount]);

//   const toggleTopTraders = () => {
//     setShowTopTraders(!showTopTraders);
//   };

//   const buySui = () => {
//     if (!isWalletConnected) {
//       console.log('Wallet not connected');
//       return;
//     }
//     console.log('Buy SUI process');
//   };

//   const sellSui = () => {
//     if (!isWalletConnected) {
//       console.log('Wallet not connected');
//       return;
//     }
//     console.log('Sell SUI process');
//   };

//   const tradeSui = () => {
//     if (!isWalletConnected) {
//       console.log('Wallet not connected');
//       return;
//     }
//     console.log('Trade SUI process');
//   };

//   return (
//     <div className="App">
//       <header>
//         <div className="header-content">
//           <h1>Welcome to Sui NFT Marketplace</h1>
//           <ConnectButton /> {/* This button should handle connecting the wallet */}
//         </div>
//         <nav>
//           <ul>
//             <li><a href="#" onClick={() => setShowTopTraders(false)}>Home</a></li>
//             <li><a href="#" onClick={toggleTopTraders}>Trending</a></li>
//           </ul>
//         </nav>
//       </header>

//       <main>
//         <section className="transaction-buttons">
//           <button className={`buy-button ${!isWalletConnected ? 'disabled' : ''}`} onClick={buySui} disabled={!isWalletConnected}>Buy SUI</button>
//           <button className={`sell-button ${!isWalletConnected ? 'disabled' : ''}`} onClick={sellSui} disabled={!isWalletConnected}>Sell SUI</button>
//           <button className={`trade-button ${!isWalletConnected ? 'disabled' : ''}`} onClick={tradeSui} disabled={!isWalletConnected}>Trade SUI</button>
//         </section>
//         {!showTopTraders && (
//           <section className="home-image">
//             <img src={homeImage} alt="Home" />
//           </section>
//         )}
//         {showTopTraders && <TopTraders />}
//       </main>

//       <footer>
//         <p>&copy; 2024 NFT SUI Marketplace</p>
//       </footer>
//     </div>
//   );
// };

// export default App;


// import React, { useState } from 'react';
// import { ConnectButton } from "@mysten/dapp-kit";
// import TopTraders from './TopTraders';
// import './styles.css';
// import homeImage from './assets/x1.png';
// import { requestSuiFromFaucetV0, getFaucetHost } from '@mysten/sui.js/faucet';

// // get tokens from the Devnet faucet server
// await requestSuiFromFaucetV0({
//   // connect to Devnet
// 	host: getFaucetHost('devnet'),
// 	recipient: '<YOUR SUI ADDRESS>',
// });

// const App: React.FC = () => {
//   const [showTopTraders, setShowTopTraders] = useState(false);

//   const toggleTopTraders = () => {
//     setShowTopTraders(!showTopTraders);
//   };

//   const buySui = () => {
//     console.log('Buy SUI process');
//   };

//   const sellSui = () => {
//     console.log('Sell SUI process');
//   };

//   const tradeSui = () => {
//     console.log('Trade SUI process');
//   };

//   return (
//     <div className="App">
//       <header>
//         {/* Assuming Flex and Box are part of a styling library */}
//         <div className="header-content">
//           <h1>Welcome to Sui NFT Marketplace</h1>
//           <ConnectButton />
//         </div>
//         <nav>
//           <ul>
//             <li><a href="#" onClick={() => setShowTopTraders(false)}>Home</a></li>
//             <li><a href="#" onClick={toggleTopTraders}>Trending</a></li>
//             {/* ... other nav items ... */}
//           </ul>
//         </nav>
//       </header>

//       <main>
//         {/* Buttons for buying, selling, and trading SUI */}
//         <section className="transaction-buttons">
//           <button className="buy-button" onClick={buySui}>Buy SUI</button>
//           <button className="sell-button" onClick={sellSui}>Sell SUI</button>
//           <button className="trade-button" onClick={tradeSui}>Trade SUI</button>
//         </section>

//         {/* Display an image on the home page */}
//         {!showTopTraders && (
//           <section className="home-image">
//             <img src={homeImage} alt="Home" />
//           </section>
//         )}

//         {/* Conditionally render the TopTraders component */}
//         {showTopTraders && <TopTraders />}
//       </main>

//       <footer>
//         <p>&copy; 2024 NFT SUI Marketplace</p>
//       </footer>
//     </div>
//   );
// };

// export default App;

// import React, { useState } from 'react';
// import { ConnectButton, useCurrentAccount } from "@mysten/dapp-kit";
// import TopTraders from './TopTraders';
// import './styles.css';
// import homeImage from './assets/x1.png';
// import { requestSuiFromFaucetV0, getFaucetHost } from '@mysten/sui.js/faucet';

// const App: React.FC = () => {
//   const [showTopTraders, setShowTopTraders] = useState(false);
//   const currentAccount = useCurrentAccount(); // This hook gets the current connected wallet account

//   const toggleTopTraders = () => {
//     setShowTopTraders(!showTopTraders);
//   };

//   const buySui = async () => {
//     // Ensure that there's a current account connected
//     if (currentAccount?.address) {
//       console.log('Requesting SUI from the faucet...');
//       try {
//         // Call the faucet request function with the current account's address
//         const response = await requestSuiFromFaucetV0({
//           host: getFaucetHost('devnet'),
//           recipient: currentAccount.address,
//         });
//         console.log('Faucet response:', response);
//         // Here, handle the response, update balance, or state as necessary
//       } catch (error) {
//         console.error('Failed to request SUI from faucet:', error);
//       }
//     } else {
//       console.log('Wallet not connected. Please connect your wallet.');
//       // Trigger wallet connection if not connected (this logic depends on your dApp setup)
//       // ...
//     }
//   };

//   // ... (sellSui and tradeSui functions remain the same)

//   return (
//     <div className="App">
//       <header>
//         {/* ... (header content remains the same) */}
//       </header>

//       <main>
//         {/* ... (main content remains the same) */}
//         <section className="transaction-buttons">
//           <button className="buy-button" onClick={buySui}>Buy SUI</button>
//           {/* Sell and Trade buttons remain the same */}
//         </section>
//         {/* ... (rest of main content remains the same) */}
//       </main>

//       <footer>
//         {/* ... (footer content remains the same) */}
//       </footer>
//     </div>
//   );
// };

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

