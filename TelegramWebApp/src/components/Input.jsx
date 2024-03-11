import React from 'react';

export default function Input() {
  const [valor, setValor] = React.useState(0);
  function atualiza() {
    setValor(valor + 1);
  }
  console.log(valor);
  return (
    <div>
      <input type="button" value={`${valor}`} onClick={atualiza} />
    </div>
  );
}
