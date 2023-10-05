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
        const { name, value } = event.target;
        setRecipe((prevRecipe) => ({ ...prevRecipe, [name]: value }));
      };

      const addNewIngredientButton = (e) => {
        e.preventDefault();
        setIngredients((prevIngredients) => [...prevIngredients, { quantity: '', name: '' }]);
      };
    
      const quantityAdd = (event, i) => {
        const newIngredients = [...recipe.ingredients];
        newIngredients[i] = {
          ...newIngredients[i],
          quantity: event.target.value,
        };
        setRecipe((prevRecipe) => ({ ...prevRecipe, ingredients: newIngredients }));
      };
    
      const nameAdd = (event, i) => {
        const newIngredients = [...recipe.ingredients];
        newIngredients[i] = {
          ...newIngredients[i],
          name: event.target.value,
        };
        setRecipe((prevRecipe) => ({ ...prevRecipe, ingredients: newIngredients }));
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
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
                <label htmlFor="ingredients">Ingredients and Ingrdedients</label>
                 {ingredients.map(( i) => (
                    <IngredientAdd
                    key={i}
                    index={i}
                    quantityAdd={quantityAdd}
                    nameAdd={nameAdd}
                    />
                ))}
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
    width: 600px;
    border: 1px solid black;
    background-color: cyan;
    margin-top: 3rem;
    margin-left: 40vw;
    border-radius: 10px;

    form {
        display: flex;
        flex-direction: column;
        padding-left: 2rem;
        padding-right: 2rem;
      }

      h2 {
        padding-left: 10rem;
      }
      
      h2, button, textarea {
        margin-bottom: 1rem;
      }
      
      div {
        margin-bottom: 1rem;
      }
      
      label {
        display: block;
        margin-bottom: 0.5rem;
      }
      
      input[type="text"],
      textarea {
        width: 100%;
        padding: 0.5rem;
        border: 1px solid #ccc;
        border-radius: 4px;
      }
      
      button {
        padding: 0.5rem 1rem;
        background-color: #007bff;
        color: #fff;
        border: none;
        border-radius: 4px;
        cursor: pointer;
      }
      
      button:hover {
        background-color: #0056b3;
      }
      
`

