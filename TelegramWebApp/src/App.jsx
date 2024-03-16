import React from 'react';
import Input from './components/Button/Input.jsx';
//const { getData } = require('./db/db');
import Card from './components/Cards/Card.jsx';
//const eggs = getData();

export default function App() {
  return (
    <div>
      <Input title={`add`} disable={false} type={'add'} />
      <Input title={`remove`} disable={false} type={'remove'} />
      <Input title={`checkout`} disable={false} type={'checkout'} />
      {eggs.map((egg) => {
        return <card egg={egg} key={egg.id} />;
      })}
    </div>
  );
}
