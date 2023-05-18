import React from 'react'
import { styled } from 'styled-components'

const AddRecipe = () => {
  return (
    <Container>
        <h1>Add new recipe</h1>
        <form action="">
            <div>
                <label htmlFor="">Name</label>
                <input type="text" placeholder='Enter recipe name'/>
            </div>
            <div>
                <label htmlFor="">Author</label>
                <input type="text" placeholder='Enter author'/>
            </div>
            <div>
                <label htmlFor="">Recipe is from:</label>
                <select name="delivery" id="delivery">
                    <option value="empty" selected disabled></option>
                    <option value="Afghanistan"></option>
                    <option value="Lagos"></option>
                    <option value="New York"></option>
               </select>
            </div>
            <div>
                <textarea name="" id="" cols="30" rows="10" placeholder='Enter decsription'></textarea>
            </div>
            <label htmlFor="">Image</label>
            <input type="text" />

        </form>
    </Container>
  )
}

export default AddRecipe

const Container = styled.div`
    height: 800px;
    width: 600px;
`