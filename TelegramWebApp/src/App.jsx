import React from 'react';
import Input from './components/Input';
import tomate from './assets/Tomato.svg';

export default function App() {
  return (
    <div>
      <img src={tomate} alt="Tomate" />
      <Input />
    </div>
  );
}
