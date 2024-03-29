import React, { useState } from 'react';
import './Card.css';
export default function Card() {
  const [count, setCount] = useState(0);

  return (
    <div className="card">
      <span
        className={`${count !== 0 ? 'card__badge' : 'card__badge--hidden'}`}
      >
        {count}
      </span>
    </div>
  );
}
