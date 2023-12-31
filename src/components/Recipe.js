import React, { useState } from 'react';
import RecipeDetails from './RecipeDetails';
import Model from 'react-modal';
import { FcHome } from 'react-icons/fc';

import { RxCrossCircled } from 'react-icons/rx';
import { SlSocialYoutube } from 'react-icons/sl';

const Recipe = ({ recipe }) => {
  const [show, setShow] = useState(false);
  const { label, image, url, ingredients } = recipe.recipe;

  const handleClick = () => {
    window.location.reload();
  };

  return (
    <div className='recipe'>
      <h2>{label}</h2>
      <img src={image} alt={label} />
      <a href={url} target='_blank' rel='noopener noreferrer'>
        Detail
      </a>
      <button onClick={() => setShow(true)}>Ingredients</button>
      <Model isOpen={show}>
        <h2 className='title'>{label}</h2>
        <button className='home' onClick={handleClick}>
          <FcHome className='home-btn' size={20} />
        </button>
        <button
          className='cls-btn'
          onClick={() => {
            setShow(false);
          }}
        >
          <RxCrossCircled className='close' size={20} />
        </button>

        <div className='img'>
          <img src={image} alt={label} />
        </div>

        <RecipeDetails ingredients={ingredients} />
        <div className='url'>
          <a href={url} target='_blank' rel='noopener noreferrer'>
            <SlSocialYoutube className='tube' />
            Youtube
          </a>
        </div>
      </Model>
      {/* {show && <RecipeDetails ingredients={ingredients} />} */}
    </div>
  );
};

export default Recipe;
