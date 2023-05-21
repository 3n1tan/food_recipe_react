import React, {useState} from 'react'
import { styled } from 'styled-components'
import axios from 'axios';
import IngredientAdd from '../UI/IngredientAdd';


const AddRecipe = () => {
    const [recipe, setRecipe] = useState({
        id: null,
        name: "",
        ingredients: [],
        author: "",
        origin: "",
        imageURL: "",
        steps: "",
      });
      const [ingredients, setIngredients] = useState([
        { quantity: "", name: "" },
      ]);
    
      const changeHandler = (event) => {
        event.preventDefault();
        setRecipe({ ...recipe, [event.target.name]: event.target.value });
      };

      const addNewIngredientButton = (e) => {
        e.preventDefault();
        setIngredients([...ingredients, { quantity: "", name: "" }]);
      };
    
      const quantityAdd = (event, i) => {
        const newIngredients = [...recipe.ingredients];
        newIngredients[i] = {
          ...newIngredients[i],
          quantity: event.target.value,
        };
        setRecipe({ ...recipe, ingredients: newIngredients });
      };
    
      const nameAdd = (event, i) => {
        const newIngredients = [...recipe.ingredients];
        newIngredients[i] = {
          ...newIngredients[i],
          name: event.target.value,
        };
        setRecipe({ ...recipe, ingredients: newIngredients });
      };
    
      const handleSubmit = (e) => {
        axios
          .post("http://localhost:8000/recipes", recipe)
          .then((res) => {
            setRecipe({
              name: "",
              author: "",
              origin: "",
              imageURL: "",
              ingredients: [{ quantity: "", name: "" }],
              steps: "",
            });
            window.alert("Successful..Recipe list updated");
          })
          .catch((error)=>{
            console.error("Error posting data: ", error);
          });
      };
  return (
    <Container>
        <form onSubmit={handleSubmit}>
            <h2>Add new recipe</h2>
            <div>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" placeholder='Enter recipe name' onChange={changeHandler} />
            </div>
            <div>
                <label htmlFor="author">Author</label>
                <input type="text" id="author" name="author" placeholder='Enter author name' onChange={changeHandler} />
            </div>
            <div>
                <label htmlFor="origin">Recipe is from:</label>
                <input type="text" name="origin" id='origin' placeholder='Enter country name' onChange={changeHandler} />
            </div>
            <div>
                <label htmlFor="image">Image</label>
                <input type="text" id="image" name="imageURL" placeholder='insert image link' onChange={changeHandler} />
            </div>
            <div>
                <label htmlFor="ingredients">Ingredients</label>
                 {ingredients.map((i) => (
                    <IngredientAdd
                    key={i}
                    index={i}
                    quantityChange={quantityAdd}
                    nameChange={nameAdd}
                    />
                ))};
            </div>
            <button onClick={addNewIngredientButton}>Add more</button>
            <label htmlFor="steps">Steps</label>
            <textarea
                name="steps"
                id="steps"
                cols="30"
                rows="5"
                onChange={changeHandler}
            ></textarea>
            <button type="submit">Post recipe</button>
        </form>
    </Container>
  )
}

export default AddRecipe

const Container = styled.div`
    height: 800px;
    width: 600px;
`