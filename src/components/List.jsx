import React from 'react';
import '../styles/list.css';

const List = ({ data }) => {
  return (
    <ul className="list-container">
      {data.map((item, index) => (
        <li key={index} className="list-item">
          <span className="item-name">Name: {item.name}</span>
          <span className="item-surname">Surname: {item.surname}</span>
          <span className="item-phone">Phone: {item.phone}</span>
        </li>
      ))}
    </ul>
  );
};

export default List;
