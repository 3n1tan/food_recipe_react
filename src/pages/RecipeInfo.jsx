import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'
import { styled } from 'styled-components';



const RecipeInfo = () => {

  const params = useParams();
  const [recipeInfo, setRecipeInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`http://localhost:8000/recipes?name=${params.recipeinfo}`)
      .then((res) => {
        //console.log(res);
        setRecipeInfo(res.data[0]);
        setIsLoading(false);
      });
  }, [params.recipeinfo]);

  if (isLoading) {
    return <p>Loading....</p>
}


  return (
    <Container>
      <h2 className='item'>{recipeInfo?.name}</h2>
      <img src={recipeInfo?.imageURL} alt={recipeInfo?.name} />
      <h3>Preparations:</h3>
      <p className='steps'>{recipeInfo?.steps}</p><br />
      <p className='origin'><b>Country:</b> {recipeInfo?.origin}</p>
      <div>
        <h3>Ingredients</h3>
        {recipeInfo?.ingredients &&
          recipeInfo?.ingredients.map((ingredient) => (
            <p key={ingredient.name}>
              {ingredient.quantity} - {ingredient.name}
            </p>
          ))}
      </div>
      <button onClick={() => navigate(-1)}>Back</button>

    </Container>
  );
};

export default RecipeInfo

const Container = styled.div`
* {
  font-size: 22px;
}

h3 {
  margin-top: 0.8rem;
  margin-bottom: 1rem;
}
  width: 700px;
  height: auto;
  background-color: #FFF1DC;
  margin: 3% auto auto 30%;
  padding-left: 2rem;
  padding-right: 2rem;
  -webkit-box-shadow: 5px 5px 15px 5px #000000; 
  box-shadow: 5px 5px 15px 5px #000000;
  border-radius: 10px;

  img {
    width: 350px;
    height: auto;
    margin: auto;
  }

  .item {
    color: red;
    padding: 1rem;
    text-align: center;
  }

  .origin {
    margin-bottom: 1rem;
  }

  .steps {
    font-size: 20px
  }

  button {
    color: green;
    width: 80px;
    margin: 5rem auto 1rem 15rem;
    cursor: pointer;
  }
`