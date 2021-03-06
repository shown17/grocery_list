

import React from 'react';
import Todo from './Todo'
import './App.css';


const List = ({ items, name, todoClick }) => (
  <div>
    <h2>{name}</h2>
    <ul> 
      { items.map( item => <Todo key={item.id} id={item.id} name={item.name} complete={item.complete} todoClick={todoClick}  /> )}
    </ul>
  </div>
)

export default List;