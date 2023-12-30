import React from 'react';
import { v4 as uuidv4 } from 'uuid';

const RecipeDetails = ({ ingredients }) => {
  return ingredients.map((ingredient) => {
    return (
      <div className='menu'>
        <ul key={uuidv4()} className='ingredient-list'>
          <div className='star'>&#9734;</div>
          <li className='ingredient-text'>{ingredient.text}</li>
          <div className='space'>-</div>
          <li className='ingredient-weight'> {ingredient.weight}gm</li>
        </ul>
      </div>
    );
  });
};

export default RecipeDetails;
