import React from 'react';
import './App.css';
import Web3Info from './components/Web3Info.js'
import WEB3_INFURA_PROJECT_ID from './keys.env'

import { useWeb3 } from '@openzeppelin/network/react';

const infuraProjectId = WEB3_INFURA_PROJECT_ID;

function App() {

  const web3Context = useWeb3(`wss://mainnet.infura.io/ws/v3/${infuraProjectId}`);

    return (
      <div className="App">
        <div>
          <h1>OpenZeppelin Network.js</h1>
          <h2>React DApp Tutorial</h2>
          <Web3Info title="Web3 info" web3Context={web3Context} />
        </div>
      </div>
    );
}

export default App;

  // hook that attemps to retrieve injected web3 provider, 
  // otherwise defaults to connect via Infura
//   const web3Context = useWeb3(`wss://mainnet.infura.io/ws/v3/${infuraProjectId}`);
//   const { networkId, networkName, providerName } = web3Context;

//     return (
//       <div className="App">
//         <div>
//           <h1>OpenZeppelin Network.js</h1>
//           <h2>React DApp</h2>
//           <div>Network: {networkId ? `${networkId} - ${networkName}` : 'No connection'} </div>
//           <div>Provider: {providerName}</div>
//         </div>
//       </div>
//     );
// }
