import { useEffect } from 'react';
import '@rainbow-me/rainbowkit/styles.css';


import { useAccount } from 'wagmi';
import { useSelectedAddress } from './state';
import { Outlet } from 'react-router';


function App() {
  const updateSelectedAddress = useSelectedAddress((state) => state.updateSelectedAddress)
  const { address: connectedAddress, isConnected } = useAccount();

  // Automatically use connected wallet unless user overrides
  useEffect(() => {
    if (isConnected && connectedAddress) {
      updateSelectedAddress(connectedAddress);
    }
  }, [isConnected, connectedAddress]);

  return (
    <Outlet />
  );
}

export default App;
