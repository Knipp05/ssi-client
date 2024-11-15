import React from 'react';
import './App.css';
import ClientHeader from './components/ClientHeader';
import WalletConnection from './components/WalletConnection';

export default function App() {
  return (
    <div className="App">
      <ClientHeader />
      <WalletConnection />
    </div>
  );
}
