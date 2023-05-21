import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RecipeCard from '../UI/RecipeCard';
import { styled } from 'styled-components';

const RecipeList = () => {
  const [recipeData, setRecipeData] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [searchFilter, setSearcFilter] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    axios.get('http://localhost:8000/recipes').then(res => {
        setRecipeData(res.data);
        setIsLoading(false);
    });
  }, []);

  useEffect(() => {
    const newData = recipeData.filter(
      (item) =>
        item.name.toLowerCase().includes(searchInput.toLowerCase()) ||
        item.origin.toLowerCase().includes(searchInput.toLowerCase())
    );
    setSearcFilter(newData);
  }, [searchInput, recipeData]);

  const searchInputHandler = (e) => {
    setSearchInput(e.target.value);
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }




  return (
    <Wrapper>
            <input className='searchbox'
            type="text"
            id="search"
            placeholder="Search for recipes by name"
            onChange={searchInputHandler}/>
            <p>Our tasty in-house recipes</p>
        <div className="recipe_cards">
            {searchFilter.map((card) => (
            <RecipeCard
                key={card.name}
                name={card.name}
                image={card.imageURL}
                origin={card.origin}
            />
            ))}
        </div>
    </Wrapper>
  );
};

export default RecipeList;

const Wrapper = styled.div`
padding-left: 20rem;
margin-bottom: 5rem;
.recipe_cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
    width: 400px;
}

.searchbox {
    width: 500px;
    font-size: 30px;
    border-radius: 10px;
    margin-left: 30rem;
    margin-top: 3rem;
}

p {
    margin-left: 25rem;
    margin-top: 2rem;
    margin-bottom: 2rem;
    color: blue;
    font-size: 3rem;


}
`
