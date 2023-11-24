import React from 'react';
import { v4 as uuidv4 } from 'uuid';

const RecipeDetails = ({ ingredients }) => {
  return ingredients.map((ingredient) => {
    return (
      <div className='menu'>
        <ul key={uuidv4()} className='ingredient-list'>
          <li className='ingredient-text'>{ingredient.text}</li>
          <li className='ingredient-weight'>Weight - {ingredient.weight}</li>
        </ul>
      </div>
    );
  });
};

export default RecipeDetails;
