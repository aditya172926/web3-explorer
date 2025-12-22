import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {RouterProvider} from 'react-router-dom';
import './index.css'

import {
  getDefaultConfig,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { WagmiProvider } from 'wagmi';
import {
  mainnet
} from 'wagmi/chains';
import {
  QueryClientProvider,
  QueryClient,
} from "@tanstack/react-query";
import { router } from './routes.ts';

const config = getDefaultConfig({
  appName: 'Defi Portfolio Tracker',
  projectId: 'YOUR_PROJECT_ID',
  chains: [mainnet],
});

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>
          <RouterProvider router={router} />
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  </React.StrictMode>,
)