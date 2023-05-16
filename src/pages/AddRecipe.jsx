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
                <input type="text" name='country' list='country'/>
                <datalist id='country'>
                    <option value="Afghanistan"></option>
                    <option value="Nigeria"></option>
                    <option value="Finland"></option>
                    <option value="Scotland"></option>
                </datalist>
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