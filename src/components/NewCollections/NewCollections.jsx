import React, { forwardRef } from 'react';
import "./NewCollections.css";
import new_collections from '../assets/new_collections';
import Item from '../Item/Item';

const NewCollections = forwardRef((_, ref) => {
  return (
    <div className='new-collections' ref={ref}>
      <h1>NEW COLLECTIONS</h1>
      <hr />
      <div className="collections">
        {new_collections.map(item => {
          return (
            <Item 
              key={item.id} 
              id={item.id} 
              name={item.name}
              image={item.image}
              newPrice={item.new_price}
              oldPrice={item.old_price} 
            />
          );
        })}
      </div>
    </div>
  );
});

export default NewCollections;