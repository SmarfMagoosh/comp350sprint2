import React from 'react';

function Card(props) {
  const { title, description, deleteb} = props;

  return (
    <div className="card">
      <h2>{title}</h2>
      <p>{description}</p>
      <p>{deleteb}</p>
    </div>
  );
}

export default Card;