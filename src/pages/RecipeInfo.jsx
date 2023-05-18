import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { styled } from 'styled-components';



const RecipeInfo = () => {

  const params = useParams();
  const [recipeInfo, setRecipeInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`http://localhost:8000/recipes?name=${params.recipeinfo}`)
      .then((res) => {
        // console.log(res.data[0].name);
        setRecipeInfo(res.data[0]);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <p>Loading....</p>
}


  return (
    <Container>
      <h2>Hello</h2>

    </Container>
  );
};

export default RecipeInfo

const Container = styled.div`
  width: 800px;
  height: auto;
  background-color: yellow;

  img {
    width:400px;
    height: auto;
  }
`